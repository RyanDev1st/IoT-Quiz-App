
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
  btnNewSession: document.getElementById('btn-new-session'),
  btnToggleSidebar: document.getElementById('btn-toggle-sidebar'),
  btnOpenSidebar: document.getElementById('btn-open-sidebar'),
  sessionSidebar: document.getElementById('session-sidebar'),
  newSessionModal: document.getElementById('new-session-modal'),
  closeModal: document.getElementById('close-modal'),
  btnStartSession: document.getElementById('btn-start-session'),
  qCountInput: document.getElementById('q-count'),
  btnWeakTopics: document.getElementById('btn-weak-topics'),
  weakCount: document.getElementById('weak-count'),
  toast: document.getElementById('toast')
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
  sessions: [],
  sm2Data: {}
};

function showToast(msg) {
  if (!elements.toast) return;
  elements.toast.innerText = msg;
  elements.toast.classList.remove('hidden');
  setTimeout(() => elements.toast.classList.add('hidden'), 3000);
}

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
  const data = localStorage.getItem('iot_sessions_v3');
  if (data) {
    appState = JSON.parse(data);
    if (!appState.sm2Data) appState.sm2Data = {};
  } else {
    appState = { activeSessionId: null, sessions: [], sm2Data: {} };
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
  localStorage.setItem('iot_sessions_v3', JSON.stringify(appState));
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
     if (q.answerOptions) {
         q.answerOptions.forEach(o => o.isActuallyCorrect = (o.isCorrect === "true" || o.isCorrect === true));
         shuffle(q.answerOptions);
     }
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
  
  
  if (elements.btnToggleSidebar) {
      elements.btnToggleSidebar.addEventListener('click', () => {
          elements.sessionSidebar.classList.add('collapsed');
          document.body.classList.add('sidebar-collapsed');
          elements.btnOpenSidebar.classList.remove('hidden');
      });
  }
  if (elements.btnOpenSidebar) {
      elements.btnOpenSidebar.addEventListener('click', () => {
          elements.sessionSidebar.classList.remove('collapsed');
          document.body.classList.remove('sidebar-collapsed');
          elements.btnOpenSidebar.classList.add('hidden');
      });
  }

  elements.btnNewSession.addEventListener('click', () => {
      if(elements.newSessionModal) elements.newSessionModal.classList.remove('hidden');
      else createSession(originalQuestionsPool);
  });
  
  if(elements.closeModal) {
      elements.closeModal.addEventListener('click', () => {
          elements.newSessionModal.classList.add('hidden');
      });
  }

  if(elements.btnStartSession) {
      elements.btnStartSession.addEventListener('click', () => {
          let qType = 'MCQ';
          document.getElementsByName('q-type').forEach(radio => {
              if (radio.checked) qType = radio.value;
          });
          let count = parseInt(elements.qCountInput.value) || 10;
          
          let pool = originalQuestionsPool.filter(q => {
              if (qType === 'MCQ') return q.type !== 'FIB';
              if (qType === 'FIB') return q.type === 'FIB';
              return true; // BOTH
          });
          
          pool = shuffle([...pool]).slice(0, count);
          
          if (pool.length === 0) {
              showToast('No questions match your criteria.');
              return;
          }
          
          elements.newSessionModal.classList.add('hidden');
          createSession(pool, qType + " Session");
      });
  }
  
  // Create Review button dynamically if it doesn't exist
  if (!document.getElementById('btn-review-due')) {
      const btnReview = document.createElement('button');
      btnReview.id = 'btn-review-due';
      btnReview.className = 'nav-btn';
      btnReview.title = 'Review Due Topics';
      btnReview.innerHTML = '<i class="fa-solid fa-calendar-check"></i>';
      elements.btnNewSession.parentNode.insertBefore(btnReview, elements.btnNewSession.nextSibling);
      
      btnReview.addEventListener('click', () => {
          const now = Date.now();
          const dueQuestions = originalQuestionsPool.filter(q => {
              if (!appState.sm2Data || !appState.sm2Data[q.id]) return false;
              return appState.sm2Data[q.id].dueDate <= now;
          });
          
          if (dueQuestions.length > 0) {
              createSession(dueQuestions, "Due Reviews");
          } else {
              showToast("No questions are due for review right now! Great job.");
          }
      });
  }
  
  elements.btnSubmit.addEventListener('click', showFinalScore);
  
  elements.btnRetry.addEventListener('click', () => {
      createSession(originalQuestionsPool);
  });
  
  if (elements.btnWeakTopics) {
      elements.btnWeakTopics.addEventListener('click', () => {
          const redQuestions = originalQuestionsPool.filter(q => questionStats[q.id] && questionStats[q.id].wrongCount >= 1);
          if (redQuestions.length > 0) {
              createSession(redQuestions, "Weak Topics");
          } else {
              showToast("No extremely weak topics right now!");
          }
      });
  }

  elements.unclearNudge.addEventListener('click', () => {
      elements.theorySidebar.classList.add('open');
      const q = allQuestions[currentIndex];
      if (typeof theoryData !== 'undefined') {
          if (theoryData[q.questionText]) {
              elements.theoryContent.innerHTML = theoryData[q.questionText];
          } else if (theoryData[q.sectionTitle]) {
              elements.theoryContent.innerHTML = theoryData[q.sectionTitle];
          } else {
              elements.theoryContent.innerHTML = `<p>Theory coming soon for this concept.</p>`;
          }
      } else {
          elements.theoryContent.innerHTML = `<p>Theory coming soon.</p>`;
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
  
  if (q.type === 'FIB') {
      const fibContainer = document.createElement('div');
      fibContainer.className = 'fib-container';
      fibContainer.style.padding = '1rem';
      
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'fib-input';
      input.placeholder = 'Type your answer...';
      input.style.width = '100%';
      input.style.padding = '0.75rem';
      input.style.marginBottom = '1rem';
      input.style.borderRadius = '8px';
      input.style.border = '1px solid var(--border)';
      
      if (hasAnswered) {
          input.value = userAnswers[index];
          input.disabled = true;
          const isCorrect = userAnswers[index].toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
          input.style.borderColor = isCorrect ? 'var(--text-green)' : 'var(--text-red)';
          
          let expHtml = `<div class="inline-explanation show">
              <div class="exp-content ${isCorrect ? 'exp-correct' : 'exp-wrong'}">
                  <strong>${isCorrect ? '<i class="fa-solid fa-check"></i> Correct' : '<i class="fa-solid fa-xmark"></i> Incorrect (Expected: ' + q.correctAnswer + ')'}</strong>
                  ${q.explanation || ''}
              </div>
          </div>`;
          fibContainer.insertAdjacentHTML('beforeend', expHtml);
      }
      
      const submitBtn = document.createElement('button');
      submitBtn.innerText = 'Submit Answer';
      submitBtn.className = 'btn btn-primary';
      if (hasAnswered) submitBtn.style.display = 'none';
      
      submitBtn.addEventListener('click', () => {
          if (!input.value.trim()) return;
          card.classList.add('answered');
          userAnswers[index] = input.value.trim();
          elements.unclearNudge.classList.remove('hidden');
          input.disabled = true;
          submitBtn.style.display = 'none';
          
          const isCorrect = userAnswers[index].toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
          input.style.borderColor = isCorrect ? 'var(--text-green)' : 'var(--text-red)';
          
          if (!questionStats[q.id]) questionStats[q.id] = { tries: 0, wrongCount: 0 };
          questionStats[q.id].tries++;
          if (!isCorrect) {
              questionStats[q.id].wrongCount++;
          }
          
          let expHtml = `<div class="inline-explanation show">
              <div class="exp-content ${isCorrect ? 'exp-correct' : 'exp-wrong'}">
                  <strong>${isCorrect ? '<i class="fa-solid fa-check"></i> Correct' : '<i class="fa-solid fa-xmark"></i> Incorrect (Expected: ' + q.correctAnswer + ')'}</strong>
                  ${q.explanation || ''}
              </div>
          </div>`;
          fibContainer.insertAdjacentHTML('beforeend', expHtml);
          
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
          
          const ankiBtns = ankiContainer.querySelectorAll('.anki-btn');
          ankiBtns.forEach(btn => {
              btn.addEventListener('click', (e) => {
                  let grade = 3;
                  if (e.target.classList.contains('anki-again')) grade = 1;
                  else if (e.target.classList.contains('anki-hard')) grade = 3;
                  else if (e.target.classList.contains('anki-good')) grade = 4;
                  else if (e.target.classList.contains('anki-easy')) grade = 5;

                  if (!appState.sm2Data) appState.sm2Data = {};
                  if (!appState.sm2Data[q.id]) {
                      appState.sm2Data[q.id] = { interval: 0, repetition: 0, efactor: 2.5, dueDate: Date.now() };
                  }

                  appState.sm2Data[q.id] = window.supermemo(appState.sm2Data[q.id], grade);
                  appState.sm2Data[q.id].dueDate = Date.now() + (appState.sm2Data[q.id].interval * 24 * 60 * 60 * 1000);

                  if (grade < 4) {
                      let clonedQ = JSON.parse(JSON.stringify(q));
                      allQuestions.push(clonedQ);
                      updateProgress();
                  }
                  ankiContainer.innerHTML = `<p style="margin:0; color:var(--text-muted);">Feedback saved! Next review in ${appState.sm2Data[q.id].interval} day(s).</p>`;
                  setTimeout(() => { ankiContainer.style.display = 'none'; }, 1500);
                  saveState();
              });
          });
          
          saveState();
      });
      
      fibContainer.appendChild(input);
      fibContainer.appendChild(submitBtn);
      optionsList.appendChild(fibContainer);
  } else {
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
              let grade = 3;
              if (e.target.classList.contains('anki-again')) grade = 1;
              else if (e.target.classList.contains('anki-hard')) grade = 3;
              else if (e.target.classList.contains('anki-good')) grade = 4;
              else if (e.target.classList.contains('anki-easy')) grade = 5;

              if (!appState.sm2Data) appState.sm2Data = {};
              if (!appState.sm2Data[q.id]) {
                  appState.sm2Data[q.id] = { interval: 0, repetition: 0, efactor: 2.5, dueDate: Date.now() };
              }

              appState.sm2Data[q.id] = window.supermemo(appState.sm2Data[q.id], grade);
              // Set dueDate (interval in days)
              appState.sm2Data[q.id].dueDate = Date.now() + (appState.sm2Data[q.id].interval * 24 * 60 * 60 * 1000);

              if (grade < 4) {
                  // Push to end of deck for immediate review in the same session
                  let clonedQ = JSON.parse(JSON.stringify(q));
                  allQuestions.push(clonedQ);
                  updateProgress();
              }
              ankiContainer.innerHTML = `<p style="margin:0; color:var(--text-muted);">Feedback saved! Next review in ${appState.sm2Data[q.id].interval} day(s).</p>`;
              setTimeout(() => { ankiContainer.style.display = 'none'; }, 1500);
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
    
    if (hasAnswered) {
      let isOptCorrect = opt.isActuallyCorrect;
      let expHtml = `<div class="inline-explanation show">
          <div class="exp-content ${isOptCorrect ? 'exp-correct' : 'exp-wrong'}">
              <strong>${isOptCorrect ? '<i class="fa-solid fa-check"></i> Correct Option' : '<i class="fa-solid fa-xmark"></i> Incorrect Option'}</strong>
              ${opt.explanation || ''}
          </div>
      </div>`;
      label.insertAdjacentHTML('beforeend', expHtml);
    }
    
    optionsList.appendChild(label);
    });
  }
  
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
    const q = allQuestions[idx];
    if (!q) return;
    if (q.type === 'FIB') {
      if (userAnswers[idx].toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()) correct++;
    } else {
      const optIdx = userAnswers[idx];
      if (q.answerOptions[optIdx] && q.answerOptions[optIdx].isActuallyCorrect) correct++;
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
  
  const redQuestions = originalQuestionsPool.filter(q => questionStats[q.id] && questionStats[q.id].wrongCount >= 1);
  if (redQuestions.length > 0 && elements.btnWeakTopics && elements.weakCount) {
      elements.weakCount.innerText = redQuestions.length;
      elements.btnWeakTopics.classList.remove('hidden');
  } else if (elements.btnWeakTopics) {
      elements.btnWeakTopics.classList.add('hidden');
  }
}

// Start
document.addEventListener('DOMContentLoaded', init);
