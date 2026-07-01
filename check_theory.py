import json

with open('data.js', 'r', encoding='utf-8') as f:
    d = json.loads(f.read()[17:-1])

with open('theory.js', 'r', encoding='utf-8') as f:
    t_content = f.read()

missing = [s['title'] for s in d[0]['quizzes'] if f'"{s["title"]}"' not in t_content]
print("Missing:", missing)
