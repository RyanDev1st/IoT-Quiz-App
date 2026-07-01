import json

with open('data.js', 'r', encoding='utf-8') as f:
    d = json.loads(f.read()[17:-1])

generic_questions = []

for section in d[0]['quizzes']:
    for quiz in section.get('quiz', []):
        # check if it has a generic explanation
        for opt in quiz['answerOptions']:
            exp = opt.get('explanation', '')
            if 'Microsoft curriculum' in exp or 'is incorrect' in exp or 'is correct' in exp or exp.startswith('Yes, ') or exp.startswith('No, '):
                pass
            # Let's just print questions that don't look handcrafted (e.g. they say "Correct!" then generic text)
            if 'Microsoft curriculum' in exp or 'is the right answer. The Microsoft curriculum' in exp:
                generic_questions.append((quiz['questionText'], opt['answerText'], exp))

print(f"Found {len(generic_questions)} generic explanations.")
for q in generic_questions:
    print(f"Q: {q[0]} | A: {q[1]}\nExp: {q[2]}\n")
