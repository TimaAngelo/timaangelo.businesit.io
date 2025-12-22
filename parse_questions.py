from bs4 import BeautifulSoup
import json
import re

file_path = r'c:\Users\setan\Desktop\test\Тесты для подговки к экзамену-1.htm'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

soup = BeautifulSoup(content, 'html.parser')
rows = soup.find_all('tr')

questions = []

for row in rows:
    cells = row.find_all('td')
    if len(cells) < 7:
        continue
    
    # Extract text and clean up
    def get_text(cell):
        return cell.get_text(strip=True)

    q_text = get_text(cells[2])
    # Skip header row
    if 'Вопрос' in q_text and 'Правильный ответ' in get_text(cells[3]):
        continue
    
    # Skip empty questions
    if not q_text:
        continue

    correct_ans = get_text(cells[3])
    wrong1 = get_text(cells[4])
    wrong2 = get_text(cells[5])
    wrong3 = get_text(cells[6])

    # Some rows might be just numbers or empty
    if not correct_ans:
        continue

    # Create options array
    opts = [correct_ans, wrong1, wrong2, wrong3]
    # Filter empty options
    opts = [o for o in opts if o]
    
    # We need to shuffle options later in JS, but for now let's store them
    # The correct answer is always index 0 in our extraction, but we should shuffle them in the final JSON
    # or let the JS handle shuffling. The user wants "shuffle on each attempt".
    # So we can store them as is, and store the correct answer string or index.
    # Let's store: { q: "...", opts: ["...", ...], a: <index_of_correct> }
    
    # Actually, let's shuffle them right here to avoid obvious pattern in the JS file, 
    # but the JS will shuffle them again on runtime if requested.
    # For the static file, let's just keep them and let JS handle randomization.
    # Wait, the current JS logic expects `a` to be the index of the correct answer.
    
    import random
    correct_text = opts[0]
    random.shuffle(opts)
    try:
        correct_idx = opts.index(correct_text)
    except ValueError:
        continue # Should not happen

    questions.append({
        'q': q_text,
        'opts': opts,
        'a': correct_idx,
        'explain': f'Правильный ответ: {correct_text}' # Simple explanation
    })

print(json.dumps(questions, ensure_ascii=False, indent=2))
