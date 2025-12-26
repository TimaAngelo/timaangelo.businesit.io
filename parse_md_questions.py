import re
import json

def parse_md_questions(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    questions = []
    
    # Разбиваем на блоки вопросов
    # Вопросы начинаются с числа и слова "вопрос" или "Вопрос"
    question_blocks = re.split(r'\n(?=\d+\s+[Вв]опрос)', content)
    
    for block in question_blocks:
        if not block.strip():
            continue
            
        lines = block.strip().split('\n')
        
        # Первая строка - номер вопроса
        question_text = None
        options = []
        correct_answer = None
        
        i = 0
        while i < len(lines):
            line = lines[i].strip()
            
            # Пропускаем пустые строки и служебные
            if not line or line.startswith('/*'):
                i += 1
                continue
            
            # Номер вопроса
            if re.match(r'^\d+\s+[Вв]опрос', line) or re.match(r'^\*\*\d+\s+[Вв]опрос', line):
                # Следующая строка - текст вопроса
                i += 1
                if i < len(lines):
                    question_text = lines[i].strip()
                i += 1
                continue
            
            # Варианты ответов
            if question_text and line and not line.startswith('#'):
                # Проверяем, не является ли это текстом вопроса
                if not any(marker in line for marker in ['вопрос', 'Вопрос']) or i > 2:
                    # Удаляем жирное выделение для определения правильного ответа
                    if line.startswith('**') and line.endswith('**'):
                        clean_option = line.strip('*').strip()
                        # Удаляем (+) в конце, если есть
                        clean_option = re.sub(r'\s*\(\+\)\s*$', '', clean_option)
                        clean_option = re.sub(r'\s*\(\-\)\s*$', '', clean_option)
                        options.append(clean_option)
                        if correct_answer is None:
                            correct_answer = len(options) - 1
                    elif line and not line.startswith('Вопрос') and not re.match(r'^\d+\s+[Вв]опрос', line):
                        clean_option = line.strip()
                        # Удаляем (+) или (-) в конце
                        clean_option = re.sub(r'\s*\(\+\)\s*$', '', clean_option)
                        clean_option = re.sub(r'\s*\(\-\)\s*$', '', clean_option)
                        if clean_option:
                            options.append(clean_option)
            
            i += 1
        
        # Добавляем вопрос, если есть текст и варианты
        if question_text and len(options) >= 2:
            if correct_answer is None:
                correct_answer = 0  # По умолчанию первый вариант
            
            # Ограничиваем до 4 вариантов максимум
            options = options[:4]
            
            # Проверяем, что индекс правильного ответа в пределах
            if correct_answer >= len(options):
                correct_answer = 0
            
            questions.append({
                'q': question_text,
                'opts': options,
                'a': correct_answer,
                'explain': f'Правильный ответ: {options[correct_answer]}'
            })
    
    return questions

if __name__ == '__main__':
    questions = parse_md_questions('ОСНОВЫ УПРАВЛЕНИЯ ПРОЕКТАМИ.md')
    
    print(f'Извлечено вопросов: {len(questions)}')
    
    # Сохраняем в JSON
    with open('questions_pm.json', 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)
    
    print('Вопросы сохранены в questions_pm.json')
    
    # Выводим первые 3 вопроса для проверки
    for i, q in enumerate(questions[:3], 1):
        print(f'\n--- Вопрос {i} ---')
        print(f'Текст: {q["q"]}')
        print(f'Варианты: {q["opts"]}')
        print(f'Правильный: {q["a"]} ({q["opts"][q["a"]]})')
