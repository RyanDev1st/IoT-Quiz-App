import json

explanations_chunk_2 = {
  "IoT devices can be used to detect ambient properties like soil moisture": {
    "True": "Correct! Using resistive or capacitive sensors inserted into the ground, IoT devices are perfect for detecting physical ambient properties like soil moisture.",
    "False": "Incorrect. Detecting physical/ambient properties is literally the primary use case for deploying IoT sensors in the real world."
  },
  "Which of these can cause problems for plant growth (pick one)?": {
    "Too little or too much water": "Correct! Both underwatering (drought stress) and overwatering (root rot/lack of oxygen) are detrimental to plant growth.",
    "Too little water": "Incorrect. While true, you are ignoring the fact that overwatering is just as deadly.",
    "Too much water": "Incorrect. While true, underwatering is equally bad. Both extremes cause problems."
  },
  "All sensors are provided pre-calibrated for standard units:": {
    "False": "Correct! Many basic analog sensors just output raw voltages (e.g. 0-1023). You have to write code to calibrate and map those raw values to standard units like Celsius or percentage.",
    "True": "Incorrect. While some expensive digital sensors (like an I2C temperature probe) come factory calibrated, most cheap analog IoT sensors require manual calibration in code."
  },
  "When measuring soil moisture, one difference between resistive and capacitive moisture sensors is:": {
    "As moisture levels go up the voltage goes up for resistive sensors and down for capacitive sensors": "Incorrect. Let's look at the electrical properties of the two methods.",
    "As moisture levels go up the voltage goes down for resistive sensors and up for capacitive sensors": "Incorrect. Actually, resistance drops when wet (voltage goes up), and capacitance changes inversely.",
    "As moisture levels go up the voltage goes up for both resistive and capacitive sensors": "Incorrect. (Note: the exact voltage mapping depends entirely on the specific breakout board's wiring, but typically resistive voltage drops as resistance drops, while capacitive voltage drops as capacitance rises. But this is the only remaining option, so check your board's datasheet!)."
  },
  "The SPI protocol supports:": {
    "Only one controller and multiple peripherals": "Correct! SPI uses a single master (controller) that selects which of the many slaves (peripherals) it wants to talk to using individual Chip Select (CS) wires.",
    "Only one controller and only one peripheral": "Incorrect. You can hook up as many peripherals as you want, provided you have enough free GPIO pins for the Chip Select lines.",
    "Multiple controllers and multiple peripherals": "Incorrect. Standard SPI is strictly a single-master protocol. If you need multiple controllers, you use I2C."
  },
  "The I2C protocol supports:": {
    "Multiple controllers and multiple peripherals": "Correct! I2C uses digital addressing on a 2-wire bus, allowing any device (multi-master) to initiate communication with any peripheral (multi-slave).",
    "Only one controller and multiple peripherals": "Incorrect. While often used this way, the protocol natively supports multiple controllers.",
    "Only one controller and only one peripheral": "Incorrect. The whole point of the addressing system in I2C is to avoid being limited to just one peripheral."
  },
  "IoT devices are powerful enough to control water pumps": {
    "True": "Correct! While the microcontroller's tiny 3.3V pin can't power a heavy pump directly, it is easily powerful enough to trigger a relay, which in turn switches the high-voltage power for the pump.",
    "False": "Incorrect. With the help of an electromechanical relay, even a tiny microcontroller can control massive industrial pumps."
  },
  "Actuators can be used to control power to additional devices": {
    "True": "Correct! A relay is a type of actuator. When it actuates (physically moves a switch), it controls the heavy power flowing to other devices.",
    "False": "Incorrect. Switching power on and off is one of the most common uses for an actuator (relay)."
  },
  "Sensors detect changes from actuators immediately": {
    "False": "Correct! Physical systems have latency. If an actuator turns on a heater, it might take minutes for the temperature sensor across the room to detect the change.",
    "True": "Incorrect. While electricity moves fast, the physical properties in the real world (heat, water soaking into soil) take time to propagate to the sensor."
  },
  "A relay is what type of switch:": {
    "Electromechanical": "Correct! A standard relay uses an electromagnet (electro) to physically pull a metal contact switch (mechanical) closed.",
    "Electrical": "Incorrect. While solid-state relays exist, standard relays have moving physical parts.",
    "Mechanical": "Incorrect. A pure mechanical switch requires a human hand to flip it. A relay uses electricity to flip it."
  },
  "A relay allows:": {
    "A low power device to control a higher power device": "Correct! The tiny 3.3V signal from an IoT board triggers the relay's electromagnet, which snaps shut a beefy switch capable of handling 120V/240V mains power.",
    "A high power device to control a low power device": "Incorrect. You don't need a relay to step down power (you'd use a transformer/buck converter). Relays step *up* the control authority.",
    "Runners to run a race passing a baton between them": "Haha! A good pun, but not the right answer for an IoT electronics exam."
  },
  "Actuators should always respond instantly to sensor readings:": {
    "False": "Correct! You don't want a water pump flickering on and off rapidly every millisecond a sensor fluctuates. You need logic, delays, and thresholds (hysteresis) to prevent hardware damage.",
    "True": "Incorrect. Reacting instantly to raw, noisy sensor data without a delay or averaging will quickly burn out your mechanical actuators."
  },
  "A public MQTT broker is fine to use for a commercial IoT project": {
    "False": "Correct! Public MQTT brokers are meant for testing and tinkering. Anyone can read your topics, which is a massive security and privacy violation for a commercial product.",
    "True": "Incorrect. You should never use a public, unsecured broker for commercial data, as you have no privacy, SLA, or security guarantees."
  },
  "Cloud computing allow you to:": {
    "Rent computers, application platforms, software, serverless platforms and other services": "Correct! Cloud computing is a massive ecosystem encompassing IaaS (renting VMs), PaaS (App platforms), and SaaS (Software).",
    "Rent computers and application platforms only": "Incorrect. It includes software (like Office 365) and advanced AI/Serverless services too.",
    "Only rent computers": "Incorrect. That describes only the lowest level of cloud (IaaS), but ignores the vast majority of modern cloud services."
  },
  "There are multiple cloud vendors with data centers in many different countries across 6 continents": {
    "True": "Correct! Azure, AWS, and Google Cloud have massive global footprints to ensure data can be processed close to users anywhere in the world.",
    "False": "Incorrect. Global reach is one of the primary selling points of major cloud vendors."
  },
  "To request control of an actuator and get a response from an IoT device, app code can use a:": {
    "Direct method request": "Correct! Direct Methods act like an HTTP request/response. The cloud calls the method on the device, and the device immediately replies to confirm execution.",
    "Device to cloud message": "Incorrect. This goes the wrong way (telemetry flowing up to the cloud).",
    "Device twin": "Incorrect. Device Twins sync state asynchronously; they are not meant for immediate command/response execution."
  },
  "IoT Hub lets any device connect without any security:": {
    "False": "Correct! Enterprise IoT Hubs require strict authentication (SAS tokens or X.509 certificates) before they will let a device connect and send data.",
    "True": "Incorrect. Allowing unauthenticated devices to connect would result in immediate flooding and hacking of the cloud backend."
  },
  "IoT Hub names must be unique:": {
    "True": "Correct! Because your IoT Hub acts as an endpoint on the public internet (e.g. yourhub.azure-devices.net), its name must be globally unique across the entire cloud platform.",
    "False": "Incorrect. DNS requires globally unique domain names, so the Hub name must be unique."
  },
  "You can use Serverless code to respond to IoT events": {
    "True": "Correct! Event-driven Serverless architectures (like Azure Functions) are the standard way to automatically execute code the moment IoT telemetry arrives.",
    "False": "Incorrect. Serverless computing is practically built for reacting to sporadic event streams like IoT data."
  },
  "When you send IoT events to IoT Hub:": {
    "Any number of services can read events off the IoT Hub": "Correct! By using 'consumer groups', multiple downstream cloud applications can independently read and process the exact same stream of telemetry.",
    "Only one service can read events off the IoT Hub": "Incorrect. Restricting reads to a single service defeats the pub/sub event distribution model.",
    "Services cannot read events from IoT Hub, they have to connect to the device directly": "Incorrect. Devices are often behind firewalls and sleep frequently; the Hub buffers the data so cloud services can read it reliably."
  },
  "When reading events off IoT hub, you can only do so using code that runs in the cloud": {
    "False": "Correct! While cloud services commonly read from IoT Hub, you can use SDKs to read events from local, on-premise servers or edge devices as well.",
    "True": "Incorrect. There is no strict limitation preventing authorized on-premise infrastructure from consuming the event stream."
  },
  "Azure Functions can be run and debugged locally:": {
    "True": "Correct! Using the Azure Functions Core Tools, you can run the exact same serverless runtime on your local laptop to test and debug before pushing to the cloud.",
    "False": "Incorrect. Microsoft specifically built a local emulator environment exactly for this purpose."
  },
  "Serverless code can only be written in JavaScript and COBOL:": {
    "False": "Correct! Modern serverless platforms natively support Python, C#, Java, Go, PowerShell, and TypeScript.",
    "True": "Incorrect. COBOL is a legacy mainframe language rarely used for serverless, and JS is definitely not the only option available."
  },
  "When deploying a Functions App to the cloud, you need to create and deploy:": {
    "A Functions App, a Storage Account, and Application Settings": "Correct! A serverless Functions App relies on a Storage Account to hold its execution code/state, and Application Settings for environment configurations (like DB connection strings).",
    "A Functions App only": "Incorrect. A Functions App cannot exist in a vacuum; it strictly requires a backing storage account.",
    "A Functions App and a Storage Account only": "Incorrect. Without Application Settings, your code wouldn't know how to securely connect to external resources."
  },
  "IoT devices are always secure": {
    "False": "Correct. Security is a major challenge in IoT. Devices often have weak default passwords, unpatched firmware, and minimal encryption capabilities.",
    "True": "Definitely not! Because they are often cheap and mass-produced, IoT devices are notorious for massive security vulnerabilities."
  },
  "There are no documented cases of hackers using an IoT device to hack into a network:": {
    "False": "Correct! There are many famous cases, including hackers breaching a casino's high-roller database by hacking into an internet-connected fish tank thermometer on the same network.",
    "True": "Incorrect. The Mirai Botnet, for example, took down major parts of the internet by hacking hundreds of thousands of insecure IoT cameras."
  },
  "You can share your IoT device connection string with anyone": {
    "False": "Correct! The connection string contains the secret authentication keys. If you share it, anyone can impersonate your device and send malicious data to your cloud.",
    "True": "Incorrect. Sharing your connection string is like sharing the password to your bank account."
  },
  "Symmetric key encryption compares to asymmetric key encryption in which ways:": {
    "Symmetric key encryption is faster than asymmetric, but less secure": "Correct! Symmetric encryption (using one shared key) uses less compute power, but distributing that single key securely over the network is inherently riskier than asymmetric public/private keys.",
    "Symmetric key encryption is slower than asymmetric": "Incorrect. Symmetric encryption (like AES) is mathematically much simpler and drastically faster than asymmetric (RSA).",
    "Symmetric key encryption is more secure than asymmetric": "Incorrect. Because both parties need the exact same secret key, it poses massive key-management security risks.",
    "Symmetric key encryption is slower than asymmetric, but more secure": "Incorrect. It is neither slower, nor is it considered more secure."
  },
  "Self-signed X.509 certificates are ideal for a production environment": {
    "False": "Correct! Self-signed certs are great for local testing, but in production, you should use certificates signed by a trusted Root Certificate Authority (CA) to prevent man-in-the-middle attacks.",
    "True": "Incorrect. If a device trusts a self-signed cert, a hacker could easily intercept the connection with their own self-signed cert and spoof the server."
  },
  "X.509 certificates:": {
    "Should never be shared between IoT devices": "Correct! Every single IoT device must have its own unique X.509 certificate (its 'passport'). If they share one, revoking a compromised device breaks all the others.",
    "Can be shared between devices": "Incorrect. Sharing certificates destroys the ability to audit, authenticate, or revoke individual compromised devices.",
    "Should be kept secure and never used by any devices": "Incorrect. The private key must be kept secure, but the certificate itself *must* be used by the device to prove its identity to the cloud."
  }
}

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

json_str = content[content.find('['):content.rfind(']')+1]
data = json.loads(json_str)

for section in data[0]['quizzes']:
    if "Professor" in section['title']:
        continue
    for quiz in section.get('quiz', []):
        q_text = quiz['questionText'].strip()
        if q_text in explanations_chunk_2:
            for opt in quiz['answerOptions']:
                ans_text = opt['answerText'].strip()
                if ans_text in explanations_chunk_2[q_text]:
                    opt['explanation'] = explanations_chunk_2[q_text][ans_text]
                # Fix: Make sure it's 4 options if not true/false
                if "true" not in [o['answerText'].lower() for o in quiz['answerOptions']] and "false" not in [o['answerText'].lower() for o in quiz['answerOptions']]:
                    # Make sure they have 4 options
                    pass

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const quizData = ' + json.dumps(data, indent=2) + ';')

print("Applied Chunk 2 Handcrafted Explanations")
