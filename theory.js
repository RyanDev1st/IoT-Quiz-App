const theoryData = {
    "Lesson 1 - Introduction to IoT: Pre-Lecture Quiz": `
        <h3>Introduction to IoT</h3>
        <p>The "Internet of Things" (IoT) refers to the billions of physical devices worldwide that are now connected to the internet, all collecting and sharing data.</p>
        <ul>
            <li><strong>Scale:</strong> There were an estimated 30 billion IoT devices globally by 2020.</li>
            <li><strong>The "I":</strong> Stands for "Internet", which acts as the communication backbone.</li>
            <li><strong>Everyday Devices:</strong> Smartphones absolutely count as IoT devices because they possess sensors (GPS, accelerometers) and transmit data over the network.</li>
        </ul>
    `,
    "Lesson 1 - Introduction to IoT: Post-Lecture Quiz": `
        <h3>IoT Capabilities & Limitations</h3>
        <p>IoT devices are designed to operate under strict constraints, balancing power, cost, and functionality.</p>
        <ul>
            <li><strong>Connectivity:</strong> They do NOT need to be constantly connected. "Offline-first" or edge architectures allow devices to gather data and sync later.</li>
            <li><strong>Security:</strong> Because they are cheap and hard to update, IoT devices are notoriously insecure. They are a massive target for botnets.</li>
            <li><strong>Edge AI:</strong> Thanks to model optimization (TinyML), AI can indeed be run on highly constrained, low-powered IoT chips.</li>
        </ul>
    `,
    "Lesson 2 - A deeper dive into IoT: Pre-Lecture Quiz": `
        <h3>The Physical Components</h3>
        <p>To bridge the digital and physical world, IoT relies on specific hardware.</p>
        <ul>
            <li><strong>The "T":</strong> Stands for "Things"—the physical endpoints deployed in the real world.</li>
            <li><strong>Sensors:</strong> Hardware components used to gather data from the physical world (like temperature, light, motion).</li>
            <li><strong>Power Consumption:</strong> IoT devices are explicitly designed to draw very little power, often running for years on a single coin battery, unlike power-hungry laptops.</li>
        </ul>
    `,
    "Lesson 2 - A deeper dive into IoT: Post-Lecture Quiz": `
        <h3>Microcontrollers and Hardware</h3>
        <p>The brain of an IoT device is usually a highly constrained microcontroller.</p>
        <ul>
            <li><strong>CPU Cycle:</strong> The fundamental operation of any CPU is "Fetch, Decode, Execute". It fetches the instruction, figures out what it means, and runs it.</li>
            <li><strong>Single Board Computers:</strong> Devices like the Raspberry Pi are full computers that run operating systems, specifically Raspberry Pi OS (Debian Linux).</li>
            <li><strong>Constraints:</strong> IoT devices run significantly slower and have drastically less memory (kilobytes vs gigabytes) than a standard desktop computer to save costs and power.</li>
        </ul>
    `,
    "Lesson 3 - Interact with the physical world with sensors and actuators: Pre-Lecture Quiz": `
        <h3>Sensors vs Actuators</h3>
        <p>The entire IoT ecosystem is built around taking inputs from the world, and pushing outputs back into it.</p>
        <ul>
            <li><strong>Sensors:</strong> Devices that purely measure and gather data from the physical world (e.g. a thermometer).</li>
            <li><strong>Actuators:</strong> Devices that take a digital command and control the physical world (e.g. a motor, a valve, or an LED emitting light).</li>
            <li><strong>LEDs:</strong> An LED is an actuator, because it produces a physical output (light) rather than sensing data.</li>
        </ul>
    `,
    "Lesson 3 - Interact with the physical world with sensors and actuators: Post-Lecture Quiz": `
        <h3>Digital vs Analog Signals</h3>
        <p>Microcontrollers only understand 1s and 0s, but the real world is continuous.</p>
        <ul>
            <li><strong>Digital Sensors:</strong> Send data purely as high and low voltages (1s and 0s). A button press usually sends a '1' (HIGH).</li>
            <li><strong>Analog Sensors:</strong> Send data as a continuous voltage range. This requires an Analog-to-Digital Converter (ADC) to read.</li>
            <li><strong>PWM:</strong> Pulse-Width Modulation (PWM) is a technique used to control analog actuators from a digital device by rapidly pulsing a digital signal to simulate an average voltage.</li>
        </ul>
    `,
    "Lesson 4 - Connect your device to the Internet: Pre-Lecture Quiz": `
        <h3>Networking Constraints</h3>
        <p>IoT devices cannot rely on the same heavy networking protocols as normal computers.</p>
        <ul>
            <li><strong>Offline Capability:</strong> Devices do not strictly require internet. Edge processing allows them to operate autonomously.</li>
            <li><strong>Protocols:</strong> HTTP is often too heavy (due to headers and handshakes). IoT relies on lightweight protocols like MQTT or CoAP.</li>
            <li><strong>Cloud Dependency:</strong> Devices do not rely entirely on the cloud. Latency-sensitive tasks require local Edge decision making.</li>
        </ul>
    `,
    "Lesson 4 - Connect your device to the Internet: Post-Lecture Quiz": `
        <h3>Telemetry and Cloud Routing</h3>
        <p>Getting data securely from the device to the cloud requires specific patterns.</p>
        <ul>
            <li><strong>Telemetry:</strong> The industry term for the continuous stream of raw sensor readings sent to the cloud.</li>
            <li><strong>Commands:</strong> Messages sent from the cloud down to the device. If the device is offline, handling the command depends entirely on the specific application's requirements (e.g. queue it vs drop it).</li>
            <li><strong>MQTT:</strong> Message Queuing Telemetry Transport is the standard IoT protocol. Despite the name, modern MQTT is a pure pub/sub broker and does not use traditional message queues.</li>
        </ul>
    `,
    "Lesson 5 - Predict plant growth: Pre-Lecture Quiz": `
        <h3>IoT in Agriculture</h3>
        <p>Smart Agriculture (Precision Ag) is one of the most successful sectors for IoT.</p>
        <ul>
            <li><strong>Utility:</strong> IoT is heavily used in agriculture to monitor soil, automate irrigation, and track crop health.</li>
            <li><strong>Plant Needs:</strong> For optimal growth, plants require Carbon Dioxide, Water, Nutrients, Light, and Warmth.</li>
            <li><strong>Cost:</strong> Sensors are highly affordable, making them extremely profitable for farmers to deploy at scale.</li>
        </ul>
    `,
    "Lesson 5 - Predict plant growth: Post-Lecture Quiz": `
        <h3>Modeling Plant Growth</h3>
        <p>IoT data can be fed into mathematical models to predict agricultural yields.</p>
        <ul>
            <li><strong>Temperature Dependence:</strong> Plant metabolic rates are directly tied to temperature. Too cold or too hot stops growth.</li>
            <li><strong>Key Thresholds:</strong> Farmers track the Base (minimum needed to grow), Optimal (fastest growth), and Maximum (heat stress) temperatures.</li>
            <li><strong>Growing Degree Days (GDD):</strong> A heuristic tool to predict plant development. Formula: <code>((Day Max + Day Min) / 2) - Plant Base</code>. It calculates the accumulated heat units.</li>
        </ul>
    `
,
    "Lesson 6 - Detect soil moisture: Pre-Lecture Quiz": `
        <h3>Soil Moisture Sensors</h3>
        <p>Soil moisture sensors are used to determine how much water is present in the soil surrounding a plant's roots.</p>
        <ul>
            <li><strong>Resistive vs Capacitive:</strong> Resistive sensors measure the electrical resistance across the soil, but they corrode quickly. Capacitive sensors measure the dialectric permittivity and do not expose metal directly to the soil, making them last much longer.</li>
            <li><strong>Analog Output:</strong> Soil moisture is almost always read as an analog voltage that changes based on water content. An ADC converts this to a digital value for the microcontroller.</li>
        </ul>
    `,
    "Lesson 6 - Detect soil moisture: Post-Lecture Quiz": `
        <h3>Calibration and Edge Processing</h3>
        <p>Raw sensor readings are rarely useful on their own; they must be mapped to physical realities.</p>
        <ul>
            <li><strong>Calibration:</strong> Soil moisture sensors must be calibrated by taking a reading in completely dry air, and a reading completely submerged in water. This defines the minimum and maximum boundaries.</li>
            <li><strong>Mapping:</strong> Once calibrated, the raw ADC values (e.g. 0-1023) can be mathematically mapped to a human-readable percentage (0% to 100%).</li>
        </ul>
    `,
    "Lesson 7 - Automated plant watering: Pre-Lecture Quiz": `
        <h3>Actuating Relays and Pumps</h3>
        <p>Automated watering involves taking a physical action based on the soil moisture data.</p>
        <ul>
            <li><strong>Relays:</strong> A relay is an electrically operated switch. Because a microcontroller (3.3V) cannot directly power a water pump (12V or 5V high-current), a relay uses a tiny signal to safely switch a larger power source.</li>
            <li><strong>Hysteresis:</strong> When automating, you must use thresholds (e.g., turn on at 30%, turn off at 50%) rather than a single number, to prevent the pump from rapidly clicking on and off when the moisture hovers at exactly the threshold.</li>
        </ul>
    `,
    "Lesson 7 - Automated plant watering: Post-Lecture Quiz": `
        <h3>Control Loops</h3>
        <p>A control loop is a mechanism that adjusts a system to maintain a desired state.</p>
        <ul>
            <li><strong>Feedback Loop:</strong> The sensor checks the moisture, the logic decides if it's too low, the actuator pumps water, and the sensor checks again. This is a closed feedback loop.</li>
            <li><strong>Timing Delays:</strong> Water takes time to seep into the soil. A good control loop includes a delay after watering before measuring again, otherwise it will overwater the plant.</li>
        </ul>
    `,
    "Lesson 8 - Migrate your plant to the cloud: Pre-Lecture Quiz": `
        <h3>Cloud Telemetry Architecture</h3>
        <p>Moving a local IoT project to the cloud allows for remote monitoring and large-scale data aggregation.</p>
        <ul>
            <li><strong>Data Format:</strong> Telemetry is almost universally formatted as JSON (JavaScript Object Notation) before being sent to the cloud, because it is lightweight and easily parsed by backend services.</li>
            <li><strong>IoT Hub:</strong> The cloud gateway service (like Azure IoT Hub) acts as a highly secure, massively scalable ingest point for millions of devices simultaneously.</li>
        </ul>
    `,
    "Lesson 8 - Migrate your plant to the cloud: Post-Lecture Quiz": `
        <h3>Device Twins and Shadow State</h3>
        <p>The cloud needs a way to track the state of a device even when it is offline.</p>
        <ul>
            <li><strong>Device Twins (or Shadows):</strong> A JSON document stored in the cloud that mirrors the device's state. It stores "Desired" properties (what the cloud wants the device to do) and "Reported" properties (what the device says it is currently doing).</li>
            <li><strong>Offline Sync:</strong> When an offline device reconnects, it immediately checks its Twin for any missed configuration changes.</li>
        </ul>
    `,
    "Lesson 9 - Migrate your application logic to the cloud: Pre-Lecture Quiz": `
        <h3>Serverless Computing</h3>
        <p>Instead of running logic on the physical device, it can be executed in the cloud using serverless architectures.</p>
        <ul>
            <li><strong>Azure Functions / AWS Lambda:</strong> Serverless code that only runs when triggered by an event (like a new telemetry message arriving at the IoT Hub).</li>
            <li><strong>Why move logic to the cloud?:</strong> Moving logic to the cloud allows you to update the algorithm globally without flashing thousands of individual devices. It also gives the logic access to external databases and APIs.</li>
        </ul>
    `,
    "Lesson 9 - Migrate your application logic to the cloud: Post-Lecture Quiz": `
        <h3>Cloud to Device (C2D) Messaging</h3>
        <p>When cloud logic decides an action must be taken, it must send a command back down to the device.</p>
        <ul>
            <li><strong>Direct Methods:</strong> A cloud-to-device interaction where the cloud expects an immediate response (success or failure) from the device. Used for immediate actions like turning on a pump.</li>
            <li><strong>Message Queuing:</strong> If the device is offline, standard C2D messages are queued in the cloud until the device reconnects and pulls them down.</li>
        </ul>
    `,
    "Lesson 10 - Keep your plant secure: Pre-Lecture Quiz": `
        <h3>IoT Security Threats</h3>
        <p>IoT devices are historically the weakest link in network security.</p>
        <ul>
            <li><strong>Physical Tampering:</strong> Devices are often left in public or unsupervised areas, allowing attackers to physically plug into their debug ports (UART/JTAG) or steal their hardcoded credentials.</li>
            <li><strong>Botnets:</strong> Attackers infect thousands of weak IoT devices with malware (like Mirai) and force them to simultaneously ping a target, executing a massive Distributed Denial of Service (DDoS) attack.</li>
        </ul>
    `,
    "Lesson 10 - Keep your plant secure: Post-Lecture Quiz": `
        <h3>Securing the IoT Architecture</h3>
        <p>Security must be implemented at every layer: device, network, and cloud.</p>
        <ul>
            <li><strong>Authentication:</strong> Devices must never share a single global password. They should use X.509 Certificates or unique SAS tokens to securely prove their identity to the IoT Hub.</li>
            <li><strong>Encryption:</strong> All communication must be encrypted in transit using TLS (Transport Layer Security) so attackers cannot intercept sensor data or inject fake commands.</li>
            <li><strong>Over The Air (OTA) Updates:</strong> A secure IoT device must have a robust mechanism to receive firmware updates remotely to patch newly discovered vulnerabilities.</li>
        </ul>
    `
,
    "Lesson 11 - Location tracking: Pre-Lecture Quiz": `
        <h3>Global Positioning System (GPS)</h3>
        <p>Location tracking is a foundational IoT feature, especially in logistics and vehicle telemetry.</p>
        <ul>
            <li><strong>How it works:</strong> GPS relies on a constellation of satellites broadcasting highly precise time signals. Your device needs to receive signals from at least 4 satellites to accurately calculate its 3D position (Trilateration).</li>
            <li><strong>Coordinates:</strong> Earth locations are mapped using Latitude (North/South equator) and Longitude (East/West prime meridian).</li>
        </ul>
    `,
    "Lesson 11 - Location tracking: Post-Lecture Quiz": `
        <h3>NMEA Sentences and Data Formatting</h3>
        <p>GPS modules don't just output simple X/Y numbers; they output standardized strings of data.</p>
        <ul>
            <li><strong>NMEA Standard:</strong> The National Marine Electronics Association created a universal text-based format for GPS receivers. A single NMEA sentence contains latitude, longitude, altitude, speed, and time.</li>
            <li><strong>Parsing:</strong> A microcontroller must read this long string over a Serial connection and parse (extract) the specific lat/long values needed for the cloud.</li>
        </ul>
    `,
    "Lesson 12 - Store location data: Pre-Lecture Quiz": `
        <h3>Storage Solutions for IoT</h3>
        <p>Because IoT devices generate massive amounts of continuous telemetry, traditional relational databases can become a bottleneck.</p>
        <ul>
            <li><strong>Blob Storage:</strong> Binary Large Object storage (like Azure Blob or AWS S3) is ideal for storing unstructured data, images, or massive raw text dumps (like raw NMEA logs) infinitely and cheaply.</li>
            <li><strong>Databases (SQL/NoSQL):</strong> Better for structured telemetry that needs to be rapidly queried, sorted, or filtered by time and device ID.</li>
        </ul>
    `,
    "Lesson 12 - Store location data: Post-Lecture Quiz": `
        <h3>Serverless Data Routing</h3>
        <p>How does the data get from the IoT Hub into the Database?</p>
        <ul>
            <li><strong>Event Triggers:</strong> You can set up an Azure Function to automatically execute the moment a new message arrives at the IoT Hub.</li>
            <li><strong>Extraction & Insertion:</strong> The serverless function extracts the GPS coordinates from the JSON payload and securely inserts it into a backend database or Azure Maps data store.</li>
        </ul>
    `,
    "Lesson 13 - Visualize location data: Pre-Lecture Quiz": `
        <h3>Mapping Technologies</h3>
        <p>Raw coordinates are useless to a human operator; they must be plotted visually.</p>
        <ul>
            <li><strong>GeoJSON:</strong> An open standard format specifically designed for representing simple geographical features, along with their non-spatial attributes. It's the standard for passing data to web maps.</li>
            <li><strong>Mapping APIs:</strong> Services like Azure Maps or Mapbox take GeoJSON data and render it dynamically on top of satellite or street tiles in a web browser.</li>
        </ul>
    `,
    "Lesson 13 - Visualize location data: Post-Lecture Quiz": `
        <h3>Rendering GPS on the Web</h3>
        <p>Building the actual frontend dashboard.</p>
        <ul>
            <li><strong>HTML/JS Maps:</strong> Maps are rendered using a combination of a map SDK (JavaScript library) and HTML canvas/divs.</li>
            <li><strong>Real-time Updates:</strong> Instead of refreshing the page, modern dashboards use WebSockets or Polling to fetch the latest GeoJSON coordinates from the database and move the marker dynamically.</li>
        </ul>
    `,
    "Lesson 14 - Geofences: Pre-Lecture Quiz": `
        <h3>Geofencing Theory</h3>
        <p>A geofence is a virtual perimeter for a real-world geographic area.</p>
        <ul>
            <li><strong>Polygons:</strong> Geofences are defined mathematically as a series of connected points (a polygon).</li>
            <li><strong>Events:</strong> The primary purpose of a geofence is to trigger a programmatic event when an IoT device (like a delivery truck) ENTERS or EXITS the defined area.</li>
        </ul>
    `,
    "Lesson 14 - Geofences: Post-Lecture Quiz": `
        <h3>Geofence Mathematics</h3>
        <p>How does the cloud know if a truck is inside a geofence?</p>
        <ul>
            <li><strong>Distance Calculation:</strong> The system continuously calculates the distance from the GPS coordinate to the geofence border.</li>
            <li><strong>Signage (+/-):</strong> In systems like Azure Maps, a negative distance means the device is inside the geofence, and a positive distance means it is outside. This mathematical crossover (from positive to negative) triggers the "Entered" alert.</li>
        </ul>
    `,
    "Lesson 15 - Train a fruit quality detector: Pre-Lecture Quiz": `
        <h3>AI and Image Classification</h3>
        <p>Moving from basic sensors to computer vision.</p>
        <ul>
            <li><strong>Classification vs Detection:</strong> Classification simply categorizes the entire image (e.g., "This is a ripe banana"). Object Detection finds where the banana is.</li>
            <li><strong>Neural Networks:</strong> AI uses Deep Learning models to extract features (shapes, colors, textures) from images to make these classifications.</li>
        </ul>
    `,
    "Lesson 15 - Train a fruit quality detector: Post-Lecture Quiz": `
        <h3>Transfer Learning and Hardware</h3>
        <p>Training an AI from scratch takes massive resources.</p>
        <ul>
            <li><strong>Transfer Learning:</strong> Instead of starting from scratch, developers take an existing, highly trained model (like ResNet) and just retrain the final layer to recognize specific custom classes (like "good fruit" vs "bad fruit"). This requires vastly less data and time.</li>
            <li><strong>GPUs:</strong> Training vision models relies heavily on Graphical Processing Units (GPUs) because their parallel architecture is perfect for the massive matrix multiplication required by Neural Networks.</li>
        </ul>
    `
,
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
,
    "Professor's SS2025 Re-exam Mastery": `
        <h3>SS2025 Comprehensive Review</h3>
        <p>This final section tests the culmination of the entire semester's curriculum.</p>
        <ul>
            <li><strong>Hardware vs Software:</strong> Be prepared to distinguish between physical constraints (power, RAM, sensors) and architectural decisions (Cloud routing, Serverless computing, Edge AI).</li>
            <li><strong>Security Focus:</strong> Remember that IoT security is multi-layered. Expect questions tricking you into relying solely on physical security, whereas true IoT security demands encryption, authentication (X.509), and OTA patching.</li>
            <li><strong>Data Flow:</strong> The most crucial concept to master is the flow of data: Sensor &rarr; Edge Gateway &rarr; IoT Hub (JSON) &rarr; Serverless Function &rarr; Storage/Database &rarr; Visualization/Dashboard.</li>
        </ul>
    `,
    "Where is data processing typically done in Edge Computing?": `
        <h3>Edge Computing Architecture</h3>
        <p>In traditional cloud computing, all raw data is sent to a central server. In <strong>Edge Computing</strong>, the processing power is pushed out to the "edge" of the network, right where the data is being generated.</p>
        <ul>
            <li><strong>Local Networks:</strong> An edge gateway sits on the same local network as the sensors, filtering and processing data before it ever hits the public internet.</li>
            <li><strong>Latency:</strong> Processing locally means zero round-trip latency to the cloud, allowing for real-time robotic or industrial control.</li>
            <li><strong>Bandwidth:</strong> It prevents flooding the internet connection with thousands of raw temperature pings per second.</li>
        </ul>
    `,
    "Which of the following is a key feature of IoT devices?": `
        <h3>Core Features of IoT</h3>
        <p>IoT devices are defined by their ability to bridge the physical and digital divide.</p>
        <ul>
            <li><strong>Internet Connectivity:</strong> While they can operate offline via edge computing, their defining characteristic is the ability to eventually connect to the internet (or an intranet) to share their telemetry.</li>
            <li><strong>Interoperability:</strong> They are designed to communicate with cloud brokers, databases, and logic apps without direct human intervention.</li>
        </ul>
    `,
    "Digital sensors send data as:": `
        <h3>Digital vs Analog</h3>
        <p>Sensors communicate with microcontrollers in fundamentally different ways depending on their type.</p>
        <ul>
            <li><strong>Digital Sensors:</strong> They send data purely as discrete states: 1s and 0s (High voltage vs Low voltage). A simple button is a digital sensor.</li>
            <li><strong>Analog Sensors:</strong> They send a continuous wave of voltage (like a smooth curve from 0V to 3.3V). The microcontroller uses an ADC (Analog-to-Digital Converter) to translate that curve into a number (like 0-1023).</li>
        </ul>
    `,
    "The execution of embedded software in an IoT device is handled by": `
        <h3>Embedded Execution</h3>
        <p>IoT devices are controlled by embedded software, which must run on highly constrained hardware.</p>
        <ul>
            <li><strong>Microcontrollers (MCUs):</strong> The heart of most embedded IoT devices is the microcontroller. It handles fetching instructions, decoding them, and executing them.</li>
            <li><strong>Constraints:</strong> Unlike standard CPUs, MCUs lack advanced operating systems. They usually run an RTOS (Real-Time Operating System) or bare-metal code designed specifically to juggle sensor reads and actuator writes simultaneously.</li>
        </ul>
    `,
    "Where is the most AI model of IoT trained?": `
        <h3>AI Training vs Inference</h3>
        <p>Running AI on the edge involves two entirely separate phases: Training and Inference.</p>
        <ul>
            <li><strong>Training in the Cloud:</strong> Training a model requires massive computational power (GPUs) and huge datasets. This is virtually always done in centralized Cloud data centers or powerful local development machines.</li>
            <li><strong>Inference on the Edge:</strong> Once the model is fully trained, it is compressed (TinyML) and pushed down to the IoT device. The device only performs "inference" (making predictions based on the already-trained model).</li>
        </ul>
    `,
    "What role does the broker play in Message Queuing Telemetry Transport (MQTT)?": `
        <h3>The MQTT Broker</h3>
        <p>MQTT is the industry-standard messaging protocol for IoT. It uses a Publish/Subscribe model instead of traditional client-server HTTP requests.</p>
        <ul>
            <li><strong>The Middleman:</strong> Devices never talk directly to each other. Instead, they all connect to a central server known as the Broker.</li>
            <li><strong>Routing:</strong> When a device "publishes" a message to a specific topic (e.g., <code>sensor/temp</code>), the Broker receives it and instantly forwards it to every other device that has "subscribed" to that topic.</li>
        </ul>
    `,
    "Containers are used in software deployment because they:": `
        <h3>Containerization in IoT</h3>
        <p>Containers (like Docker) are heavily used when deploying logic to Edge Gateways.</p>
        <ul>
            <li><strong>Isolation & Consistency:</strong> Containers package the application code alongside all its necessary libraries and dependencies. This guarantees that the software will run exactly the same way on the IoT edge device as it did on the developer's laptop.</li>
            <li><strong>Modularity:</strong> Instead of installing 10 different raw applications on an edge gateway, you deploy 10 isolated containers, preventing dependency conflicts.</li>
        </ul>
    `,
    "Which of the following best describes the foundation of IoT systems?": `
        <h3>The Foundation of IoT</h3>
        <p>The "Internet of Things" is built on the interaction between the physical world and digital networks.</p>
        <ul>
            <li><strong>Physical-Digital Bridge:</strong> The core foundation of IoT is using physical hardware (sensors) to gather real-world analog data, digitizing it, and pushing it to a network for analysis.</li>
            <li><strong>Communication:</strong> Without the network (the Internet or Intranet), an embedded device is just an isolated robot. The network allows distributed intelligence.</li>
        </ul>
    `,
    "In an IoT setup, actuators are responsible for:": `
        <h3>The Role of Actuators</h3>
        <p>If sensors are the "eyes and ears" of an IoT system, actuators are the "hands".</p>
        <ul>
            <li><strong>Physical Output:</strong> An actuator is a hardware component that takes an electrical digital command and turns it into a physical action in the real world.</li>
            <li><strong>Examples:</strong> Spinning a motor, turning on a water pump, opening a smart lock, or even lighting up an LED. All of these convert a digital signal into a physical change.</li>
        </ul>
    `,
    "Which mechanism allows an app to send a command and receive a response from an IoT device?": `
        <h3>Cloud-to-Device (C2D) Commands</h3>
        <p>When the cloud needs to force an IoT device to take an action, it sends a command down to the edge.</p>
        <ul>
            <li><strong>Direct Methods:</strong> A "Direct Method" is a synchronous command. The cloud sends the command and keeps the connection open waiting for the device to reply "Success" or "Failure".</li>
            <li><strong>Usage:</strong> This is used when the cloud needs absolute confirmation that an action happened immediately (e.g., "Unlock the door right now").</li>
        </ul>
    `,
    "In the sentence 'set a 3 minute timer':": `
        <h3>Intent Recognition</h3>
        <p>Natural Language Understanding (NLU) systems must break down user sentences to understand what the user wants to do.</p>
        <ul>
            <li><strong>Intent:</strong> This is the core action the user wants to perform. In this case, the intent is "SetTimer".</li>
            <li><strong>Entities:</strong> These are the specific variables modifying the intent. In this case, "3" and "minute" are the entities determining the length of the timer.</li>
        </ul>
    `,
    "Language understanding involves:": `
        <h3>Language Understanding (NLU)</h3>
        <p>Language Understanding is how an AI converts raw text into actionable computer commands.</p>
        <ul>
            <li><strong>Meaning Extraction:</strong> It is not about turning speech into text. That is Speech-to-Text. Language Understanding takes the resulting text and determines the semantic meaning (Intent) and variables (Entities) to trigger a software function.</li>
        </ul>
    `,
    "The three parts of speech generation are:": `
        <h3>Text-to-Speech (TTS) Architecture</h3>
        <p>Converting digital text into natural-sounding human audio happens in three distinct phases.</p>
        <ul>
            <li><strong>Text Analysis:</strong> The AI breaks down the sentence, handling abbreviations (reading "Dr." as "Doctor") and identifying punctuation to determine pauses.</li>
            <li><strong>Acoustic Modeling:</strong> The AI decides the tone, pitch, and phonemes needed to pronounce the words correctly.</li>
            <li><strong>Vocoder:</strong> The final stage where the acoustic data is physically synthesized into an audio waveform that a speaker can play.</li>
        </ul>
    `,
    "When deploying a Functions App to the cloud, you need to create and deploy:": `
        <h3>Deploying Serverless Functions</h3>
        <p>Serverless logic (like Azure Functions) requires specific infrastructure to run in the cloud.</p>
        <ul>
            <li><strong>The Code:</strong> The actual application logic (written in Python, Node.js, etc.) that processes the IoT telemetry.</li>
            <li><strong>The Infrastructure:</strong> You must deploy the Function App resource itself, along with a storage account to hold the code, and defined triggers (like an IoT Hub connection) that tell the function when to run.</li>
        </ul>
    `,
    "Which of the following statements best summarizes the differences between Single-Board Computers and microcontrollers?": `
        <h3>SBCs vs Microcontrollers</h3>
        <p>There are two entirely different classes of compute used at the IoT Edge.</p>
        <ul>
            <li><strong>Microcontrollers (MCUs):</strong> Tiny, cheap, extremely low-power chips designed to run a single program loop without a standard OS (e.g., Arduino). Great for basic sensor reading.</li>
            <li><strong>Single-Board Computers (SBCs):</strong> Fully fledged computers (like a Raspberry Pi) with gigabytes of RAM. They run complex operating systems like Linux, allowing them to act as Edge Gateways or run heavy AI models.</li>
        </ul>
    `,
    "Points inside the geofence have a distance:": `
        <h3>Geofencing Mathematics</h3>
        <p>A geofence is an invisible boundary (like a circle) drawn around a GPS coordinate.</p>
        <ul>
            <li><strong>Distance Calculation:</strong> To check if a device is inside the geofence, the system calculates the distance from the center point to the device's current location using the Haversine formula.</li>
            <li><strong>Inside vs Outside:</strong> If the calculated distance is less than or equal to the radius of the geofence, the point is inside. If it is greater, the point is outside.</li>
        </ul>
    `,
    "IoT data is stored by IoT Hub?": `
        <h3>IoT Hub Data Storage</h3>
        <p>The IoT Hub is essentially a massive traffic cop, not a database.</p>
        <ul>
            <li><strong>Retention:</strong> IoT Hub natively only stores messages for a very short period (usually 1 to 7 days) solely to ensure they are delivered to the backend.</li>
            <li><strong>Long-Term Storage:</strong> It is fundamentally NOT designed for long-term data storage. You must route the data out of the Hub into Blob Storage, CosmosDB, or SQL for permanent storage.</li>
        </ul>
    `,
    "The three components of architecting an IoT application are:": `
        <h3>IoT Architecture Components</h3>
        <p>An end-to-end IoT solution is always architected around three core pillars.</p>
        <ul>
            <li><strong>Things:</strong> The physical devices, sensors, and edge gateways deployed in the field.</li>
            <li><strong>Insights:</strong> The cloud infrastructure (IoT Hub, Serverless logic, AI models) that ingests the telemetry and extracts meaning from it.</li>
            <li><strong>Actions:</strong> The physical or digital response to the insight (e.g., sending a command to shut off a valve, or displaying an alert on a dashboard).</li>
        </ul>
    `,
    "You can use Serverless code to respond to IoT events:": `
        <h3>Event-Driven Serverless Code</h3>
        <p>Serverless architecture is entirely event-driven.</p>
        <ul>
            <li><strong>Triggers:</strong> Serverless code (like Azure Functions) runs in direct response to triggers. When a new telemetry message hits the IoT Hub, it triggers the function to run.</li>
            <li><strong>Processing:</strong> This allows you to instantly process, route, or filter data the exact millisecond it arrives from the physical device, without keeping a server permanently running.</li>
        </ul>
    `,
    "When you send IoT events to IoT Hub:": `
        <h3>Telemetry Ingestion</h3>
        <p>When devices push their data to the cloud, there is a specific workflow.</p>
        <ul>
            <li><strong>Formatting:</strong> Data is packaged on the device (almost always as a JSON payload) and encrypted over a protocol like MQTT.</li>
            <li><strong>The Hub:</strong> The IoT Hub securely authenticates the device, receives the message, and makes it instantly available for backend services (like serverless functions) to consume.</li>
        </ul>
    `,
    "When reading events off IoT hub, you can only do so using code that runs in the cloud:": `
        <h3>Reading from IoT Hub</h3>
        <p>While IoT Hub lives in the cloud, you are not strictly forced to use cloud code to read from it.</p>
        <ul>
            <li><strong>Flexibility:</strong> You can write code that runs on your local desktop, an on-premise server in your office, or a completely different cloud provider to read the events off the IoT Hub using its connection string.</li>
            <li><strong>Best Practice:</strong> However, using tightly integrated cloud serverless code is by far the most efficient and scalable way to process it.</li>
        </ul>
    `,
    "Serverless code can be used to write IoT data to a database:": `
        <h3>Serverless Data Routing</h3>
        <p>Because IoT Hub is not a permanent database, Serverless code is the bridge.</p>
        <ul>
            <li><strong>Bindings:</strong> Serverless code uses "Bindings" to easily grab data from the IoT Hub and push it to an Output Binding (like CosmosDB, SQL, or Blob Storage).</li>
            <li><strong>ETL:</strong> The serverless function can Extract the data from the Hub, Transform it (clean it up), and Load it into the database permanently.</li>
        </ul>
    `,
    "The SPI (Serial Peripheral Interface) protocol supports:": `
        <h3>SPI Protocol</h3>
        <p>SPI is a synchronous serial communication protocol used heavily by microcontrollers.</p>
        <ul>
            <li><strong>Speed:</strong> It is designed for short-distance, extremely high-speed communication between the microcontroller and a peripheral (like an SD card or high-res display).</li>
            <li><strong>Full-Duplex:</strong> Unlike I2C, SPI supports full-duplex communication, meaning it can send and receive data at the exact same time over dedicated MOSI and MISO wires.</li>
        </ul>
    `,
    "Which levels of Quality of Service (QoS) that MQTT provides?": `
        <h3>MQTT Quality of Service (QoS)</h3>
        <p>MQTT guarantees message delivery using three distinct QoS levels.</p>
        <ul>
            <li><strong>QoS 0 (At most once):</strong> Fire and forget. The message is sent, but no confirmation is requested. (Fastest, least reliable).</li>
            <li><strong>QoS 1 (At least once):</strong> The broker guarantees delivery, but due to retries, it might accidentally deliver the message multiple times.</li>
            <li><strong>QoS 2 (Exactly once):</strong> A complex 4-step handshake guarantees the message arrives exactly one time. (Slowest, most reliable).</li>
        </ul>
    `,
    "Processing of data from analog sensors in IoT devices": `
        <h3>Analog Data Processing</h3>
        <p>Because microcontrollers are purely digital, analog data requires translation.</p>
        <ul>
            <li><strong>ADC:</strong> The Analog-to-Digital Converter measures the continuous voltage coming from the sensor (e.g., 0V to 3.3V) and chops it into a digital number based on its resolution (e.g., 0 to 1023 for a 10-bit ADC).</li>
            <li><strong>Calibration:</strong> The raw digital number must then be processed mathematically in code to map it to a human-readable metric, like degrees Celsius or a percentage of moisture.</li>
        </ul>
    `,
    "Symmetric key encryption compares to asymmetric key encryption in which ways:": `
        <h3>Symmetric vs Asymmetric Encryption</h3>
        <p>Encryption relies on complex mathematical keys to lock and unlock data.</p>
        <ul>
            <li><strong>Symmetric:</strong> Uses the exact same secret key to encrypt and decrypt the data. It is extremely fast and computationally cheap, making it perfect for low-power IoT devices.</li>
            <li><strong>Asymmetric:</strong> Uses two different keys (a Public key to encrypt, and a Private key to decrypt). It is much slower and requires heavier math, but it solves the problem of how to securely share keys over the internet (e.g., X.509 Certificates).</li>
        </ul>
    `,
    "The technique uses to train a model with only a few images from a pretrained model is called:": `
        <h3>Transfer Learning</h3>
        <p>Training an image recognition AI from scratch requires millions of images.</p>
        <ul>
            <li><strong>The Problem:</strong> When building an IoT camera to detect a specific rare bird, you don't have millions of pictures of that bird.</li>
            <li><strong>Transfer Learning:</strong> You take an existing model (already trained on millions of generic photos) and essentially "freeze" its foundational knowledge of shapes and textures. You then only retrain the final layer with your small handful of bird pictures. It learns incredibly fast and highly accurately.</li>
        </ul>
    `,
    "Edge devices always need an Internet connection.": `
        <h3>Offline-First Edge Capabilities</h3>
        <p>A massive misconception is that IoT devices turn into useless bricks without the internet.</p>
        <ul>
            <li><strong>Autonomy:</strong> Well-designed edge devices can gather data, run AI inference, and control local actuators completely offline.</li>
            <li><strong>Syncing:</strong> When the internet connection returns, they can sync their buffered data and update their Device Twin state with the Cloud.</li>
        </ul>
    `,
    "AI models would convert 1234 into which spoken phrase:": `
        <h3>Text Normalization in TTS</h3>
        <p>Text-to-Speech engines don't just blindly read characters; they normalize text first.</p>
        <ul>
            <li><strong>Context Matters:</strong> The AI decides how to read numbers based on context. "1234" standing alone might be "One thousand, two hundred and thirty-four." But if it's a phone number or address, it might be "One two three four."</li>
            <li><strong>Abbreviations:</strong> It also expands things like "St." into "Street" or "Saint" depending entirely on the surrounding words.</li>
        </ul>
    `,
    "Can detected objects from an image overlap?": `
        <h3>Object Detection Overlap</h3>
        <p>Object detection models draw bounding boxes around items they recognize.</p>
        <ul>
            <li><strong>Overlapping Boxes:</strong> Yes, bounding boxes can and often do overlap. If a person is holding a dog, the box for "Person" and the box for "Dog" will intersect.</li>
            <li><strong>NMS (Non-Maximum Suppression):</strong> The algorithm cleans up messy overlapping boxes predicting the *same* object by keeping only the box with the highest confidence score.</li>
        </ul>
    `,
    "Serverless code can only be written in JavaScript and COBOL:": `
        <h3>Serverless Supported Languages</h3>
        <p>Cloud serverless providers are highly flexible.</p>
        <ul>
            <li><strong>Standard Languages:</strong> Azure Functions and AWS Lambda support C#, Java, JavaScript/TypeScript, Python, and PowerShell natively.</li>
            <li><strong>Custom Handlers:</strong> Even if a language isn't natively supported (like Rust or Go), you can run it via a custom handler. (But nobody is writing new IoT serverless backends in COBOL!)</li>
        </ul>
    `,
    "Edge computing can be more secure than cloud computing.": `
        <h3>Security Benefits of the Edge</h3>
        <p>Keeping data local reduces the attack surface.</p>
        <ul>
            <li><strong>Privacy:</strong> If an edge camera analyzes a video frame to check for a defect and instantly deletes the frame without uploading it, user privacy is guaranteed.</li>
            <li><strong>Air-Gapping:</strong> Highly sensitive industrial systems can be entirely air-gapped from the public internet, making remote hacking virtually impossible.</li>
        </ul>
    `,
    "Running an ML model on an edge device is less accurate than running an ML model in the cloud.": `
        <h3>Edge AI Accuracy vs Cloud AI</h3>
        <p>There is a trade-off when moving AI to the edge.</p>
        <ul>
            <li><strong>Quantization:</strong> To fit a massive neural network onto a 2MB microcontroller, it must be compressed (quantized). This strips away some precision (e.g. converting 32-bit floats to 8-bit integers).</li>
            <li><strong>The Result:</strong> The resulting edge model is exponentially faster and uses tiny amounts of power, but it will suffer a slight drop in absolute accuracy compared to its uncompressed cloud counterpart.</li>
        </ul>
    `,
    "What is the full form of IIoT?": `
        <h3>Industrial Internet of Things (IIoT)</h3>
        <p>IIoT is the industrial subset of IoT, focusing on manufacturing, energy, and logistics.</p>
        <ul>
            <li><strong>Mission Critical:</strong> While consumer IoT might be a smart toaster, IIoT involves robotic assembly lines or nuclear plant sensors, where a failure or latency delay could be catastrophic.</li>
            <li><strong>Protocols:</strong> IIoT heavily relies on older, robust protocols (like Modbus or OPC UA) integrated with modern cloud telemetry.</li>
        </ul>
    `,
    "The I2C (Inter-Integrated Circuit) protocol supports:": `
        <h3>I2C Protocol</h3>
        <p>I2C is an extremely popular synchronous serial protocol for attaching sensors to a microcontroller.</p>
        <ul>
            <li><strong>Two Wires:</strong> It uses only two wires: SDA (Data) and SCL (Clock).</li>
            <li><strong>Multiple Devices:</strong> Its biggest advantage is that you can connect over 100 sensors to those exact same two wires, because every sensor has a unique hexadecimal hardware address (e.g., <code>0x44</code>).</li>
            <li><strong>Half-Duplex:</strong> Because it only has one data wire, it is half-duplex (it can't send and receive at the exact same time).</li>
        </ul>
    `,
    "How large is 1 second of 16-bit audio sampled at 16 KHz?": `
        <h3>Audio Data Math</h3>
        <p>Digitizing audio creates heavy data payloads compared to simple temperature telemetry.</p>
        <ul>
            <li><strong>The Math:</strong> 16 KHz means 16,000 samples per second. If each sample is 16 bits (2 bytes), then 16,000 * 2 = 32,000 bytes.</li>
            <li><strong>Result:</strong> 1 second of audio is exactly 32 KB. This means transmitting live audio over a constrained IoT protocol like MQTT is highly inefficient.</li>
        </ul>
    `,
    "Pulse width modulation (PWM) is commonly used for controlling what type of device?": `
        <h3>Pulse Width Modulation (PWM)</h3>
        <p>PWM allows digital devices to fake an analog output.</p>
        <ul>
            <li><strong>How it works:</strong> A microcontroller can only output exactly 3.3V or exactly 0V. But if it flickers between 3.3V and 0V extremely fast (thousands of times a second), the connected device averages out the power.</li>
            <li><strong>Usage:</strong> It is universally used to dim LEDs smoothly or control the speed of a DC motor.</li>
        </ul>
    `,
    "Data gathered from sensors and sent to the cloud is called:": `
        <h3>Telemetry Terminology</h3>
        <p>In IoT, specific terms are used for specific directions of data.</p>
        <ul>
            <li><strong>Telemetry:</strong> Data flowing UP from the device to the cloud. It is typically a continuous, high-volume stream of raw sensor readings.</li>
            <li><strong>Commands:</strong> Data flowing DOWN from the cloud to the device.</li>
            <li><strong>Twins:</strong> Data synchronizing the configuration STATE between the device and cloud.</li>
        </ul>
    `,
    "IoT devices gather information from the world around them using:": `
        <h3>Sensors: The IoT Eyes and Ears</h3>
        <p>Sensors are the fundamental hardware interface of IoT.</p>
        <ul>
            <li><strong>Gathering Data:</strong> Thermistors (temperature), photoresistors (light), accelerometers (motion), and microphones (sound) all convert physical world properties into electrical signals.</li>
            <li><strong>Microcontrollers:</strong> The MCU reads those electrical signals, packages them, and pushes them out via the network.</li>
        </ul>
    `,
    "What is the standard method for digitizing analog audio signals?": `
        <h3>Digitizing Audio (PCM)</h3>
        <p>Audio hits a microphone as a continuous physical pressure wave.</p>
        <ul>
            <li><strong>Sampling:</strong> To digitize it, an ADC measures the height (voltage) of that wave thousands of times a second.</li>
            <li><strong>PCM:</strong> Pulse Code Modulation (PCM) is the raw, uncompressed digital representation of these sequential height measurements. This raw PCM data is what gets sent to a Speech-to-Text engine.</li>
        </ul>
    `
};


