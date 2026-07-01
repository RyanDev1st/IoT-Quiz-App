import json

with open('data.js', 'r', encoding='utf-8') as f:
    d = json.loads(f.read()[17:-1])

prof_qs = [q['questionText'] for q in d[0]['quizzes'][-1]['quiz']]

mapping = {
    "Where is data processing typically done in Edge Computing?": "Lesson 9 - Migrate your application logic to the cloud: Pre-Lecture Quiz",
    "Which of the following is a key feature of IoT devices?": "Lesson 1 - Introduction to IoT: Pre-Lecture Quiz",
    "Digital sensors send data as:": "Lesson 3 - Interact with the physical world with sensors and actuators: Post-Lecture Quiz",
    "The execution of embedded software in an IoT device is handled by": "Lesson 2 - A deeper dive into IoT: Post-Lecture Quiz",
    "Where is the most AI model of IoT trained?": "Lesson 1 - Introduction to IoT: Post-Lecture Quiz",
    "What role does the broker play in Message Queuing Telemetry Transport (MQTT)?": "Lesson 4 - Connect your device to the Internet: Post-Lecture Quiz",
    "Containers are used in software deployment because they:": "Lesson 9 - Migrate your application logic to the cloud: Pre-Lecture Quiz",
    "Which of the following best describes the foundation of IoT systems?": "Lesson 1 - Introduction to IoT: Pre-Lecture Quiz",
    "In an IoT setup, actuators are responsible for:": "Lesson 3 - Interact with the physical world with sensors and actuators: Pre-Lecture Quiz",
    "Which mechanism allows an app to send a command and receive a response from an IoT device?": "Lesson 9 - Migrate your application logic to the cloud: Post-Lecture Quiz",
    "In the sentence 'set a 3 minute timer':": "Lesson 22 - Speech to text: Post-Lecture Quiz",
    "Language understanding involves:": "Lesson 23 - Language translation: Pre-Lecture Quiz",
    "The three parts of speech generation are:": "Lesson 24 - Text to speech: Pre-Lecture Quiz",
    "When deploying a Functions App to the cloud, you need to create and deploy:": "Lesson 9 - Migrate your application logic to the cloud: Pre-Lecture Quiz",
    "Which of the following statements best summarizes the differences between Single-Board Computers and microcontrollers?": "Lesson 2 - A deeper dive into IoT: Post-Lecture Quiz",
    "Points inside the geofence have a distance:": "Lesson 15 - Geofencing: Pre-Lecture Quiz",
    "IoT data is stored by IoT Hub?": "Lesson 12 - Store location data: Pre-Lecture Quiz",
    "The three components of architecting an IoT application are:": "Lesson 8 - Migrate your plant to the cloud: Pre-Lecture Quiz",
    "You can use Serverless code to respond to IoT events:": "Lesson 9 - Migrate your application logic to the cloud: Pre-Lecture Quiz",
    "When you send IoT events to IoT Hub:": "Lesson 8 - Migrate your plant to the cloud: Post-Lecture Quiz",
    "When reading events off IoT hub, you can only do so using code that runs in the cloud:": "Lesson 8 - Migrate your plant to the cloud: Post-Lecture Quiz",
    "Serverless code can be used to write IoT data to a database:": "Lesson 12 - Store location data: Post-Lecture Quiz",
    "The SPI (Serial Peripheral Interface) protocol supports:": "Lesson 4 - Connect your device to the Internet: Pre-Lecture Quiz",
    "Which levels of Quality of Service (QoS) that MQTT provides?": "Lesson 4 - Connect your device to the Internet: Post-Lecture Quiz",
    "Processing of data from analog sensors in IoT devices": "Lesson 3 - Interact with the physical world with sensors and actuators: Post-Lecture Quiz",
    "Symmetric key encryption compares to asymmetric key encryption in which ways:": "Lesson 10 - Keep your plant secure: Post-Lecture Quiz",
    "The technique uses to train a model with only a few images from a pretrained model is called:": "Lesson 20 - Object detection: Pre-Lecture Quiz",
    "Edge devices always need an Internet connection.": "Lesson 1 - Introduction to IoT: Post-Lecture Quiz",
    "AI models would convert 1234 into which spoken phrase:": "Lesson 24 - Text to speech: Pre-Lecture Quiz",
    "Can detected objects from an image overlap?": "Lesson 20 - Object detection: Post-Lecture Quiz",
    "Serverless code can only be written in JavaScript and COBOL:": "Lesson 9 - Migrate your application logic to the cloud: Pre-Lecture Quiz",
    "Edge computing can be more secure than cloud computing.": "Lesson 10 - Keep your plant secure: Pre-Lecture Quiz",
    "Running an ML model on an edge device is less accurate than running an ML model in the cloud.": "Lesson 1 - Introduction to IoT: Post-Lecture Quiz",
    "What is the full form of IIoT?": "Lesson 1 - Introduction to IoT: Pre-Lecture Quiz",
    "The I2C (Inter-Integrated Circuit) protocol supports:": "Lesson 4 - Connect your device to the Internet: Pre-Lecture Quiz",
    "How large is 1 second of 16-bit audio sampled at 16 KHz?": "Lesson 22 - Speech to text: Pre-Lecture Quiz",
    "Pulse width modulation (PWM) is commonly used for controlling what type of device?": "Lesson 3 - Interact with the physical world with sensors and actuators: Post-Lecture Quiz",
    "Data gathered from sensors and sent to the cloud is called:": "Lesson 8 - Migrate your plant to the cloud: Post-Lecture Quiz",
    "IoT devices gather information from the world around them using:": "Lesson 3 - Interact with the physical world with sensors and actuators: Pre-Lecture Quiz",
    "What is the standard method for digitizing analog audio signals?": "Lesson 22 - Speech to text: Pre-Lecture Quiz"
}

with open('theory.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Generate aliasing at the bottom of the object
insertion = ""
for q, lesson in mapping.items():
    if q not in ["Where is data processing typically done in Edge Computing?", "Which of the following is a key feature of IoT devices?", "Digital sensors send data as:"]:
        # Use a getter to alias to another key in the object
        # Since JSON doesn't support references, we will just duplicate the text in JS
        pass

# Wait, the easiest way is to append it to the JS file using a loop at the end of the file.
js_append = "\n\n// Aliases for Professor Questions\n"
for q, lesson in mapping.items():
    if q not in ["Where is data processing typically done in Edge Computing?", "Which of the following is a key feature of IoT devices?", "Digital sensors send data as:"]:
        js_append += f'theoryData["{q}"] = theoryData["{lesson}"];\n'

with open('theory.js', 'a', encoding='utf-8') as f:
    f.write(js_append)

print("Mapped all Professor questions to specific lesson theories.")
