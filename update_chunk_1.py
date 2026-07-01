import json

explanations_chunk_1 = {
  "The I in IoT stands for:": {
    "Internet": "Yes, 'Internet' is correct! The 'Internet of Things' refers to connecting physical devices to the internet so they can communicate and share data.",
    "Iridium": "No, 'Iridium' is a satellite communications company, not what the 'I' stands for in this context.",
    "Ironing": "Haha, no, 'Ironing' has nothing to do with it, though you could technically build a smart iron that connects to the internet!"
  },
  "What's the estimated number of IoT devices in use by the end of 2020?": {
    "30": "Nope! We passed 30 devices a long, long time ago. Think much, much bigger.",
    "30 million": "Incorrect. While 30 million sounds like a lot, the global scale of IoT devices is actually thousands of times larger.",
    "30 billion": "Correct! It's estimated that there were over 30 billion connected IoT devices worldwide by the end of 2020. They are everywhere!"
  },
  "Smartphones are IoT devices": {
    "True": "Yes, this is true! Smartphones have built-in sensors (GPS, accelerometers) and internet connectivity, making them one of the most common IoT devices in the world.",
    "False": "Actually, this is True. Because smartphones collect physical data via sensors and send it over the internet, they absolutely qualify as IoT devices."
  },
  "IoT devices need to be connected to the Internet at all time": {
    "True": "Incorrect. Many IoT devices (especially on the edge) can operate offline for long periods and sync their data only when a connection becomes available.",
    "False": "Exactly! They don't need constant connectivity. Devices can gather data and process it locally (Edge computing), syncing up later when connected."
  },
  "IoT devices are always secure": {
    "True": "Definitely not! Because they are often cheap, mass-produced, and rarely updated by users, IoT devices are notorious for having massive security vulnerabilities.",
    "False": "Correct. Unfortunately, security is a major challenge in IoT. Many devices have weak default passwords and lack regular firmware updates."
  },
  "AI can be run on low powered IoT devices": {
    "True": "Yes! Thanks to TinyML and model optimization, we can now run lightweight AI models directly on low-powered microcontrollers at the edge.",
    "False": "Actually, this is True. While you wouldn't train a massive model on a tiny chip, you can run (infer) optimized, smaller models directly on them."
  },
  "The T in IoT stands for:": {
    "Things": "Spot on. 'Things' refers to the physical devices (sensors, appliances, vehicles) that are embedded with technology to connect to the network.",
    "Transistors": "Incorrect. While IoT devices use transistors internally as electronic components, the 'T' stands for 'Things'.",
    "Turkeys": "Nope! Unless you are attaching sensors to farm turkeys to track their health (which is totally a real IoT use case!), this isn't what the T stands for."
  },
  "IoT devices gather information from the world around them using:": {
    "Sensors": "Correct! Sensors are the physical components (like thermometers or cameras) that detect events or changes in the environment.",
    "Actuators": "Incorrect. Actuators do the exact opposite—they take a digital command and perform a physical action (like spinning a motor).",
    "Carrier pigeons": "Hilarious, but no. We rely on electronic sensors, not birds, to gather real-time data!"
  },
  "IoT devices draw more power than the average desktop or laptop computer": {
    "True": "Incorrect. Most IoT devices (like a smart temperature sensor) run on tiny batteries and draw incredibly small fractions of a watt.",
    "False": "Correct! A massive goal of IoT hardware design is 'low power'. Many devices are designed to run for years on a single coin-cell battery."
  },
  "The three steps in a CPU instruction cycle are:": {
    "Fetch, Decode, Execute": "Yes! The CPU fetches the instruction from memory, decodes what it means, and then executes the operation.",
    "Decode, Execute, Fetch": "Incorrect order! You can't decode an instruction before you've actually fetched it from memory.",
    "Stop, Collaborate, Listen": "Ice, Ice, Baby! Funny, but no. The correct cycle for a CPU is Fetch, Decode, Execute."
  },
  "What operating system do Raspberry Pis run?": {
    "Raspberry Pi OS": "Correct! They typically run Raspberry Pi OS (formerly Raspbian), which is a customized, lightweight version of Debian Linux.",
    "They don't run an OS": "Incorrect. A Raspberry Pi is a Single-Board Computer (SBC) that uses a full microprocessor, so it absolutely requires an operating system.",
    "Windows 95": "Nope! While people have hacked old versions of Windows onto them for fun, their native and supported OS is Linux-based."
  },
  "IoT devices typically run faster and have more memory than the average desktop or laptop computer": {
    "True": "Incorrect. A typical desktop has gigabytes of RAM and multi-GHz processors. An IoT microcontroller might have kilobytes of RAM and run at 16 MHz.",
    "False": "Exactly. IoT devices are purposely heavily constrained. They trade speed and memory for low cost and extreme power efficiency."
  },
  "An LED is a sensor:": {
    "True": "Incorrect. An LED (Light Emitting Diode) outputs light based on an electrical signal, it doesn't measure it. That makes it an actuator.",
    "False": "Correct! An LED is an actuator, because it produces a physical output (light) in response to a digital command, rather than sensing data."
  },
  "Sensors are used to:": {
    "Gather data from the physical world.": "Yes! Sensors measure physical properties (heat, light, pressure) and turn them into digital data.",
    "Control the physical world.": "Incorrect. Controlling the physical world (like opening a door) is the job of an Actuator.",
    "Only monitor temperature.": "Incorrect. While temperature is a very common metric, sensors can monitor almost anything: motion, humidity, light, gas, etc."
  },
  "Actuators are use to:": {
    "Control the physical world.": "Correct! Actuators take a command from the brain of the device and turn it into a physical action (like moving a robotic arm).",
    "Gather data from the physical world.": "Incorrect. That is the definition of a Sensor, not an Actuator.",
    "To calculate insurance risks.": "That's an 'actuary', a human job in the insurance industry! An 'actuator' is a piece of hardware."
  },
  "Digital sensors send data as:": {
    "High and low voltages only": "Correct! In digital circuits, data is transmitted purely as discrete binary states (High/Low, representing 1s and 0s).",
    "Voltage ranges": "Incorrect. A continuous sliding scale of voltage ranges is how an Analog sensor sends data.",
    "Emails": "Incorrect. Sensors don't send emails! They send raw electrical signals to the microcontroller. The cloud might send an email later."
  },
  "What digital signal is sent when a button is pressed?": {
    "0": "While it depends on if the circuit uses a pull-up or pull-down resistor, a standard active-high button press closes the circuit to send a '1' (HIGH).",
    "1": "Correct! In a standard active-high configuration, pressing the button connects the voltage, sending a '1' (HIGH) to the GPIO pin."
  },
  "You can control analog actuators from a digital device using pulse-width modulation": {
    "True": "Yes! PWM works by rapidly turning a digital signal on and off. The average voltage over time simulates a smooth analog signal (like dimming a light).",
    "False": "Actually, this is True. PWM is the standard technique used by digital microcontrollers to simulate analog outputs."
  },
  "IoT devices always need to be connected to the Internet to work:": {
    "True": "Incorrect. Many devices are designed for 'offline-first' scenarios where they process data locally and only upload when a connection is restored.",
    "False": "Exactly. A smart thermostat, for example, will still control your heater even if your Wi-Fi goes down."
  },
  "IoT devices always communicate over HTTP, the same as web apps and other web APIs:": {
    "False": "Correct! Because HTTP is very bulky, IoT devices frequently use lightweight, specialized protocols like MQTT or CoAP.",
    "True": "Incorrect. HTTP requires too much overhead (headers, TCP handshakes) for constrained, low-bandwidth IoT networks."
  },
  "IoT devices rely on the cloud for all their decision making:": {
    "False": "Correct! Edge computing empowers devices to make instant, local decisions without waiting for the cloud to respond.",
    "True": "Incorrect. If a self-driving car had to wait for a cloud server to tell it to brake, it would crash. Local decision making is critical."
  },
  "Data gathered from sensors and sent to the cloud is called:": {
    "Telemetry": "Correct! Telemetry is the standard term for the continuous stream of raw sensor readings transmitted to a remote system.",
    "Commands": "Incorrect. Commands go the opposite way: from the cloud down to the device.",
    "Measurements": "Incorrect. While technically true, 'Telemetry' is the specific industry term used in IoT architecture for this data flow."
  },
  "What should happen to a command if the IoT device is offline:": {
    "It depends on the command, the device and the requirements of the IoT app": "Correct! A command to reboot might need to be queued and resent, but a command to 'unlock the door for 5 seconds' should probably expire if the device is offline.",
    "It should always be resent when the device is back online": "Incorrect. If you sent a command to turn on the sprinklers yesterday, you might not want it executing randomly when it reconnects today in the rain.",
    "It should never be resent when the device is back online": "Incorrect. Critical configuration updates absolutely need to be queued and applied whenever the device finally reconnects."
  },
  "MQTT, or Message Queueing Telemetry Transport, has message queues:": {
    "False": "Correct! It's a trick question. Despite the name, modern MQTT is a pure pub/sub broker protocol and does NOT actually contain standard message queues.",
    "True": "Incorrect! Ironically, IBM named it this decades ago, but standard MQTT does not actually use queues; it uses real-time topics and subscriptions."
  },
  "IoT devices can be used to support agriculture": {
    "True": "Absolutely! Smart agriculture (Precision Ag) uses IoT for soil moisture sensing, automated irrigation, and tracking crop health.",
    "False": "Incorrect. Agriculture is actually one of the biggest and most successful adoption sectors for IoT worldwide."
  },
  "Plant needs include: (pick the best answer)": {
    "Carbon dioxide, water, nutrients, light, warmth": "Correct! This comprehensive list covers all the biological and environmental factors necessary for optimal photosynthesis and growth.",
    "Carbon dioxide, water, nutrients": "Incorrect. You are missing light (energy for photosynthesis) and warmth (temperature).",
    "Carbon dioxide, water, nutrients, light": "Incorrect. You are missing warmth, as temperature is critical for regulating a plant's metabolic rate."
  },
  "Sensors are too expensive for farmers in developed nations to use:": {
    "False": "Correct! The cost of IoT sensors has plummeted, making it highly affordable and profitable for farmers to deploy them across massive fields.",
    "True": "Incorrect. Modern soil sensors and microcontrollers can cost just a few dollars, providing a massive return on investment in water savings."
  },
  "Plant growth is dependant on temperature": {
    "True": "Yes! Temperature drives the speed of chemical reactions in photosynthesis and metabolism, directly controlling how fast a plant grows.",
    "False": "Incorrect. Temperature is absolutely critical; plants will go dormant if it's too cold and suffer heat stress if it's too hot."
  },
  "The temperatures to consider for plant growth are:": {
    "Base, optimal, maximum": "Correct! 'Base' is where growth starts, 'Optimal' is where growth is fastest, and 'Maximum' is the heat limit before the plant gets damaged.",
    "Minimum, maximum": "Incorrect. You are ignoring the 'optimal' temperature, which is the most important target for a farmer.",
    "Maximum only": "Incorrect. A plant won't grow if it's freezing, so you definitely have to track the base/minimum temperature as well."
  },
  "Growing Degree Days are calculated using which formula:": {
    "((day max + day min) / 2) - plant base": "Correct! You take the average daily temperature (max+min / 2) and subtract the base threshold to calculate the accumulated heat units.",
    "(day max + day min) - plant base": "Incorrect. You forgot to divide the max and min by 2 to get the daily average.",
    "((day min + plant base) / 2)": "Incorrect. This formula completely ignores the maximum temperature reached during the day."
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
        if q_text in explanations_chunk_1:
            for opt in quiz['answerOptions']:
                ans_text = opt['answerText'].strip()
                if ans_text in explanations_chunk_1[q_text]:
                    opt['explanation'] = explanations_chunk_1[q_text][ans_text]

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const quizData = ' + json.dumps(data, indent=2) + ';')

print("Applied Chunk 1 Handcrafted Explanations")
