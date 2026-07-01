import json

with open('data.js', 'r', encoding='utf-8') as f:
    d = json.loads(f.read()[17:-1])

for section in d[0]['quizzes']:
    for quiz in section.get('quiz', []):
        opts = quiz['answerOptions']
        # Check if it's a True/False question
        if len(opts) == 2 and set([o['answerText'].lower() for o in opts]) == {'true', 'false'}:
            for o in opts:
                text = o['answerText'].lower()
                is_corr = str(o['isCorrect']).lower() == 'true'
                exp = o.get('explanation', '').lower()
                
                # If it's the wrong option, but explanation starts with "yes" or "correct"
                if not is_corr and ('yes' in exp or 'correct' in exp or 'exactly' in exp or 'true' in exp):
                    if exp.startswith('yes') or exp.startswith('correct') or exp.startswith('exactly'):
                        print(f"SUSPECT Q: {quiz['questionText']}")
                        print(f"  Opt: {o['answerText']} (isCorrect={o['isCorrect']})")
                        print(f"  Exp: {o['explanation']}\n")
                        
                # If it's the correct option, but explanation starts with "no" or "incorrect"
                if is_corr and ('no' in exp or 'incorrect' in exp or 'false' in exp):
                    if exp.startswith('no') or exp.startswith('incorrect'):
                        print(f"SUSPECT Q: {quiz['questionText']}")
                        print(f"  Opt: {o['answerText']} (isCorrect={o['isCorrect']})")
                        print(f"  Exp: {o['explanation']}\n")
