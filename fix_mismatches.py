import json

with open('data.js', 'r', encoding='utf-8') as f:
    d = json.loads(f.read()[17:-1])

for section in d[0]['quizzes']:
    for quiz in section.get('quiz', []):
        q_text = quiz['questionText']
        
        # FIX 1: "When measuring soil moisture..."
        if "When measuring soil moisture, one difference between resistive and capacitive moisture sensors is" in q_text:
            for o in quiz['answerOptions']:
                if o['answerText'] == 'As moisture levels go up the voltage goes up for resistive sensors and down for capacitive sensors':
                    o['explanation'] = "Correct! Resistive sensors increase voltage with moisture (more water = more conductivity), whereas capacitive sensors output a lower voltage as water increases due to how the dialectric changes."

        # FIX 2: "IoT devices are powerful enough to control water pumps"
        if "IoT devices are powerful enough to control water pumps" in q_text:
            for o in quiz['answerOptions']:
                if o['answerText'] == 'True':
                    o['explanation'] = "Correct! While the microcontroller's tiny 3.3V pin can't power a heavy pump directly, it is easily powerful enough to trigger a relay, which in turn switches the high-voltage power for the pump."
                    o['isCorrect'] = True
                elif o['answerText'] == 'False':
                    o['explanation'] = "Incorrect. With the help of an electromechanical relay, even a tiny microcontroller can control massive industrial pumps."
                    o['isCorrect'] = False
                    
        # FIX 3: "X.509 certificates:"
        if "X.509 certificates:" in q_text:
            for o in quiz['answerOptions']:
                if o['answerText'] == 'Should never be shared between IoT devices':
                    o['explanation'] = "Correct! Every single IoT device must have its own unique X.509 certificate (its 'passport'). If they share one, revoking a compromised device breaks all the others."
                    o['isCorrect'] = True
                elif o['answerText'] == 'Can be shared between devices':
                    o['explanation'] = "Incorrect. Sharing certificates destroys the ability to audit, authenticate, or revoke individual compromised devices."
                    o['isCorrect'] = False

# Also fix the missing isCorrect
for section in d[0]['quizzes']:
    for quiz in section.get('quiz', []):
        for o in quiz['answerOptions']:
            if 'isCorrect' not in o:
                o['isCorrect'] = False

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const quizData = ' + json.dumps(d, indent=2) + ';\n')

print("Fixed the 3 logic mismatches and missing isCorrect flags.")
