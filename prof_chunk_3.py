import json

new_theories = {
    "Edge devices always need an Internet connection.": """
        <h3>Offline-First Edge Capabilities</h3>
        <p>A massive misconception is that IoT devices turn into useless bricks without the internet.</p>
        <ul>
            <li><strong>Autonomy:</strong> Well-designed edge devices can gather data, run AI inference, and control local actuators completely offline.</li>
            <li><strong>Syncing:</strong> When the internet connection returns, they can sync their buffered data and update their Device Twin state with the Cloud.</li>
        </ul>
    """,
    "AI models would convert 1234 into which spoken phrase:": """
        <h3>Text Normalization in TTS</h3>
        <p>Text-to-Speech engines don't just blindly read characters; they normalize text first.</p>
        <ul>
            <li><strong>Context Matters:</strong> The AI decides how to read numbers based on context. "1234" standing alone might be "One thousand, two hundred and thirty-four." But if it's a phone number or address, it might be "One two three four."</li>
            <li><strong>Abbreviations:</strong> It also expands things like "St." into "Street" or "Saint" depending entirely on the surrounding words.</li>
        </ul>
    """,
    "Can detected objects from an image overlap?": """
        <h3>Object Detection Overlap</h3>
        <p>Object detection models draw bounding boxes around items they recognize.</p>
        <ul>
            <li><strong>Overlapping Boxes:</strong> Yes, bounding boxes can and often do overlap. If a person is holding a dog, the box for "Person" and the box for "Dog" will intersect.</li>
            <li><strong>NMS (Non-Maximum Suppression):</strong> The algorithm cleans up messy overlapping boxes predicting the *same* object by keeping only the box with the highest confidence score.</li>
        </ul>
    """,
    "Serverless code can only be written in JavaScript and COBOL:": """
        <h3>Serverless Supported Languages</h3>
        <p>Cloud serverless providers are highly flexible.</p>
        <ul>
            <li><strong>Standard Languages:</strong> Azure Functions and AWS Lambda support C#, Java, JavaScript/TypeScript, Python, and PowerShell natively.</li>
            <li><strong>Custom Handlers:</strong> Even if a language isn't natively supported (like Rust or Go), you can run it via a custom handler. (But nobody is writing new IoT serverless backends in COBOL!)</li>
        </ul>
    """,
    "Edge computing can be more secure than cloud computing.": """
        <h3>Security Benefits of the Edge</h3>
        <p>Keeping data local reduces the attack surface.</p>
        <ul>
            <li><strong>Privacy:</strong> If an edge camera analyzes a video frame to check for a defect and instantly deletes the frame without uploading it, user privacy is guaranteed.</li>
            <li><strong>Air-Gapping:</strong> Highly sensitive industrial systems can be entirely air-gapped from the public internet, making remote hacking virtually impossible.</li>
        </ul>
    """,
    "Running an ML model on an edge device is less accurate than running an ML model in the cloud.": """
        <h3>Edge AI Accuracy vs Cloud AI</h3>
        <p>There is a trade-off when moving AI to the edge.</p>
        <ul>
            <li><strong>Quantization:</strong> To fit a massive neural network onto a 2MB microcontroller, it must be compressed (quantized). This strips away some precision (e.g. converting 32-bit floats to 8-bit integers).</li>
            <li><strong>The Result:</strong> The resulting edge model is exponentially faster and uses tiny amounts of power, but it will suffer a slight drop in absolute accuracy compared to its uncompressed cloud counterpart.</li>
        </ul>
    """,
    "What is the full form of IIoT?": """
        <h3>Industrial Internet of Things (IIoT)</h3>
        <p>IIoT is the industrial subset of IoT, focusing on manufacturing, energy, and logistics.</p>
        <ul>
            <li><strong>Mission Critical:</strong> While consumer IoT might be a smart toaster, IIoT involves robotic assembly lines or nuclear plant sensors, where a failure or latency delay could be catastrophic.</li>
            <li><strong>Protocols:</strong> IIoT heavily relies on older, robust protocols (like Modbus or OPC UA) integrated with modern cloud telemetry.</li>
        </ul>
    """,
    "The I2C (Inter-Integrated Circuit) protocol supports:": """
        <h3>I2C Protocol</h3>
        <p>I2C is an extremely popular synchronous serial protocol for attaching sensors to a microcontroller.</p>
        <ul>
            <li><strong>Two Wires:</strong> It uses only two wires: SDA (Data) and SCL (Clock).</li>
            <li><strong>Multiple Devices:</strong> Its biggest advantage is that you can connect over 100 sensors to those exact same two wires, because every sensor has a unique hexadecimal hardware address (e.g., <code>0x44</code>).</li>
            <li><strong>Half-Duplex:</strong> Because it only has one data wire, it is half-duplex (it can't send and receive at the exact same time).</li>
        </ul>
    """,
    "How large is 1 second of 16-bit audio sampled at 16 KHz?": """
        <h3>Audio Data Math</h3>
        <p>Digitizing audio creates heavy data payloads compared to simple temperature telemetry.</p>
        <ul>
            <li><strong>The Math:</strong> 16 KHz means 16,000 samples per second. If each sample is 16 bits (2 bytes), then 16,000 * 2 = 32,000 bytes.</li>
            <li><strong>Result:</strong> 1 second of audio is exactly 32 KB. This means transmitting live audio over a constrained IoT protocol like MQTT is highly inefficient.</li>
        </ul>
    """,
    "Pulse width modulation (PWM) is commonly used for controlling what type of device?": """
        <h3>Pulse Width Modulation (PWM)</h3>
        <p>PWM allows digital devices to fake an analog output.</p>
        <ul>
            <li><strong>How it works:</strong> A microcontroller can only output exactly 3.3V or exactly 0V. But if it flickers between 3.3V and 0V extremely fast (thousands of times a second), the connected device averages out the power.</li>
            <li><strong>Usage:</strong> It is universally used to dim LEDs smoothly or control the speed of a DC motor.</li>
        </ul>
    """,
    "Data gathered from sensors and sent to the cloud is called:": """
        <h3>Telemetry Terminology</h3>
        <p>In IoT, specific terms are used for specific directions of data.</p>
        <ul>
            <li><strong>Telemetry:</strong> Data flowing UP from the device to the cloud. It is typically a continuous, high-volume stream of raw sensor readings.</li>
            <li><strong>Commands:</strong> Data flowing DOWN from the cloud to the device.</li>
            <li><strong>Twins:</strong> Data synchronizing the configuration STATE between the device and cloud.</li>
        </ul>
    """,
    "IoT devices gather information from the world around them using:": """
        <h3>Sensors: The IoT Eyes and Ears</h3>
        <p>Sensors are the fundamental hardware interface of IoT.</p>
        <ul>
            <li><strong>Gathering Data:</strong> Thermistors (temperature), photoresistors (light), accelerometers (motion), and microphones (sound) all convert physical world properties into electrical signals.</li>
            <li><strong>Microcontrollers:</strong> The MCU reads those electrical signals, packages them, and pushes them out via the network.</li>
        </ul>
    """,
    "What is the standard method for digitizing analog audio signals?": """
        <h3>Digitizing Audio (PCM)</h3>
        <p>Audio hits a microphone as a continuous physical pressure wave.</p>
        <ul>
            <li><strong>Sampling:</strong> To digitize it, an ADC measures the height (voltage) of that wave thousands of times a second.</li>
            <li><strong>PCM:</strong> Pulse Code Modulation (PCM) is the raw, uncompressed digital representation of these sequential height measurements. This raw PCM data is what gets sent to a Speech-to-Text engine.</li>
        </ul>
    """
}

with open('theory.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Append new theories
insertion = ""
for q_text, theory_html in new_theories.items():
    insertion += f',\n    "{q_text}": `{theory_html}`'

content = content.replace('\n};', insertion + '\n};')

with open('theory.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected Chunk 3 of handcrafted Professor question definitions.")
