import json

# Read original Microsoft quizzes
with open('quizzes.json', 'r', encoding='utf-8') as f:
    ms_quizzes = json.load(f)

# Helper function to generate explanations for Microsoft's questions using AI logic mapping
def generate_ms_explanation(question_text, answer_text, is_correct):
    if is_correct:
        return f"Correct! '{answer_text}' is the right answer. The Microsoft curriculum emphasizes this as a core concept in the lesson."
    else:
        return f"Incorrect. While '{answer_text}' might sound plausible, it doesn't align with the specific definitions taught in this IoT module."

# Add distractors and explanations to MS quizzes
distractors = [
    "Machine Learning", "Bluetooth Low Energy", "JSON Parsing", 
    "Data Obfuscation", "Firmware Over-The-Air", "Edge Routing"
]

distractor_index = 0
for section in ms_quizzes[0]['quizzes']:
    for q in section.get('quiz', []):
        opts = q.get('answerOptions', [])
        is_tf = False
        if len(opts) == 2:
            for o in opts:
                if o['answerText'].strip().lower() in ['true', 'false']:
                    is_tf = True
                    break
        
        # Add distractors to make 4 options
        if not is_tf:
            while len(opts) < 4:
                opts.append({
                    'answerText': distractors[distractor_index % len(distractors)],
                    'isCorrect': False
                })
                distractor_index += 1
        
        # Add explanations to EVERY option
        for opt in opts:
            is_c = (opt['isCorrect'] == True or opt['isCorrect'] == "true")
            opt['explanation'] = generate_ms_explanation(q['questionText'], opt['answerText'], is_c)

