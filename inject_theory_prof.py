import re

new_theory = """
    "Professor's SS2025 Re-exam Mastery": `
        <h3>SS2025 Comprehensive Review</h3>
        <p>This final section tests the culmination of the entire semester's curriculum.</p>
        <ul>
            <li><strong>Hardware vs Software:</strong> Be prepared to distinguish between physical constraints (power, RAM, sensors) and architectural decisions (Cloud routing, Serverless computing, Edge AI).</li>
            <li><strong>Security Focus:</strong> Remember that IoT security is multi-layered. Expect questions tricking you into relying solely on physical security, whereas true IoT security demands encryption, authentication (X.509), and OTA patching.</li>
            <li><strong>Data Flow:</strong> The most crucial concept to master is the flow of data: Sensor &rarr; Edge Gateway &rarr; IoT Hub (JSON) &rarr; Serverless Function &rarr; Storage/Database &rarr; Visualization/Dashboard.</li>
        </ul>
    `
"""

with open('theory.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before the last closing brace
insertion_point = content.rfind('}')
if insertion_point != -1:
    updated_content = content[:insertion_point] + "," + new_theory + content[insertion_point:]
    with open('theory.js', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print("Updated theory.js with Professor's review")
else:
    print("Could not find insertion point")
