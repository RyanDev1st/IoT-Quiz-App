import json

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

json_str = content[content.find('['):content.rfind(']')+1]
data = json.loads(json_str)

for section in data[0]['quizzes']:
    for quiz in section.get('quiz', []):
        # Filter out the Machine Learning joke option
        quiz['answerOptions'] = [
            opt for opt in quiz['answerOptions'] 
            if opt['answerText'] != 'Machine Learning'
        ]

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const quizData = ' + json.dumps(data, indent=2) + ';')

print("Purged all 'Machine Learning' automated options from the quizzes.")
