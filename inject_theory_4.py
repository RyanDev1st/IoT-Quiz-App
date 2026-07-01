import re

new_theory = """
    "Lesson 16 - Check fruit quality from an IoT device: Pre-Lecture Quiz": `
        <h3>Capturing Images at the Edge</h3>
        <p>Before an IoT device can classify an image, it must successfully capture and transmit it.</p>
        <ul>
            <li><strong>Sensors:</strong> Cameras are highly complex sensors compared to a thermometer. Capturing raw pixels requires significantly more RAM and CPU overhead.</li>
            <li><strong>Bandwidth:</strong> Because images are large, sending thousands of uncompressed images to the cloud for AI classification can easily overwhelm the network bandwidth and incur huge cloud egress costs.</li>
        </ul>
    `,
    "Lesson 16 - Check fruit quality from an IoT device: Post-Lecture Quiz": `
        <h3>Cloud-Based Computer Vision</h3>
        <p>Processing images in the cloud using managed APIs.</p>
        <ul>
            <li><strong>Azure Custom Vision:</strong> A managed API that takes an image payload and runs it against a trained model, returning a JSON response.</li>
            <li><strong>JSON Payload:</strong> The cloud returns the predicted "Tag" (e.g., "Rotten") and a "Probability" score (e.g., 0.95), which the IoT device must parse to take action.</li>
        </ul>
    `,
    "Lesson 17 - Run your fruit detector on the edge: Pre-Lecture Quiz": `
        <h3>Edge AI Architecture</h3>
        <p>Running Neural Networks directly on the local microcontroller.</p>
        <ul>
            <li><strong>The Problem with Cloud AI:</strong> Cloud inference is subject to network latency and requires a constant internet connection, which is unacceptable for real-time factory sorting lines.</li>
            <li><strong>Edge Inference:</strong> By compiling the trained AI model into a lightweight binary (TinyML), the IoT device can classify the image locally in milliseconds, completely offline.</li>
        </ul>
    `,
    "Lesson 17 - Run your fruit detector on the edge: Post-Lecture Quiz": `
        <h3>Testing Edge Deployments</h3>
        <p>Validating offline AI.</p>
        <ul>
            <li><strong>Offline Testing:</strong> Because Edge AI models run entirely on the local silicon, you can validate their accuracy by checking the prediction output directly on the device's local logs, without needing an active IoT Hub connection.</li>
            <li><strong>Updates:</strong> If the model accuracy degrades (model drift), the cloud can push a new, retrained binary down to the edge device using an Over The Air (OTA) update.</li>
        </ul>
    `,
    "Lesson 18 - Trigger fruit quality detection from a sensor: Pre-Lecture Quiz": `
        <h3>Sensor Fusion & Triggering</h3>
        <p>IoT devices shouldn't run heavy cameras continuously.</p>
        <ul>
            <li><strong>Power Drain:</strong> Keeping a camera and Neural Network running 24/7 will destroy an IoT battery in hours.</li>
            <li><strong>Triggering:</strong> Using a cheap, ultra-low-power sensor (like a Time of Flight proximity sensor or a PIR motion sensor) as a "wake up" trigger allows the device to stay asleep until an object is physically present in front of the lens.</li>
        </ul>
    `,
    "Lesson 18 - Trigger fruit quality detection from a sensor: Post-Lecture Quiz": `
        <h3>Time of Flight (ToF) Sensors</h3>
        <p>Measuring physical distance with light.</p>
        <ul>
            <li><strong>Mechanism:</strong> ToF sensors emit safe, invisible infrared laser pulses and time exactly how many nanoseconds it takes for the photon to bounce off an object and return to the receiver.</li>
            <li><strong>Speed of Light:</strong> Because light travels at a known, constant speed, this timing provides hyper-accurate millimeter measurements, making it the perfect trigger for a camera shutter.</li>
        </ul>
    `,
    "Lesson 19 - Train a stock detector: Pre-Lecture Quiz": `
        <h3>Object Detection Fundamentals</h3>
        <p>Finding specific items in crowded retail environments.</p>
        <ul>
            <li><strong>Classification vs Detection:</strong> Classification says "A box is in this image." Object Detection says "There are 4 boxes here, located at X/Y coordinates."</li>
            <li><strong>Counting:</strong> By simply counting the number of detected bounding boxes the AI outputs, you can instantly calculate retail stock levels.</li>
        </ul>
    `,
    "Lesson 19 - Train a stock detector: Post-Lecture Quiz": `
        <h3>Bounding Boxes and Probabilities</h3>
        <p>Understanding the mathematical output of a detection model.</p>
        <ul>
            <li><strong>Coordinates:</strong> The AI draws a 'Bounding Box' around the item. It returns this box as normalized percentages (0.0 to 1.0) of the width/height, ensuring the coordinates remain accurate even if the image is resized later.</li>
            <li><strong>Confidence Thresholds:</strong> You cannot just blindly count bounding boxes. You must filter out low-probability guesses (e.g., only count boxes with > 80% confidence) to prevent false positives.</li>
        </ul>
    `,
    "Lesson 20 - Check stock from an IoT device: Pre-Lecture Quiz": `
        <h3>Smart Retail Constraints</h3>
        <p>Deploying AI at scale in supermarkets.</p>
        <ul>
            <li><strong>Occlusion:</strong> In the real world, products sit in front of each other (occlusion). Therefore, an object detection model must be trained to recognize overlapping bounding boxes.</li>
            <li><strong>Specialized Domains:</strong> Cloud providers offer pre-trained base models optimized for specific visual environments. Using the "Products on Shelves" domain yields radically better results than a general-purpose model.</li>
        </ul>
    `,
    "Lesson 20 - Check stock from an IoT device: Post-Lecture Quiz": `
        <h3>Minimum Training Data</h3>
        <p>The technical requirements for Custom Vision.</p>
        <ul>
            <li><strong>Image Minimums:</strong> To train an object detector in Azure Custom Vision, you must provide a hard minimum of 15 images per tag. One image is never enough for the neural network to generalize visual features.</li>
            <li><strong>Void Detection:</strong> These models can also be trained to detect the *absence* of objects, helping robotic stockers identify empty gaps on shelves.</li>
        </ul>
    `,
    "Lesson 21 - Recognize speech with an IoT device: Pre-Lecture Quiz": `
        <h3>Audio Sensors and Analog-to-Digital</h3>
        <p>Capturing human voice on IoT hardware.</p>
        <ul>
            <li><strong>MEMS Microphones:</strong> Micro-Electromechanical Systems (MEMS) are microscopic microphones standard in IoT. The microphone natively acts as an Analog sensor (reacting to continuous air pressure).</li>
            <li><strong>PCM:</strong> Pulse Code Modulation (PCM) is the process of rapidly sampling that continuous analog wave and converting it into a raw digital bitstream.</li>
        </ul>
    `,
    "Lesson 21 - Recognize speech with an IoT device: Post-Lecture Quiz": `
        <h3>Speech Privacy and Bandwidth</h3>
        <p>The ethics and architecture of smart speakers.</p>
        <ul>
            <li><strong>Privacy:</strong> Streaming 24/7 audio to the cloud is a massive privacy violation and bandwidth hog. Voice assistants must process audio entirely locally (Edge AI) to listen for a specific 'Wake Word'.</li>
            <li><strong>Audio Size:</strong> Uncompressed PCM audio is heavy. One second of 16-bit audio sampled at 16KHz consumes exactly 32 Kilobytes of memory (16,000 * 16 bits = 256,000 bits / 8 = 32,000 bytes).</li>
        </ul>
    `,
    "Lesson 22 - Understand language: Pre-Lecture Quiz": `
        <h3>Natural Language Understanding (NLU)</h3>
        <p>Moving from Speech-to-Text (STT) into semantic meaning.</p>
        <ul>
            <li><strong>Context over Keywords:</strong> Traditional systems look for rigid predefined words. NLU uses deep learning to look at the surrounding context of the entire sentence to infer meaning, allowing users to speak naturally (e.g., using slang).</li>
            <li><strong>Intents and Entities:</strong> The two pillars of NLU. The "Intent" is the overarching goal or action verb (e.g., 'Set a timer'). The "Entity" is the specific parameter to extract (e.g., '3 minutes').</li>
        </ul>
    `,
    "Lesson 22 - Understand language: Post-Lecture Quiz": `
        <h3>Cloud NLU Services</h3>
        <p>Using managed cloud APIs for language.</p>
        <ul>
            <li><strong>LUIS:</strong> Microsoft's Language Understanding Intelligent Service (LUIS). Developers provide it with a few example sentences (utterances), and it trains a model to extract Intents and Entities.</li>
            <li><strong>Multilingual Support:</strong> Modern NLU APIs do not rely on 1-to-1 word swapping (which breaks grammar rules); they translate pure semantic intent across dozens of global languages.</li>
        </ul>
    `,
    "Lesson 23 - Set a timer and provide spoken feedback: Pre-Lecture Quiz": `
        <h3>Neural Text-to-Speech (TTS)</h3>
        <p>Giving the IoT device a voice.</p>
        <ul>
            <li><strong>The TTS Pipeline:</strong> Contains three phases: Text Analysis (parsing the words), Linguistic Analysis (figuring out pronunciation/prosody), and Waveform Generation (synthesizing the final audio).</li>
            <li><strong>Neural Voices:</strong> Modern deep learning TTS models sound highly expressive and human, unlike the robotic, monotonic systems of the past.</li>
        </ul>
    `,
    "Lesson 23 - Set a timer and provide spoken feedback: Post-Lecture Quiz": `
        <h3>Contextual Speech and SSML</h3>
        <p>Refining how the AI speaks.</p>
        <ul>
            <li><strong>Context Awareness:</strong> Advanced AI knows the difference between '1234' in a phone number (one two three four) vs '1234' in a bank balance (one thousand two hundred thirty four).</li>
            <li><strong>SSML:</strong> Speech Synthesis Markup Language. Developers use these XML-like tags to manually insert pauses, change pitch, or force phonetic pronunciations into the TTS output.</li>
        </ul>
    `,
    "Lesson 24 - Support multiple languages: Pre-Lecture Quiz": `
        <h3>Neural Machine Translation (NMT)</h3>
        <p>Breaking down global barriers.</p>
        <ul>
            <li><strong>History:</strong> Machine translation has been researched for nearly 70 years (starting in the 1950s), but Neural Networks finally solved the fluency problem.</li>
            <li><strong>Transformer Models:</strong> Modern 'Neural Translators' (like Google Translate or Microsoft Translator) use deep neural architectures to analyze whole blocks of text simultaneously, preserving complex grammar structures.</li>
        </ul>
    `,
    "Lesson 24 - Support multiple languages: Post-Lecture Quiz": `
        <h3>Globalizing IoT Voice Systems</h3>
        <p>Supporting non-English users.</p>
        <ul>
            <li><strong>Speech-to-Text Multilingualism:</strong> Modern STT models natively support global languages and can often auto-detect the language being spoken by the user.</li>
            <li><strong>Voice Cloning:</strong> AI TTS systems can even use Custom Neural Voice technology to clone a specific human's voice and generate foreign speech using their exact vocal characteristics.</li>
            <li><strong>Fun Fact:</strong> Microsoft Translator officially supports Klingon (from Star Trek) to show off the flexibility of their NMT engine!</li>
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
    print("Updated theory.js with Chunk 4")
else:
    print("Could not find insertion point")
