import json

new_theories = {
    "The execution of embedded software in an IoT device is handled by": """
        <h3>Embedded Execution</h3>
        <p>IoT devices are controlled by embedded software, which must run on highly constrained hardware.</p>
        <ul>
            <li><strong>Microcontrollers (MCUs):</strong> The heart of most embedded IoT devices is the microcontroller. It handles fetching instructions, decoding them, and executing them.</li>
            <li><strong>Constraints:</strong> Unlike standard CPUs, MCUs lack advanced operating systems. They usually run an RTOS (Real-Time Operating System) or bare-metal code designed specifically to juggle sensor reads and actuator writes simultaneously.</li>
        </ul>
    """,
    "Where is the most AI model of IoT trained?": """
        <h3>AI Training vs Inference</h3>
        <p>Running AI on the edge involves two entirely separate phases: Training and Inference.</p>
        <ul>
            <li><strong>Training in the Cloud:</strong> Training a model requires massive computational power (GPUs) and huge datasets. This is virtually always done in centralized Cloud data centers or powerful local development machines.</li>
            <li><strong>Inference on the Edge:</strong> Once the model is fully trained, it is compressed (TinyML) and pushed down to the IoT device. The device only performs "inference" (making predictions based on the already-trained model).</li>
        </ul>
    """,
    "What role does the broker play in Message Queuing Telemetry Transport (MQTT)?": """
        <h3>The MQTT Broker</h3>
        <p>MQTT is the industry-standard messaging protocol for IoT. It uses a Publish/Subscribe model instead of traditional client-server HTTP requests.</p>
        <ul>
            <li><strong>The Middleman:</strong> Devices never talk directly to each other. Instead, they all connect to a central server known as the Broker.</li>
            <li><strong>Routing:</strong> When a device "publishes" a message to a specific topic (e.g., <code>sensor/temp</code>), the Broker receives it and instantly forwards it to every other device that has "subscribed" to that topic.</li>
        </ul>
    """,
    "Containers are used in software deployment because they:": """
        <h3>Containerization in IoT</h3>
        <p>Containers (like Docker) are heavily used when deploying logic to Edge Gateways.</p>
        <ul>
            <li><strong>Isolation & Consistency:</strong> Containers package the application code alongside all its necessary libraries and dependencies. This guarantees that the software will run exactly the same way on the IoT edge device as it did on the developer's laptop.</li>
            <li><strong>Modularity:</strong> Instead of installing 10 different raw applications on an edge gateway, you deploy 10 isolated containers, preventing dependency conflicts.</li>
        </ul>
    """,
    "Which of the following best describes the foundation of IoT systems?": """
        <h3>The Foundation of IoT</h3>
        <p>The "Internet of Things" is built on the interaction between the physical world and digital networks.</p>
        <ul>
            <li><strong>Physical-Digital Bridge:</strong> The core foundation of IoT is using physical hardware (sensors) to gather real-world analog data, digitizing it, and pushing it to a network for analysis.</li>
            <li><strong>Communication:</strong> Without the network (the Internet or Intranet), an embedded device is just an isolated robot. The network allows distributed intelligence.</li>
        </ul>
    """,
    "In an IoT setup, actuators are responsible for:": """
        <h3>The Role of Actuators</h3>
        <p>If sensors are the "eyes and ears" of an IoT system, actuators are the "hands".</p>
        <ul>
            <li><strong>Physical Output:</strong> An actuator is a hardware component that takes an electrical digital command and turns it into a physical action in the real world.</li>
            <li><strong>Examples:</strong> Spinning a motor, turning on a water pump, opening a smart lock, or even lighting up an LED. All of these convert a digital signal into a physical change.</li>
        </ul>
    """,
    "Which mechanism allows an app to send a command and receive a response from an IoT device?": """
        <h3>Cloud-to-Device (C2D) Commands</h3>
        <p>When the cloud needs to force an IoT device to take an action, it sends a command down to the edge.</p>
        <ul>
            <li><strong>Direct Methods:</strong> A "Direct Method" is a synchronous command. The cloud sends the command and keeps the connection open waiting for the device to reply "Success" or "Failure".</li>
            <li><strong>Usage:</strong> This is used when the cloud needs absolute confirmation that an action happened immediately (e.g., "Unlock the door right now").</li>
        </ul>
    """,
    "In the sentence 'set a 3 minute timer':": """
        <h3>Intent Recognition</h3>
        <p>Natural Language Understanding (NLU) systems must break down user sentences to understand what the user wants to do.</p>
        <ul>
            <li><strong>Intent:</strong> This is the core action the user wants to perform. In this case, the intent is "SetTimer".</li>
            <li><strong>Entities:</strong> These are the specific variables modifying the intent. In this case, "3" and "minute" are the entities determining the length of the timer.</li>
        </ul>
    """,
    "Language understanding involves:": """
        <h3>Language Understanding (NLU)</h3>
        <p>Language Understanding is how an AI converts raw text into actionable computer commands.</p>
        <ul>
            <li><strong>Meaning Extraction:</strong> It is not about turning speech into text. That is Speech-to-Text. Language Understanding takes the resulting text and determines the semantic meaning (Intent) and variables (Entities) to trigger a software function.</li>
        </ul>
    """,
    "The three parts of speech generation are:": """
        <h3>Text-to-Speech (TTS) Architecture</h3>
        <p>Converting digital text into natural-sounding human audio happens in three distinct phases.</p>
        <ul>
            <li><strong>Text Analysis:</strong> The AI breaks down the sentence, handling abbreviations (reading "Dr." as "Doctor") and identifying punctuation to determine pauses.</li>
            <li><strong>Acoustic Modeling:</strong> The AI decides the tone, pitch, and phonemes needed to pronounce the words correctly.</li>
            <li><strong>Vocoder:</strong> The final stage where the acoustic data is physically synthesized into an audio waveform that a speaker can play.</li>
        </ul>
    """,
    "When deploying a Functions App to the cloud, you need to create and deploy:": """
        <h3>Deploying Serverless Functions</h3>
        <p>Serverless logic (like Azure Functions) requires specific infrastructure to run in the cloud.</p>
        <ul>
            <li><strong>The Code:</strong> The actual application logic (written in Python, Node.js, etc.) that processes the IoT telemetry.</li>
            <li><strong>The Infrastructure:</strong> You must deploy the Function App resource itself, along with a storage account to hold the code, and defined triggers (like an IoT Hub connection) that tell the function when to run.</li>
        </ul>
    """,
    "Which of the following statements best summarizes the differences between Single-Board Computers and microcontrollers?": """
        <h3>SBCs vs Microcontrollers</h3>
        <p>There are two entirely different classes of compute used at the IoT Edge.</p>
        <ul>
            <li><strong>Microcontrollers (MCUs):</strong> Tiny, cheap, extremely low-power chips designed to run a single program loop without a standard OS (e.g., Arduino). Great for basic sensor reading.</li>
            <li><strong>Single-Board Computers (SBCs):</strong> Fully fledged computers (like a Raspberry Pi) with gigabytes of RAM. They run complex operating systems like Linux, allowing them to act as Edge Gateways or run heavy AI models.</li>
        </ul>
    """
}

with open('theory.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the aliasing block if it exists
if '// Aliases for Professor Questions' in content:
    content = content.split('// Aliases for Professor Questions')[0]

# Append new theories
insertion = ""
for q_text, theory_html in new_theories.items():
    insertion += f',\n    "{q_text}": `{theory_html}`'

content = content.replace('\n};', insertion + '\n};')

with open('theory.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected Chunk 1 of handcrafted Professor question definitions.")
