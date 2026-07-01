import re

with open('app.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# 1. Fix explanation restoration
old_append_logic = """    label.appendChild(input);
    label.appendChild(contentWrapper);
    
    optionsList.appendChild(label);"""

new_append_logic = """    label.appendChild(input);
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
    
    optionsList.appendChild(label);"""

js_content = js_content.replace(old_append_logic, new_append_logic)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
    print("Fixed explanation injection on reload in app.js")
