import json

with open('data.js', 'r', encoding='utf-8') as f:
    text = f.read().strip()
    d = json.loads(text[17:-1])

for section in d[0]['quizzes']:
    for quiz in section.get('quiz', []):
        for o in quiz['answerOptions']:
            text = str(o.get('answerText', '')).lower()
            is_corr_val = o['isCorrect']
            is_corr = str(is_corr_val).lower() == 'true'
            exp = o.get('explanation', '')
            exp_lower = exp.lower()
            
            starts_positive = exp_lower.startswith('yes') or exp_lower.startswith('correct') or exp_lower.startswith('exactly') or exp_lower.startswith('spot on')
            starts_negative = exp_lower.startswith('no') or exp_lower.startswith('incorrect') or exp_lower.startswith('actually')
            
            if not is_corr and starts_positive:
                print(f"MISMATCH (Wrong option has positive explanation):")
                print(f"Q: {quiz['questionText']}")
                print(f"Opt: {o['answerText']} | isCorrect: {is_corr_val}")
                print(f"Exp: {exp}\n")
                
            if is_corr and starts_negative:
                print(f"MISMATCH (Right option has negative explanation):")
                print(f"Q: {quiz['questionText']}")
                print(f"Opt: {o['answerText']} | isCorrect: {is_corr_val}")
                print(f"Exp: {exp}\n")
