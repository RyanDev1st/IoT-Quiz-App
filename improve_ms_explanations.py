import json

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract json
json_str = content[content.find('['):content.rfind(']')+1]
data = json.loads(json_str)

def generate_natural_explanation(question, option, is_correct):
    q = question.lower()
    ans = option.lower()
    
    if is_correct:
        if "stand for" in q or "stands for" in q or "acronym" in q:
            return f"Yes, '{option}' is exactly what it stands for in this context!"
        if "true" == ans or "false" == ans:
            return f"Absolutely {option}. This is a fundamental rule of how this IoT concept works."
        if "what is" in q or "which" in q:
            return f"Spot on! '{option}' is exactly the right definition here."
        return f"Exactly. '{option}' accurately captures the core idea behind this concept."
    else:
        if "true" == ans or "false" == ans:
            return f"No, that's {option}. In the real world of IoT, this operates differently."
        if len(ans.split()) <= 2:
            return f"Nope, '{option}' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
        return f"Incorrect. '{option}' completely misses the mark on how this specific IoT feature functions."

for section in data[0]['quizzes']:
    if "Professor" in section['title']:
        continue # Leave the perfectly crafted Professor ones alone!
        
    for quiz in section.get('quiz', []):
        for opt in quiz['answerOptions']:
            is_c = (opt['isCorrect'] == True or opt['isCorrect'] == "true")
            opt['explanation'] = generate_natural_explanation(quiz['questionText'], opt['answerText'], is_c)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const quizData = ' + json.dumps(data, indent=2) + ';')

print("Improved MS Explanations")
