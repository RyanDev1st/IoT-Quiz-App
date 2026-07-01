import re

new_theory = """
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
"""

with open('theory.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before the last closing brace
insertion_point = content.rfind('}')
if insertion_point != -1:
    updated_content = content[:insertion_point] + "," + new_theory + content[insertion_point:]
    with open('theory.js', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print("Updated theory.js with Chunk 3")
else:
    print("Could not find insertion point")
