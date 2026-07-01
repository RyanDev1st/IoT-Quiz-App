import json

explanations_chunk_3 = {
  "Your location can be defined using": {
    "Latitude and Longitude": "Correct! Latitude (North/South) and Longitude (East/West) provide the exact coordinate pair needed to pinpoint any location on Earth.",
    "Latitude only": "Incorrect. Latitude only tells you how far North or South you are. You could be anywhere on that entire horizontal ring around the Earth.",
    "Longitude only": "Incorrect. Longitude only tells you how far East or West you are. You could be anywhere on that entire vertical line from the North to the South Pole."
  },
  "The types of sensors that can track your location are called:": {
    "GPS": "Correct! GPS (Global Positioning System) sensors receive signals from orbiting satellites to triangulate your exact position.",
    "PGP": "Incorrect. PGP stands for Pretty Good Privacy, which is an encryption program used for signing, encrypting, and decrypting texts and emails.",
    "GIF": "Incorrect. A GIF is an image format, mostly used for short looping animations on the internet."
  },
  "There is no value in tracking vehicle locations": {
    "False": "Correct! Tracking vehicle locations is a massive industry. It's essential for fleet management, logistics, public transit tracking, and ride-sharing apps.",
    "True": "Incorrect. Logistics companies like FedEx and Uber literally could not exist without real-time vehicle location tracking."
  },
  "GPS data is sent from sensors using:": {
    "NMEA sentences": "Correct! The National Marine Electronics Association (NMEA) standard is the universal text-based protocol that GPS receivers use to output data.",
    "Latitude and Longitude coordinates": "Incorrect. While it *contains* coordinates, the actual raw data format/protocol sent over the wire is called NMEA.",
    "Addresses": "Incorrect. GPS satellites have no concept of street addresses. They only calculate mathematical coordinates. Converting that to an address is called 'Reverse Geocoding'."
  },
  "To get a good GPS fix you need to receive signals from at least how many satellites": {
    "3": "Correct! You need at least 3 satellites to mathematically triangulate a 2D position (latitude and longitude) using intersecting spheres.",
    "2": "Incorrect. Two satellites only give you a circle of possible locations where their signals intersect. You need a 3rd to narrow it down to two points (one being in space).",
    "1": "Incorrect. One satellite only tells you how far away you are from that specific satellite, which leaves you anywhere on a massive sphere."
  },
  "GPS sensors send data over:": {
    "UART": "Correct! Most raw GPS modules use UART (Universal Asynchronous Receiver-Transmitter) to stream NMEA sentences serially to the microcontroller.",
    "SPI": "Incorrect. While some advanced modules support SPI, UART is the overwhelming industry standard for simple GPS text streaming.",
    "Email": "Incorrect. GPS modules are offline sensors that just output text over a wire. They don't have networking capabilities to send emails."
  },
  "IoT data is stored by IoT Hub": {
    "False": "Correct! IoT Hub is a message router, not a database. It ingests the telemetry and forwards it, but it does not provide permanent data storage.",
    "True": "Incorrect. While IoT hub buffers messages for a short time (retention period), you must route them to a database for actual storage."
  },
  "Data can be divided into the following two types": {
    "Structured and unstructured": "Correct! Structured data fits neatly into tables and columns (like SQL databases), while unstructured data includes things like images, video, and loose JSON documents.",
    "Blob and table": "Incorrect. Those are specific Azure storage *services*, not the fundamental computer science classifications of data types.",
    "Red and blue": "Incorrect. This sounds like the Matrix pills, not data classifications!"
  },
  "Serverless code can be used to write IoT data to a database": {
    "True": "Correct! A very common architecture is using an Azure Function (Serverless) triggered by IoT Hub to parse the telemetry and save it into a database like CosmosDB.",
    "False": "Incorrect. Serverless functions are arguably the *most* popular way to connect IoT streams to databases."
  },
  "IoT data that needs to be processed immediately is on which path:": {
    "Hot": "Correct! The 'Hot' path is for real-time processing and immediate action (like triggering an alarm if a machine overheats).",
    "Warm": "Incorrect. The 'Warm' path is for reporting and analytics over recent data (like showing a dashboard of the last 24 hours).",
    "Cold": "Incorrect. The 'Cold' path is for long-term archival storage and batch processing (like analyzing years of historical data)."
  },
  "Azure storage has the following storage types:": {
    "Blob, table, queue and file": "Correct! These are the four core services provided by an Azure Storage Account.",
    "Boxes, tubs, bins": "Incorrect. These are physical storage containers you'd find in a garage, not cloud computing services!",
    "Hot, warm, cold": "Incorrect. These refer to data processing *paths* or blob storage *access tiers*, not the actual structural storage types."
  },
  "Azure Functions can be bound to database to write return values to the database": {
    "True": "Correct! Azure Functions support 'Output Bindings', which let you seamlessly write the function's return value directly into a database without writing boilerplate connection code.",
    "False": "Incorrect. Output bindings are one of the most powerful features of Serverless functions."
  },
  "Very large tables of data are an easy way to quickly look up data": {
    "False": "Correct! If a table is massive and unindexed, searching through it (a full table scan) is extremely slow and inefficient.",
    "True": "Incorrect. As a table grows to millions of rows, looking up data becomes very difficult without proper indexing and partitioning."
  },
  "GPS data can be visualized on maps": {
    "True": "Correct! By mapping the latitude and longitude coordinates to a visual grid, you can plot GPS data on interactive maps.",
    "False": "Incorrect. Plotting coordinates on a map is the entire basis of modern navigation software like Google Maps."
  },
  "On maps of large areas, the same distance drawn on the map represents the same distance on the real world no matter where on the map the measurement is taken": {
    "False": "Correct! Because the Earth is a sphere, flattening it onto a 2D map (like the Mercator projection) severely distorts distances and sizes, especially near the poles.",
    "True": "Incorrect. Map projections distort physical reality. For example, Greenland looks as big as Africa on a flat map, but Africa is actually 14 times larger!"
  },
  "The service to draw maps on a web page is called:": {
    "Azure Maps": "Correct! Azure Maps provides geospatial APIs to add maps, spatial analytics, and mobility solutions to applications.",
    "Azure Atlas": "Incorrect. While Azure has services with 'Atlas' in the name (like Purview/Data Atlas), the mapping service is explicitly called Azure Maps.",
    "Azure World VIsualizer": "Incorrect. This is a made-up service name."
  },
  "Azure maps plots data using:": {
    "GeoJSON": "Correct! GeoJSON is an open standard format designed for representing simple geographical features, along with their non-spatial attributes.",
    "Lists of latitude and longitude": "Incorrect. While it uses coordinates under the hood, the API standardizes on the structured GeoJSON format to include metadata.",
    "Lists of addresses": "Incorrect. The map rendering engine works strictly on mathematical coordinates, not text addresses."
  },
  "Blobs can be retrieved via a URL": {
    "True": "Correct! Azure Blob Storage objects can be accessed over HTTP/HTTPS using a direct URL, making them perfect for serving images or JSON files to web apps.",
    "False": "Incorrect. URL access is a fundamental feature of Blob Storage."
  },
  "GPS coordinates can be used to check if something is in a defined area": {
    "True": "Correct! This concept is known as Geofencing—creating a virtual geographic boundary and checking if a coordinate falls inside it.",
    "False": "Incorrect. Mathematical boundary checking against coordinates is exactly how location-based alerts work."
  },
  "GPS is incredibly accurate so can indicate with precision of less than 1M when a device enters a given area": {
    "False": "Correct! Standard consumer GPS is usually only accurate to about 3 to 10 meters, easily affected by buildings, trees, and atmospheric conditions.",
    "True": "Incorrect. While military or RTK GPS can achieve sub-meter precision, standard commercial IoT GPS cannot guarantee <1m accuracy."
  },
  "Geofences are useful when tracking vehicles to:": {
    "Determine when a vehicle enters or leaves a given area": "Correct! You can trigger events both on 'entry' (like a delivery truck arriving) and on 'exit' (like a rental car leaving a permitted zone).",
    "Determine when a vehicle enters a given area only": "Incorrect. You can also trigger logic when the vehicle exits the boundary.",
    "Determine when a vehicle leaves a given area only": "Incorrect. You can also trigger logic when the vehicle enters the boundary."
  },
  "To have multiple services pull data from an IoT Hub, you need to create multiple:": {
    "Consumer groups": "Correct! A consumer group provides a distinct view into the event stream, allowing multiple apps to read the same data at their own pace.",
    "Pipes": "Incorrect. 'Pipes' is a generic computing term, not the Azure IoT terminology for pub/sub reading.",
    "IoT Hubs": "Incorrect. Creating multiple Hubs for the same data would be insanely expensive and architecturally wrong."
  },
  "The default search buffer for a geofence call is:": {
    "50m": "Correct! Because GPS data can drift and jitter, Azure Maps Geofencing APIs typically use a default 50-meter search buffer to smooth out inaccuracies.",
    "5m": "Incorrect. 5 meters is too tight; normal GPS drift would constantly trigger false 'exit' events.",
    "500m": "Incorrect. Half a kilometer is far too wide for precise tracking, negating the point of a tight geofence."
  },
  "Points inside the geofence have a distance:": {
    "Less than 0 (a negative value)": "Correct! In spatial computing, the distance to the boundary is negative if you are inside, zero if you are on the line, and positive if you are outside.",
    "Greater than 0 (a positive value)": "Incorrect. Positive values indicate how far *away* (outside) you are from the geofence boundary."
  },
  "Cameras can be used as IoT sensors": {
    "True": "Correct! A camera is essentially a massive array of light sensors. With edge computing, cameras are incredibly powerful IoT sensors for vision tasks.",
    "False": "Incorrect. Smart cameras are some of the most common IoT devices in retail and security."
  },
  "Fruit can be sorted using cameras": {
    "True": "Correct! Using Image Classification or Object Detection, an IoT camera can easily identify overripe or damaged fruit on a conveyor belt.",
    "False": "Incorrect. Automated optical sorting is a massive industry in modern agriculture."
  },
  "Images-based AI models are incredibly complex and time consuming to train, requiring hundreds of thousands of images:": {
    "False": "Correct! Thanks to 'Transfer Learning', we can take massive pre-trained models and fine-tune them for specific tasks using just a few dozen images in minutes.",
    "True": "Incorrect. While training a foundational model from scratch takes immense data, customizing an existing one (Transfer Learning) is fast and easy."
  },
  "The technique custom vision uses to train a model with only a few images is called:": {
    "Transfer learning": "Correct! It takes the 'knowledge' the model already learned from millions of general images and 'transfers' it to recognize your specific few images.",
    "Transformational learning": "Incorrect. This is an educational theory for human psychology, not an AI term.",
    "Transaction learning": "Incorrect. This sounds like database management, not machine learning."
  },
  "Image classifiers can be trained using:": {
    "At least 5 images per tag": "Correct! Azure Custom Vision requires a minimum of 5 images per tag to perform transfer learning (though 50+ is highly recommended for accuracy).",
    "Only 1 image per tag": "Incorrect. One image isn't enough for the model to generalize what the object actually looks like across different angles or lighting.",
    "At least 50 images per tag": "Incorrect. While 50 is a great best practice, the hard technical minimum required by the platform to begin training is only 5."
  },
  "The hardware that allows ML models to be trained quickly, as well as making the graphics on out Xbox look amazing are called:": {
    "GPU": "Correct! Graphics Processing Units (GPUs) are designed to perform thousands of mathematical calculations in parallel, perfect for both rendering graphics and matrix math in AI.",
    "PGU": "Incorrect. This is just a scramble of the acronym.",
    "PUG": "Incorrect. A pug is a small, wrinkly dog. They are terrible at matrix multiplication."
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
        if q_text in explanations_chunk_3:
            for opt in quiz['answerOptions']:
                ans_text = opt['answerText'].strip()
                if ans_text in explanations_chunk_3[q_text]:
                    opt['explanation'] = explanations_chunk_3[q_text][ans_text]

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const quizData = ' + json.dumps(data, indent=2) + ';')

print("Applied Chunk 3 Handcrafted Explanations")