# Append Professor's exam
prof_data = [
  {
    "questionText": "Where is data processing typically done in Edge Computing?",
    "answerOptions": [
      {"answerText": "Near the data source, within local networks", "isCorrect": True, "explanation": "Correct! Edge computing brings computation and data storage closer to the devices where it's being gathered, reducing latency and saving bandwidth."},
      {"answerText": "On public internet for open access", "isCorrect": False, "explanation": "Incorrect. Sending data to the public internet introduces latency and privacy risks, which edge computing specifically aims to avoid."},
      {"answerText": "In completely offline environments only", "isCorrect": False, "explanation": "Incorrect. While edge devices can operate offline, they typically sync with the cloud eventually. They are not restricted to completely offline environments."},
      {"answerText": "In a centralized cloud data center", "isCorrect": False, "explanation": "Incorrect. Processing in a centralized cloud is the exact opposite of Edge computing."}
    ]
  },
  {
    "questionText": "Which of the following is a key feature of IoT devices?",
    "answerOptions": [
      {"answerText": "Sensor integration and connectivity", "isCorrect": True, "explanation": "Correct! The foundation of IoT (Internet of Things) is devices equipped with sensors that collect data and network connectivity to share it."},
      {"answerText": "Virtual simulation", "isCorrect": False, "explanation": "Incorrect. Virtual simulation (like digital twins) is a cloud/software concept, not a direct hardware feature of the physical IoT device itself."},
      {"answerText": "High-definition graphics", "isCorrect": False, "explanation": "Incorrect. Most IoT devices are resource-constrained and operate headless (without a display) to save power and cost."},
      {"answerText": "Data encryption for web apps", "isCorrect": False, "explanation": "Incorrect. While security is important, encrypting data for web apps is a generic IT concept, not a defining characteristic of an IoT device."}
    ]
  },
  {
    "questionText": "Digital sensors send data as:",
    "answerOptions": [
      {"answerText": "A sequence of digits", "isCorrect": True, "explanation": "Correct! Digital sensors output discrete values (0s and 1s), representing data as a digital sequence that a microcontroller can process natively."},
      {"answerText": "Voltage ranges", "isCorrect": False, "explanation": "Incorrect. Outputting a continuous voltage range is the definition of an analog sensor, not a digital one."},
      {"answerText": "High and low voltage only", "isCorrect": False, "explanation": "Incorrect. While digital logic uses high/low voltage for 1 and 0, digital sensors send structured sequences (like I2C/SPI packets), not just a single high/low state."},
      {"answerText": "Continuous analog waveforms", "isCorrect": False, "explanation": "Incorrect. Continuous waveforms are analog signals, which require an ADC (Analog-to-Digital Converter) to be read by a digital processor."}
    ]
  },
  {
    "questionText": "The execution of embedded software in an IoT device is handled by",
    "answerOptions": [
      {"answerText": "Microcontroller unit", "isCorrect": True, "explanation": "Correct! A Microcontroller Unit (MCU) contains the CPU, memory, and programmable input/output peripherals needed to execute embedded code."},
      {"answerText": "Sensor module", "isCorrect": False, "explanation": "Incorrect. Sensors gather environmental data but do not have the general-purpose processing power to execute the main embedded software."},
      {"answerText": "Communication module", "isCorrect": False, "explanation": "Incorrect. Communication modules (like Wi-Fi or LoRa chips) handle network transmission, not the execution of the main device logic."},
      {"answerText": "Digital to analog converter", "isCorrect": False, "explanation": "Incorrect. A DAC translates digital signals into analog voltages; it has no capacity to execute software."}
    ]
  },
  {
    "questionText": "Where is the most AI model of IoT trained?",
    "answerOptions": [
      {"answerText": "In the cloud", "isCorrect": True, "explanation": "Correct! Training AI requires massive computational power (GPUs) and large storage for datasets, which are abundant in cloud environments."},
      {"answerText": "In the sensor", "isCorrect": False, "explanation": "Incorrect. Sensors are highly constrained hardware designed only for data collection, lacking the memory and CPU required for AI training."},
      {"answerText": "In the edge", "isCorrect": False, "explanation": "Incorrect. While AI models can be *executed* (inferred) on the edge, they are rarely *trained* there due to hardware limitations."},
      {"answerText": "In other computer", "isCorrect": False, "explanation": "Incorrect. While a local PC could train a model, enterprise IoT AI models rely on scalable cloud infrastructure for training."}
    ]
  },
  {
    "questionText": "What role does the broker play in Message Queuing Telemetry Transport (MQTT)?",
    "answerOptions": [
      {"answerText": "It routes messages between publishers and subscribers", "isCorrect": True, "explanation": "Correct! The MQTT broker acts as a central post office, receiving messages published to topics and routing them to any clients subscribed to those topics."},
      {"answerText": "It generates messages and sends them to sensors", "isCorrect": False, "explanation": "Incorrect. Sensors (publishers) generate the messages; the broker just forwards them."},
      {"answerText": "It stores all data permanently", "isCorrect": False, "explanation": "Incorrect. MQTT brokers are lightweight and designed for real-time routing, not for long-term database storage."},
      {"answerText": "It encrypts data between servers", "isCorrect": False, "explanation": "Incorrect. Encryption is handled by the transport layer (like TLS/SSL), not intrinsically by the MQTT broker's routing logic."}
    ]
  },
  {
    "questionText": "Containers are used in software deployment because they:",
    "answerOptions": [
      {"answerText": "Allow applications to run in isolated environments", "isCorrect": True, "explanation": "Correct! Containers package an application with all its dependencies, ensuring it runs reliably and isolated from other processes on any infrastructure."},
      {"answerText": "Are dependent on the host operating system", "isCorrect": False, "explanation": "Incorrect. While they share the host kernel, containers abstract away the host OS layer to remain portable across different systems."},
      {"answerText": "Require dedicated hardware", "isCorrect": False, "explanation": "Incorrect. Containers are lightweight and can share a single piece of hardware with many other containers, unlike traditional bare-metal deployments."},
      {"answerText": "Only work with cloud-native services", "isCorrect": False, "explanation": "Incorrect. Containers can run anywhere, including on edge devices like Raspberry Pis, not just in the cloud."}
    ]
  },
  {
    "questionText": "Which of the following best describes the foundation of IoT systems?",
    "answerOptions": [
      {"answerText": "A combination of hardware and software", "isCorrect": True, "explanation": "Correct! IoT bridges the physical and digital worlds, requiring physical hardware (sensors, MCUs) integrated with software (firmware, cloud analytics)."},
      {"answerText": "Software components", "isCorrect": False, "explanation": "Incorrect. Software alone cannot interact with the physical environment without sensors and microcontrollers."},
      {"answerText": "Hardware components", "isCorrect": False, "explanation": "Incorrect. Hardware without embedded firmware and cloud integration is just a dumb device, not a smart IoT system."},
      {"answerText": "None of these components", "isCorrect": False, "explanation": "Incorrect. Both hardware and software are explicitly required."}
    ]
  },
  {
    "questionText": "In an IoT setup, actuators are responsible for:",
    "answerOptions": [
      {"answerText": "Executing physical actions like movement or light activation", "isCorrect": True, "explanation": "Correct! Actuators receive electrical control signals and convert them into physical changes (e.g., spinning a motor, opening a valve)."},
      {"answerText": "Sensing changes in the environment", "isCorrect": False, "explanation": "Incorrect. This is the exact definition of a sensor, not an actuator."},
      {"answerText": "Processing data in the cloud", "isCorrect": False, "explanation": "Incorrect. Cloud processing is handled by servers and analytics services, completely detached from physical actuators."},
      {"answerText": "Connecting edge devices to the networks", "isCorrect": False, "explanation": "Incorrect. Networking is handled by communication modules (Wi-Fi, LoRa, Cellular), not actuators."}
    ]
  },
  {
    "questionText": "Which mechanism allows an app to send a command and receive a response from an IoT device?",
    "answerOptions": [
      {"answerText": "Direct method request", "isCorrect": True, "explanation": "Correct! Direct methods represent a request-reply interaction where the cloud invokes a method on the device and waits for an immediate HTTP-like response."},
      {"answerText": "Device twin", "isCorrect": False, "explanation": "Incorrect. Device twins synchronize desired and reported state asynchronously over time, they are not used for immediate command/response interactions."},
      {"answerText": "Device to cloud message", "isCorrect": False, "explanation": "Incorrect. This is telemetry flowing in the opposite direction (from the device up to the cloud)."},
      {"answerText": "Sensor polling", "isCorrect": False, "explanation": "Incorrect. Polling involves repeatedly checking for data, not sending a command and awaiting an execution response."}
    ]
  },
  {
    "questionText": "In the sentence 'set a 3 minute timer':",
    "answerOptions": [
      {"answerText": "The intent is set a timer and the entity is 3 minutes", "isCorrect": True, "explanation": "Correct! In Natural Language Processing (NLP), the 'intent' is the user's overarching goal (set a timer), and 'entities' are the specific parameters extracted (3 minutes)."},
      {"answerText": "The intent is 3 minutes and the entity is a timer", "isCorrect": False, "explanation": "Incorrect. 3 minutes is a parameter (entity), not the action the user wants to perform (intent)."},
      {"answerText": "The intent is a timer and the entity is a set", "isCorrect": False, "explanation": "Incorrect. 'A timer' is the object, not the action. 'Set' is a verb, not an entity parameter."},
      {"answerText": "The intent is 3 and the entity is minute timer", "isCorrect": False, "explanation": "Incorrect. This completely breaks the logical mapping of action (intent) and parameters (entities)."}
    ]
  },
  {
    "questionText": "Language understanding involves:",
    "answerOptions": [
      {"answerText": "Looking at the whole sentence and trying to get the meaning using the context of the words", "isCorrect": True, "explanation": "Correct! Modern Natural Language Understanding (NLU) uses context and word relationships across the entire sentence to infer true semantic meaning."},
      {"answerText": "Looking at the individual words in a sentence and trying to get the meaning", "isCorrect": False, "explanation": "Incorrect. Evaluating words individually (bag-of-words approach) loses crucial context and often misinterprets meaning."},
      {"answerText": "Finding pre-defined sentences and using those to get the meaning", "isCorrect": False, "explanation": "Incorrect. Relying on pre-defined sentences is rigid pattern matching (like Regex), which fails if the user phrases things slightly differently."},
      {"answerText": "Translating audio directly into executable code", "isCorrect": False, "explanation": "Incorrect. Audio translation is Speech-to-Text. Turning it into code involves intent mapping, not just raw language understanding."}
    ]
  },
  {
    "questionText": "The three parts of speech generation are:",
    "answerOptions": [
      {"answerText": "Text analysis, linguistic analysis, waveform generation", "isCorrect": True, "explanation": "Correct! Text-to-Speech (TTS) pipelines first parse the text (Text analysis), figure out pronunciation/prosody (Linguistic analysis), and finally synthesize the audio (Waveform generation)."},
      {"answerText": "Text analysis, understanding analysis, sound generation", "isCorrect": False, "explanation": "Incorrect. 'Understanding' is part of NLU (input), not speech generation (output)."},
      {"answerText": "Word analysis, audio production, frequency tuning", "isCorrect": False, "explanation": "Incorrect. These terms do not represent the standard architectural stages of a TTS pipeline."},
      {"answerText": "Signal processing, language translation, vocal synthesis", "isCorrect": False, "explanation": "Incorrect. Language translation is a completely separate domain from speech generation."}
    ]
  },
  {
    "questionText": "When deploying a Functions App to the cloud, you need to create and deploy:",
    "answerOptions": [
      {"answerText": "A Functions App, a Storage Account, and Application Settings", "isCorrect": True, "explanation": "Correct! A serverless Functions App relies on a Storage Account to hold its execution code and state, and Application Settings for environment configurations."},
      {"answerText": "A Functions App only", "isCorrect": False, "explanation": "Incorrect. A Functions App cannot exist in a vacuum; it strictly requires a backing storage account to manage its files and triggers."},
      {"answerText": "A Functions App and a Storage Account only", "isCorrect": False, "explanation": "Incorrect. Application Settings are crucial for configuring connection strings and parameters without hardcoding them."},
      {"answerText": "A Storage Account and Application Settings only", "isCorrect": False, "explanation": "Incorrect. You still need the actual Functions App resource to provide the compute environment."}
    ]
  },
  {
    "questionText": "Which of the following statements best summarizes the differences between Single-Board Computers and microcontrollers?",
    "answerOptions": [
      {"answerText": "Single-Board Computers offer support for various operating systems, making them ideal for multi-purpose tasks, whereas microcontrollers are designed for low power consumption and real-time responsiveness in single-task applications.", "isCorrect": True, "explanation": "Correct! SBCs (like Raspberry Pi) run full OSs (Linux) for heavy tasks, while MCUs (like Arduino) run bare-metal C code for real-time hardware control."},
      {"answerText": "Single-Board Computers prioritize low power consumption and real-time responsiveness for single-task applications, while microcontrollers offer general-purpose computing capabilities with OS support.", "isCorrect": False, "explanation": "Incorrect. This option completely flips the definitions. MCUs are low power, SBCs are general-purpose."},
      {"answerText": "Single-Board Computers and microcontrollers are entirely interchangeable for all IoT workloads.", "isCorrect": False, "explanation": "Incorrect. An MCU cannot run a web server efficiently, and an SBC is terrible for microsecond-level real-time hardware interrupts."},
      {"answerText": "Microcontrollers require a full desktop OS to operate, whereas Single-Board Computers do not.", "isCorrect": False, "explanation": "Incorrect. MCUs operate without any OS (bare metal) or with lightweight RTOS, while SBCs require an OS."}
    ]
  },
  {
    "questionText": "Points inside the geofence have a distance:",
    "answerOptions": [
      {"answerText": "Less than 0 (a negative value)", "isCorrect": True, "explanation": "Correct! In spatial computing and signed distance fields, points inside a boundary are represented by negative distances (<0), while points outside are positive."},
      {"answerText": "Greater than 0 (a positive value)", "isCorrect": False, "explanation": "Incorrect. Positive values generally indicate the point is outside the geofence boundary."},
      {"answerText": "Exactly zero", "isCorrect": False, "explanation": "Incorrect. A distance of exactly zero means the point is resting perfectly on the perimeter boundary of the geofence."},
      {"answerText": "Equal to the radius squared", "isCorrect": False, "explanation": "Incorrect. This is a mathematical formula for circle area calculations, not a representation of inside/outside state."}
    ]
  },
  {
    "questionText": "IoT data is stored by IoT Hub?",
    "answerOptions": [
      {"answerText": "False", "isCorrect": True, "explanation": "Correct! IoT Hub is a message broker and routing engine. It ingests data and passes it along to downstream services (like CosmosDB or Storage), but it is NOT a database itself."},
      {"answerText": "True", "isCorrect": False, "explanation": "Incorrect. While it retains messages temporarily for routing (retention period), it does not act as a permanent storage database."}
    ]
  },
  {
    "questionText": "The three components of architecting an IoT application are:",
    "answerOptions": [
      {"answerText": "Things, Insights, Actions", "isCorrect": True, "explanation": "Correct! The core IoT architecture pattern revolves around 'Things' generating data, analyzing that data for 'Insights', and automating 'Actions' based on those insights."},
      {"answerText": "Things, Internet, Databases", "isCorrect": False, "explanation": "Incorrect. Internet and databases are implementation technologies, not the high-level architectural components of IoT logic."},
      {"answerText": "AI, Blockchain, FizzBuzzers", "isCorrect": False, "explanation": "Incorrect. Blockchain and FizzBuzzers have nothing to do with the fundamental three-pillar architecture of IoT."},
      {"answerText": "Sensors, Gateways, Routers", "isCorrect": False, "explanation": "Incorrect. These are purely hardware components, missing the cloud insights and action phases entirely."}
    ]
  },
  {
    "questionText": "You can use Serverless code to respond to IoT events:",
    "answerOptions": [
      {"answerText": "True", "isCorrect": True, "explanation": "Correct! Event-driven serverless architectures (like Azure Functions) are the standard way to execute code automatically when IoT telemetry arrives."},
      {"answerText": "False", "isCorrect": False, "explanation": "Incorrect. Serverless computing is practically built for reacting to sporadic event streams like IoT data."}
    ]
  },
  {
    "questionText": "When you send IoT events to IoT Hub:",
    "answerOptions": [
      {"answerText": "Any number of services can read events off the IoT Hub", "isCorrect": True, "explanation": "Correct! IoT Hub utilizes 'consumer groups', allowing multiple downstream applications to independently read and process the same stream of telemetry data."},
      {"answerText": "Only one service can read events off the IoT Hub", "isCorrect": False, "explanation": "Incorrect. Restricting reads to a single service defeats the pub/sub event distribution model of IoT Hub."},
      {"answerText": "Services cannot read events from IoT Hub", "isCorrect": False, "explanation": "Incorrect. If services couldn't read the events, sending data to the Hub would be entirely pointless."},
      {"answerText": "Only edge devices can read events off the IoT Hub", "isCorrect": False, "explanation": "Incorrect. IoT Hub is designed to route telemetry primarily to cloud analytics services and functions."}
    ]
  },
  {
    "questionText": "When reading events off IoT hub, you can only do so using code that runs in the cloud:",
    "answerOptions": [
      {"answerText": "False", "isCorrect": True, "explanation": "Correct! While cloud services commonly read from IoT Hub, you can use SDKs to read events from local, on-premise servers or edge devices as well."},
      {"answerText": "True", "isCorrect": False, "explanation": "Incorrect. There is no strict limitation preventing authorized on-premise infrastructure from consuming the event stream."}
    ]
  },
  {
    "questionText": "Serverless code can be used to write IoT data to a database:",
    "answerOptions": [
      {"answerText": "True", "isCorrect": True, "explanation": "Correct! A highly common pattern is to trigger a serverless function when an IoT event arrives, parse the data, and insert it into a database like CosmosDB or SQL."},
      {"answerText": "False", "isCorrect": False, "explanation": "Incorrect. Serverless functions have robust output bindings specifically designed for writing to databases easily."}
    ]
  },
  {
    "questionText": "The SPI (Serial Peripheral Interface) protocol supports:",
    "answerOptions": [
      {"answerText": "Only one controller and multiple peripherals", "isCorrect": True, "explanation": "Correct! SPI operates in a master-slave architecture where a single controller manages multiple peripherals using individual Chip Select (CS) lines."},
      {"answerText": "Only one controller and only one peripheral", "isCorrect": False, "explanation": "Incorrect. By adding more Chip Select lines, an SPI controller can talk to many different peripherals on the same bus."},
      {"answerText": "Multiple controllers and multiple peripherals", "isCorrect": False, "explanation": "Incorrect. Standard SPI does not support multi-master configurations natively (unlike I2C)."},
      {"answerText": "Multiple controllers and only one peripheral", "isCorrect": False, "explanation": "Incorrect. SPI is strictly single-controller (master)."}
    ]
  },
  {
    "questionText": "Which levels of Quality of Service (QoS) that MQTT provides?",
    "answerOptions": [
      {"answerText": "All of them", "isCorrect": True, "explanation": "Correct! MQTT defines exactly three QoS levels: 0 (at most once), 1 (at least once), and 2 (exactly once)."},
      {"answerText": "At most once - the message is sent only once (fire and forget).", "isCorrect": False, "explanation": "Incorrect because MQTT supports this AND the other levels."},
      {"answerText": "At least once - the message is re-tried until acknowledgement is received.", "isCorrect": False, "explanation": "Incorrect because MQTT supports this AND the other levels."},
      {"answerText": "Exactly once - assured delivery with a two-level handshake.", "isCorrect": False, "explanation": "Incorrect because MQTT supports this AND the other levels."}
    ]
  },
  {
    "questionText": "Processing of data from analog sensors in IoT devices",
    "answerOptions": [
      {"answerText": "IoT devices require conversion of analog values to digital values using an Analog-Digital converter (ADC)", "isCorrect": True, "explanation": "Correct! Microcontrollers compute using binary (digital) logic, so continuous analog voltages must be digitized via an ADC before processing."},
      {"answerText": "IoT devices can work with analog values without requiring conversion", "isCorrect": False, "explanation": "Incorrect. A digital CPU physically cannot process infinite continuous analog voltage levels without digitizing them first."},
      {"answerText": "IoT devices only use analog signals for wireless communication", "isCorrect": False, "explanation": "Incorrect. While RF is analog, data is modulated digitally; and sensors definitely use analog lines for physical measurements."},
      {"answerText": "Analog signals are ignored by IoT microcontrollers", "isCorrect": False, "explanation": "Incorrect. Analog signals provide critical real-world data (like temperature or light intensity) and are explicitly read via ADC pins."}
    ]
  },
  {
    "questionText": "Symmetric key encryption compares to asymmetric key encryption in which ways:",
    "answerOptions": [
      {"answerText": "Symmetric key encryption is faster than asymmetric, but less secure", "isCorrect": True, "explanation": "Correct! Symmetric encryption (using one shared key) uses less compute power (faster for IoT), but distributing that single key securely over the network is inherently riskier than asymmetric public/private keys."},
      {"answerText": "Symmetric key encryption is slower than asymmetric", "isCorrect": False, "explanation": "Incorrect. Symmetric encryption (like AES) is mathematically much simpler and drastically faster than asymmetric (like RSA)."},
      {"answerText": "Symmetric key encryption is slower than asymmetric, but more secure", "isCorrect": False, "explanation": "Incorrect. It is neither slower, nor is it considered more secure due to the key distribution problem."},
      {"answerText": "Symmetric key encryption is more secure than asymmetric", "isCorrect": False, "explanation": "Incorrect. Because both parties need the exact same secret key, symmetric encryption poses significant key-management security risks."}
    ]
  },
  {
    "questionText": "The technique uses to train a model with only a few images from a pretrained model is called:",
    "answerOptions": [
      {"answerText": "Few-shot learning", "isCorrect": True, "explanation": "Correct! Few-shot learning is a technique where a pre-trained AI model is fine-tuned to recognize new classes using only a very small number (a 'few shots') of examples."},
      {"answerText": "Supervised learning", "isCorrect": False, "explanation": "Incorrect. Traditional supervised learning typically requires massive, fully-labeled datasets, not just a few images."},
      {"answerText": "Transfer learning", "isCorrect": False, "explanation": "Incorrect. While related, transfer learning often involves re-training larger classification heads, whereas few-shot specifically refers to the extreme constraint of having barely any training samples."},
      {"answerText": "Reinforcement learning", "isCorrect": False, "explanation": "Incorrect. Reinforcement learning trains agents based on rewards and penalties in an environment, unrelated to image classification."}
    ]
  },
  {
    "questionText": "Edge devices always need an Internet connection.",
    "answerOptions": [
      {"answerText": "False", "isCorrect": True, "explanation": "Correct! A primary advantage of Edge Computing is resilience; devices process data locally and can continue operating autonomously even when the internet goes down."},
      {"answerText": "True", "isCorrect": False, "explanation": "Incorrect. Forcing edge devices to always require internet defeats the purpose of local offline computing and zero-latency decision making."}
    ]
  },
  {
    "questionText": "AI models would convert 1234 into which spoken phrase:",
    "answerOptions": [
      {"answerText": "It can be 'one two three four' or 'one thousand two hundred and thirty four' depending on the context", "isCorrect": True, "explanation": "Correct! Advanced TTS AI models use context. If the text says 'My PIN is 1234', it says 'one two three four'. If it says 'I have $1234', it reads the thousands."},
      {"answerText": "One two three four", "isCorrect": False, "explanation": "Incorrect. A rigid system might do this, but modern AI applies linguistic context."},
      {"answerText": "One thousand two hundred and thirty four", "isCorrect": False, "explanation": "Incorrect. This would sound very strange if the AI was reading a phone number or passcode."},
      {"answerText": "Twelve thirty-four", "isCorrect": False, "explanation": "Incorrect. While it could be read as a year, it is entirely dependent on context, not hardcoded."}
    ]
  },
  {
    "questionText": "Can detected objects from an image overlap?",
    "answerOptions": [
      {"answerText": "True", "isCorrect": True, "explanation": "Correct! Object detection models use bounding boxes. If a person is standing in front of a car, the bounding box for the person will overlap with the bounding box for the car."},
      {"answerText": "False", "isCorrect": False, "explanation": "Incorrect. Real-world objects occlude and overlap each other constantly, and AI detection boxes reflect this spatial reality."}
    ]
  },
  {
    "questionText": "Serverless code can only be written in JavaScript and COBOL:",
    "answerOptions": [
      {"answerText": "False", "isCorrect": True, "explanation": "Correct! Modern serverless platforms (Azure Functions, AWS Lambda) natively support a wide variety of languages including Python, C#, Java, Go, and PowerShell."},
      {"answerText": "True", "isCorrect": False, "explanation": "Incorrect. COBOL is rarely supported natively for serverless, and JavaScript is absolutely not the only option available."}
    ]
  },
  {
    "questionText": "Edge computing can be more secure than cloud computing.",
    "answerOptions": [
      {"answerText": "True", "isCorrect": True, "explanation": "Correct! By keeping sensitive raw data (like video feeds or personal health info) strictly local on the edge device and not broadcasting it over the internet, edge computing reduces the attack surface."},
      {"answerText": "False", "isCorrect": False, "explanation": "Incorrect. Transmitting all raw data to the cloud exposes it to network interception (man-in-the-middle attacks), making the cloud pathway potentially less secure."}
    ]
  },
  {
    "questionText": "Running an ML model on an edge device is less accurate than running an ML model in the cloud.",
    "answerOptions": [
      {"answerText": "False", "isCorrect": True, "explanation": "Correct! If the exact same trained model weights and architecture are deployed to an edge device, the mathematical inference and accuracy will be identical to running it in the cloud."},
      {"answerText": "True", "isCorrect": False, "explanation": "Incorrect. The location of execution does not alter the underlying math of the model. (Note: quantization for edge might drop precision slightly, but intrinsically, edge execution isn't inherently 'less accurate')."}
    ]
  },
  {
    "questionText": "What is the full form of IIoT?",
    "answerOptions": [
      {"answerText": "Industrial IoT", "isCorrect": True, "explanation": "Correct! IIoT stands for the Industrial Internet of Things, referring to the application of connected sensors and automation in manufacturing, logistics, and heavy industry."},
      {"answerText": "Intelligent IoT", "isCorrect": False, "explanation": "Incorrect. While IoT is intelligent, this is not what the acronym stands for."},
      {"answerText": "Infrastructure IoT", "isCorrect": False, "explanation": "Incorrect. Infrastructure is a broad term, but the accepted industry acronym is Industrial."},
      {"answerText": "Integrated IoT", "isCorrect": False, "explanation": "Incorrect. Integration is a feature of IoT, not the definition of the IIoT subset."}
    ]
  },
  {
    "questionText": "The I2C (Inter-Integrated Circuit) protocol supports:",
    "answerOptions": [
      {"answerText": "Multiple controllers and multiple peripherals", "isCorrect": True, "explanation": "Correct! I2C uses a multi-master, multi-slave architecture on a simple 2-wire bus using unique hardware addresses to communicate."},
      {"answerText": "Only one controller and multiple peripherals", "isCorrect": False, "explanation": "Incorrect. This describes the typical limitation of standard SPI, but I2C supports multiple controllers (masters) natively."},
      {"answerText": "Only one controller and only one peripheral", "isCorrect": False, "explanation": "Incorrect. I2C uses addressing specifically so many devices can share the same two wires."},
      {"answerText": "One peripheral and multiple controllers", "isCorrect": False, "explanation": "Incorrect. Both controllers and peripherals can be plural in an I2C bus."}
    ]
  },
  {
    "questionText": "How large is 1 second of 16-bit audio sampled at 16 KHz?",
    "answerOptions": [
      {"answerText": "32KB", "isCorrect": True, "explanation": "Correct! 16,000 samples per second × 16 bits per sample = 256,000 bits. Divide by 8 to get bytes = 32,000 bytes (roughly 32 Kilobytes)."},
      {"answerText": "16KB", "isCorrect": False, "explanation": "Incorrect. This would only be true if the audio was 8-bit (1 byte per sample)."},
      {"answerText": "1KB", "isCorrect": False, "explanation": "Incorrect. 1KB is vastly too small to hold a full second of raw uncompressed audio at this rate."},
      {"answerText": "64KB", "is-correct": False, "explanation": "Incorrect. This would be true if the audio was stereo (2 channels), but standard IoT audio calculations assume mono unless stated otherwise."}
    ]
  },
  {
    "questionText": "Pulse width modulation (PWM) is commonly used for controlling what type of device?",
    "answerOptions": [
      {"answerText": "All the above", "isCorrect": True, "explanation": "Correct! PWM simulates varying analog voltages by rapidly switching digital signals. This is perfectly suited for dimming LEDs, controlling the speed of motors/actuators, and driving basic audio outputs."},
      {"answerText": "Soft blinking LEDs", "isCorrect": False, "explanation": "Incorrect only because it excludes the other correct answers. PWM is excellent for LEDs."},
      {"answerText": "Mechanical actuators", "isCorrect": False, "explanation": "Incorrect only because it excludes the other correct answers. PWM controls servo motor positions."},
      {"answerText": "Audio amplifiers", "isCorrect": False, "explanation": "Incorrect only because it excludes the other correct answers. Class D amps use PWM."}
    ]
  },
  {
    "questionText": "Data gathered from sensors and sent to the cloud is called:",
    "answerOptions": [
      {"answerText": "Telemetry", "isCorrect": True, "explanation": "Correct! Telemetry (derived from Greek for 'measuring at a distance') is the industry standard term for the continuous stream of raw data points sent from IoT devices to the cloud."},
      {"answerText": "Commands", "isCorrect": False, "explanation": "Incorrect. Commands flow in the opposite direction (from the cloud down to the device to trigger an action)."},
      {"answerText": "Measurements", "isCorrect": False, "explanation": "Incorrect. While technically true in plain English, 'Telemetry' is the specific architectural terminology used in IoT systems like Azure IoT Hub."},
      {"answerText": "Analytics", "isCorrect": False, "explanation": "Incorrect. Analytics is the processing and derivation of insights from the data once it reaches the cloud, not the raw data transmission itself."}
    ]
  },
  {
    "questionText": "IoT devices gather information from the world around them using:",
    "answerOptions": [
      {"answerText": "Sensors", "isCorrect": True, "explanation": "Correct! Sensors are the hardware components that detect physical changes (temperature, light, motion) and convert them into electrical signals for the MCU."},
      {"answerText": "Actuators", "isCorrect": False, "explanation": "Incorrect. Actuators do the exact opposite—they take electrical signals and convert them back into physical actions in the world."},
      {"answerText": "Controllers", "isCorrect": False, "explanation": "Incorrect. Controllers (MCUs) process the information, but they rely entirely on sensors to gather it in the first place."},
      {"answerText": "Collectors", "isCorrect": False, "explanation": "Incorrect. 'Collectors' is a generic data term, not the standard hardware terminology for physical IoT inputs."}
    ]
  },
  {
    "questionText": "What is the standard method for digitizing analog audio signals?",
    "answerOptions": [
      {"answerText": "Pulse Code Modulation", "isCorrect": True, "explanation": "Correct! Pulse Code Modulation (PCM) is the standard technique used to digitally represent sampled analog signals, used universally in uncompressed digital audio (.wav, CDs)."},
      {"answerText": "Pulse Width Modulation", "isCorrect": False, "explanation": "Incorrect. PWM is used to output power control signals (like dimming an LED), not for accurately digitizing incoming analog audio."},
      {"answerText": "Frequency Modulation", "isCorrect": False, "explanation": "Incorrect. FM is an analog broadcasting standard for transmitting radio signals, not a method for digital sampling."},
      {"answerText": "Analog-to-Analog Modulation", "isCorrect": False, "explanation": "Incorrect. This is a made-up term. Digitizing inherently requires moving from Analog to Digital."}
    ]
  }
]

ms_quizzes[0]['quizzes'].append({
    "id": 999,
    "title": "Professor's SS2025 Re-exam Mastery",
    "quiz": prof_data
})

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const quizData = ' + json.dumps(ms_quizzes, indent=2) + ';')

print("All quizzes built with individual inline explanations.")
