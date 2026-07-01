import json

new_theories = {
    "Points inside the geofence have a distance:": """
        <h3>Geofencing Mathematics</h3>
        <p>A geofence is an invisible boundary (like a circle) drawn around a GPS coordinate.</p>
        <ul>
            <li><strong>Distance Calculation:</strong> To check if a device is inside the geofence, the system calculates the distance from the center point to the device's current location using the Haversine formula.</li>
            <li><strong>Inside vs Outside:</strong> If the calculated distance is less than or equal to the radius of the geofence, the point is inside. If it is greater, the point is outside.</li>
        </ul>
    """,
    "IoT data is stored by IoT Hub?": """
        <h3>IoT Hub Data Storage</h3>
        <p>The IoT Hub is essentially a massive traffic cop, not a database.</p>
        <ul>
            <li><strong>Retention:</strong> IoT Hub natively only stores messages for a very short period (usually 1 to 7 days) solely to ensure they are delivered to the backend.</li>
            <li><strong>Long-Term Storage:</strong> It is fundamentally NOT designed for long-term data storage. You must route the data out of the Hub into Blob Storage, CosmosDB, or SQL for permanent storage.</li>
        </ul>
    """,
    "The three components of architecting an IoT application are:": """
        <h3>IoT Architecture Components</h3>
        <p>An end-to-end IoT solution is always architected around three core pillars.</p>
        <ul>
            <li><strong>Things:</strong> The physical devices, sensors, and edge gateways deployed in the field.</li>
            <li><strong>Insights:</strong> The cloud infrastructure (IoT Hub, Serverless logic, AI models) that ingests the telemetry and extracts meaning from it.</li>
            <li><strong>Actions:</strong> The physical or digital response to the insight (e.g., sending a command to shut off a valve, or displaying an alert on a dashboard).</li>
        </ul>
    """,
    "You can use Serverless code to respond to IoT events:": """
        <h3>Event-Driven Serverless Code</h3>
        <p>Serverless architecture is entirely event-driven.</p>
        <ul>
            <li><strong>Triggers:</strong> Serverless code (like Azure Functions) runs in direct response to triggers. When a new telemetry message hits the IoT Hub, it triggers the function to run.</li>
            <li><strong>Processing:</strong> This allows you to instantly process, route, or filter data the exact millisecond it arrives from the physical device, without keeping a server permanently running.</li>
        </ul>
    """,
    "When you send IoT events to IoT Hub:": """
        <h3>Telemetry Ingestion</h3>
        <p>When devices push their data to the cloud, there is a specific workflow.</p>
        <ul>
            <li><strong>Formatting:</strong> Data is packaged on the device (almost always as a JSON payload) and encrypted over a protocol like MQTT.</li>
            <li><strong>The Hub:</strong> The IoT Hub securely authenticates the device, receives the message, and makes it instantly available for backend services (like serverless functions) to consume.</li>
        </ul>
    """,
    "When reading events off IoT hub, you can only do so using code that runs in the cloud:": """
        <h3>Reading from IoT Hub</h3>
        <p>While IoT Hub lives in the cloud, you are not strictly forced to use cloud code to read from it.</p>
        <ul>
            <li><strong>Flexibility:</strong> You can write code that runs on your local desktop, an on-premise server in your office, or a completely different cloud provider to read the events off the IoT Hub using its connection string.</li>
            <li><strong>Best Practice:</strong> However, using tightly integrated cloud serverless code is by far the most efficient and scalable way to process it.</li>
        </ul>
    """,
    "Serverless code can be used to write IoT data to a database:": """
        <h3>Serverless Data Routing</h3>
        <p>Because IoT Hub is not a permanent database, Serverless code is the bridge.</p>
        <ul>
            <li><strong>Bindings:</strong> Serverless code uses "Bindings" to easily grab data from the IoT Hub and push it to an Output Binding (like CosmosDB, SQL, or Blob Storage).</li>
            <li><strong>ETL:</strong> The serverless function can Extract the data from the Hub, Transform it (clean it up), and Load it into the database permanently.</li>
        </ul>
    """,
    "The SPI (Serial Peripheral Interface) protocol supports:": """
        <h3>SPI Protocol</h3>
        <p>SPI is a synchronous serial communication protocol used heavily by microcontrollers.</p>
        <ul>
            <li><strong>Speed:</strong> It is designed for short-distance, extremely high-speed communication between the microcontroller and a peripheral (like an SD card or high-res display).</li>
            <li><strong>Full-Duplex:</strong> Unlike I2C, SPI supports full-duplex communication, meaning it can send and receive data at the exact same time over dedicated MOSI and MISO wires.</li>
        </ul>
    """,
    "Which levels of Quality of Service (QoS) that MQTT provides?": """
        <h3>MQTT Quality of Service (QoS)</h3>
        <p>MQTT guarantees message delivery using three distinct QoS levels.</p>
        <ul>
            <li><strong>QoS 0 (At most once):</strong> Fire and forget. The message is sent, but no confirmation is requested. (Fastest, least reliable).</li>
            <li><strong>QoS 1 (At least once):</strong> The broker guarantees delivery, but due to retries, it might accidentally deliver the message multiple times.</li>
            <li><strong>QoS 2 (Exactly once):</strong> A complex 4-step handshake guarantees the message arrives exactly one time. (Slowest, most reliable).</li>
        </ul>
    """,
    "Processing of data from analog sensors in IoT devices": """
        <h3>Analog Data Processing</h3>
        <p>Because microcontrollers are purely digital, analog data requires translation.</p>
        <ul>
            <li><strong>ADC:</strong> The Analog-to-Digital Converter measures the continuous voltage coming from the sensor (e.g., 0V to 3.3V) and chops it into a digital number based on its resolution (e.g., 0 to 1023 for a 10-bit ADC).</li>
            <li><strong>Calibration:</strong> The raw digital number must then be processed mathematically in code to map it to a human-readable metric, like degrees Celsius or a percentage of moisture.</li>
        </ul>
    """,
    "Symmetric key encryption compares to asymmetric key encryption in which ways:": """
        <h3>Symmetric vs Asymmetric Encryption</h3>
        <p>Encryption relies on complex mathematical keys to lock and unlock data.</p>
        <ul>
            <li><strong>Symmetric:</strong> Uses the exact same secret key to encrypt and decrypt the data. It is extremely fast and computationally cheap, making it perfect for low-power IoT devices.</li>
            <li><strong>Asymmetric:</strong> Uses two different keys (a Public key to encrypt, and a Private key to decrypt). It is much slower and requires heavier math, but it solves the problem of how to securely share keys over the internet (e.g., X.509 Certificates).</li>
        </ul>
    """,
    "The technique uses to train a model with only a few images from a pretrained model is called:": """
        <h3>Transfer Learning</h3>
        <p>Training an image recognition AI from scratch requires millions of images.</p>
        <ul>
            <li><strong>The Problem:</strong> When building an IoT camera to detect a specific rare bird, you don't have millions of pictures of that bird.</li>
            <li><strong>Transfer Learning:</strong> You take an existing model (already trained on millions of generic photos) and essentially "freeze" its foundational knowledge of shapes and textures. You then only retrain the final layer with your small handful of bird pictures. It learns incredibly fast and highly accurately.</li>
        </ul>
    """
}

with open('theory.js', 'r', encoding='utf-8') as f:
    content = f.read()

insertion = ""
for q_text, theory_html in new_theories.items():
    insertion += f',\n    "{q_text}": `{theory_html}`'

content = content.replace('\n};', insertion + '\n};')

with open('theory.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected Chunk 2 of handcrafted Professor question definitions.")
