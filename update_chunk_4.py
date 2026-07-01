import json

explanations_chunk_4 = {
  "Take images on the edge device and check the prediction output.": {
    "Take images on the edge device and check the prediction output.": "Correct! Since the edge device processes images locally without uploading to the cloud, you can test it completely offline by checking its local prediction logs."
  },
  "Which part of your IoT application gathers data?": {
    "Things": "Correct! 'Things' (the devices and their sensors) are the physical components placed in the real world to gather data.",
    "Cloud services": "Incorrect. Cloud services process and store the data, they don't gather it physically.",
    "Edge devices": "Incorrect. While Edge devices sit near the 'Things', the actual gathering is done by the Things (sensors) themselves."
  },
  "The only outputs of an IoT application are actuators.": {
    "False": "Correct! Outputs can be software actions too—like sending an email alert, updating a database, or rendering a dashboard graph.",
    "True": "Incorrect. Actuators are physical outputs, but many IoT systems are purely analytical (e.g., tracking a truck's location on a screen)."
  },
  "Things don't need to connect directly to IoT Hub, they can use edge devices as gateways.": {
    "True": "Correct! Tiny, low-power sensors (like Bluetooth LE tags) can send data to a local Edge Gateway (like a Raspberry Pi), which then securely forwards everything to IoT Hub.",
    "False": "Incorrect. In many architectures, 'Things' are too weak to run TLS encryption and must rely on Edge Gateways to bridge the connection."
  },
  "The three components of architecting an IoT application are": {
    "Things, Insights, Actions": "Correct! You use *Things* to gather data, analyze it in the cloud to generate *Insights*, and trigger *Actions* based on those insights.",
    "Things, Internet, Databases": "Incorrect. Those are implementation details, not the high-level conceptual pillars of an IoT architecture.",
    "AI, Blockchain, FizzBuzzers": "Incorrect. Blockchain and FizzBuzzers are completely unrelated to the fundamental IoT architecture."
  },
  "The component that communicates between the things and the components that create insights is:": {
    "IoT Hub": "Correct! IoT Hub sits exactly in the middle as the cloud gateway, securely ingesting telemetry from Things and routing it to backend analytics (Insights).",
    "Azure Functions": "Incorrect. Functions are often used *after* the Hub to process the data, not as the primary device communication gateway.",
    "Azure Maps": "Incorrect. Azure Maps is an insight/visualization service, not a device communication broker."
  },
  "How do time of flight proximity sensors work?": {
    "They send laser beams and time how long till they bounce off an object": "Correct! Time of Flight (ToF) sensors shoot safe infrared lasers (photons) and precisely measure the nanoseconds it takes for the light to bounce back.",
    "They use sound and measure how long till the sound bounces off an object": "Incorrect. That describes an Ultrasonic sensor, not a Time of Flight (optical) sensor.",
    "They use very large rulers": "Haha, incorrect. While mechanical probing exists, 'Time of Flight' refers to the speed of light."
  },
  "AI models cannot be used to count objects?": {
    "False": "Correct! Object Detection models (like YOLO) draw bounding boxes around specific items. By simply counting the number of boxes, the AI acts as an incredibly accurate object counter.",
    "True": "Incorrect. Counting objects on a shelf or on a conveyor belt is one of the most common commercial uses of computer vision."
  },
  "IoT and AI can be used in retail for:": {
    "A wide range of uses including stock checking, monitoring for mask where where required, tracking footfall, automated billing": "Correct! Smart retail utilizes cameras and sensors for inventory, security, foot traffic analytics, and even cashier-less checkout (like Amazon Go).",
    "Stock checking only": "Incorrect. While inventory is a huge use case, limiting IoT/AI to just that ignores security, analytics, and automation.",
    "IoT and AI cannot be used in retail": "Incorrect. Retail is one of the fastest-growing sectors for IoT deployment."
  },
  "Object detection involves:": {
    "Detecting objects in an image and tracking their location and probability": "Correct! Object detection differs from basic classification because it tells you *what* the object is (probability), and exactly *where* it is in the frame (location/bounding box).",
    "Counting objects in an image only": "Incorrect. While you can count the results, the model itself is outputting coordinate locations and confidence scores.",
    "Classifying images": "Incorrect. Classification just tells you 'This image contains a dog.' Object Detection tells you 'There is a dog at X:100, Y:200'."
  },
  "Object detectors only return one result no matter how many objects are detected": {
    "False": "Correct! An object detector will return an array containing a separate bounding box and label for *every single* object it finds in the frame.",
    "True": "Incorrect. If there are 50 apples in a crate, a well-trained object detector will return 50 distinct bounding boxes."
  },
  "What is the best domain to use in Custom Vision for stock counting": {
    "Products on shelves": "Correct! Azure Custom Vision has a pre-trained base model specifically optimized for the visual complexity and occlusion of retail products stacked on shelves.",
    "General": "Incorrect. While it would work, using the specialized 'Products on shelves' domain yields much higher accuracy for retail scenarios.",
    "Food": "Incorrect. A food domain is optimized for classifying dishes (like a burger vs salad), not counting identical packaged goods."
  },
  "At least how many images do you need to train an object detector?": {
    "15": "Correct! Azure Custom Vision strictly requires a minimum of 15 images *per tag* before it will even allow you to start training an object detection model.",
    "1": "Incorrect. One image is never enough for an AI to learn generalizations.",
    "100": "Incorrect. While 100+ is highly recommended for good accuracy, the hard technical minimum required to click 'Train' is 15."
  },
  "IoT devices are not powerful enough to use object detectors": {
    "False": "Correct! Thanks to Edge AI accelerators (like the Google Coral TPU) and model quantization, even small devices like Raspberry Pis can run object detection at 30 frames per second.",
    "True": "Incorrect. Modern edge devices are explicitly designed with specialized hardware to run neural networks locally."
  },
  "Object detectors give you:": {
    "The count, location and probability of objects detected": "Correct! You get the number of items (count), their bounding boxes (location), and how confident the AI is in its prediction (probability/confidence score).",
    "The count of objects detected": "Incorrect. It also provides the exact spatial coordinates.",
    "The count and location of objects detected": "Incorrect. You are missing the probability score, which is critical for filtering out false positives."
  },
  "Object detectors can be used to detect where missing stock should be to allow robots to automatically stock shelves": {
    "True": "Correct! By detecting 'voids' (empty spaces) on a shelf, an object detector can tell a centralized system exactly which slot needs refilling by an automated robot.",
    "False": "Incorrect. Void detection is a highly popular use case for retail robotics."
  },
  "To count stock you only need to consider the count of objects detected by the object detector": {
    "False": "Correct! You also have to consider the probability score. If the AI detects 10 items, but 3 of them have a 5% confidence score, they are likely false positives and should be filtered out before counting.",
    "True": "Incorrect. If you don't filter by a confidence threshold, your stock count will be wildly inaccurate due to background noise."
  },
  "Bounding boxes use:": {
    "Percentage based coordinates": "Correct! Bounding boxes are typically returned as normalized percentages (0.0 to 1.0) of the image width and height, so the box scales perfectly even if the image is resized.",
    "Pixel based coordinates": "Incorrect. If you resize the image, hardcoded pixel coordinates would instantly become inaccurate. Percentages are resolution-independent.",
    "Centimeter based coordinates": "Incorrect. An image has no concept of physical size without knowing the exact focal length and distance to the subject."
  },
  "Can detected objects overlap?": {
    "Yes": "Correct! In the real world, items sit in front of each other (occlusion). Therefore, the bounding boxes generated by the AI will absolutely overlap.",
    "No": "Incorrect. If objects couldn't overlap, the AI would be completely useless in any crowded environment."
  },
  "IoT devices can be used to recognize speech:": {
    "True": "Correct! Smart speakers (like Alexa or Google Home) are essentially IoT devices equipped with microphones and Edge AI to detect wake words and process speech.",
    "False": "Incorrect. Speech recognition is one of the most prominent consumer IoT applications in existence."
  },
  "Voice assistants should send all the audio they hear to the cloud for processing:": {
    "False": "Correct! For massive privacy reasons, microphones should process audio locally (Edge AI) to listen for a 'Wake Word', and ONLY send audio to the cloud after that word is triggered.",
    "True": "Incorrect. Streaming 24/7 audio to the cloud is a devastating privacy violation and consumes massive bandwidth."
  },
  "To recognize speech, IoT devices need large microphones:": {
    "False": "Correct! MEMS (Micro-Electromechanical Systems) microphones used in modern IoT devices are smaller than a grain of rice and offer incredible audio quality.",
    "True": "Incorrect. The size of the microphone has very little to do with modern digital audio fidelity; MEMS mics are microscopic."
  },
  "Microphones are what type of sensor?": {
    "Analog": "Correct! Sound is a continuous pressure wave in the air. A microphone natively converts this into a continuous (analog) electrical voltage.",
    "Digital": "Incorrect. While the IoT device will immediately digitize the signal using an ADC (or a built-in I2S chip), the core sensing mechanism of a microphone is inherently analog."
  },
  "Sound waves are converted to digital signals using:": {
    "Pulse Code Modulation": "Correct! Pulse Code Modulation (PCM) is the universal standard for sampling an analog audio wave at regular intervals and converting it into digital bits.",
    "Pure Code Multiplication": "Incorrect. This is a made-up term.",
    "Pulse Width Maximization": "Incorrect. The term is Pulse Width *Modulation* (PWM), and it is used for power output (like dimming LEDs), not for sampling incoming audio."
  },
  "1 second of 16-bit audio sampled at 16KHz is how large?": {
    "32KB": "Correct! 16,000 samples × 16 bits = 256,000 bits. Divide by 8 to get bytes = 32,000 bytes, which is 32 Kilobytes.",
    "16KB": "Incorrect. This would only be true if the audio was 8-bit (1 byte per sample).",
    "1KB": "Incorrect. 1KB is far too small for uncompressed PCM audio at this sample rate."
  },
  "Language understanding involves looking for fixed words:": {
    "False": "Correct! Traditional rigid systems look for fixed words (like RegEx). True AI 'Language Understanding' infers semantic intent from context, even if the user uses slang or rephrases the sentence.",
    "True": "Incorrect. Relying on fixed words breaks easily if a user says 'turn on the lamp' instead of 'activate the light'."
  },
  "Language understanding involves:": {
    "Looking at the whole sentence and trying to get the meaning using the context of the words": "Correct! Natural Language Understanding (NLU) uses the surrounding context of the entire sentence to figure out the true semantic meaning.",
    "Looking at the individual words in a sentence and trying to get the meaning": "Incorrect. Looking at words individually (bag of words) destroys context and leads to misinterpretation.",
    "Finding pre-defined sentences and using those to get the meaning": "Incorrect. Pre-defined mapping is rigid and easily broken; it is not true NLU."
  },
  "Cloud providers have AI services that can understand language:": {
    "True": "Correct! Services like Azure LUIS (Language Understanding Intelligent Service) or Google Dialogflow are cloud APIs specifically built to parse human intent from text.",
    "False": "Incorrect. NLP (Natural Language Processing) is one of the most widely offered cloud AI services."
  },
  "Sentences are understood by being broken down into:": {
    "Intents and entities": "Correct! In conversational AI, 'Intent' is what the user wants to do (e.g., BookFlight), and 'Entities' are the parameters (e.g., Destination: Paris, Date: Tomorrow).",
    "Ideas and explanations": "Incorrect. While philosophically nice, these are not the technical architectural terms used in NLU systems.",
    "Imps and elves": "Haha, incorrect. Though sometimes it feels like magic, it's just matrix math!"
  },
  "The Microsoft service for language understanding is called:": {
    "LUIS": "Correct! LUIS stands for Language Understanding Intelligent Service.",
    "Luigi": "Incorrect. Luigi is a famous plumber in green overalls.",
    "Jarvis": "Incorrect. Jarvis is Tony Stark's AI in Iron Man."
  },
  "In the sentence 'set a 3 minute timer' the:": {
    "The intent is set a timer and the entity is 3 minutes": "Correct! The goal/action (Intent) is to set a timer. The specific parameter extracted from the sentence (Entity) is the duration: '3 minutes'.",
    "The intent is 3 minutes and the entity is a timer": "Incorrect. The intent is an action verb phrase, not a number.",
    "The intent is minutes, and the entity is 3 timers": "Incorrect. This completely scrambles the meaning of the user's request."
  },
  "Speech generated by AI models sounds monotonous and robotic": {
    "False": "Correct! Modern Neural Text-to-Speech (TTS) models use deep learning to generate highly expressive, natural-sounding voices with breathing pauses and emotional intonation.",
    "True": "Incorrect. While TTS sounded robotic 15 years ago, modern neural TTS is often indistinguishable from a real human."
  },
  "AI models can only create speech in American English:": {
    "False": "Correct! Cloud AI speech services support dozens of languages, and hundreds of regional dialects and accents globally.",
    "True": "Incorrect. Restricting AI to a single dialect would ruin global accessibility."
  },
  "AI models would convert 1234 into which spoken phrase:": {
    "It can be 'one two three four' or 'one thousand two hundred and thirty four' depending on the context": "Correct! Advanced AI TTS reads the context. If it says 'My PIN is 1234', it reads digits. If it says 'I owe $1234', it reads the thousands.",
    "One two three four": "Incorrect. This is what a rigid, non-AI system would do blindly.",
    "One thousand two hundred and thirty four": "Incorrect. This is what a rigid, non-AI system would do blindly."
  },
  "The three parts of speech generation are:": {
    "Text analysis, linguistic analysis, wave form generation": "Correct! The pipeline parses the text (Text Analysis), figures out pronunciation/prosody (Linguistic Analysis), and synthesizes the final audio (Waveform Generation).",
    "Text analysis, understanding analysis, sound generation": "Incorrect. 'Understanding' is an input (NLU) concept, not part of the output (TTS) pipeline.",
    "Word analysis, audio production": "Incorrect. This misses the critical linguistic prosody phase."
  },
  "Can speech generation models be trained to sound like existing people:": {
    "True": "Correct! Using Custom Neural Voice technology, you can train a TTS model on a few hours of audio to perfectly mimic a specific person's voice (voice cloning).",
    "False": "Incorrect. Voice cloning is highly advanced and widely available today."
  },
  "The markup language used to encode speech is called:": {
    "SSML": "Correct! Speech Synthesis Markup Language (SSML) allows developers to inject pauses, change pitch, or adjust speaking rate inside text strings sent to the TTS engine.",
    "MSSL": "Incorrect. This is a scrambled acronym.",
    "SpeechXML": "Incorrect. While it is XML-based, the official W3C standard is named SSML."
  },
  "Language understanding only understands English:": {
    "False": "Correct! Cloud NLU services (like LUIS or Dialogflow) support training intents and entities in many different languages globally.",
    "True": "Incorrect. AI natural language models are trained on massive multi-lingual datasets."
  },
  "AI speech to text models understand multiple languages:": {
    "True": "Correct! Speech-to-Text (STT) services can transcribe audio in dozens of languages, and can often auto-detect the language being spoken.",
    "False": "Incorrect. STT models are highly robust across global languages."
  },
  "AI translation involves swapping individual words for their translated version:": {
    "False": "Correct! Swapping words 1-to-1 fails miserably due to differing grammar and idioms. Neural Machine Translation (NMT) processes the entire sentence to translate the semantic meaning.",
    "True": "Incorrect. 1-to-1 word swapping is what dictionary apps did in the 1990s, and it resulted in hilariously broken grammar."
  },
  "Machine translation has been researched for nearly:": {
    "70 years": "Correct! Early rule-based machine translation experiments began in the 1950s (like the famous Georgetown-IBM experiment translating Russian to English).",
    "17 years": "Incorrect. While Deep Learning revolutionized it recently, the field itself is much older.",
    "7 years": "Incorrect. The history of computational linguistics dates back to the Cold War."
  },
  "AI language translators are called:": {
    "Neural translators": "Correct! Modern translation AI uses Neural Machine Translation (NMT), powered by deep neural networks like Transformers to achieve high fluency.",
    "Noddy translators": "Incorrect. 'Noddy' means simple or foolish in British slang.",
    "Nothing - AI cannot be used for translation": "Incorrect. AI powers Google Translate, which is used by billions of people daily."
  },
  "What alien languages does the Microsoft translator support:": {
    "Klingon": "Correct! As a fun easter egg (and a flex of their translation engine), Microsoft Translator officially supports Klingon from Star Trek.",
    "Na'vi": "Incorrect. While famous from Avatar, it is not officially supported by Microsoft Translator.",
    "Alienese": "Incorrect. This is the fictional language from Futurama."
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
        if q_text in explanations_chunk_4:
            for opt in quiz['answerOptions']:
                ans_text = opt['answerText'].strip()
                if ans_text in explanations_chunk_4[q_text]:
                    opt['explanation'] = explanations_chunk_4[q_text][ans_text]

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const quizData = ' + json.dumps(data, indent=2) + ';')

print("Applied Chunk 4 Handcrafted Explanations")
