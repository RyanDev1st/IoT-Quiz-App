import json

with open('data.js', 'r', encoding='utf-8') as f:
    text = f.read().strip()
    d = json.loads(text[17:-1])

for section in d[0]['quizzes']:
    for quiz in section.get('quiz', []):
        q_text = quiz['questionText']
        
        # 1. Soil Moisture Question
        if "When measuring soil moisture, one difference between resistive and capacitive moisture sensors is" in q_text:
            quiz['answerOptions'] = [
                {
                    "answerText": "As moisture levels go up the voltage goes up for resistive sensors and down for capacitive sensors",
                    "isCorrect": True,
                    "explanation": "Correct. Resistive sensors increase their output voltage as the soil gets wetter (water conducts electricity). In contrast, capacitive sensors usually output a lower voltage as water increases due to how the dielectric property of the soil changes."
                },
                {
                    "answerText": "As moisture levels go up the voltage goes down for resistive sensors and up for capacitive sensors",
                    "isCorrect": False,
                    "explanation": "Incorrect. This is entirely backwards. Resistive sensor voltage increases when wet because the water lowers resistance, allowing more current to flow."
                },
                {
                    "answerText": "As moisture levels go up the voltage goes up for both resistive and capacitive sensors",
                    "isCorrect": False,
                    "explanation": "Incorrect. Capacitive sensors react inversely compared to resistive sensors. When soil gets wetter, the capacitive sensor's output voltage drops."
                },
                {
                    "answerText": "As moisture levels go up the voltage goes down for both resistive and capacitive sensors",
                    "isCorrect": False,
                    "explanation": "Incorrect. Resistive sensors output a higher voltage when the soil is wet, not lower."
                }
            ]

        # 2. Water Pumps Question
        if "IoT devices are powerful enough to control water pumps" in q_text:
            quiz['answerOptions'] = [
                {
                    "answerText": "True",
                    "isCorrect": True,
                    "explanation": "Correct! While the tiny microcontroller chip cannot provide the high electrical power needed to physically spin the pump's motor, it CAN control a 'Relay'. A relay acts as an electronic switch, allowing the low-power IoT device to safely turn the high-power pump on and off."
                },
                {
                    "answerText": "False",
                    "isCorrect": False,
                    "explanation": "Incorrect. With the help of an electromechanical component called a 'Relay', even a tiny, low-power microcontroller can control massive industrial water pumps."
                }
            ]

        # 3. X.509 Certificates Question
        if "X.509 certificates:" in q_text:
            quiz['answerOptions'] = [
                {
                    "answerText": "Should never be shared between IoT devices",
                    "isCorrect": True,
                    "explanation": "Correct! Every single IoT device must have its own unique X.509 certificate (its 'passport'). If they share one, you cannot identify which specific device was hacked, and revoking the compromised certificate would break all the other devices using it."
                },
                {
                    "answerText": "Can be shared between devices",
                    "isCorrect": False,
                    "explanation": "Incorrect. If multiple devices share the same certificate, you completely destroy the ability to securely audit, authenticate, or revoke individual compromised devices."
                }
            ]

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const quizData = ' + json.dumps(d, indent=2) + ';\n')

print("Explanations rewritten to be 100% concrete, un-confusing, and boolean flags fixed.")
