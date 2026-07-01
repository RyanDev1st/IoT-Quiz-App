import re

new_theory = """
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
"""

with open('theory.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before the last closing brace
insertion_point = content.rfind('}')
if insertion_point != -1:
    updated_content = content[:insertion_point] + "," + new_theory + content[insertion_point:]
    with open('theory.js', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print("Updated theory.js with Chunk 2")
else:
    print("Could not find insertion point")
