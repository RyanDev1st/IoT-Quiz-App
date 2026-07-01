import re

with open('app.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# We will completely overwrite app.js to integrate Session Management cleanly.

new_js = """
const elements = {
  questionContainer: document.getElementById('single-question-container'),
  btnSubmit: document.getElementById('btn-submit'),
  submitContainer: document.getElementById('submit-container'),
  scoreBanner: document.getElementById('score-banner'),
  finalScore: document.getElementById('final-score'),
  scoreFeedback: document.getElementById('score-feedback'),
  btnRetry: document.getElementById('btn-retry'),
  btnPrev: document.getElementById('btn-prev'),
  btnNext: document.getElementById('btn-next'),
  progressFill: document.getElementById('progress-fill'),
  progressText: document.getElementById('progress-text'),
  quizScreen: document.getElementById('quiz-screen'),
  scoreScreen: document.getElementById('score-screen'),
  unclearNudge: document.getElementById('unclear-nudge'),
  theorySidebar: document.getElementById('theory-sidebar'),
  closeTheory: document.getElementById('close-theory'),
  theoryContent: document.getElementById('theory-content'),
  sessionList: document.getElementById('session-list'),
  btnNewSession: document.getElementById('btn-new-session')
};

let originalQuestionsPool = [];

// Active session state
let allQuestions = [];
let currentIndex = 0;
let userAnswers = {};
let questionStats = {};

// Persistence
let appState = {
  activeSessionId: null,
  sessions: []
};

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function loadState() {
  const data = localStorage.getItem('iot_sessions');
  if (data) {
    appState = JSON.parse(data);
  } else {
    appState = { activeSessionId: null, sessions: [] };
  }
}

function saveState() {
  if (appState.activeSessionId) {
    const s = appState.sessions.find(x => x.id === appState.activeSessionId);
    if (s) {
      s.allQuestions = allQuestions;
      s.userAnswers = userAnswers;
      s.currentIndex = currentIndex;
      s.questionStats = questionStats;
    }
  }
  localStorage.setItem('iot_sessions', JSON.stringify(appState));
  renderSidebar();
}

function switchSession(id) {
  appState.activeSessionId = id;
  const s = appState.sessions.find(x => x.id === id);
  if (s) {
    allQuestions = s.allQuestions || [];
    userAnswers = s.userAnswers || {};
    currentIndex = s.currentIndex || 0;
    questionStats = s.questionStats || {};
  }
  
  saveState();
  
  elements.scoreScreen.classList.add('hidden');
  elements.scoreScreen.classList.remove('active');
  elements.quizScreen.classList.add('active');
  
  if (allQuestions.length > 0) {
      renderQuestion(currentIndex);
  } else {
      elements.questionContainer.innerHTML = '<p>No questions in this session.</p>';
  }
}

function createSession(questionsToUse, namePrefix = "Session") {
  const id = Date.now().toString();
  const newSession = {
    id,
    name: `${namePrefix} ${appState.sessions.length + 1}`,
    date: new Date().toLocaleString(),
    allQuestions: JSON.parse(JSON.stringify(questionsToUse)),
    userAnswers: {},
    currentIndex: 0,
    questionStats: {}
  };
  
  newSession.allQuestions.forEach(q => {
     newSession.questionStats[q.id] = { wrongCount: 0, tries: 0 };
     q.answerOptions.forEach(o => o.isActuallyCorrect = (o.isCorrect === "true" || o.isCorrect === true));
     shuffle(q.answerOptions);
  });
  shuffle(newSession.allQuestions);
  
  appState.sessions.push(newSession);
  switchSession(id);
}

function deleteSession(id, e) {
  e.stopPropagation();
  appState.sessions = appState.sessions.filter(s => s.id !== id);
  if (appState.activeSessionId === id) {
     appState.activeSessionId = appState.sessions.length > 0 ? appState.sessions[0].id : null;
  }
  
  if (appState.activeSessionId) {
     switchSession(appState.activeSessionId);
  } else {
     // No sessions left, create a fresh one
     createSession(originalQuestionsPool);
  }
  saveState();
}

function renderSidebar() {
  if (!elements.sessionList) return;
  elements.sessionList.innerHTML = '';
  
  [...appState.sessions].reverse().forEach(s => {
    const li = document.createElement('li');
    li.className = 'session-item' + (s.id === appState.activeSessionId ? ' active' : '');
    
    li.innerHTML = `
      <div class="session-info">
        <span class="session-name">${s.name}</span>
        <span class="session-date">${s.date}</span>
      </div>
      <button class="btn-delete-session" title="Delete Session"><i class="fa-solid fa-trash"></i></button>
    `;
    
    li.addEventListener('click', () => switchSession(s.id));
    li.querySelector('.btn-delete-session').addEventListener('click', (e) => deleteSession(s.id, e));
    
    elements.sessionList.appendChild(li);
  });
}

function init() {
  if (!quizData || !quizData[0] || !quizData[0].quizzes) {
    elements.questionContainer.innerHTML = '<p>Error loading quizzes. Please check data.js</p>';
    return;
  }
  
  originalQuestionsPool = [];
  quizData[0].quizzes.forEach((quizSection) => {
    quizSection.quiz.forEach((q, idx) => {
      originalQuestionsPool.push({
        ...q,
        id: `${quizSection.title}-${idx}`,
        sectionTitle: quizSection.title
      });
    });
  });

  loadState();
  
  if (appState.sessions.length === 0) {
      createSession(originalQuestionsPool);
  } else {
      if (!appState.activeSessionId) appState.activeSessionId = appState.sessions[0].id;
      switchSession(appState.activeSessionId);
  }
  
  elements.btnNewSession.addEventListener('click', () => {
      createSession(originalQuestionsPool);
  });
  
  elements.btnSubmit.addEventListener('click', showFinalScore);
  
  elements.btnRetry.addEventListener('click', () => {
      const redQuestions = originalQuestionsPool.filter(q => questionStats[q.id] && questionStats[q.id].wrongCount >= 2);
      if (redQuestions.length > 0) {
          if (confirm(`You have ${redQuestions.length} extremely weak topics. Create a new session with ONLY these?`)) {
              createSession(redQuestions, "Weak Topics");
              return;
          }
      }
      createSession(originalQuestionsPool);
  });

  elements.unclearNudge.addEventListener('click', () => {
      elements.theorySidebar.classList.add('open');
      const q = allQuestions[currentIndex];
      if (typeof theoryData !== 'undefined' && theoryData[q.sectionTitle]) {
          elements.theoryContent.innerHTML = theoryData[q.sectionTitle];
      } else {
          elements.theoryContent.innerHTML = `<p>Theory coming soon for: ${q.sectionTitle}</p>`;
      }
  });

  elements.closeTheory.addEventListener('click', () => {
      elements.theorySidebar.classList.remove('open');
  });
  
  // Navigation
  elements.btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      saveState();
      renderQuestion(currentIndex);
    }
  });

  elements.btnNext.addEventListener('click', () => {
    if (currentIndex < allQuestions.length - 1) {
      currentIndex++;
      saveState();
      renderQuestion(currentIndex);
    }
  });
}

function updateProgress() {
  if (allQuestions.length === 0) return;
  const percent = ((currentIndex + 1) / allQuestions.length) * 100;
  elements.progressFill.style.width = `${percent}%`;
  elements.progressText.innerText = `Question ${currentIndex + 1} of ${allQuestions.length}`;
  
  elements.btnPrev.disabled = (currentIndex === 0);
  
  if (currentIndex === allQuestions.length - 1) {
    elements.btnNext.disabled = true;
    elements.submitContainer.classList.remove('hidden');
  } else {
    elements.btnNext.disabled = false;
    elements.submitContainer.classList.add('hidden');
  }
}

function renderQuestion(index) {
  currentIndex = index;
  updateProgress();
  
  if (allQuestions.length === 0) return;
  
  const q = allQuestions[index];
  const hasAnswered = userAnswers[index] !== undefined;
  
  elements.questionContainer.innerHTML = '';
  if (!hasAnswered) {
      elements.unclearNudge.classList.add('hidden');
  } else {
      elements.unclearNudge.classList.remove('hidden');
  }
  
  const card = document.createElement('div');
  card.className = 'question-card';
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'slideInRight 0.4s ease';
  
  if (hasAnswered) card.classList.add('answered');
  
  const header = document.createElement('div');
  header.className = 'question-header';
  header.innerHTML = `
    <div class="question-badge">${q.sectionTitle || 'Quiz'}</div>
    <h3 class="question-title">${q.questionText}</h3>
  `;
  card.appendChild(header);
  
  const optionsList = document.createElement('div');
  optionsList.className = 'options-list';
  
  q.answerOptions.forEach((opt, optIndex) => {
    const label = document.createElement('label');
    label.className = 'option-label';
    if (hasAnswered) {
       label.classList.add('disabled');
    }
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `question-${index}`;
    input.value = optIndex;
    input.className = 'option-input';
    
    if (hasAnswered) {
       input.disabled = true;
       if (userAnswers[index] === optIndex) {
           input.checked = true;
       }
       if (opt.isActuallyCorrect) {
           label.classList.add('correct');
       } else if (userAnswers[index] === optIndex) {
           label.classList.add('wrong');
       }
    }
    
    input.addEventListener('change', () => {
      if (card.classList.contains('answered')) return;
      card.classList.add('answered');
      userAnswers[index] = optIndex;
      
      elements.unclearNudge.classList.remove('hidden');
      
      const allLabels = optionsList.querySelectorAll('.option-label');
      allLabels.forEach(l => {
          l.classList.remove('selected');
          l.classList.add('disabled');
      });
      label.classList.add('selected');
      
      const allInputs = card.querySelectorAll('input');
      allInputs.forEach(i => i.disabled = true);
      
      const isCorrect = opt.isActuallyCorrect;
      
      if (isCorrect) {
        label.classList.add('correct');
      } else {
        label.classList.add('wrong');
        q.answerOptions.forEach((o, oIndex) => {
          if (o.isActuallyCorrect) {
            optionsList.children[oIndex].classList.add('correct');
          }
        });
      }
      
      questionStats[q.id].tries++;
      if (!isCorrect) {
          questionStats[q.id].wrongCount++;
      }
      
      // Inject explanation directly under ALL options
      q.answerOptions.forEach((o, oIndex) => {
          let isOptCorrect = o.isActuallyCorrect;
          let isOptSelected = (oIndex === optIndex);
          
          let expHtml = `<div class="inline-explanation show">
              <div class="exp-content ${isOptCorrect ? 'exp-correct' : 'exp-wrong'}">
                  <strong>${isOptCorrect ? '<i class="fa-solid fa-check"></i> Correct Option' : '<i class="fa-solid fa-xmark"></i> Incorrect Option'}</strong>
                  ${o.explanation || ''}
              </div>
          </div>`;
          optionsList.children[oIndex].insertAdjacentHTML('beforeend', expHtml);
      });
      
      // Anki Integration
      const ankiContainer = document.createElement('div');
      ankiContainer.className = 'anki-container show';
      ankiContainer.innerHTML = `
        <p>How hard was this question?</p>
        <div class="anki-buttons">
            <button class="anki-btn anki-again">Again (Bad)</button>
            <button class="anki-btn anki-hard">Hard</button>
            <button class="anki-btn anki-good">Good</button>
            <button class="anki-btn anki-easy">Easy</button>
        </div>
      `;
      card.appendChild(ankiContainer);
      
      // Handle Anki clicks
      const ankiBtns = ankiContainer.querySelectorAll('.anki-btn');
      ankiBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
              if (e.target.classList.contains('anki-again') || e.target.classList.contains('anki-hard')) {
                  // Push to end of deck
                  let clonedQ = JSON.parse(JSON.stringify(q));
                  allQuestions.push(clonedQ);
                  updateProgress();
              }
              ankiContainer.innerHTML = `<p style="margin:0; color:var(--text-muted);">Feedback saved.</p>`;
              setTimeout(() => { ankiContainer.style.display = 'none'; }, 1000);
              saveState();
          });
      });
      
      saveState();
    });
    
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'option-label-content';
    
    const customRadio = document.createElement('div');
    customRadio.className = 'custom-radio';
    
    const span = document.createElement('span');
    span.innerText = opt.answerText;
    
    contentWrapper.appendChild(customRadio);
    contentWrapper.appendChild(span);
    
    label.appendChild(input);
    label.appendChild(contentWrapper);
    
    optionsList.appendChild(label);
  });
  
  card.appendChild(optionsList);
  elements.questionContainer.appendChild(card);
}

function showFinalScore() {
  elements.quizScreen.classList.remove('active');
  elements.quizScreen.classList.add('hidden');
  elements.scoreScreen.classList.remove('hidden');
  elements.scoreScreen.classList.add('active');
  
  let correct = 0;
  Object.keys(userAnswers).forEach(idx => {
    const optIdx = userAnswers[idx];
    if (allQuestions[idx] && allQuestions[idx].answerOptions[optIdx].isActuallyCorrect) {
      correct++;
    }
  });
  
  const total = allQuestions.length;
  const pct = Math.round((correct / total) * 100);
  
  elements.finalScore.innerText = `${correct} / ${total} (${pct}%)`;
  
  if (pct >= 80) {
    elements.scoreFeedback.innerText = "Excellent! You're ready for the exam.";
    elements.scoreFeedback.style.color = "var(--text-green)";
  } else if (pct >= 60) {
    elements.scoreFeedback.innerText = "Good job, but there's room for improvement.";
    elements.scoreFeedback.style.color = "var(--text-yellow)";
  } else {
    elements.scoreFeedback.innerText = "Keep studying. Review your weak topics.";
    elements.scoreFeedback.style.color = "var(--text-red)";
  }
}

// Start
document.addEventListener('DOMContentLoaded', init);
"""

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(new_js)
