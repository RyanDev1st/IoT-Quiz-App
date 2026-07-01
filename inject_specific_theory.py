import json
import re

with open('data.js', 'r', encoding='utf-8') as f:
    d = json.loads(f.read()[17:-1])

professor_qs = d[0]['quizzes'][-1]['quiz']

new_theories = {
    "Where is data processing typically done in Edge Computing?": """
        <h3>Edge Computing Architecture</h3>
        <p>In traditional cloud computing, all raw data is sent to a central server. In <strong>Edge Computing</strong>, the processing power is pushed out to the "edge" of the network, right where the data is being generated.</p>
        <ul>
            <li><strong>Local Networks:</strong> An edge gateway sits on the same local network as the sensors, filtering and processing data before it ever hits the public internet.</li>
            <li><strong>Latency:</strong> Processing locally means zero round-trip latency to the cloud, allowing for real-time robotic or industrial control.</li>
            <li><strong>Bandwidth:</strong> It prevents flooding the internet connection with thousands of raw temperature pings per second.</li>
        </ul>
    """,
    "Which of the following is a key feature of IoT devices?": """
        <h3>Core Features of IoT</h3>
        <p>IoT devices are defined by their ability to bridge the physical and digital divide.</p>
        <ul>
            <li><strong>Internet Connectivity:</strong> While they can operate offline via edge computing, their defining characteristic is the ability to eventually connect to the internet (or an intranet) to share their telemetry.</li>
            <li><strong>Interoperability:</strong> They are designed to communicate with cloud brokers, databases, and logic apps without direct human intervention.</li>
        </ul>
    """,
    "Digital sensors send data as:": """
        <h3>Digital vs Analog</h3>
        <p>Sensors communicate with microcontrollers in fundamentally different ways depending on their type.</p>
        <ul>
            <li><strong>Digital Sensors:</strong> They send data purely as discrete states: 1s and 0s (High voltage vs Low voltage). A simple button is a digital sensor.</li>
            <li><strong>Analog Sensors:</strong> They send a continuous wave of voltage (like a smooth curve from 0V to 3.3V). The microcontroller uses an ADC (Analog-to-Digital Converter) to translate that curve into a number (like 0-1023).</li>
        </ul>
    """
}

with open('theory.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before the last closing brace
insertion = ""
for q_text, theory_html in new_theories.items():
    insertion += f',\n    "{q_text}": `{theory_html}`'

if 'Edge Computing Architecture' not in content:
    content = content.replace('\n};', insertion + '\n};')
    with open('theory.js', 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Injected specific question-level theories.")
