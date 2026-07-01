const quizData = [
  {
    "title": "IoT Development for Beginners: Quizzes",
    "complete": "Congratulations, you completed the quiz!",
    "error": "Sorry, try again",
    "quizzes": [
      {
        "id": 1,
        "title": "Lesson 1 - Introduction to IoT: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "The I in IoT stands for:",
            "answerOptions": [
              {
                "answerText": "Internet",
                "isCorrect": "true",
                "explanation": "Yes, 'Internet' is correct! The 'Internet of Things' refers to connecting physical devices to the internet so they can communicate and share data."
              },
              {
                "answerText": "Iridium",
                "isCorrect": "false",
                "explanation": "No, 'Iridium' is a satellite communications company, not what the 'I' stands for in this context."
              },
              {
                "answerText": "Ironing",
                "isCorrect": "false",
                "explanation": "Haha, no, 'Ironing' has nothing to do with it, though you could technically build a smart iron that connects to the internet!"
              }
            ]
          },
          {
            "questionText": "What's the estimated number of IoT devices in use by the end of 2020?",
            "answerOptions": [
              {
                "answerText": "30",
                "isCorrect": "false",
                "explanation": "Nope! We passed 30 devices a long, long time ago. Think much, much bigger."
              },
              {
                "answerText": "30 million",
                "isCorrect": "false",
                "explanation": "Incorrect. While 30 million sounds like a lot, the global scale of IoT devices is actually thousands of times larger."
              },
              {
                "answerText": "30 billion",
                "isCorrect": "true",
                "explanation": "Correct! It's estimated that there were over 30 billion connected IoT devices worldwide by the end of 2020. They are everywhere!"
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          },
          {
            "questionText": "Smartphones are IoT devices",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Yes, this is true! Smartphones have built-in sensors (GPS, accelerometers) and internet connectivity, making them one of the most common IoT devices in the world."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Actually, this is True. Because smartphones collect physical data via sensors and send it over the internet, they absolutely qualify as IoT devices."
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "title": "Lesson 1 - Introduction to IoT: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "IoT devices need to be connected to the Internet at all time",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Many IoT devices (especially on the edge) can operate offline for long periods and sync their data only when a connection becomes available."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Exactly! They don't need constant connectivity. Devices can gather data and process it locally (Edge computing), syncing up later when connected."
              }
            ]
          },
          {
            "questionText": "IoT devices are always secure",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Definitely not! Because they are often cheap and mass-produced, IoT devices are notorious for massive security vulnerabilities."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct. Security is a major challenge in IoT. Devices often have weak default passwords, unpatched firmware, and minimal encryption capabilities."
              }
            ]
          },
          {
            "questionText": "AI can be run on low powered IoT devices",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Yes! Thanks to TinyML and model optimization, we can now run lightweight AI models directly on low-powered microcontrollers at the edge."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Actually, this is True. While you wouldn't train a massive model on a tiny chip, you can run (infer) optimized, smaller models directly on them."
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "title": "Lesson 2 - A deeper dive into IoT: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "The T in IoT stands for:",
            "answerOptions": [
              {
                "answerText": "Transistors",
                "isCorrect": "false",
                "explanation": "Incorrect. While IoT devices use transistors internally as electronic components, the 'T' stands for 'Things'."
              },
              {
                "answerText": "Things",
                "isCorrect": "true",
                "explanation": "Spot on. 'Things' refers to the physical devices (sensors, appliances, vehicles) that are embedded with technology to connect to the network."
              },
              {
                "answerText": "Turkeys",
                "isCorrect": "false",
                "explanation": "Nope! Unless you are attaching sensors to farm turkeys to track their health (which is totally a real IoT use case!), this isn't what the T stands for."
              },
              {
                "answerText": "JSON Parsing",
                "isCorrect": false,
                "explanation": "Nope, 'JSON Parsing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "IoT devices gather information from the world around them using:",
            "answerOptions": [
              {
                "answerText": "Sensors",
                "isCorrect": "true",
                "explanation": "Correct! Sensors are the physical components (like thermometers or cameras) that detect events or changes in the environment."
              },
              {
                "answerText": "Actuators",
                "isCorrect": "false",
                "explanation": "Incorrect. Actuators do the exact opposite\u2014they take a digital command and perform a physical action (like spinning a motor)."
              },
              {
                "answerText": "Carrier pigeons",
                "isCorrect": "false",
                "explanation": "Hilarious, but no. We rely on electronic sensors, not birds, to gather real-time data!"
              },
              {
                "answerText": "Data Obfuscation",
                "isCorrect": false,
                "explanation": "Nope, 'Data Obfuscation' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "IoT devices draw more power than the average desktop or laptop computer",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Most IoT devices (like a smart temperature sensor) run on tiny batteries and draw incredibly small fractions of a watt."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! A massive goal of IoT hardware design is 'low power'. Many devices are designed to run for years on a single coin-cell battery."
              }
            ]
          }
        ]
      },
      {
        "id": 4,
        "title": "Lesson 2 - A deeper dive into IoT: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "The three steps in a CPU instruction cycle are:",
            "answerOptions": [
              {
                "answerText": "Decode, Execute, Fetch",
                "isCorrect": "false",
                "explanation": "Incorrect order! You can't decode an instruction before you've actually fetched it from memory."
              },
              {
                "answerText": "Fetch, Decode, Execute",
                "isCorrect": "true",
                "explanation": "Yes! The CPU fetches the instruction from memory, decodes what it means, and then executes the operation."
              },
              {
                "answerText": "Stop, Collaborate, Listen",
                "isCorrect": "false",
                "explanation": "Ice, Ice, Baby! Funny, but no. The correct cycle for a CPU is Fetch, Decode, Execute."
              },
              {
                "answerText": "Firmware Over-The-Air",
                "isCorrect": false,
                "explanation": "Nope, 'Firmware Over-The-Air' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "What operating system do Raspberry Pis run?",
            "answerOptions": [
              {
                "answerText": "They don't run an OS",
                "isCorrect": "false",
                "explanation": "Incorrect. A Raspberry Pi is a Single-Board Computer (SBC) that uses a full microprocessor, so it absolutely requires an operating system."
              },
              {
                "answerText": "Windows 95",
                "isCorrect": "false",
                "explanation": "Nope! While people have hacked old versions of Windows onto them for fun, their native and supported OS is Linux-based."
              },
              {
                "answerText": "Raspberry Pi OS",
                "isCorrect": "true",
                "explanation": "Correct! They typically run Raspberry Pi OS (formerly Raspbian), which is a customized, lightweight version of Debian Linux."
              },
              {
                "answerText": "Edge Routing",
                "isCorrect": false,
                "explanation": "Nope, 'Edge Routing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "IoT devices typically run faster and have more memory than the average desktop or laptop computer",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. A typical desktop has gigabytes of RAM and multi-GHz processors. An IoT microcontroller might have kilobytes of RAM and run at 16 MHz."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Exactly. IoT devices are purposely heavily constrained. They trade speed and memory for low cost and extreme power efficiency."
              }
            ]
          }
        ]
      },
      {
        "id": 5,
        "title": "Lesson 3 - Interact with the physical world with sensors and actuators: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "An LED is a sensor:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. An LED (Light Emitting Diode) outputs light based on an electrical signal, it doesn't measure it. That makes it an actuator."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! An LED is an actuator, because it produces a physical output (light) in response to a digital command, rather than sensing data."
              }
            ]
          },
          {
            "questionText": "Sensors are used to:",
            "answerOptions": [
              {
                "answerText": "Gather data from the physical world.",
                "isCorrect": "true",
                "explanation": "Yes! Sensors measure physical properties (heat, light, pressure) and turn them into digital data."
              },
              {
                "answerText": "Control the physical world.",
                "isCorrect": "false",
                "explanation": "Incorrect. Controlling the physical world (like opening a door) is the job of an Actuator."
              },
              {
                "answerText": "Only monitor temperature.",
                "isCorrect": "false",
                "explanation": "Incorrect. While temperature is a very common metric, sensors can monitor almost anything: motion, humidity, light, gas, etc."
              }
            ]
          },
          {
            "questionText": "Actuators are use to:",
            "answerOptions": [
              {
                "answerText": "Gather data from the physical world.",
                "isCorrect": "false",
                "explanation": "Incorrect. That is the definition of a Sensor, not an Actuator."
              },
              {
                "answerText": "Control the physical world.",
                "isCorrect": "true",
                "explanation": "Correct! Actuators take a command from the brain of the device and turn it into a physical action (like moving a robotic arm)."
              },
              {
                "answerText": "To calculate insurance risks.",
                "isCorrect": "false",
                "explanation": "That's an 'actuary', a human job in the insurance industry! An 'actuator' is a piece of hardware."
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          }
        ]
      },
      {
        "id": 6,
        "title": "Lesson 3 - Interact with the physical world with sensors and actuators: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Digital sensors send data as:",
            "answerOptions": [
              {
                "answerText": "Voltage ranges",
                "isCorrect": "false",
                "explanation": "Incorrect. A continuous sliding scale of voltage ranges is how an Analog sensor sends data."
              },
              {
                "answerText": "High and low voltages only",
                "isCorrect": "true",
                "explanation": "Correct! In digital circuits, data is transmitted purely as discrete binary states (High/Low, representing 1s and 0s)."
              },
              {
                "answerText": "Emails",
                "isCorrect": "false",
                "explanation": "Incorrect. Sensors don't send emails! They send raw electrical signals to the microcontroller. The cloud might send an email later."
              },
              {
                "answerText": "JSON Parsing",
                "isCorrect": false,
                "explanation": "Nope, 'JSON Parsing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "What digital signal is sent when a button is pressed?",
            "answerOptions": [
              {
                "answerText": "0",
                "isCorrect": "false",
                "explanation": "While it depends on if the circuit uses a pull-up or pull-down resistor, a standard active-high button press closes the circuit to send a '1' (HIGH)."
              },
              {
                "answerText": "1",
                "isCorrect": "true",
                "explanation": "Correct! In a standard active-high configuration, pressing the button connects the voltage, sending a '1' (HIGH) to the GPIO pin."
              },
              {
                "answerText": "Data Obfuscation",
                "isCorrect": false,
                "explanation": "Nope, 'Data Obfuscation' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              },
              {
                "answerText": "Firmware Over-The-Air",
                "isCorrect": false,
                "explanation": "Nope, 'Firmware Over-The-Air' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "You can control analog actuators from a digital device using pulse-width modulation",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Yes! PWM works by rapidly turning a digital signal on and off. The average voltage over time simulates a smooth analog signal (like dimming a light)."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Actually, this is True. PWM is the standard technique used by digital microcontrollers to simulate analog outputs."
              }
            ]
          }
        ]
      },
      {
        "id": 7,
        "title": "Lesson 4 - Connect your device to the Internet: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "IoT devices always need to be connected to the Internet to work:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Many devices are designed for 'offline-first' scenarios where they process data locally and only upload when a connection is restored."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Exactly. A smart thermostat, for example, will still control your heater even if your Wi-Fi goes down."
              }
            ]
          },
          {
            "questionText": "IoT devices always communicate over HTTP, the same as web apps and other web APIs:",
            "answerOptions": [
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Because HTTP is very bulky, IoT devices frequently use lightweight, specialized protocols like MQTT or CoAP."
              },
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. HTTP requires too much overhead (headers, TCP handshakes) for constrained, low-bandwidth IoT networks."
              }
            ]
          },
          {
            "questionText": "IoT devices rely on the cloud for all their decision making:",
            "answerOptions": [
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Edge computing empowers devices to make instant, local decisions without waiting for the cloud to respond."
              },
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. If a self-driving car had to wait for a cloud server to tell it to brake, it would crash. Local decision making is critical."
              }
            ]
          }
        ]
      },
      {
        "id": 8,
        "title": "Lesson 4 - Connect your device to the Internet: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Data gathered from sensors and sent to the cloud is called:",
            "answerOptions": [
              {
                "answerText": "Telemetry",
                "isCorrect": "true",
                "explanation": "Correct! Telemetry is the standard term for the continuous stream of raw sensor readings transmitted to a remote system."
              },
              {
                "answerText": "Commands",
                "isCorrect": "false",
                "explanation": "Incorrect. Commands go the opposite way: from the cloud down to the device."
              },
              {
                "answerText": "Measurements",
                "isCorrect": "false",
                "explanation": "Incorrect. While technically true, 'Telemetry' is the specific industry term used in IoT architecture for this data flow."
              },
              {
                "answerText": "Edge Routing",
                "isCorrect": false,
                "explanation": "Nope, 'Edge Routing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "What should happen to a command if the IoT device is offline:",
            "answerOptions": [
              {
                "answerText": "It should always be resent when the device is back online",
                "isCorrect": "false",
                "explanation": "Incorrect. If you sent a command to turn on the sprinklers yesterday, you might not want it executing randomly when it reconnects today in the rain."
              },
              {
                "answerText": "It should never be resent when the device is back online",
                "isCorrect": "false",
                "explanation": "Incorrect. Critical configuration updates absolutely need to be queued and applied whenever the device finally reconnects."
              },
              {
                "answerText": "It depends on the command, the device and the requirements of the IoT app",
                "isCorrect": "true",
                "explanation": "Correct! A command to reboot might need to be queued and resent, but a command to 'unlock the door for 5 seconds' should probably expire if the device is offline."
              }
            ]
          },
          {
            "questionText": "MQTT, or Message Queueing Telemetry Transport, has message queues:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect! Ironically, IBM named it this decades ago, but standard MQTT does not actually use queues; it uses real-time topics and subscriptions."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! It's a trick question. Despite the name, modern MQTT is a pure pub/sub broker protocol and does NOT actually contain standard message queues."
              }
            ]
          }
        ]
      },
      {
        "id": 9,
        "title": "Lesson 5 - Predict plant growth: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "IoT devices can be used to support agriculture",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Absolutely! Smart agriculture (Precision Ag) uses IoT for soil moisture sensing, automated irrigation, and tracking crop health."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Agriculture is actually one of the biggest and most successful adoption sectors for IoT worldwide."
              }
            ]
          },
          {
            "questionText": "Plant needs include: (pick the best answer)",
            "answerOptions": [
              {
                "answerText": "Carbon dioxide, water, nutrients",
                "isCorrect": "false",
                "explanation": "Incorrect. You are missing light (energy for photosynthesis) and warmth (temperature)."
              },
              {
                "answerText": "Carbon dioxide, water, nutrients, light",
                "isCorrect": "false",
                "explanation": "Incorrect. You are missing warmth, as temperature is critical for regulating a plant's metabolic rate."
              },
              {
                "answerText": "Carbon dioxide, water, nutrients, light, warmth",
                "isCorrect": "true",
                "explanation": "Correct! This comprehensive list covers all the biological and environmental factors necessary for optimal photosynthesis and growth."
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          },
          {
            "questionText": "Sensors are too expensive for farmers in developed nations to use:",
            "answerOptions": [
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! The cost of IoT sensors has plummeted, making it highly affordable and profitable for farmers to deploy them across massive fields."
              },
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Modern soil sensors and microcontrollers can cost just a few dollars, providing a massive return on investment in water savings."
              }
            ]
          }
        ]
      },
      {
        "id": 10,
        "title": "Lesson 5 - Predict plant growth: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Plant growth is dependant on temperature",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Yes! Temperature drives the speed of chemical reactions in photosynthesis and metabolism, directly controlling how fast a plant grows."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Temperature is absolutely critical; plants will go dormant if it's too cold and suffer heat stress if it's too hot."
              }
            ]
          },
          {
            "questionText": "The temperatures to consider for plant growth are:",
            "answerOptions": [
              {
                "answerText": "Minimum, maximum",
                "isCorrect": "false",
                "explanation": "Incorrect. You are ignoring the 'optimal' temperature, which is the most important target for a farmer."
              },
              {
                "answerText": "Base, optimal, maximum",
                "isCorrect": "true",
                "explanation": "Correct! 'Base' is where growth starts, 'Optimal' is where growth is fastest, and 'Maximum' is the heat limit before the plant gets damaged."
              },
              {
                "answerText": "Maximum only",
                "isCorrect": "false",
                "explanation": "Incorrect. A plant won't grow if it's freezing, so you definitely have to track the base/minimum temperature as well."
              },
              {
                "answerText": "JSON Parsing",
                "isCorrect": false,
                "explanation": "Nope, 'JSON Parsing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Growing Degree Days are calculated using which formula:",
            "answerOptions": [
              {
                "answerText": "(day max + day min) - plant base",
                "isCorrect": "false",
                "explanation": "Incorrect. You forgot to divide the max and min by 2 to get the daily average."
              },
              {
                "answerText": "((day max + day min) / 2) - plant base",
                "isCorrect": "true",
                "explanation": "Correct! You take the average daily temperature (max+min / 2) and subtract the base threshold to calculate the accumulated heat units."
              },
              {
                "answerText": "((day min + plant base) / 2)",
                "isCorrect": "false",
                "explanation": "Incorrect. This formula completely ignores the maximum temperature reached during the day."
              },
              {
                "answerText": "Data Obfuscation",
                "isCorrect": false,
                "explanation": "Nope, 'Data Obfuscation' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          }
        ]
      },
      {
        "id": 11,
        "title": "Lesson 6 - Detect soil moisture: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "IoT devices can be used to detect ambient properties like soil moisture",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Using resistive or capacitive sensors inserted into the ground, IoT devices are perfect for detecting physical ambient properties like soil moisture."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Detecting physical/ambient properties is literally the primary use case for deploying IoT sensors in the real world."
              }
            ]
          },
          {
            "questionText": "Which of these can cause problems for plant growth (pick one)?",
            "answerOptions": [
              {
                "answerText": "Too little water",
                "isCorrect": "false",
                "explanation": "Incorrect. While true, you are ignoring the fact that overwatering is just as deadly."
              },
              {
                "answerText": "Too much water",
                "isCorrect": "false",
                "explanation": "Incorrect. While true, underwatering is equally bad. Both extremes cause problems."
              },
              {
                "answerText": "Too little or too much water",
                "isCorrect": "true",
                "explanation": "Correct! Both underwatering (drought stress) and overwatering (root rot/lack of oxygen) are detrimental to plant growth."
              },
              {
                "answerText": "Firmware Over-The-Air",
                "isCorrect": false,
                "explanation": "Nope, 'Firmware Over-The-Air' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "All sensors are provided pre-calibrated for standard units:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. While some expensive digital sensors (like an I2C temperature probe) come factory calibrated, most cheap analog IoT sensors require manual calibration in code."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Many basic analog sensors just output raw voltages (e.g. 0-1023). You have to write code to calibrate and map those raw values to standard units like Celsius or percentage."
              }
            ]
          }
        ]
      },
      {
        "id": 12,
        "title": "Lesson 6 - Detect soil moisture: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "When measuring soil moisture, one difference between resistive and capacitive moisture sensors is:",
            "answerOptions": [
              {
                "answerText": "As moisture levels go up the voltage goes up for resistive sensors and down for capacitive sensors",
                "isCorrect": true,
                "explanation": "Correct. Resistive sensors increase their output voltage as the soil gets wetter (water conducts electricity). In contrast, capacitive sensors usually output a lower voltage as water increases due to how the dielectric property of the soil changes."
              },
              {
                "answerText": "As moisture levels go up the voltage goes down for resistive sensors and up for capacitive sensors",
                "isCorrect": false,
                "explanation": "Incorrect. This is entirely backwards. Resistive sensor voltage increases when wet because the water lowers resistance, allowing more current to flow."
              },
              {
                "answerText": "As moisture levels go up the voltage goes up for both resistive and capacitive sensors",
                "isCorrect": false,
                "explanation": "Incorrect. Capacitive sensors react inversely compared to resistive sensors. When soil gets wetter, the capacitive sensor's output voltage drops."
              },
              {
                "answerText": "As moisture levels go up the voltage goes down for both resistive and capacitive sensors",
                "isCorrect": false,
                "explanation": "Incorrect. Resistive sensors output a higher voltage when the soil is wet, not lower."
              }
            ]
          },
          {
            "questionText": "The SPI protocol supports:",
            "answerOptions": [
              {
                "answerText": "Only one controller and only one peripheral",
                "isCorrect": "false",
                "explanation": "Incorrect. You can hook up as many peripherals as you want, provided you have enough free GPIO pins for the Chip Select lines."
              },
              {
                "answerText": "Only one controller and multiple peripherals",
                "isCorrect": "true",
                "explanation": "Correct! SPI uses a single master (controller) that selects which of the many slaves (peripherals) it wants to talk to using individual Chip Select (CS) wires."
              },
              {
                "answerText": "Multiple controllers and multiple peripherals",
                "isCorrect": "false",
                "explanation": "Incorrect. Standard SPI is strictly a single-master protocol. If you need multiple controllers, you use I2C."
              }
            ]
          },
          {
            "questionText": "The I2C protocol supports:",
            "answerOptions": [
              {
                "answerText": "Only one controller and only one peripheral",
                "isCorrect": "false",
                "explanation": "Incorrect. The whole point of the addressing system in I2C is to avoid being limited to just one peripheral."
              },
              {
                "answerText": "Only one controller and multiple peripherals",
                "isCorrect": "false",
                "explanation": "Incorrect. While often used this way, the protocol natively supports multiple controllers."
              },
              {
                "answerText": "Multiple controllers and multiple peripherals",
                "isCorrect": "true",
                "explanation": "Correct! I2C uses digital addressing on a 2-wire bus, allowing any device (multi-master) to initiate communication with any peripheral (multi-slave)."
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          }
        ]
      },
      {
        "id": 13,
        "title": "Lesson 7 - Automated plant watering: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "IoT devices are powerful enough to control water pumps",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": true,
                "explanation": "Correct! While the tiny microcontroller chip cannot provide the high electrical power needed to physically spin the pump's motor, it CAN control a 'Relay'. A relay acts as an electronic switch, allowing the low-power IoT device to safely turn the high-power pump on and off."
              },
              {
                "answerText": "False",
                "isCorrect": false,
                "explanation": "Incorrect. With the help of an electromechanical component called a 'Relay', even a tiny, low-power microcontroller can control massive industrial water pumps."
              }
            ]
          },
          {
            "questionText": "Actuators can be used to control power to additional devices",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! A relay is a type of actuator. When it actuates (physically moves a switch), it controls the heavy power flowing to other devices."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Switching power on and off is one of the most common uses for an actuator (relay)."
              }
            ]
          },
          {
            "questionText": "Sensors detect changes from actuators immediately",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. While electricity moves fast, the physical properties in the real world (heat, water soaking into soil) take time to propagate to the sensor."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Physical systems have latency. If an actuator turns on a heater, it might take minutes for the temperature sensor across the room to detect the change."
              }
            ]
          }
        ]
      },
      {
        "id": 14,
        "title": "Lesson 7 - Automated plant watering: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "A relay is what type of switch:",
            "answerOptions": [
              {
                "answerText": "Electrical",
                "isCorrect": "false",
                "explanation": "Incorrect. While solid-state relays exist, standard relays have moving physical parts."
              },
              {
                "answerText": "Electromechanical",
                "isCorrect": "true",
                "explanation": "Correct! A standard relay uses an electromagnet (electro) to physically pull a metal contact switch (mechanical) closed."
              },
              {
                "answerText": "Mechanical",
                "isCorrect": "false",
                "explanation": "Incorrect. A pure mechanical switch requires a human hand to flip it. A relay uses electricity to flip it."
              },
              {
                "answerText": "JSON Parsing",
                "isCorrect": false,
                "explanation": "Nope, 'JSON Parsing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "A relay allows:",
            "answerOptions": [
              {
                "answerText": "A low power device to control a higher power device",
                "isCorrect": "true",
                "explanation": "Correct! The tiny 3.3V signal from an IoT board triggers the relay's electromagnet, which snaps shut a beefy switch capable of handling 120V/240V mains power."
              },
              {
                "answerText": "A high power device to control a low power device",
                "isCorrect": "false",
                "explanation": "Incorrect. You don't need a relay to step down power (you'd use a transformer/buck converter). Relays step *up* the control authority."
              },
              {
                "answerText": "Runners to run a race passing a baton between them",
                "isCorrect": "false",
                "explanation": "Haha! A good pun, but not the right answer for an IoT electronics exam."
              },
              {
                "answerText": "Data Obfuscation",
                "isCorrect": false,
                "explanation": "Nope, 'Data Obfuscation' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Actuators should always respond instantly to sensor readings:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Reacting instantly to raw, noisy sensor data without a delay or averaging will quickly burn out your mechanical actuators."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! You don't want a water pump flickering on and off rapidly every millisecond a sensor fluctuates. You need logic, delays, and thresholds (hysteresis) to prevent hardware damage."
              }
            ]
          }
        ]
      },
      {
        "id": 15,
        "title": "Lesson 8 - Migrate your plant to the cloud: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "A public MQTT broker is fine to use for a commercial IoT project",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. You should never use a public, unsecured broker for commercial data, as you have no privacy, SLA, or security guarantees."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Public MQTT brokers are meant for testing and tinkering. Anyone can read your topics, which is a massive security and privacy violation for a commercial product."
              }
            ]
          },
          {
            "questionText": "Cloud computing allow you to:",
            "answerOptions": [
              {
                "answerText": "Only rent computers",
                "isCorrect": "false",
                "explanation": "Incorrect. That describes only the lowest level of cloud (IaaS), but ignores the vast majority of modern cloud services."
              },
              {
                "answerText": "Rent computers and application platforms only",
                "isCorrect": "false",
                "explanation": "Incorrect. It includes software (like Office 365) and advanced AI/Serverless services too."
              },
              {
                "answerText": "Rent computers, application platforms, software, serverless platforms and other services",
                "isCorrect": "true",
                "explanation": "Correct! Cloud computing is a massive ecosystem encompassing IaaS (renting VMs), PaaS (App platforms), and SaaS (Software)."
              },
              {
                "answerText": "Firmware Over-The-Air",
                "isCorrect": false,
                "explanation": "Nope, 'Firmware Over-The-Air' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "There are multiple cloud vendors with data centers in many different countries across 6 continents",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Azure, AWS, and Google Cloud have massive global footprints to ensure data can be processed close to users anywhere in the world."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Global reach is one of the primary selling points of major cloud vendors."
              }
            ]
          }
        ]
      },
      {
        "id": 16,
        "title": "Lesson 8 - Migrate your plant to the cloud: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "To request control of an actuator and get a response from an IoT device, app code can use a:",
            "answerOptions": [
              {
                "answerText": "Device to cloud message",
                "isCorrect": "false",
                "explanation": "Incorrect. This goes the wrong way (telemetry flowing up to the cloud)."
              },
              {
                "answerText": "Device twin",
                "isCorrect": "false",
                "explanation": "Incorrect. Device Twins sync state asynchronously; they are not meant for immediate command/response execution."
              },
              {
                "answerText": "Direct method request",
                "isCorrect": "true",
                "explanation": "Correct! Direct Methods act like an HTTP request/response. The cloud calls the method on the device, and the device immediately replies to confirm execution."
              },
              {
                "answerText": "Edge Routing",
                "isCorrect": false,
                "explanation": "Nope, 'Edge Routing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "IoT Hub lets any device connect without any security:",
            "answerOptions": [
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Enterprise IoT Hubs require strict authentication (SAS tokens or X.509 certificates) before they will let a device connect and send data."
              },
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Allowing unauthenticated devices to connect would result in immediate flooding and hacking of the cloud backend."
              }
            ]
          },
          {
            "questionText": "IoT Hub names must be unique:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Because your IoT Hub acts as an endpoint on the public internet (e.g. yourhub.azure-devices.net), its name must be globally unique across the entire cloud platform."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. DNS requires globally unique domain names, so the Hub name must be unique."
              }
            ]
          }
        ]
      },
      {
        "id": 17,
        "title": "Lesson 9 - Migrate your application logic to the cloud: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "You can use Serverless code to respond to IoT events",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Event-driven Serverless architectures (like Azure Functions) are the standard way to automatically execute code the moment IoT telemetry arrives."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Serverless computing is practically built for reacting to sporadic event streams like IoT data."
              }
            ]
          },
          {
            "questionText": "When you send IoT events to IoT Hub:",
            "answerOptions": [
              {
                "answerText": "Only one service can read events off the IoT Hub",
                "isCorrect": "false",
                "explanation": "Incorrect. Restricting reads to a single service defeats the pub/sub event distribution model."
              },
              {
                "answerText": "Any number of services can read events off the IoT Hub",
                "isCorrect": "true",
                "explanation": "Correct! By using 'consumer groups', multiple downstream cloud applications can independently read and process the exact same stream of telemetry."
              },
              {
                "answerText": "Services cannot read events from IoT Hub, they have to connect to the device directly",
                "isCorrect": "false",
                "explanation": "Incorrect. Devices are often behind firewalls and sleep frequently; the Hub buffers the data so cloud services can read it reliably."
              }
            ]
          },
          {
            "questionText": "When reading events off IoT hub, you can only do so using code that runs in the cloud",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. There is no strict limitation preventing authorized on-premise infrastructure from consuming the event stream."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! While cloud services commonly read from IoT Hub, you can use SDKs to read events from local, on-premise servers or edge devices as well."
              }
            ]
          }
        ]
      },
      {
        "id": 18,
        "title": "Lesson 9 - Migrate your application logic to the cloud: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Azure Functions can be run and debugged locally:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Using the Azure Functions Core Tools, you can run the exact same serverless runtime on your local laptop to test and debug before pushing to the cloud."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Microsoft specifically built a local emulator environment exactly for this purpose."
              }
            ]
          },
          {
            "questionText": "Serverless code can only be written in JavaScript and COBOL:",
            "answerOptions": [
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Modern serverless platforms natively support Python, C#, Java, Go, PowerShell, and TypeScript."
              },
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. COBOL is a legacy mainframe language rarely used for serverless, and JS is definitely not the only option available."
              }
            ]
          },
          {
            "questionText": "When deploying a Functions App to the cloud, you need to create and deploy:",
            "answerOptions": [
              {
                "answerText": "A Functions App only",
                "isCorrect": "false",
                "explanation": "Incorrect. A Functions App cannot exist in a vacuum; it strictly requires a backing storage account."
              },
              {
                "answerText": "A Functions App and a Storage Account only",
                "isCorrect": "false",
                "explanation": "Incorrect. Without Application Settings, your code wouldn't know how to securely connect to external resources."
              },
              {
                "answerText": "A Functions App, a Storage Account, and Application Settings",
                "isCorrect": "true",
                "explanation": "Correct! A serverless Functions App relies on a Storage Account to hold its execution code/state, and Application Settings for environment configurations (like DB connection strings)."
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          }
        ]
      },
      {
        "id": 19,
        "title": "Lesson 10 - Keep your plant secure: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "IoT devices are always secure",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Definitely not! Because they are often cheap and mass-produced, IoT devices are notorious for massive security vulnerabilities."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct. Security is a major challenge in IoT. Devices often have weak default passwords, unpatched firmware, and minimal encryption capabilities."
              }
            ]
          },
          {
            "questionText": "There are no documented cases of hackers using an IoT device to hack into a network:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. The Mirai Botnet, for example, took down major parts of the internet by hacking hundreds of thousands of insecure IoT cameras."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! There are many famous cases, including hackers breaching a casino's high-roller database by hacking into an internet-connected fish tank thermometer on the same network."
              }
            ]
          },
          {
            "questionText": "You can share your IoT device connection string with anyone",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Sharing your connection string is like sharing the password to your bank account."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! The connection string contains the secret authentication keys. If you share it, anyone can impersonate your device and send malicious data to your cloud."
              }
            ]
          }
        ]
      },
      {
        "id": 20,
        "title": "Lesson 10 - Keep your plant secure: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Symmetric key encryption compares to asymmetric key encryption in which ways:",
            "answerOptions": [
              {
                "answerText": "Symmetric key encryption is slower than asymmetric",
                "isCorrect": "false",
                "explanation": "Incorrect. Symmetric encryption (like AES) is mathematically much simpler and drastically faster than asymmetric (RSA)."
              },
              {
                "answerText": "Symmetric key encryption is more secure than asymmetric",
                "isCorrect": "false",
                "explanation": "Incorrect. Because both parties need the exact same secret key, it poses massive key-management security risks."
              },
              {
                "answerText": "Symmetric key encryption is faster than asymmetric, but less secure",
                "isCorrect": "true",
                "explanation": "Correct! Symmetric encryption (using one shared key) uses less compute power, but distributing that single key securely over the network is inherently riskier than asymmetric public/private keys."
              },
              {
                "answerText": "Symmetric key encryption is slower than asymmetric, but more secure",
                "isCorrect": "false",
                "explanation": "Incorrect. It is neither slower, nor is it considered more secure."
              }
            ]
          },
          {
            "questionText": "Self-signed X.509 certificates are ideal for a production environment",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. If a device trusts a self-signed cert, a hacker could easily intercept the connection with their own self-signed cert and spoof the server."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Self-signed certs are great for local testing, but in production, you should use certificates signed by a trusted Root Certificate Authority (CA) to prevent man-in-the-middle attacks."
              }
            ]
          },
          {
            "questionText": "X.509 certificates:",
            "answerOptions": [
              {
                "answerText": "Should never be shared between IoT devices",
                "isCorrect": true,
                "explanation": "Correct! Every single IoT device must have its own unique X.509 certificate (its 'passport'). If they share one, you cannot identify which specific device was hacked, and revoking the compromised certificate would break all the other devices using it."
              },
              {
                "answerText": "Can be shared between devices",
                "isCorrect": false,
                "explanation": "Incorrect. If multiple devices share the same certificate, you completely destroy the ability to securely audit, authenticate, or revoke individual compromised devices."
              }
            ]
          }
        ]
      },
      {
        "id": 21,
        "title": "Lesson 11 - Location tracking: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Your location can be defined using",
            "answerOptions": [
              {
                "answerText": "Latitude only",
                "isCorrect": "false",
                "explanation": "Incorrect. Latitude only tells you how far North or South you are. You could be anywhere on that entire horizontal ring around the Earth."
              },
              {
                "answerText": "Longitude only",
                "isCorrect": "false",
                "explanation": "Incorrect. Longitude only tells you how far East or West you are. You could be anywhere on that entire vertical line from the North to the South Pole."
              },
              {
                "answerText": "Latitude and Longitude",
                "isCorrect": "true",
                "explanation": "Correct! Latitude (North/South) and Longitude (East/West) provide the exact coordinate pair needed to pinpoint any location on Earth."
              },
              {
                "answerText": "Data Obfuscation",
                "isCorrect": false,
                "explanation": "Nope, 'Data Obfuscation' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "The types of sensors that can track your location are called:",
            "answerOptions": [
              {
                "answerText": "GPS",
                "isCorrect": "true",
                "explanation": "Correct! GPS (Global Positioning System) sensors receive signals from orbiting satellites to triangulate your exact position."
              },
              {
                "answerText": "PGP",
                "isCorrect": "false",
                "explanation": "Incorrect. PGP stands for Pretty Good Privacy, which is an encryption program used for signing, encrypting, and decrypting texts and emails."
              },
              {
                "answerText": "GIF",
                "isCorrect": "false",
                "explanation": "Incorrect. A GIF is an image format, mostly used for short looping animations on the internet."
              },
              {
                "answerText": "Firmware Over-The-Air",
                "isCorrect": false,
                "explanation": "Nope, 'Firmware Over-The-Air' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "There is no value in tracking vehicle locations",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Logistics companies like FedEx and Uber literally could not exist without real-time vehicle location tracking."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Tracking vehicle locations is a massive industry. It's essential for fleet management, logistics, public transit tracking, and ride-sharing apps."
              }
            ]
          }
        ]
      },
      {
        "id": 22,
        "title": "Lesson 11 - Location tracking: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "GPS data is sent from sensors using:",
            "answerOptions": [
              {
                "answerText": "Latitude and Longitude coordinates",
                "isCorrect": "false",
                "explanation": "Incorrect. While it *contains* coordinates, the actual raw data format/protocol sent over the wire is called NMEA."
              },
              {
                "answerText": "Addresses",
                "isCorrect": "false",
                "explanation": "Incorrect. GPS satellites have no concept of street addresses. They only calculate mathematical coordinates. Converting that to an address is called 'Reverse Geocoding'."
              },
              {
                "answerText": "NMEA sentences",
                "isCorrect": "true",
                "explanation": "Correct! The National Marine Electronics Association (NMEA) standard is the universal text-based protocol that GPS receivers use to output data."
              },
              {
                "answerText": "Edge Routing",
                "isCorrect": false,
                "explanation": "Nope, 'Edge Routing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "To get a good GPS fix you need to receive signals from at least how many satellites",
            "answerOptions": [
              {
                "answerText": "1",
                "isCorrect": "false",
                "explanation": "Incorrect. One satellite only tells you how far away you are from that specific satellite, which leaves you anywhere on a massive sphere."
              },
              {
                "answerText": "2",
                "isCorrect": "false",
                "explanation": "Incorrect. Two satellites only give you a circle of possible locations where their signals intersect. You need a 3rd to narrow it down to two points (one being in space)."
              },
              {
                "answerText": "3",
                "isCorrect": "true",
                "explanation": "Correct! You need at least 3 satellites to mathematically triangulate a 2D position (latitude and longitude) using intersecting spheres."
              }
            ]
          },
          {
            "questionText": "GPS sensors send data over:",
            "answerOptions": [
              {
                "answerText": "SPI",
                "isCorrect": "false",
                "explanation": "Incorrect. While some advanced modules support SPI, UART is the overwhelming industry standard for simple GPS text streaming."
              },
              {
                "answerText": "UART",
                "isCorrect": "true",
                "explanation": "Correct! Most raw GPS modules use UART (Universal Asynchronous Receiver-Transmitter) to stream NMEA sentences serially to the microcontroller."
              },
              {
                "answerText": "Email",
                "isCorrect": "false",
                "explanation": "Incorrect. GPS modules are offline sensors that just output text over a wire. They don't have networking capabilities to send emails."
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          }
        ]
      },
      {
        "id": 23,
        "title": "Lesson 12 - Store location data: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "IoT data is stored by IoT Hub",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. While IoT hub buffers messages for a short time (retention period), you must route them to a database for actual storage."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! IoT Hub is a message router, not a database. It ingests the telemetry and forwards it, but it does not provide permanent data storage."
              }
            ]
          },
          {
            "questionText": "Data can be divided into the following two types",
            "answerOptions": [
              {
                "answerText": "Blob and table",
                "isCorrect": "false",
                "explanation": "Incorrect. Those are specific Azure storage *services*, not the fundamental computer science classifications of data types."
              },
              {
                "answerText": "Structured and unstructured",
                "isCorrect": "true",
                "explanation": "Correct! Structured data fits neatly into tables and columns (like SQL databases), while unstructured data includes things like images, video, and loose JSON documents."
              },
              {
                "answerText": "Red and blue",
                "isCorrect": "false",
                "explanation": "Incorrect. This sounds like the Matrix pills, not data classifications!"
              },
              {
                "answerText": "JSON Parsing",
                "isCorrect": false,
                "explanation": "Nope, 'JSON Parsing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Serverless code can be used to write IoT data to a database",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! A very common architecture is using an Azure Function (Serverless) triggered by IoT Hub to parse the telemetry and save it into a database like CosmosDB."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Serverless functions are arguably the *most* popular way to connect IoT streams to databases."
              }
            ]
          }
        ]
      },
      {
        "id": 24,
        "title": "Lesson 12 - Store location data: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "IoT data that needs to be processed immediately is on which path:",
            "answerOptions": [
              {
                "answerText": "Hot",
                "isCorrect": "true",
                "explanation": "Correct! The 'Hot' path is for real-time processing and immediate action (like triggering an alarm if a machine overheats)."
              },
              {
                "answerText": "Warm",
                "isCorrect": "false",
                "explanation": "Incorrect. The 'Warm' path is for reporting and analytics over recent data (like showing a dashboard of the last 24 hours)."
              },
              {
                "answerText": "Cold",
                "isCorrect": "false",
                "explanation": "Incorrect. The 'Cold' path is for long-term archival storage and batch processing (like analyzing years of historical data)."
              },
              {
                "answerText": "Data Obfuscation",
                "isCorrect": false,
                "explanation": "Nope, 'Data Obfuscation' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Azure storage has the following storage types:",
            "answerOptions": [
              {
                "answerText": "Boxes, tubs, bins",
                "isCorrect": "false",
                "explanation": "Incorrect. These are physical storage containers you'd find in a garage, not cloud computing services!"
              },
              {
                "answerText": "Blob, table, queue and file",
                "isCorrect": "true",
                "explanation": "Correct! These are the four core services provided by an Azure Storage Account."
              },
              {
                "answerText": "Hot, warm, cold",
                "isCorrect": "false",
                "explanation": "Incorrect. These refer to data processing *paths* or blob storage *access tiers*, not the actual structural storage types."
              },
              {
                "answerText": "Firmware Over-The-Air",
                "isCorrect": false,
                "explanation": "Nope, 'Firmware Over-The-Air' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Azure Functions can be bound to database to write return values to the database",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Azure Functions support 'Output Bindings', which let you seamlessly write the function's return value directly into a database without writing boilerplate connection code."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Output bindings are one of the most powerful features of Serverless functions."
              }
            ]
          }
        ]
      },
      {
        "id": 25,
        "title": "Lesson 13 - Visualize location data: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Very large tables of data are an easy way to quickly look up data",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. As a table grows to millions of rows, looking up data becomes very difficult without proper indexing and partitioning."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! If a table is massive and unindexed, searching through it (a full table scan) is extremely slow and inefficient."
              }
            ]
          },
          {
            "questionText": "GPS data can be visualized on maps",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! By mapping the latitude and longitude coordinates to a visual grid, you can plot GPS data on interactive maps."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Plotting coordinates on a map is the entire basis of modern navigation software like Google Maps."
              }
            ]
          },
          {
            "questionText": "On maps of large areas, the same distance drawn on the map represents the same distance on the real world no matter where on the map the measurement is taken",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Map projections distort physical reality. For example, Greenland looks as big as Africa on a flat map, but Africa is actually 14 times larger!"
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Because the Earth is a sphere, flattening it onto a 2D map (like the Mercator projection) severely distorts distances and sizes, especially near the poles."
              }
            ]
          }
        ]
      },
      {
        "id": 26,
        "title": "Lesson 13 - Visualize location data: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "The service to draw maps on a web page is called:",
            "answerOptions": [
              {
                "answerText": "Azure Maps",
                "isCorrect": "true",
                "explanation": "Correct! Azure Maps provides geospatial APIs to add maps, spatial analytics, and mobility solutions to applications."
              },
              {
                "answerText": "Azure Atlas",
                "isCorrect": "false",
                "explanation": "Incorrect. While Azure has services with 'Atlas' in the name (like Purview/Data Atlas), the mapping service is explicitly called Azure Maps."
              },
              {
                "answerText": "Azure World VIsualizer",
                "isCorrect": "false",
                "explanation": "Incorrect. This is a made-up service name."
              },
              {
                "answerText": "Edge Routing",
                "isCorrect": false,
                "explanation": "Nope, 'Edge Routing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Azure maps plots data using:",
            "answerOptions": [
              {
                "answerText": "GeoJSON",
                "isCorrect": "true",
                "explanation": "Correct! GeoJSON is an open standard format designed for representing simple geographical features, along with their non-spatial attributes."
              },
              {
                "answerText": "Lists of latitude and longitude",
                "isCorrect": "false",
                "explanation": "Incorrect. While it uses coordinates under the hood, the API standardizes on the structured GeoJSON format to include metadata."
              },
              {
                "answerText": "Lists of addresses",
                "isCorrect": "false",
                "explanation": "Incorrect. The map rendering engine works strictly on mathematical coordinates, not text addresses."
              }
            ]
          },
          {
            "questionText": "Blobs can be retrieved via a URL",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Azure Blob Storage objects can be accessed over HTTP/HTTPS using a direct URL, making them perfect for serving images or JSON files to web apps."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. URL access is a fundamental feature of Blob Storage."
              }
            ]
          }
        ]
      },
      {
        "id": 27,
        "title": "Lesson 14 - Geofences: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "GPS coordinates can be used to check if something is in a defined area",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! This concept is known as Geofencing\u2014creating a virtual geographic boundary and checking if a coordinate falls inside it."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Mathematical boundary checking against coordinates is exactly how location-based alerts work."
              }
            ]
          },
          {
            "questionText": "GPS is incredibly accurate so can indicate with precision of less than 1M when a device enters a given area",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. While military or RTK GPS can achieve sub-meter precision, standard commercial IoT GPS cannot guarantee <1m accuracy."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Standard consumer GPS is usually only accurate to about 3 to 10 meters, easily affected by buildings, trees, and atmospheric conditions."
              }
            ]
          },
          {
            "questionText": "Geofences are useful when tracking vehicles to:",
            "answerOptions": [
              {
                "answerText": "Determine when a vehicle enters a given area only",
                "isCorrect": "false",
                "explanation": "Incorrect. You can also trigger logic when the vehicle exits the boundary."
              },
              {
                "answerText": "Determine when a vehicle leaves a given area only",
                "isCorrect": "false",
                "explanation": "Incorrect. You can also trigger logic when the vehicle enters the boundary."
              },
              {
                "answerText": "Determine when a vehicle enters or leaves a given area",
                "isCorrect": "true",
                "explanation": "Correct! You can trigger events both on 'entry' (like a delivery truck arriving) and on 'exit' (like a rental car leaving a permitted zone)."
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          }
        ]
      },
      {
        "id": 28,
        "title": "Lesson 14 - Geofences: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "To have multiple services pull data from an IoT Hub, you need to create multiple:",
            "answerOptions": [
              {
                "answerText": "Consumer groups",
                "isCorrect": "true",
                "explanation": "Correct! A consumer group provides a distinct view into the event stream, allowing multiple apps to read the same data at their own pace."
              },
              {
                "answerText": "Pipes",
                "isCorrect": "false",
                "explanation": "Incorrect. 'Pipes' is a generic computing term, not the Azure IoT terminology for pub/sub reading."
              },
              {
                "answerText": "IoT Hubs",
                "isCorrect": "false",
                "explanation": "Incorrect. Creating multiple Hubs for the same data would be insanely expensive and architecturally wrong."
              },
              {
                "answerText": "JSON Parsing",
                "isCorrect": false,
                "explanation": "Nope, 'JSON Parsing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "The default search buffer for a geofence call is:",
            "answerOptions": [
              {
                "answerText": "5m",
                "isCorrect": "false",
                "explanation": "Incorrect. 5 meters is too tight; normal GPS drift would constantly trigger false 'exit' events."
              },
              {
                "answerText": "50m",
                "isCorrect": "true",
                "explanation": "Correct! Because GPS data can drift and jitter, Azure Maps Geofencing APIs typically use a default 50-meter search buffer to smooth out inaccuracies."
              },
              {
                "answerText": "500m",
                "isCorrect": "false",
                "explanation": "Incorrect. Half a kilometer is far too wide for precise tracking, negating the point of a tight geofence."
              },
              {
                "answerText": "Data Obfuscation",
                "isCorrect": false,
                "explanation": "Nope, 'Data Obfuscation' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Points inside the geofence have a distance:",
            "answerOptions": [
              {
                "answerText": "Less than 0 (a negative value)",
                "isCorrect": "true",
                "explanation": "Correct! In spatial computing, the distance to the boundary is negative if you are inside, zero if you are on the line, and positive if you are outside."
              },
              {
                "answerText": "Greater than 0 (a positive value)",
                "isCorrect": "false",
                "explanation": "Incorrect. Positive values indicate how far *away* (outside) you are from the geofence boundary."
              },
              {
                "answerText": "Firmware Over-The-Air",
                "isCorrect": false,
                "explanation": "Nope, 'Firmware Over-The-Air' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              },
              {
                "answerText": "Edge Routing",
                "isCorrect": false,
                "explanation": "Nope, 'Edge Routing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          }
        ]
      },
      {
        "id": 29,
        "title": "Lesson 15 - Train a fruit quality detector: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Cameras can be used as IoT sensors",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! A camera is essentially a massive array of light sensors. With edge computing, cameras are incredibly powerful IoT sensors for vision tasks."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Smart cameras are some of the most common IoT devices in retail and security."
              }
            ]
          },
          {
            "questionText": "Fruit can be sorted using cameras",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Using Image Classification or Object Detection, an IoT camera can easily identify overripe or damaged fruit on a conveyor belt."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Automated optical sorting is a massive industry in modern agriculture."
              }
            ]
          },
          {
            "questionText": "Images-based AI models are incredibly complex and time consuming to train, requiring hundreds of thousands of images:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. While training a foundational model from scratch takes immense data, customizing an existing one (Transfer Learning) is fast and easy."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Thanks to 'Transfer Learning', we can take massive pre-trained models and fine-tune them for specific tasks using just a few dozen images in minutes."
              }
            ]
          }
        ]
      },
      {
        "id": 30,
        "title": "Lesson 15 - Train a fruit quality detector: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "The technique custom vision uses to train a model with only a few images is called:",
            "answerOptions": [
              {
                "answerText": "Transformational learning",
                "isCorrect": "false",
                "explanation": "Incorrect. This is an educational theory for human psychology, not an AI term."
              },
              {
                "answerText": "Transaction learning",
                "isCorrect": "false",
                "explanation": "Incorrect. This sounds like database management, not machine learning."
              },
              {
                "answerText": "Transfer learning",
                "isCorrect": "true",
                "explanation": "Correct! It takes the 'knowledge' the model already learned from millions of general images and 'transfers' it to recognize your specific few images."
              }
            ]
          },
          {
            "questionText": "Image classifiers can be trained using:",
            "answerOptions": [
              {
                "answerText": "Only 1 image per tag",
                "isCorrect": "false",
                "explanation": "Incorrect. One image isn't enough for the model to generalize what the object actually looks like across different angles or lighting."
              },
              {
                "answerText": "At least 5 images per tag",
                "isCorrect": "true",
                "explanation": "Correct! Azure Custom Vision requires a minimum of 5 images per tag to perform transfer learning (though 50+ is highly recommended for accuracy)."
              },
              {
                "answerText": "At least 50 images per tag",
                "isCorrect": "false",
                "explanation": "Incorrect. While 50 is a great best practice, the hard technical minimum required by the platform to begin training is only 5."
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          },
          {
            "questionText": "The hardware that allows ML models to be trained quickly, as well as making the graphics on out Xbox look amazing are called:",
            "answerOptions": [
              {
                "answerText": "PGU",
                "isCorrect": "false",
                "explanation": "Incorrect. This is just a scramble of the acronym."
              },
              {
                "answerText": "GPU",
                "isCorrect": "true",
                "explanation": "Correct! Graphics Processing Units (GPUs) are designed to perform thousands of mathematical calculations in parallel, perfect for both rendering graphics and matrix math in AI."
              },
              {
                "answerText": "PUG",
                "isCorrect": "false",
                "explanation": "Incorrect. A pug is a small, wrinkly dog. They are terrible at matrix multiplication."
              },
              {
                "answerText": "JSON Parsing",
                "isCorrect": false,
                "explanation": "Nope, 'JSON Parsing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          }
        ]
      },
      {
        "id": 31,
        "title": "Lesson 16 - Check fruit quality from an IoT device: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "IoT devices are not powerful enough to use cameras:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "No, that's True. In the real world of IoT, this operates differently."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Absolutely False. This is a fundamental rule of how this IoT concept works."
              }
            ]
          },
          {
            "questionText": "Camera sensors use film to capture images",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "No, that's True. In the real world of IoT, this operates differently."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Absolutely False. This is a fundamental rule of how this IoT concept works."
              }
            ]
          },
          {
            "questionText": "Camera sensors send which type of data",
            "answerOptions": [
              {
                "answerText": "Digital",
                "isCorrect": "true",
                "explanation": "Spot on! 'Digital' is exactly the right definition here."
              },
              {
                "answerText": "Analog",
                "isCorrect": "false",
                "explanation": "Nope, 'Analog' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              },
              {
                "answerText": "Data Obfuscation",
                "isCorrect": false,
                "explanation": "Nope, 'Data Obfuscation' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              },
              {
                "answerText": "Firmware Over-The-Air",
                "isCorrect": false,
                "explanation": "Nope, 'Firmware Over-The-Air' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          }
        ]
      },
      {
        "id": 32,
        "title": "Lesson 16 - Check fruit quality from an IoT device: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "A published version of a custom vision model is called an:",
            "answerOptions": [
              {
                "answerText": "Iteration",
                "isCorrect": "true",
                "explanation": "Exactly. 'Iteration' accurately captures the core idea behind this concept."
              },
              {
                "answerText": "Instance",
                "isCorrect": "false",
                "explanation": "Nope, 'Instance' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              },
              {
                "answerText": "Iguana",
                "isCorrect": "false",
                "explanation": "Nope, 'Iguana' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              },
              {
                "answerText": "Edge Routing",
                "isCorrect": false,
                "explanation": "Nope, 'Edge Routing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "When images are sent for classification, they then become available to retrain the model:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Absolutely True. This is a fundamental rule of how this IoT concept works."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "No, that's False. In the real world of IoT, this operates differently."
              }
            ]
          },
          {
            "questionText": "You don't need to use images captured from an IoT device to train the model as the cameras are as good quality as phone cameras:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "No, that's True. In the real world of IoT, this operates differently."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Absolutely False. This is a fundamental rule of how this IoT concept works."
              }
            ]
          }
        ]
      },
      {
        "id": 33,
        "title": "Lesson 17 - Run your fruit detector on the edge: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Edge computing can be more secure than cloud computing.",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Absolutely True. This is a fundamental rule of how this IoT concept works."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "No, that's False. In the real world of IoT, this operates differently."
              }
            ]
          },
          {
            "questionText": "Running an ML model on an edge device is less accurate than running an ML model in the cloud.",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "No, that's True. In the real world of IoT, this operates differently."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Absolutely False. This is a fundamental rule of how this IoT concept works."
              }
            ]
          },
          {
            "questionText": "Edge devices always need an Internet connection.",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "No, that's True. In the real world of IoT, this operates differently."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Absolutely False. This is a fundamental rule of how this IoT concept works."
              }
            ]
          }
        ]
      },
      {
        "id": 34,
        "title": "Lesson 17 - Run your fruit detector on the edge: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "What kind of format or domain do we need for Custom Vision ML models to properly run on an edge device?",
            "answerOptions": [
              {
                "answerText": "General",
                "isCorrect": "false",
                "explanation": "Nope, 'General' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              },
              {
                "answerText": "Quick Training",
                "isCorrect": "false",
                "explanation": "Nope, 'Quick Training' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              },
              {
                "answerText": "Standard",
                "isCorrect": "false",
                "explanation": "Nope, 'Standard' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              },
              {
                "answerText": "Compact",
                "isCorrect": "true",
                "explanation": "Exactly. 'Compact' accurately captures the core idea behind this concept."
              },
              {
                "answerText": "Food",
                "isCorrect": "false",
                "explanation": "Nope, 'Food' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              },
              {
                "answerText": "Remote Deployment",
                "isCorrect": "false",
                "explanation": "Nope, 'Remote Deployment' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "What is a container?",
            "answerOptions": [
              {
                "answerText": "Self-contained applications that hold ML models.",
                "isCorrect": "false",
                "explanation": "Incorrect. 'Self-contained applications that hold ML models.' completely misses the mark on how this specific IoT feature functions."
              },
              {
                "answerText": "Self-contained applications that run in isolation from other programs.",
                "isCorrect": "true",
                "explanation": "Spot on! 'Self-contained applications that run in isolation from other programs.' is exactly the right definition here."
              },
              {
                "answerText": "Self-contained applications that run programs only on edge devices.",
                "isCorrect": "false",
                "explanation": "Incorrect. 'Self-contained applications that run programs only on edge devices.' completely misses the mark on how this specific IoT feature functions."
              },
              {
                "answerText": "self-contained applications that handle communication between the cloud and edge devices.",
                "isCorrect": "false",
                "explanation": "Incorrect. 'self-contained applications that handle communication between the cloud and edge devices.' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          },
          {
            "questionText": "How do you do Custom Vision model retraining for ML models deployed on edge devices?",
            "answerOptions": [
              {
                "answerText": "Take images on the edge device, save to the edge device, and point the ML model to the new image folder.",
                "isCorrect": "false",
                "explanation": "Incorrect. 'Take images on the edge device, save to the edge device, and point the ML model to the new image folder.' completely misses the mark on how this specific IoT feature functions."
              },
              {
                "answerText": "Upload images from the edge device to the cloud, retrain the model in Custom Vision, then re-deploy onto the edge device.",
                "isCorrect": "true",
                "explanation": "Exactly. 'Upload images from the edge device to the cloud, retrain the model in Custom Vision, then re-deploy onto the edge device.' accurately captures the core idea behind this concept."
              },
              {
                "answerText": "Take images on the edge device and check the prediction output.",
                "isCorrect": "false",
                "explanation": "Incorrect. 'Take images on the edge device and check the prediction output.' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          }
        ]
      },
      {
        "id": 35,
        "title": "Lesson 18 - Trigger fruit quality detection from a sensor: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Which part of your IoT application gathers data?",
            "answerOptions": [
              {
                "answerText": "Things",
                "isCorrect": "true",
                "explanation": "Correct! 'Things' (the devices and their sensors) are the physical components placed in the real world to gather data."
              },
              {
                "answerText": "Cloud services",
                "isCorrect": "false",
                "explanation": "Incorrect. Cloud services process and store the data, they don't gather it physically."
              },
              {
                "answerText": "Edge devices",
                "isCorrect": "false",
                "explanation": "Incorrect. While Edge devices sit near the 'Things', the actual gathering is done by the Things (sensors) themselves."
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          },
          {
            "questionText": "The only outputs of an IoT application are actuators.",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Actuators are physical outputs, but many IoT systems are purely analytical (e.g., tracking a truck's location on a screen)."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Outputs can be software actions too\u2014like sending an email alert, updating a database, or rendering a dashboard graph."
              }
            ]
          },
          {
            "questionText": "Things don't need to connect directly to IoT Hub, they can use edge devices as gateways.",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Tiny, low-power sensors (like Bluetooth LE tags) can send data to a local Edge Gateway (like a Raspberry Pi), which then securely forwards everything to IoT Hub."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. In many architectures, 'Things' are too weak to run TLS encryption and must rely on Edge Gateways to bridge the connection."
              }
            ]
          }
        ]
      },
      {
        "id": 36,
        "title": "Lesson 18 - Trigger fruit quality detection from a sensor: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "The three components of architecting an IoT application are",
            "answerOptions": [
              {
                "answerText": "Things, Insights, Actions",
                "isCorrect": "true",
                "explanation": "Correct! You use *Things* to gather data, analyze it in the cloud to generate *Insights*, and trigger *Actions* based on those insights."
              },
              {
                "answerText": "Things, Internet, Databases",
                "isCorrect": "false",
                "explanation": "Incorrect. Those are implementation details, not the high-level conceptual pillars of an IoT architecture."
              },
              {
                "answerText": "AI, Blockchain, FizzBuzzers",
                "isCorrect": "false",
                "explanation": "Incorrect. Blockchain and FizzBuzzers are completely unrelated to the fundamental IoT architecture."
              },
              {
                "answerText": "JSON Parsing",
                "isCorrect": false,
                "explanation": "Nope, 'JSON Parsing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "The component that communicates between the things and the components that create insights is:",
            "answerOptions": [
              {
                "answerText": "Azure Functions",
                "isCorrect": "false",
                "explanation": "Incorrect. Functions are often used *after* the Hub to process the data, not as the primary device communication gateway."
              },
              {
                "answerText": "IoT Hub",
                "isCorrect": "true",
                "explanation": "Correct! IoT Hub sits exactly in the middle as the cloud gateway, securely ingesting telemetry from Things and routing it to backend analytics (Insights)."
              },
              {
                "answerText": "Azure Maps",
                "isCorrect": "false",
                "explanation": "Incorrect. Azure Maps is an insight/visualization service, not a device communication broker."
              },
              {
                "answerText": "Data Obfuscation",
                "isCorrect": false,
                "explanation": "Nope, 'Data Obfuscation' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "How do time of flight proximity sensors work?",
            "answerOptions": [
              {
                "answerText": "They send laser beams and time how long till they bounce off an object",
                "isCorrect": "true",
                "explanation": "Correct! Time of Flight (ToF) sensors shoot safe infrared lasers (photons) and precisely measure the nanoseconds it takes for the light to bounce back."
              },
              {
                "answerText": "They use sound and measure how long till the sound bounces off an object",
                "isCorrect": "false",
                "explanation": "Incorrect. That describes an Ultrasonic sensor, not a Time of Flight (optical) sensor."
              },
              {
                "answerText": "They use very large rulers",
                "isCorrect": "false",
                "explanation": "Haha, incorrect. While mechanical probing exists, 'Time of Flight' refers to the speed of light."
              },
              {
                "answerText": "Firmware Over-The-Air",
                "isCorrect": false,
                "explanation": "Nope, 'Firmware Over-The-Air' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          }
        ]
      },
      {
        "id": 37,
        "title": "Lesson 19 - Train a stock detector: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "AI models cannot be used to count objects?",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Counting objects on a shelf or on a conveyor belt is one of the most common commercial uses of computer vision."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Object Detection models (like YOLO) draw bounding boxes around specific items. By simply counting the number of boxes, the AI acts as an incredibly accurate object counter."
              }
            ]
          },
          {
            "questionText": "IoT and AI can be used in retail for:",
            "answerOptions": [
              {
                "answerText": "Stock checking only",
                "isCorrect": "false",
                "explanation": "Incorrect. While inventory is a huge use case, limiting IoT/AI to just that ignores security, analytics, and automation."
              },
              {
                "answerText": "A wide range of uses including stock checking, monitoring for mask where where required, tracking footfall, automated billing",
                "isCorrect": "true",
                "explanation": "Correct! Smart retail utilizes cameras and sensors for inventory, security, foot traffic analytics, and even cashier-less checkout (like Amazon Go)."
              },
              {
                "answerText": "IoT and AI cannot be used in retail",
                "isCorrect": "false",
                "explanation": "Incorrect. Retail is one of the fastest-growing sectors for IoT deployment."
              },
              {
                "answerText": "Edge Routing",
                "isCorrect": false,
                "explanation": "Nope, 'Edge Routing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Object detection involves:",
            "answerOptions": [
              {
                "answerText": "Detecting objects in an image and tracking their location and probability",
                "isCorrect": "true",
                "explanation": "Correct! Object detection differs from basic classification because it tells you *what* the object is (probability), and exactly *where* it is in the frame (location/bounding box)."
              },
              {
                "answerText": "Counting objects in an image only",
                "isCorrect": "false",
                "explanation": "Incorrect. While you can count the results, the model itself is outputting coordinate locations and confidence scores."
              },
              {
                "answerText": "Classifying images",
                "isCorrect": "false",
                "explanation": "Incorrect. Classification just tells you 'This image contains a dog.' Object Detection tells you 'There is a dog at X:100, Y:200'."
              }
            ]
          }
        ]
      },
      {
        "id": 38,
        "title": "Lesson 19 - Train a stock detector: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Object detectors only return one result no matter how many objects are detected",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. If there are 50 apples in a crate, a well-trained object detector will return 50 distinct bounding boxes."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! An object detector will return an array containing a separate bounding box and label for *every single* object it finds in the frame."
              }
            ]
          },
          {
            "questionText": "What is the best domain to use in Custom Vision for stock counting",
            "answerOptions": [
              {
                "answerText": "General",
                "isCorrect": "false",
                "explanation": "Incorrect. While it would work, using the specialized 'Products on shelves' domain yields much higher accuracy for retail scenarios."
              },
              {
                "answerText": "Food",
                "isCorrect": "false",
                "explanation": "Incorrect. A food domain is optimized for classifying dishes (like a burger vs salad), not counting identical packaged goods."
              },
              {
                "answerText": "Products on shelves",
                "isCorrect": "true",
                "explanation": "Correct! Azure Custom Vision has a pre-trained base model specifically optimized for the visual complexity and occlusion of retail products stacked on shelves."
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          },
          {
            "questionText": "At least how many images do you need to train an object detector?",
            "answerOptions": [
              {
                "answerText": "1",
                "isCorrect": "false",
                "explanation": "Incorrect. One image is never enough for an AI to learn generalizations."
              },
              {
                "answerText": "15",
                "isCorrect": "true",
                "explanation": "Correct! Azure Custom Vision strictly requires a minimum of 15 images *per tag* before it will even allow you to start training an object detection model."
              },
              {
                "answerText": "100",
                "isCorrect": "false",
                "explanation": "Incorrect. While 100+ is highly recommended for good accuracy, the hard technical minimum required to click 'Train' is 15."
              },
              {
                "answerText": "JSON Parsing",
                "isCorrect": false,
                "explanation": "Nope, 'JSON Parsing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          }
        ]
      },
      {
        "id": 39,
        "title": "Lesson 20 - Check stock from an IoT device: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "IoT devices are not powerful enough to use object detectors",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Modern edge devices are explicitly designed with specialized hardware to run neural networks locally."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Thanks to Edge AI accelerators (like the Google Coral TPU) and model quantization, even small devices like Raspberry Pis can run object detection at 30 frames per second."
              }
            ]
          },
          {
            "questionText": "Object detectors give you:",
            "answerOptions": [
              {
                "answerText": "The count of objects detected",
                "isCorrect": "false",
                "explanation": "Incorrect. It also provides the exact spatial coordinates."
              },
              {
                "answerText": "The count and location of objects detected",
                "isCorrect": "false",
                "explanation": "Incorrect. You are missing the probability score, which is critical for filtering out false positives."
              },
              {
                "answerText": "The count, location and probability of objects detected",
                "isCorrect": "true",
                "explanation": "Correct! You get the number of items (count), their bounding boxes (location), and how confident the AI is in its prediction (probability/confidence score)."
              },
              {
                "answerText": "Data Obfuscation",
                "isCorrect": false,
                "explanation": "Nope, 'Data Obfuscation' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Object detectors can be used to detect where missing stock should be to allow robots to automatically stock shelves",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! By detecting 'voids' (empty spaces) on a shelf, an object detector can tell a centralized system exactly which slot needs refilling by an automated robot."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Void detection is a highly popular use case for retail robotics."
              }
            ]
          }
        ]
      },
      {
        "id": 40,
        "title": "Lesson 20 - Check stock from an IoT device: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "To count stock you only need to consider the count of objects detected by the object detector",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. If you don't filter by a confidence threshold, your stock count will be wildly inaccurate due to background noise."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! You also have to consider the probability score. If the AI detects 10 items, but 3 of them have a 5% confidence score, they are likely false positives and should be filtered out before counting."
              }
            ]
          },
          {
            "questionText": "Bounding boxes use:",
            "answerOptions": [
              {
                "answerText": "Percentage based coordinates",
                "isCorrect": "true",
                "explanation": "Correct! Bounding boxes are typically returned as normalized percentages (0.0 to 1.0) of the image width and height, so the box scales perfectly even if the image is resized."
              },
              {
                "answerText": "Pixel based coordinates",
                "isCorrect": "false",
                "explanation": "Incorrect. If you resize the image, hardcoded pixel coordinates would instantly become inaccurate. Percentages are resolution-independent."
              },
              {
                "answerText": "Centimeter based coordinates",
                "isCorrect": "false",
                "explanation": "Incorrect. An image has no concept of physical size without knowing the exact focal length and distance to the subject."
              },
              {
                "answerText": "Firmware Over-The-Air",
                "isCorrect": false,
                "explanation": "Nope, 'Firmware Over-The-Air' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Can detected objects overlap?",
            "answerOptions": [
              {
                "answerText": "Yes",
                "isCorrect": "true",
                "explanation": "Correct! In the real world, items sit in front of each other (occlusion). Therefore, the bounding boxes generated by the AI will absolutely overlap."
              },
              {
                "answerText": "No",
                "isCorrect": "false",
                "explanation": "Incorrect. If objects couldn't overlap, the AI would be completely useless in any crowded environment."
              },
              {
                "answerText": "Edge Routing",
                "isCorrect": false,
                "explanation": "Nope, 'Edge Routing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          }
        ]
      },
      {
        "id": 41,
        "title": "Lesson 21 - Recognize speech with an IoT device: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "IoT devices can be used to recognize speech:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Smart speakers (like Alexa or Google Home) are essentially IoT devices equipped with microphones and Edge AI to detect wake words and process speech."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Speech recognition is one of the most prominent consumer IoT applications in existence."
              }
            ]
          },
          {
            "questionText": "Voice assistants should send all the audio they hear to the cloud for processing:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Streaming 24/7 audio to the cloud is a devastating privacy violation and consumes massive bandwidth."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! For massive privacy reasons, microphones should process audio locally (Edge AI) to listen for a 'Wake Word', and ONLY send audio to the cloud after that word is triggered."
              }
            ]
          },
          {
            "questionText": "To recognize speech, IoT devices need large microphones:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. The size of the microphone has very little to do with modern digital audio fidelity; MEMS mics are microscopic."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! MEMS (Micro-Electromechanical Systems) microphones used in modern IoT devices are smaller than a grain of rice and offer incredible audio quality."
              }
            ]
          }
        ]
      },
      {
        "id": 42,
        "title": "Lesson 21 - Recognize speech with an IoT device: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Microphones are what type of sensor?",
            "answerOptions": [
              {
                "answerText": "Digital",
                "isCorrect": "false",
                "explanation": "Incorrect. While the IoT device will immediately digitize the signal using an ADC (or a built-in I2S chip), the core sensing mechanism of a microphone is inherently analog."
              },
              {
                "answerText": "Analog",
                "isCorrect": "true",
                "explanation": "Correct! Sound is a continuous pressure wave in the air. A microphone natively converts this into a continuous (analog) electrical voltage."
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              },
              {
                "answerText": "JSON Parsing",
                "isCorrect": false,
                "explanation": "Nope, 'JSON Parsing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Sound waves are converted to digital signals using:",
            "answerOptions": [
              {
                "answerText": "Pulse Code Modulation",
                "isCorrect": "true",
                "explanation": "Correct! Pulse Code Modulation (PCM) is the universal standard for sampling an analog audio wave at regular intervals and converting it into digital bits."
              },
              {
                "answerText": "Pure Code Multiplication",
                "isCorrect": "false",
                "explanation": "Incorrect. This is a made-up term."
              },
              {
                "answerText": "Pulse Width Maximization",
                "isCorrect": "false",
                "explanation": "Incorrect. The term is Pulse Width *Modulation* (PWM), and it is used for power output (like dimming LEDs), not for sampling incoming audio."
              },
              {
                "answerText": "Data Obfuscation",
                "isCorrect": false,
                "explanation": "Nope, 'Data Obfuscation' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "1 second of 16-bit audio sampled at 16KHz is how large?",
            "answerOptions": [
              {
                "answerText": "1KB",
                "isCorrect": "false",
                "explanation": "Incorrect. 1KB is far too small for uncompressed PCM audio at this sample rate."
              },
              {
                "answerText": "16KB",
                "isCorrect": "false",
                "explanation": "Incorrect. This would only be true if the audio was 8-bit (1 byte per sample)."
              },
              {
                "answerText": "32KB",
                "isCorrect": "true",
                "explanation": "Correct! 16,000 samples \u00d7 16 bits = 256,000 bits. Divide by 8 to get bytes = 32,000 bytes, which is 32 Kilobytes."
              },
              {
                "answerText": "Firmware Over-The-Air",
                "isCorrect": false,
                "explanation": "Nope, 'Firmware Over-The-Air' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          }
        ]
      },
      {
        "id": 43,
        "title": "Lesson 22 - Understand language: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Language understanding involves looking for fixed words:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Relying on fixed words breaks easily if a user says 'turn on the lamp' instead of 'activate the light'."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Traditional rigid systems look for fixed words (like RegEx). True AI 'Language Understanding' infers semantic intent from context, even if the user uses slang or rephrases the sentence."
              }
            ]
          },
          {
            "questionText": "Language understanding involves:",
            "answerOptions": [
              {
                "answerText": "Looking at the individual words in a sentence and trying to get the meaning",
                "isCorrect": "false",
                "explanation": "Incorrect. Looking at words individually (bag of words) destroys context and leads to misinterpretation."
              },
              {
                "answerText": "Finding pre-defined sentences and using those to get the meaning",
                "isCorrect": "false",
                "explanation": "Incorrect. Pre-defined mapping is rigid and easily broken; it is not true NLU."
              },
              {
                "answerText": "Looking at the whole sentence and trying to get the meaning using the context of the words",
                "isCorrect": "true",
                "explanation": "Correct! Natural Language Understanding (NLU) uses the surrounding context of the entire sentence to figure out the true semantic meaning."
              },
              {
                "answerText": "Edge Routing",
                "isCorrect": false,
                "explanation": "Nope, 'Edge Routing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Cloud providers have AI services that can understand language:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Services like Azure LUIS (Language Understanding Intelligent Service) or Google Dialogflow are cloud APIs specifically built to parse human intent from text."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. NLP (Natural Language Processing) is one of the most widely offered cloud AI services."
              }
            ]
          }
        ]
      },
      {
        "id": 44,
        "title": "Lesson 22 - Understand language: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Sentences are understood by being broken down into:",
            "answerOptions": [
              {
                "answerText": "Ideas and explanations",
                "isCorrect": "false",
                "explanation": "Incorrect. While philosophically nice, these are not the technical architectural terms used in NLU systems."
              },
              {
                "answerText": "Intents and entities",
                "isCorrect": "true",
                "explanation": "Correct! In conversational AI, 'Intent' is what the user wants to do (e.g., BookFlight), and 'Entities' are the parameters (e.g., Destination: Paris, Date: Tomorrow)."
              },
              {
                "answerText": "Imps and elves",
                "isCorrect": "false",
                "explanation": "Haha, incorrect. Though sometimes it feels like magic, it's just matrix math!"
              }
            ]
          },
          {
            "questionText": "The Microsoft service for language understanding is called:",
            "answerOptions": [
              {
                "answerText": "LUIS",
                "isCorrect": "true",
                "explanation": "Correct! LUIS stands for Language Understanding Intelligent Service."
              },
              {
                "answerText": "Luigi",
                "isCorrect": "false",
                "explanation": "Incorrect. Luigi is a famous plumber in green overalls."
              },
              {
                "answerText": "Jarvis",
                "isCorrect": "false",
                "explanation": "Incorrect. Jarvis is Tony Stark's AI in Iron Man."
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          },
          {
            "questionText": "In the sentence 'set a 3 minute timer' the:",
            "answerOptions": [
              {
                "answerText": "The intent is 3 minutes and the entity is a timer",
                "isCorrect": "false",
                "explanation": "Incorrect. The intent is an action verb phrase, not a number."
              },
              {
                "answerText": "The intent is minutes, and the entity is 3 timers",
                "isCorrect": "false",
                "explanation": "Incorrect. This completely scrambles the meaning of the user's request."
              },
              {
                "answerText": "The intent is set a timer and the entity is 3 minutes",
                "isCorrect": "true",
                "explanation": "Correct! The goal/action (Intent) is to set a timer. The specific parameter extracted from the sentence (Entity) is the duration: '3 minutes'."
              },
              {
                "answerText": "JSON Parsing",
                "isCorrect": false,
                "explanation": "Nope, 'JSON Parsing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          }
        ]
      },
      {
        "id": 45,
        "title": "Lesson 23 - Set a timer and provide spoken feedback: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Speech generated by AI models sounds monotonous and robotic",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. While TTS sounded robotic 15 years ago, modern neural TTS is often indistinguishable from a real human."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Modern Neural Text-to-Speech (TTS) models use deep learning to generate highly expressive, natural-sounding voices with breathing pauses and emotional intonation."
              }
            ]
          },
          {
            "questionText": "AI models can only create speech in American English:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. Restricting AI to a single dialect would ruin global accessibility."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Cloud AI speech services support dozens of languages, and hundreds of regional dialects and accents globally."
              }
            ]
          },
          {
            "questionText": "AI models would convert 1234 into which spoken phrase:",
            "answerOptions": [
              {
                "answerText": "One two three four",
                "isCorrect": "false",
                "explanation": "Incorrect. This is what a rigid, non-AI system would do blindly."
              },
              {
                "answerText": "One thousand two hundred and thirty four",
                "isCorrect": "false",
                "explanation": "Incorrect. This is what a rigid, non-AI system would do blindly."
              },
              {
                "answerText": "It can be 'one two three four' or 'one thousand two hundred and thirty four' depending on the context",
                "isCorrect": "true",
                "explanation": "Correct! Advanced AI TTS reads the context. If it says 'My PIN is 1234', it reads digits. If it says 'I owe $1234', it reads the thousands."
              },
              {
                "answerText": "Data Obfuscation",
                "isCorrect": false,
                "explanation": "Nope, 'Data Obfuscation' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          }
        ]
      },
      {
        "id": 46,
        "title": "Lesson 23 - Set a timer and provide spoken feedback: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "The three parts of speech generation are:",
            "answerOptions": [
              {
                "answerText": "Text analysis, understanding analysis, sound generation",
                "isCorrect": "false",
                "explanation": "Incorrect. 'Understanding' is an input (NLU) concept, not part of the output (TTS) pipeline."
              },
              {
                "answerText": "Text analysis, linguistic analysis, wave form generation",
                "isCorrect": "true",
                "explanation": "Correct! The pipeline parses the text (Text Analysis), figures out pronunciation/prosody (Linguistic Analysis), and synthesizes the final audio (Waveform Generation)."
              },
              {
                "answerText": "Word analysis, audio production",
                "isCorrect": "false",
                "explanation": "Incorrect. This misses the critical linguistic prosody phase."
              },
              {
                "answerText": "Firmware Over-The-Air",
                "isCorrect": false,
                "explanation": "Nope, 'Firmware Over-The-Air' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          },
          {
            "questionText": "Can speech generation models be trained to sound like existing people:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Using Custom Neural Voice technology, you can train a TTS model on a few hours of audio to perfectly mimic a specific person's voice (voice cloning)."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. Voice cloning is highly advanced and widely available today."
              }
            ]
          },
          {
            "questionText": "The markup language used to encode speech is called:",
            "answerOptions": [
              {
                "answerText": "SSML",
                "isCorrect": "true",
                "explanation": "Correct! Speech Synthesis Markup Language (SSML) allows developers to inject pauses, change pitch, or adjust speaking rate inside text strings sent to the TTS engine."
              },
              {
                "answerText": "MSSL",
                "isCorrect": "false",
                "explanation": "Incorrect. This is a scrambled acronym."
              },
              {
                "answerText": "SpeechXML",
                "isCorrect": "false",
                "explanation": "Incorrect. While it is XML-based, the official W3C standard is named SSML."
              },
              {
                "answerText": "Edge Routing",
                "isCorrect": false,
                "explanation": "Nope, 'Edge Routing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          }
        ]
      },
      {
        "id": 47,
        "title": "Lesson 24 - Support multiple languages: Pre-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Language understanding only understands English:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. AI natural language models are trained on massive multi-lingual datasets."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Cloud NLU services (like LUIS or Dialogflow) support training intents and entities in many different languages globally."
              }
            ]
          },
          {
            "questionText": "AI speech to text models understand multiple languages:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "true",
                "explanation": "Correct! Speech-to-Text (STT) services can transcribe audio in dozens of languages, and can often auto-detect the language being spoken."
              },
              {
                "answerText": "False",
                "isCorrect": "false",
                "explanation": "Incorrect. STT models are highly robust across global languages."
              }
            ]
          },
          {
            "questionText": "AI translation involves swapping individual words for their translated version:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": "false",
                "explanation": "Incorrect. 1-to-1 word swapping is what dictionary apps did in the 1990s, and it resulted in hilariously broken grammar."
              },
              {
                "answerText": "False",
                "isCorrect": "true",
                "explanation": "Correct! Swapping words 1-to-1 fails miserably due to differing grammar and idioms. Neural Machine Translation (NMT) processes the entire sentence to translate the semantic meaning."
              }
            ]
          }
        ]
      },
      {
        "id": 48,
        "title": "Lesson 24 - Support multiple languages: Post-Lecture Quiz",
        "quiz": [
          {
            "questionText": "Machine translation has been researched for nearly:",
            "answerOptions": [
              {
                "answerText": "70 years",
                "isCorrect": "true",
                "explanation": "Correct! Early rule-based machine translation experiments began in the 1950s (like the famous Georgetown-IBM experiment translating Russian to English)."
              },
              {
                "answerText": "17 years",
                "isCorrect": "false",
                "explanation": "Incorrect. While Deep Learning revolutionized it recently, the field itself is much older."
              },
              {
                "answerText": "7 years",
                "isCorrect": "false",
                "explanation": "Incorrect. The history of computational linguistics dates back to the Cold War."
              }
            ]
          },
          {
            "questionText": "AI language translators are called:",
            "answerOptions": [
              {
                "answerText": "Noddy translators",
                "isCorrect": "false",
                "explanation": "Incorrect. 'Noddy' means simple or foolish in British slang."
              },
              {
                "answerText": "Neural translators",
                "isCorrect": "true",
                "explanation": "Correct! Modern translation AI uses Neural Machine Translation (NMT), powered by deep neural networks like Transformers to achieve high fluency."
              },
              {
                "answerText": "Nothing - AI cannot be used for translation",
                "isCorrect": "false",
                "explanation": "Incorrect. AI powers Google Translate, which is used by billions of people daily."
              },
              {
                "answerText": "Bluetooth Low Energy",
                "isCorrect": false,
                "explanation": "Incorrect. 'Bluetooth Low Energy' completely misses the mark on how this specific IoT feature functions."
              }
            ]
          },
          {
            "questionText": "What alien languages does the Microsoft translator support:",
            "answerOptions": [
              {
                "answerText": "Na'vi",
                "isCorrect": "false",
                "explanation": "Incorrect. While famous from Avatar, it is not officially supported by Microsoft Translator."
              },
              {
                "answerText": "Alienese",
                "isCorrect": "false",
                "explanation": "Incorrect. This is the fictional language from Futurama."
              },
              {
                "answerText": "Klingon",
                "isCorrect": "true",
                "explanation": "Correct! As a fun easter egg (and a flex of their translation engine), Microsoft Translator officially supports Klingon from Star Trek."
              },
              {
                "answerText": "JSON Parsing",
                "isCorrect": false,
                "explanation": "Nope, 'JSON Parsing' is incorrect. While it sounds techy, it doesn't represent the actual mechanics of what we're discussing here."
              }
            ]
          }
        ]
      },
      {
        "id": 999,
        "title": "Professor's SS2025 Re-exam Mastery",
        "quiz": [
          {
            "questionText": "Where is data processing typically done in Edge Computing?",
            "answerOptions": [
              {
                "answerText": "Near the data source, within local networks",
                "isCorrect": true,
                "explanation": "Correct! Edge computing brings computation and data storage closer to the devices where it's being gathered, reducing latency and saving bandwidth."
              },
              {
                "answerText": "On public internet for open access",
                "isCorrect": false,
                "explanation": "Incorrect. Sending data to the public internet introduces latency and privacy risks, which edge computing specifically aims to avoid."
              },
              {
                "answerText": "In completely offline environments only",
                "isCorrect": false,
                "explanation": "Incorrect. While edge devices can operate offline, they typically sync with the cloud eventually. They are not restricted to completely offline environments."
              },
              {
                "answerText": "In a centralized cloud data center",
                "isCorrect": false,
                "explanation": "Incorrect. Processing in a centralized cloud is the exact opposite of Edge computing."
              }
            ]
          },
          {
            "questionText": "Which of the following is a key feature of IoT devices?",
            "answerOptions": [
              {
                "answerText": "Sensor integration and connectivity",
                "isCorrect": true,
                "explanation": "Correct! The foundation of IoT (Internet of Things) is devices equipped with sensors that collect data and network connectivity to share it."
              },
              {
                "answerText": "Virtual simulation",
                "isCorrect": false,
                "explanation": "Incorrect. Virtual simulation (like digital twins) is a cloud/software concept, not a direct hardware feature of the physical IoT device itself."
              },
              {
                "answerText": "High-definition graphics",
                "isCorrect": false,
                "explanation": "Incorrect. Most IoT devices are resource-constrained and operate headless (without a display) to save power and cost."
              },
              {
                "answerText": "Data encryption for web apps",
                "isCorrect": false,
                "explanation": "Incorrect. While security is important, encrypting data for web apps is a generic IT concept, not a defining characteristic of an IoT device."
              }
            ]
          },
          {
            "questionText": "Digital sensors send data as:",
            "answerOptions": [
              {
                "answerText": "A sequence of digits",
                "isCorrect": true,
                "explanation": "Correct! Digital sensors output discrete values (0s and 1s), representing data as a digital sequence that a microcontroller can process natively."
              },
              {
                "answerText": "Voltage ranges",
                "isCorrect": false,
                "explanation": "Incorrect. Outputting a continuous voltage range is the definition of an analog sensor, not a digital one."
              },
              {
                "answerText": "High and low voltage only",
                "isCorrect": false,
                "explanation": "Incorrect. While digital logic uses high/low voltage for 1 and 0, digital sensors send structured sequences (like I2C/SPI packets), not just a single high/low state."
              },
              {
                "answerText": "Continuous analog waveforms",
                "isCorrect": false,
                "explanation": "Incorrect. Continuous waveforms are analog signals, which require an ADC (Analog-to-Digital Converter) to be read by a digital processor."
              }
            ]
          },
          {
            "questionText": "The execution of embedded software in an IoT device is handled by",
            "answerOptions": [
              {
                "answerText": "Microcontroller unit",
                "isCorrect": true,
                "explanation": "Correct! A Microcontroller Unit (MCU) contains the CPU, memory, and programmable input/output peripherals needed to execute embedded code."
              },
              {
                "answerText": "Sensor module",
                "isCorrect": false,
                "explanation": "Incorrect. Sensors gather environmental data but do not have the general-purpose processing power to execute the main embedded software."
              },
              {
                "answerText": "Communication module",
                "isCorrect": false,
                "explanation": "Incorrect. Communication modules (like Wi-Fi or LoRa chips) handle network transmission, not the execution of the main device logic."
              },
              {
                "answerText": "Digital to analog converter",
                "isCorrect": false,
                "explanation": "Incorrect. A DAC translates digital signals into analog voltages; it has no capacity to execute software."
              }
            ]
          },
          {
            "questionText": "Where is the most AI model of IoT trained?",
            "answerOptions": [
              {
                "answerText": "In the cloud",
                "isCorrect": true,
                "explanation": "Correct! Training AI requires massive computational power (GPUs) and large storage for datasets, which are abundant in cloud environments."
              },
              {
                "answerText": "In the sensor",
                "isCorrect": false,
                "explanation": "Incorrect. Sensors are highly constrained hardware designed only for data collection, lacking the memory and CPU required for AI training."
              },
              {
                "answerText": "In the edge",
                "isCorrect": false,
                "explanation": "Incorrect. While AI models can be *executed* (inferred) on the edge, they are rarely *trained* there due to hardware limitations."
              },
              {
                "answerText": "In other computer",
                "isCorrect": false,
                "explanation": "Incorrect. While a local PC could train a model, enterprise IoT AI models rely on scalable cloud infrastructure for training."
              }
            ]
          },
          {
            "questionText": "What role does the broker play in Message Queuing Telemetry Transport (MQTT)?",
            "answerOptions": [
              {
                "answerText": "It routes messages between publishers and subscribers",
                "isCorrect": true,
                "explanation": "Correct! The MQTT broker acts as a central post office, receiving messages published to topics and routing them to any clients subscribed to those topics."
              },
              {
                "answerText": "It generates messages and sends them to sensors",
                "isCorrect": false,
                "explanation": "Incorrect. Sensors (publishers) generate the messages; the broker just forwards them."
              },
              {
                "answerText": "It stores all data permanently",
                "isCorrect": false,
                "explanation": "Incorrect. MQTT brokers are lightweight and designed for real-time routing, not for long-term database storage."
              },
              {
                "answerText": "It encrypts data between servers",
                "isCorrect": false,
                "explanation": "Incorrect. Encryption is handled by the transport layer (like TLS/SSL), not intrinsically by the MQTT broker's routing logic."
              }
            ]
          },
          {
            "questionText": "Containers are used in software deployment because they:",
            "answerOptions": [
              {
                "answerText": "Allow applications to run in isolated environments",
                "isCorrect": true,
                "explanation": "Correct! Containers package an application with all its dependencies, ensuring it runs reliably and isolated from other processes on any infrastructure."
              },
              {
                "answerText": "Are dependent on the host operating system",
                "isCorrect": false,
                "explanation": "Incorrect. While they share the host kernel, containers abstract away the host OS layer to remain portable across different systems."
              },
              {
                "answerText": "Require dedicated hardware",
                "isCorrect": false,
                "explanation": "Incorrect. Containers are lightweight and can share a single piece of hardware with many other containers, unlike traditional bare-metal deployments."
              },
              {
                "answerText": "Only work with cloud-native services",
                "isCorrect": false,
                "explanation": "Incorrect. Containers can run anywhere, including on edge devices like Raspberry Pis, not just in the cloud."
              }
            ]
          },
          {
            "questionText": "Which of the following best describes the foundation of IoT systems?",
            "answerOptions": [
              {
                "answerText": "A combination of hardware and software",
                "isCorrect": true,
                "explanation": "Correct! IoT bridges the physical and digital worlds, requiring physical hardware (sensors, MCUs) integrated with software (firmware, cloud analytics)."
              },
              {
                "answerText": "Software components",
                "isCorrect": false,
                "explanation": "Incorrect. Software alone cannot interact with the physical environment without sensors and microcontrollers."
              },
              {
                "answerText": "Hardware components",
                "isCorrect": false,
                "explanation": "Incorrect. Hardware without embedded firmware and cloud integration is just a dumb device, not a smart IoT system."
              },
              {
                "answerText": "None of these components",
                "isCorrect": false,
                "explanation": "Incorrect. Both hardware and software are explicitly required."
              }
            ]
          },
          {
            "questionText": "In an IoT setup, actuators are responsible for:",
            "answerOptions": [
              {
                "answerText": "Executing physical actions like movement or light activation",
                "isCorrect": true,
                "explanation": "Correct! Actuators receive electrical control signals and convert them into physical changes (e.g., spinning a motor, opening a valve)."
              },
              {
                "answerText": "Sensing changes in the environment",
                "isCorrect": false,
                "explanation": "Incorrect. This is the exact definition of a sensor, not an actuator."
              },
              {
                "answerText": "Processing data in the cloud",
                "isCorrect": false,
                "explanation": "Incorrect. Cloud processing is handled by servers and analytics services, completely detached from physical actuators."
              },
              {
                "answerText": "Connecting edge devices to the networks",
                "isCorrect": false,
                "explanation": "Incorrect. Networking is handled by communication modules (Wi-Fi, LoRa, Cellular), not actuators."
              }
            ]
          },
          {
            "questionText": "Which mechanism allows an app to send a command and receive a response from an IoT device?",
            "answerOptions": [
              {
                "answerText": "Direct method request",
                "isCorrect": true,
                "explanation": "Correct! Direct methods represent a request-reply interaction where the cloud invokes a method on the device and waits for an immediate HTTP-like response."
              },
              {
                "answerText": "Device twin",
                "isCorrect": false,
                "explanation": "Incorrect. Device twins synchronize desired and reported state asynchronously over time, they are not used for immediate command/response interactions."
              },
              {
                "answerText": "Device to cloud message",
                "isCorrect": false,
                "explanation": "Incorrect. This is telemetry flowing in the opposite direction (from the device up to the cloud)."
              },
              {
                "answerText": "Sensor polling",
                "isCorrect": false,
                "explanation": "Incorrect. Polling involves repeatedly checking for data, not sending a command and awaiting an execution response."
              }
            ]
          },
          {
            "questionText": "In the sentence 'set a 3 minute timer':",
            "answerOptions": [
              {
                "answerText": "The intent is set a timer and the entity is 3 minutes",
                "isCorrect": true,
                "explanation": "Correct! In Natural Language Processing (NLP), the 'intent' is the user's overarching goal (set a timer), and 'entities' are the specific parameters extracted (3 minutes)."
              },
              {
                "answerText": "The intent is 3 minutes and the entity is a timer",
                "isCorrect": false,
                "explanation": "Incorrect. 3 minutes is a parameter (entity), not the action the user wants to perform (intent)."
              },
              {
                "answerText": "The intent is a timer and the entity is a set",
                "isCorrect": false,
                "explanation": "Incorrect. 'A timer' is the object, not the action. 'Set' is a verb, not an entity parameter."
              },
              {
                "answerText": "The intent is 3 and the entity is minute timer",
                "isCorrect": false,
                "explanation": "Incorrect. This completely breaks the logical mapping of action (intent) and parameters (entities)."
              }
            ]
          },
          {
            "questionText": "Language understanding involves:",
            "answerOptions": [
              {
                "answerText": "Looking at the whole sentence and trying to get the meaning using the context of the words",
                "isCorrect": true,
                "explanation": "Correct! Modern Natural Language Understanding (NLU) uses context and word relationships across the entire sentence to infer true semantic meaning."
              },
              {
                "answerText": "Looking at the individual words in a sentence and trying to get the meaning",
                "isCorrect": false,
                "explanation": "Incorrect. Evaluating words individually (bag-of-words approach) loses crucial context and often misinterprets meaning."
              },
              {
                "answerText": "Finding pre-defined sentences and using those to get the meaning",
                "isCorrect": false,
                "explanation": "Incorrect. Relying on pre-defined sentences is rigid pattern matching (like Regex), which fails if the user phrases things slightly differently."
              },
              {
                "answerText": "Translating audio directly into executable code",
                "isCorrect": false,
                "explanation": "Incorrect. Audio translation is Speech-to-Text. Turning it into code involves intent mapping, not just raw language understanding."
              }
            ]
          },
          {
            "questionText": "The three parts of speech generation are:",
            "answerOptions": [
              {
                "answerText": "Text analysis, linguistic analysis, waveform generation",
                "isCorrect": true,
                "explanation": "Correct! Text-to-Speech (TTS) pipelines first parse the text (Text analysis), figure out pronunciation/prosody (Linguistic analysis), and finally synthesize the audio (Waveform generation)."
              },
              {
                "answerText": "Text analysis, understanding analysis, sound generation",
                "isCorrect": false,
                "explanation": "Incorrect. 'Understanding' is part of NLU (input), not speech generation (output)."
              },
              {
                "answerText": "Word analysis, audio production, frequency tuning",
                "isCorrect": false,
                "explanation": "Incorrect. These terms do not represent the standard architectural stages of a TTS pipeline."
              },
              {
                "answerText": "Signal processing, language translation, vocal synthesis",
                "isCorrect": false,
                "explanation": "Incorrect. Language translation is a completely separate domain from speech generation."
              }
            ]
          },
          {
            "questionText": "When deploying a Functions App to the cloud, you need to create and deploy:",
            "answerOptions": [
              {
                "answerText": "A Functions App, a Storage Account, and Application Settings",
                "isCorrect": true,
                "explanation": "Correct! A serverless Functions App relies on a Storage Account to hold its execution code and state, and Application Settings for environment configurations."
              },
              {
                "answerText": "A Functions App only",
                "isCorrect": false,
                "explanation": "Incorrect. A Functions App cannot exist in a vacuum; it strictly requires a backing storage account to manage its files and triggers."
              },
              {
                "answerText": "A Functions App and a Storage Account only",
                "isCorrect": false,
                "explanation": "Incorrect. Application Settings are crucial for configuring connection strings and parameters without hardcoding them."
              },
              {
                "answerText": "A Storage Account and Application Settings only",
                "isCorrect": false,
                "explanation": "Incorrect. You still need the actual Functions App resource to provide the compute environment."
              }
            ]
          },
          {
            "questionText": "Which of the following statements best summarizes the differences between Single-Board Computers and microcontrollers?",
            "answerOptions": [
              {
                "answerText": "Single-Board Computers offer support for various operating systems, making them ideal for multi-purpose tasks, whereas microcontrollers are designed for low power consumption and real-time responsiveness in single-task applications.",
                "isCorrect": true,
                "explanation": "Correct! SBCs (like Raspberry Pi) run full OSs (Linux) for heavy tasks, while MCUs (like Arduino) run bare-metal C code for real-time hardware control."
              },
              {
                "answerText": "Single-Board Computers prioritize low power consumption and real-time responsiveness for single-task applications, while microcontrollers offer general-purpose computing capabilities with OS support.",
                "isCorrect": false,
                "explanation": "Incorrect. This option completely flips the definitions. MCUs are low power, SBCs are general-purpose."
              },
              {
                "answerText": "Single-Board Computers and microcontrollers are entirely interchangeable for all IoT workloads.",
                "isCorrect": false,
                "explanation": "Incorrect. An MCU cannot run a web server efficiently, and an SBC is terrible for microsecond-level real-time hardware interrupts."
              },
              {
                "answerText": "Microcontrollers require a full desktop OS to operate, whereas Single-Board Computers do not.",
                "isCorrect": false,
                "explanation": "Incorrect. MCUs operate without any OS (bare metal) or with lightweight RTOS, while SBCs require an OS."
              }
            ]
          },
          {
            "questionText": "Points inside the geofence have a distance:",
            "answerOptions": [
              {
                "answerText": "Less than 0 (a negative value)",
                "isCorrect": true,
                "explanation": "Correct! In spatial computing and signed distance fields, points inside a boundary are represented by negative distances (<0), while points outside are positive."
              },
              {
                "answerText": "Greater than 0 (a positive value)",
                "isCorrect": false,
                "explanation": "Incorrect. Positive values generally indicate the point is outside the geofence boundary."
              },
              {
                "answerText": "Exactly zero",
                "isCorrect": false,
                "explanation": "Incorrect. A distance of exactly zero means the point is resting perfectly on the perimeter boundary of the geofence."
              },
              {
                "answerText": "Equal to the radius squared",
                "isCorrect": false,
                "explanation": "Incorrect. This is a mathematical formula for circle area calculations, not a representation of inside/outside state."
              }
            ]
          },
          {
            "questionText": "IoT data is stored by IoT Hub?",
            "answerOptions": [
              {
                "answerText": "False",
                "isCorrect": true,
                "explanation": "Correct! IoT Hub is a message broker and routing engine. It ingests data and passes it along to downstream services (like CosmosDB or Storage), but it is NOT a database itself."
              },
              {
                "answerText": "True",
                "isCorrect": false,
                "explanation": "Incorrect. While it retains messages temporarily for routing (retention period), it does not act as a permanent storage database."
              }
            ]
          },
          {
            "questionText": "The three components of architecting an IoT application are:",
            "answerOptions": [
              {
                "answerText": "Things, Insights, Actions",
                "isCorrect": true,
                "explanation": "Correct! The core IoT architecture pattern revolves around 'Things' generating data, analyzing that data for 'Insights', and automating 'Actions' based on those insights."
              },
              {
                "answerText": "Things, Internet, Databases",
                "isCorrect": false,
                "explanation": "Incorrect. Internet and databases are implementation technologies, not the high-level architectural components of IoT logic."
              },
              {
                "answerText": "AI, Blockchain, FizzBuzzers",
                "isCorrect": false,
                "explanation": "Incorrect. Blockchain and FizzBuzzers have nothing to do with the fundamental three-pillar architecture of IoT."
              },
              {
                "answerText": "Sensors, Gateways, Routers",
                "isCorrect": false,
                "explanation": "Incorrect. These are purely hardware components, missing the cloud insights and action phases entirely."
              }
            ]
          },
          {
            "questionText": "You can use Serverless code to respond to IoT events:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": true,
                "explanation": "Correct! Event-driven serverless architectures (like Azure Functions) are the standard way to execute code automatically when IoT telemetry arrives."
              },
              {
                "answerText": "False",
                "isCorrect": false,
                "explanation": "Incorrect. Serverless computing is practically built for reacting to sporadic event streams like IoT data."
              }
            ]
          },
          {
            "questionText": "When you send IoT events to IoT Hub:",
            "answerOptions": [
              {
                "answerText": "Any number of services can read events off the IoT Hub",
                "isCorrect": true,
                "explanation": "Correct! IoT Hub utilizes 'consumer groups', allowing multiple downstream applications to independently read and process the same stream of telemetry data."
              },
              {
                "answerText": "Only one service can read events off the IoT Hub",
                "isCorrect": false,
                "explanation": "Incorrect. Restricting reads to a single service defeats the pub/sub event distribution model of IoT Hub."
              },
              {
                "answerText": "Services cannot read events from IoT Hub",
                "isCorrect": false,
                "explanation": "Incorrect. If services couldn't read the events, sending data to the Hub would be entirely pointless."
              },
              {
                "answerText": "Only edge devices can read events off the IoT Hub",
                "isCorrect": false,
                "explanation": "Incorrect. IoT Hub is designed to route telemetry primarily to cloud analytics services and functions."
              }
            ]
          },
          {
            "questionText": "When reading events off IoT hub, you can only do so using code that runs in the cloud:",
            "answerOptions": [
              {
                "answerText": "False",
                "isCorrect": true,
                "explanation": "Correct! While cloud services commonly read from IoT Hub, you can use SDKs to read events from local, on-premise servers or edge devices as well."
              },
              {
                "answerText": "True",
                "isCorrect": false,
                "explanation": "Incorrect. There is no strict limitation preventing authorized on-premise infrastructure from consuming the event stream."
              }
            ]
          },
          {
            "questionText": "Serverless code can be used to write IoT data to a database:",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": true,
                "explanation": "Correct! A highly common pattern is to trigger a serverless function when an IoT event arrives, parse the data, and insert it into a database like CosmosDB or SQL."
              },
              {
                "answerText": "False",
                "isCorrect": false,
                "explanation": "Incorrect. Serverless functions have robust output bindings specifically designed for writing to databases easily."
              }
            ]
          },
          {
            "questionText": "The SPI (Serial Peripheral Interface) protocol supports:",
            "answerOptions": [
              {
                "answerText": "Only one controller and multiple peripherals",
                "isCorrect": true,
                "explanation": "Correct! SPI operates in a master-slave architecture where a single controller manages multiple peripherals using individual Chip Select (CS) lines."
              },
              {
                "answerText": "Only one controller and only one peripheral",
                "isCorrect": false,
                "explanation": "Incorrect. By adding more Chip Select lines, an SPI controller can talk to many different peripherals on the same bus."
              },
              {
                "answerText": "Multiple controllers and multiple peripherals",
                "isCorrect": false,
                "explanation": "Incorrect. Standard SPI does not support multi-master configurations natively (unlike I2C)."
              },
              {
                "answerText": "Multiple controllers and only one peripheral",
                "isCorrect": false,
                "explanation": "Incorrect. SPI is strictly single-controller (master)."
              }
            ]
          },
          {
            "questionText": "Which levels of Quality of Service (QoS) that MQTT provides?",
            "answerOptions": [
              {
                "answerText": "All of them",
                "isCorrect": true,
                "explanation": "Correct! MQTT defines exactly three QoS levels: 0 (at most once), 1 (at least once), and 2 (exactly once)."
              },
              {
                "answerText": "At most once - the message is sent only once (fire and forget).",
                "isCorrect": false,
                "explanation": "Incorrect because MQTT supports this AND the other levels."
              },
              {
                "answerText": "At least once - the message is re-tried until acknowledgement is received.",
                "isCorrect": false,
                "explanation": "Incorrect because MQTT supports this AND the other levels."
              },
              {
                "answerText": "Exactly once - assured delivery with a two-level handshake.",
                "isCorrect": false,
                "explanation": "Incorrect because MQTT supports this AND the other levels."
              }
            ]
          },
          {
            "questionText": "Processing of data from analog sensors in IoT devices",
            "answerOptions": [
              {
                "answerText": "IoT devices require conversion of analog values to digital values using an Analog-Digital converter (ADC)",
                "isCorrect": true,
                "explanation": "Correct! Microcontrollers compute using binary (digital) logic, so continuous analog voltages must be digitized via an ADC before processing."
              },
              {
                "answerText": "IoT devices can work with analog values without requiring conversion",
                "isCorrect": false,
                "explanation": "Incorrect. A digital CPU physically cannot process infinite continuous analog voltage levels without digitizing them first."
              },
              {
                "answerText": "IoT devices only use analog signals for wireless communication",
                "isCorrect": false,
                "explanation": "Incorrect. While RF is analog, data is modulated digitally; and sensors definitely use analog lines for physical measurements."
              },
              {
                "answerText": "Analog signals are ignored by IoT microcontrollers",
                "isCorrect": false,
                "explanation": "Incorrect. Analog signals provide critical real-world data (like temperature or light intensity) and are explicitly read via ADC pins."
              }
            ]
          },
          {
            "questionText": "Symmetric key encryption compares to asymmetric key encryption in which ways:",
            "answerOptions": [
              {
                "answerText": "Symmetric key encryption is faster than asymmetric, but less secure",
                "isCorrect": true,
                "explanation": "Correct! Symmetric encryption (using one shared key) uses less compute power (faster for IoT), but distributing that single key securely over the network is inherently riskier than asymmetric public/private keys."
              },
              {
                "answerText": "Symmetric key encryption is slower than asymmetric",
                "isCorrect": false,
                "explanation": "Incorrect. Symmetric encryption (like AES) is mathematically much simpler and drastically faster than asymmetric (like RSA)."
              },
              {
                "answerText": "Symmetric key encryption is slower than asymmetric, but more secure",
                "isCorrect": false,
                "explanation": "Incorrect. It is neither slower, nor is it considered more secure due to the key distribution problem."
              },
              {
                "answerText": "Symmetric key encryption is more secure than asymmetric",
                "isCorrect": false,
                "explanation": "Incorrect. Because both parties need the exact same secret key, symmetric encryption poses significant key-management security risks."
              }
            ]
          },
          {
            "questionText": "The technique uses to train a model with only a few images from a pretrained model is called:",
            "answerOptions": [
              {
                "answerText": "Few-shot learning",
                "isCorrect": true,
                "explanation": "Correct! Few-shot learning is a technique where a pre-trained AI model is fine-tuned to recognize new classes using only a very small number (a 'few shots') of examples."
              },
              {
                "answerText": "Supervised learning",
                "isCorrect": false,
                "explanation": "Incorrect. Traditional supervised learning typically requires massive, fully-labeled datasets, not just a few images."
              },
              {
                "answerText": "Transfer learning",
                "isCorrect": false,
                "explanation": "Incorrect. While related, transfer learning often involves re-training larger classification heads, whereas few-shot specifically refers to the extreme constraint of having barely any training samples."
              },
              {
                "answerText": "Reinforcement learning",
                "isCorrect": false,
                "explanation": "Incorrect. Reinforcement learning trains agents based on rewards and penalties in an environment, unrelated to image classification."
              }
            ]
          },
          {
            "questionText": "Edge devices always need an Internet connection.",
            "answerOptions": [
              {
                "answerText": "False",
                "isCorrect": true,
                "explanation": "Correct! A primary advantage of Edge Computing is resilience; devices process data locally and can continue operating autonomously even when the internet goes down."
              },
              {
                "answerText": "True",
                "isCorrect": false,
                "explanation": "Incorrect. Forcing edge devices to always require internet defeats the purpose of local offline computing and zero-latency decision making."
              }
            ]
          },
          {
            "questionText": "AI models would convert 1234 into which spoken phrase:",
            "answerOptions": [
              {
                "answerText": "It can be 'one two three four' or 'one thousand two hundred and thirty four' depending on the context",
                "isCorrect": true,
                "explanation": "Correct! Advanced TTS AI models use context. If the text says 'My PIN is 1234', it says 'one two three four'. If it says 'I have $1234', it reads the thousands."
              },
              {
                "answerText": "One two three four",
                "isCorrect": false,
                "explanation": "Incorrect. A rigid system might do this, but modern AI applies linguistic context."
              },
              {
                "answerText": "One thousand two hundred and thirty four",
                "isCorrect": false,
                "explanation": "Incorrect. This would sound very strange if the AI was reading a phone number or passcode."
              },
              {
                "answerText": "Twelve thirty-four",
                "isCorrect": false,
                "explanation": "Incorrect. While it could be read as a year, it is entirely dependent on context, not hardcoded."
              }
            ]
          },
          {
            "questionText": "Can detected objects from an image overlap?",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": true,
                "explanation": "Correct! Object detection models use bounding boxes. If a person is standing in front of a car, the bounding box for the person will overlap with the bounding box for the car."
              },
              {
                "answerText": "False",
                "isCorrect": false,
                "explanation": "Incorrect. Real-world objects occlude and overlap each other constantly, and AI detection boxes reflect this spatial reality."
              }
            ]
          },
          {
            "questionText": "Serverless code can only be written in JavaScript and COBOL:",
            "answerOptions": [
              {
                "answerText": "False",
                "isCorrect": true,
                "explanation": "Correct! Modern serverless platforms (Azure Functions, AWS Lambda) natively support a wide variety of languages including Python, C#, Java, Go, and PowerShell."
              },
              {
                "answerText": "True",
                "isCorrect": false,
                "explanation": "Incorrect. COBOL is rarely supported natively for serverless, and JavaScript is absolutely not the only option available."
              }
            ]
          },
          {
            "questionText": "Edge computing can be more secure than cloud computing.",
            "answerOptions": [
              {
                "answerText": "True",
                "isCorrect": true,
                "explanation": "Correct! By keeping sensitive raw data (like video feeds or personal health info) strictly local on the edge device and not broadcasting it over the internet, edge computing reduces the attack surface."
              },
              {
                "answerText": "False",
                "isCorrect": false,
                "explanation": "Incorrect. Transmitting all raw data to the cloud exposes it to network interception (man-in-the-middle attacks), making the cloud pathway potentially less secure."
              }
            ]
          },
          {
            "questionText": "Running an ML model on an edge device is less accurate than running an ML model in the cloud.",
            "answerOptions": [
              {
                "answerText": "False",
                "isCorrect": true,
                "explanation": "Correct! If the exact same trained model weights and architecture are deployed to an edge device, the mathematical inference and accuracy will be identical to running it in the cloud."
              },
              {
                "answerText": "True",
                "isCorrect": false,
                "explanation": "Incorrect. The location of execution does not alter the underlying math of the model. (Note: quantization for edge might drop precision slightly, but intrinsically, edge execution isn't inherently 'less accurate')."
              }
            ]
          },
          {
            "questionText": "What is the full form of IIoT?",
            "answerOptions": [
              {
                "answerText": "Industrial IoT",
                "isCorrect": true,
                "explanation": "Correct! IIoT stands for the Industrial Internet of Things, referring to the application of connected sensors and automation in manufacturing, logistics, and heavy industry."
              },
              {
                "answerText": "Intelligent IoT",
                "isCorrect": false,
                "explanation": "Incorrect. While IoT is intelligent, this is not what the acronym stands for."
              },
              {
                "answerText": "Infrastructure IoT",
                "isCorrect": false,
                "explanation": "Incorrect. Infrastructure is a broad term, but the accepted industry acronym is Industrial."
              },
              {
                "answerText": "Integrated IoT",
                "isCorrect": false,
                "explanation": "Incorrect. Integration is a feature of IoT, not the definition of the IIoT subset."
              }
            ]
          },
          {
            "questionText": "The I2C (Inter-Integrated Circuit) protocol supports:",
            "answerOptions": [
              {
                "answerText": "Multiple controllers and multiple peripherals",
                "isCorrect": true,
                "explanation": "Correct! I2C uses a multi-master, multi-slave architecture on a simple 2-wire bus using unique hardware addresses to communicate."
              },
              {
                "answerText": "Only one controller and multiple peripherals",
                "isCorrect": false,
                "explanation": "Incorrect. This describes the typical limitation of standard SPI, but I2C supports multiple controllers (masters) natively."
              },
              {
                "answerText": "Only one controller and only one peripheral",
                "isCorrect": false,
                "explanation": "Incorrect. I2C uses addressing specifically so many devices can share the same two wires."
              },
              {
                "answerText": "One peripheral and multiple controllers",
                "isCorrect": false,
                "explanation": "Incorrect. Both controllers and peripherals can be plural in an I2C bus."
              }
            ]
          },
          {
            "questionText": "How large is 1 second of 16-bit audio sampled at 16 KHz?",
            "answerOptions": [
              {
                "answerText": "32KB",
                "isCorrect": true,
                "explanation": "Correct! 16,000 samples per second \u00d7 16 bits per sample = 256,000 bits. Divide by 8 to get bytes = 32,000 bytes (roughly 32 Kilobytes)."
              },
              {
                "answerText": "16KB",
                "isCorrect": false,
                "explanation": "Incorrect. This would only be true if the audio was 8-bit (1 byte per sample)."
              },
              {
                "answerText": "1KB",
                "isCorrect": false,
                "explanation": "Incorrect. 1KB is vastly too small to hold a full second of raw uncompressed audio at this rate."
              },
              {
                "answerText": "64KB",
                "is-correct": false,
                "explanation": "Incorrect. This would be true if the audio was stereo (2 channels), but standard IoT audio calculations assume mono unless stated otherwise.",
                "isCorrect": false
              }
            ]
          },
          {
            "questionText": "Pulse width modulation (PWM) is commonly used for controlling what type of device?",
            "answerOptions": [
              {
                "answerText": "All the above",
                "isCorrect": true,
                "explanation": "Correct! PWM simulates varying analog voltages by rapidly switching digital signals. This is perfectly suited for dimming LEDs, controlling the speed of motors/actuators, and driving basic audio outputs."
              },
              {
                "answerText": "Soft blinking LEDs",
                "isCorrect": false,
                "explanation": "Incorrect only because it excludes the other correct answers. PWM is excellent for LEDs."
              },
              {
                "answerText": "Mechanical actuators",
                "isCorrect": false,
                "explanation": "Incorrect only because it excludes the other correct answers. PWM controls servo motor positions."
              },
              {
                "answerText": "Audio amplifiers",
                "isCorrect": false,
                "explanation": "Incorrect only because it excludes the other correct answers. Class D amps use PWM."
              }
            ]
          },
          {
            "questionText": "Data gathered from sensors and sent to the cloud is called:",
            "answerOptions": [
              {
                "answerText": "Telemetry",
                "isCorrect": true,
                "explanation": "Correct! Telemetry (derived from Greek for 'measuring at a distance') is the industry standard term for the continuous stream of raw data points sent from IoT devices to the cloud."
              },
              {
                "answerText": "Commands",
                "isCorrect": false,
                "explanation": "Incorrect. Commands flow in the opposite direction (from the cloud down to the device to trigger an action)."
              },
              {
                "answerText": "Measurements",
                "isCorrect": false,
                "explanation": "Incorrect. While technically true in plain English, 'Telemetry' is the specific architectural terminology used in IoT systems like Azure IoT Hub."
              },
              {
                "answerText": "Analytics",
                "isCorrect": false,
                "explanation": "Incorrect. Analytics is the processing and derivation of insights from the data once it reaches the cloud, not the raw data transmission itself."
              }
            ]
          },
          {
            "questionText": "IoT devices gather information from the world around them using:",
            "answerOptions": [
              {
                "answerText": "Sensors",
                "isCorrect": true,
                "explanation": "Correct! Sensors are the hardware components that detect physical changes (temperature, light, motion) and convert them into electrical signals for the MCU."
              },
              {
                "answerText": "Actuators",
                "isCorrect": false,
                "explanation": "Incorrect. Actuators do the exact opposite\u2014they take electrical signals and convert them back into physical actions in the world."
              },
              {
                "answerText": "Controllers",
                "isCorrect": false,
                "explanation": "Incorrect. Controllers (MCUs) process the information, but they rely entirely on sensors to gather it in the first place."
              },
              {
                "answerText": "Collectors",
                "isCorrect": false,
                "explanation": "Incorrect. 'Collectors' is a generic data term, not the standard hardware terminology for physical IoT inputs."
              }
            ]
          },
          {
            "questionText": "What is the standard method for digitizing analog audio signals?",
            "answerOptions": [
              {
                "answerText": "Pulse Code Modulation",
                "isCorrect": true,
                "explanation": "Correct! Pulse Code Modulation (PCM) is the standard technique used to digitally represent sampled analog signals, used universally in uncompressed digital audio (.wav, CDs)."
              },
              {
                "answerText": "Pulse Width Modulation",
                "isCorrect": false,
                "explanation": "Incorrect. PWM is used to output power control signals (like dimming an LED), not for accurately digitizing incoming analog audio."
              },
              {
                "answerText": "Frequency Modulation",
                "isCorrect": false,
                "explanation": "Incorrect. FM is an analog broadcasting standard for transmitting radio signals, not a method for digital sampling."
              },
              {
                "answerText": "Analog-to-Analog Modulation",
                "isCorrect": false,
                "explanation": "Incorrect. This is a made-up term. Digitizing inherently requires moving from Analog to Digital."
              }
            ]
          }
        ]
      },
      {
        "title": "Written Part - Fill in the Blanks",
        "quiz": [
          {
            "type": "FIB",
            "questionText": "In an IoT application that checks user location against a geofence, a ______ is used to capture real-time location data.",
            "correctAnswer": "GPS sensor",
            "explanation": "A GPS sensor captures real-time location data for geofence evaluation."
          },
          {
            "type": "FIB",
            "questionText": "Data captured by the GPS sensor is transmitted to the ______ for further processing.",
            "correctAnswer": "cloud",
            "explanation": "IoT devices often send telemetry data to the cloud for heavy processing."
          },
          {
            "type": "FIB",
            "questionText": "A serverless function that receives GPS data from the IoT device stores it in ______.",
            "correctAnswer": "cloud storage",
            "explanation": "Function 1 receives GPS data and stores it in cloud storage."
          },
          {
            "type": "FIB",
            "questionText": "A second serverless function retrieves the latest GPS data, checks it against the ______, and sends a command back.",
            "correctAnswer": "geofence",
            "explanation": "Function 2 compares the location data to the geofence boundary."
          },
          {
            "type": "FIB",
            "questionText": "If the user is within the geofenced area, a command is sent to the IoT device to turn ______ an LED.",
            "correctAnswer": "ON",
            "explanation": "The LED is an actuator that turns ON when the user is inside the geofence."
          },
          {
            "type": "FIB",
            "questionText": "The flow of data starts with GPS data acquisition on the ______ device.",
            "correctAnswer": "IoT",
            "explanation": "The IoT device initiates the data flow by acquiring GPS data."
          },
          {
            "type": "FIB",
            "questionText": "The final step in the data flow is the control of the ______ based on geofence evaluation.",
            "correctAnswer": "LED",
            "explanation": "The LED acts as the output or actuator in this system."
          }
        ]
      }
    ]
  }
];
