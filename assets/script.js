// Вопросы по Основам управления проектами
const PM_QUESTIONS = [
  {q: 'При проведении качественного анализа рисков были получены следующие атрибуты одного из рисков: вероятность = 55%, влияние = 20%. К какой из категории матрицы рангов относится данный риск?', opts: ['«Собаки»', '«Львы»', '«Тигры»', '«Кошки»'], a: 3, explain: 'При вероятности 55% и влиянии 20% риск относится к категории «Кошки»'},
  {q: 'При проведении качественного анализа рисков были получены следующие атрибуты одного из рисков: вероятность = 57%, влияние = 58%. К какой из категории матрицы рангов относится данный риск?', opts: ['«Мыши»', '«Кошки»', '«Тигры»', '«Львы»'], a: 2, explain: 'При высокой вероятности (57%) и высоком влиянии (58%) риск относится к категории «Тигры»'},
  {q: 'Назовите основную характеристику метода Delphi:', opts: ['Мнение эксперта', 'Экстраполяция исторической информации', 'Управление по принципу «сверху-вниз»', 'Численный процесс'], a: 0, explain: 'Основная характеристика метода Delphi — это использование мнения экспертов'},
  {q: 'Для процесса разработки Устава проекта необходимы следующие внешние и внутренние для проекта элементы (входы), за исключением:', opts: ['Договор', 'Контракт', 'Активы организационного процесса', 'Методы выбора проекта'], a: 3, explain: 'Методы выбора проекта не являются входами для разработки Устава проекта'},
  {q: 'Кто подписывает Устав проекта:', opts: ['Менеджер проекта', 'Команда управления проектом', 'Вышестоящий руководитель (спонсор, заказчик)', 'Функциональный менеджер'], a: 2, explain: 'Устав проекта подписывает вышестоящий руководитель (спонсор или заказчик)'},
  {q: 'Член команды проекта беседует с другим членом команды и жалуется на то, что многие сотрудники обращаются к нему с различными просьбами. Если этот сотрудник работает в функциональной организации, кто имеет право давать указания членам команды?', opts: ['Спонсор проекта', 'Заказчик', 'Команда', 'Функциональный менеджер'], a: 3, explain: 'В функциональной организации право давать указания членам команды имеет функциональный менеджер'},
  {q: 'Руководитель менеджера проекта и руководитель технического отдела обсуждают изменения основного задания. После встречи начальник обращается к менеджеру проекта и просит его внести изменения. Это пример:', opts: ['Позиции функционального менеджера', 'Позиции координатора проекта', 'Внимательного отношения руководства к управлению содержанием проекта', 'Позиции линейного менеджера'], a: 1, explain: 'Это пример позиции координатора проекта'},
  {q: 'Положительное значение SV означает:', opts: ['перерасход бюджета', 'опережение расписания', 'данная величина не относится к бюджету', 'недорасход бюджета'], a: 1, explain: 'Положительное значение SV (Schedule Variance) означает опережение расписания'},
  {q: 'Бюджет по завершению работ обозначается как:', opts: ['EAC', 'ETC', 'CPI', 'BAC'], a: 3, explain: 'BAC (Budget at Completion) — бюджет по завершению работ'},
  {q: 'Прогноз по завершению обозначается как:', opts: ['SPI', 'BAC', 'CPI', 'EAC'], a: 3, explain: 'EAC (Estimate at Completion) — прогноз по завершению'},
  {q: 'Индекс выполнения стоимости обозначается как:', opts: ['EAC', 'ETC', 'BAC', 'CPI'], a: 3, explain: 'CPI (Cost Performance Index) — индекс выполнения стоимости'},
  {q: 'Во время какой фазы жизненного цикла управления проектом создается детальный бюджет проекта?', opts: ['Планирование', 'Исполнение', 'Мониторинг и управление', 'Инициация'], a: 0, explain: 'Детальный бюджет проекта создается на фазе планирования'},
  {q: 'Выходом из процесса планирования реагирования на риски является:', opts: ['Матрица рангов', 'Перечень приоритетных рисков', 'Идентифицированные последствия от наступления риска', 'Реестр рисков'], a: 3, explain: 'Выходом из процесса планирования реагирования на риски является реестр рисков'},
  {q: 'Назначен менеджер нового проекта с небольшим опытом работы. Так как для выполнения проекта он будет работать по матричной схеме организации, то можно ожидать, что обмен информацией будет:', opts: ['Комплексным', 'Открытым и точным', 'Трудно автоматизируемым', 'Простым'], a: 0, explain: 'В матричной организации обмен информацией является комплексным'},
  {q: 'Кто имеет наибольшую власть в проектно-ориентированной организации?', opts: ['Все ответы правильные', 'Команда', 'Функциональный менеджер', 'Менеджер проекта'], a: 3, explain: 'В проектно-ориентированной организации наибольшую власть имеет менеджер проекта'},
  {q: 'Во время какой фазы жизненного цикла управления проектом создается Устав проекта?', opts: ['Планирование', 'Исполнение', 'Инициация', 'Контроль'], a: 2, explain: 'Устав проекта создается на фазе инициации'},
  {q: 'Устав должен содержать следующее, за исключением:', opts: ['Ограничения', 'Критерии успеха', 'Бюджет проекта', 'Объем вознаграждения спонсора, заказчика'], a: 3, explain: 'Объем вознаграждения спонсора/заказчика не включается в Устав проекта'},
  {q: 'Выберите формулу расчета VAC:', opts: ['BAC-EAC', 'EV-PV', 'EV/PV', 'BAC/CPI'], a: 0, explain: 'VAC (Variance at Completion) = BAC - EAC'},
  {q: 'Расхождения при завершении обозначается как:', opts: ['ETC', 'CPI', 'BAC', 'VAC'], a: 3, explain: 'VAC (Variance at Completion) — расхождения при завершении'},
  {q: 'Отклонение по срокам обозначается как:', opts: ['PV', 'CV', 'EV', 'SV'], a: 3, explain: 'SV (Schedule Variance) — отклонение по срокам'},
  {q: 'Выберите формулу расчета SV:', opts: ['EV/AC', 'EV-AC', 'EV-PV', 'EV/PV'], a: 2, explain: 'SV (Schedule Variance) = EV - PV'},
  {q: 'Оценки продолжительности задания О=3 дня, Р=7 дней, М=4 дня. Каково стандартное отклонение этого задания?', opts: ['2/3 дня', '1 день', '4/3 дня', '1/3 дня'], a: 0, explain: 'Стандартное отклонение = (P - O) / 6 = (7 - 3) / 6 = 2/3 дня'},
  {q: 'В проектной организации команда проекта:', opts: ['часто имеет «собственный дом»', 'имеет временное место работы', 'всегда имеет «собственный дом»', 'никогда не будет иметь «собственного дома»'], a: 3, explain: 'В проектной организации команда проекта никогда не будет иметь собственного отдела, в который она вернется после завершения проекта'},
  {q: 'Что из перечисленного должен содержать Устав проекта?', opts: ['План коммуникаций', 'Критерии завершения проекта', 'Подробный бюджет', 'Подробные оценки ресурсов'], a: 1, explain: 'Устав проекта должен содержать критерии завершения проекта'},
  {q: 'Активы организационного процесса включают следующее, кроме:', opts: ['Политики и процедуры', 'Уроки, извлеченные из прошлых проектов', 'Исторические данные', 'Шаблоны'], a: 0, explain: 'Все перечисленное относится к активам организационного процесса'},
  {q: 'Проект по разработке программного обеспечения идет непросто. В проекте свыше 30 участников и они не могут согласовать цели проекта. Один из участников проекта считает, что проект позволит достичь улучшения 30%, второй надеется, что возможно достичь 50%. Менеджер проекта считает, что 10% - наиболее реалистичны. Каков наилучший порядок действий?', opts: ['Согласовать цели проекта', 'Отменить проект', 'Провести переговоры', 'Попросить спонсора вынести окончательное решение'], a: 0, explain: 'Наилучший порядок действий — согласовать цели проекта со всеми участниками'},
  {q: 'Положительное значение CV означает:', opts: ['отставание от расписания', 'недорасход бюджета', 'перерасход бюджета', 'опережение расписания'], a: 1, explain: 'Положительное значение CV (Cost Variance) означает недорасход бюджета'},
  {q: 'Выберите формулу расчета ETC:', opts: ['BAC-EAC', 'EAC-AC', 'EV-PV', 'BAC/CPI'], a: 1, explain: 'ETC (Estimate to Complete) = EAC - AC'},
  {q: 'Система кода счетов в иерархической структуре работ (ИСР) позволяет персоналу проекта:', opts: ['Определить уровни ресурсов', 'Обеспечить трассируемость', 'Определить, где работа выполнена', 'Использовать ее в программных продуктах управления проектом'], a: 1, explain: 'Система кода счетов в ИСР позволяет обеспечить трассируемость'},
  {q: 'Резерв задания определяется:', opts: ['Периодом времени, когда задание не критично', 'Временем, на которое может быть задержано задание до того, как оно замедлит критический путь', 'Периодом времени, когда задание критично', 'Временем выполнения задания'], a: 1, explain: 'Резерв задания — это время, на которое может быть задержано задание до того, как оно замедлит критический путь'},
  {q: 'Если пессимистическая оценка продолжительности задания – 18 дней, а оптимистическая – 12 дней, чему равно стандартное отклонение задания?', opts: ['6 дней', '1 день', '15 дней', '3 дня'], a: 1, explain: 'Стандартное отклонение = (P - O) / 6 = (18 - 12) / 6 = 1 день'},
  {q: 'Плановый объем обозначается как:', opts: ['CV', 'EV', 'AC', 'PV'], a: 3, explain: 'PV (Planned Value) — плановый объем'},
  {q: 'Отрицательное значение CV означает:', opts: ['перерасход бюджета', 'опережение расписания', 'отставание от расписания', 'недорасход бюджета'], a: 0, explain: 'Отрицательное значение CV (Cost Variance) означает перерасход бюджета'},
  {q: 'Прогноз до завершения обозначается как:', opts: ['ETC', 'BAC', 'CPI', 'EAC'], a: 0, explain: 'ETC (Estimate to Complete) — прогноз до завершения'},
  {q: 'Стрелочная диаграмма отличается от узловой диаграммы, так как стрелочная диаграмма:', opts: ['Может использовать только зависимости типа «конец-старт»', 'Может использовать фиктивные операции', 'Имеет зависимости только типа «старт-старт»', 'Является методом сетевых диаграмм'], a: 1, explain: 'Стрелочная диаграмма может использовать фиктивные операции'},
  {q: 'Какое высказывание наилучшим образом описывает взаимосвязь между стандартным отклонением и риском?', opts: ['Стандартное отклонение означает то, что оценка точная', 'Ничего общего', 'Стандартное отклонение говорит о том, насколько неопределённой является оценка', 'показывает вероятность наступления риска'], a: 2, explain: 'Стандартное отклонение показывает, насколько неопределённой является оценка'},
  {q: 'Факторы внешней среды предприятия включают следующее, кроме:', opts: ['Культура организации', 'Рыночные условия', 'Политическая ситуация', 'Экономические условия'], a: 0, explain: 'Культура организации является внутренним фактором, а не внешней средой'},
  {q: 'Все нижеприведенные характеристики являются признаками проекта, за исключением:', opts: ['Временные рамки', 'Уникальный продукт или услуга', 'Определенное начало и конец', 'Взаимосвязанные операции'], a: 3, explain: 'Взаимосвязанные операции не являются отличительным признаком именно проекта'},
  {q: 'Индекс выполнения сроков обозначается как:', opts: ['CPI', 'BAC', 'VAC', 'SPI'], a: 3, explain: 'SPI (Schedule Performance Index) — индекс выполнения сроков'},
  {q: 'Выберите формулу расчета CV:', opts: ['EV/AC', 'EV-AC', 'BAC/CPI', 'EV-PV'], a: 1, explain: 'CV (Cost Variance) = EV - AC'},
  {q: 'Фактическая стоимость обозначается как:', opts: ['PV', 'EV', 'AC', 'SV'], a: 2, explain: 'AC (Actual Cost) — фактическая стоимость'},
  {q: 'Одним из преимуществ матричной организации по сравнению с функциональной является:', opts: ['Четкая карьерная лестница', 'Более эффективное использование ресурсов', 'Простота управления', 'Отсутствие конфликтов'], a: 1, explain: 'Матричная организация обеспечивает более эффективное использование ресурсов'}
];

const QUESTIONS = [...PM_QUESTIONS];
const SOURCE_HTML = 'Тесты для подговки к экзамену-1.htm';
let idx = 0;
const container = document.getElementById('q-container');
const progressBar = document.getElementById('q-progress');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let QUIZ = [...QUESTIONS];
const restartBtn = document.getElementById('restartBtn');
const importFile = document.getElementById('importFile');
const countEl = document.getElementById('q-count');
let autoTimer = null;
function updateProgress(){
  const el = progressBar.querySelector('i') || document.createElement('i');
  if(!progressBar.contains(el)) progressBar.appendChild(el);
  const pct = QUIZ.length ? Math.round(((idx)/QUIZ.length)*100) : 0;
  el.style.width = pct + '%';
  progressBar.setAttribute('data-label', QUIZ.length ? `${idx+1}/${QUIZ.length}` : '0/0');
}
function renderQuestion(){
  if(autoTimer){ clearTimeout(autoTimer); autoTimer = null; }
  container.innerHTML = '';
  if(!QUIZ.length){
    const empty = document.createElement('div');
    empty.className = 'question';
    empty.textContent = 'Вопросы не найдены';
    container.appendChild(empty);
    updateProgress();
    return;
  }
  const data = QUIZ[idx];
  const q = document.createElement('div'); q.className = 'question'; q.textContent = (idx+1)+'. '+data.q; container.appendChild(q);
  const opts = document.createElement('div'); opts.className = 'options';
  data.opts.forEach((text,i)=>{
    const b = document.createElement('button'); b.className='option'; b.dataset.i = i; b.type = 'button'; b.setAttribute('aria-pressed','false');
    b.innerHTML = `<span class=\"chip\">${String.fromCharCode(65+i)}</span><span class=\"text\">${escapeHtml(text)}</span>`;
    b.addEventListener('click',()=> onChoose(b,i));
    opts.appendChild(b);
  });
  container.appendChild(opts);
  updateProgress();
}
function onChoose(btn,i){
  const data = QUIZ[idx];
  const parent = btn.parentElement;
  if(parent.dataset.answered) return;
  parent.dataset.answered = '1';
  const children = Array.from(parent.children);
  children.forEach(c=> c.classList.add('disabled'));
  if(i === data.a){
    btn.classList.add('correct'); btn.setAttribute('aria-pressed','true');
    autoTimer = setTimeout(()=>{
      if(idx < QUIZ.length-1){ idx++; renderQuestion(); }
    }, 1500);
  } else {
    btn.classList.add('wrong'); btn.setAttribute('aria-pressed','true');
    const correct = children.find(c=> Number(c.dataset.i) === data.a);
    if(correct) correct.classList.add('correct');
  }
  const ex = document.createElement('div'); ex.className='explain'; ex.textContent = data.explain || '';
  container.appendChild(ex);
}
prevBtn.addEventListener('click',()=>{
  if(autoTimer){ clearTimeout(autoTimer); autoTimer = null; }
  if(idx>0) { idx--; renderQuestion(); }
});
nextBtn.addEventListener('click',()=>{
  if(autoTimer){ clearTimeout(autoTimer); autoTimer = null; }
  if(idx<QUIZ.length-1) { idx++; renderQuestion(); }
  else { idx = 0; renderQuestion(); }
});
function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } }
function updateCount(){ if(countEl) countEl.textContent = QUIZ.length ? ('Всего: '+QUIZ.length) : ''; }
restartBtn.addEventListener('click',()=>{ shuffle(QUIZ); idx=0; renderQuestion(); updateCount(); });
importFile.addEventListener('change', async (e)=>{
  const file = e.target.files && e.target.files[0];
  if(!file) return;
  const text = await file.text();
  const parsed = parseWordHtmlToQuestions(text);
  if(parsed.length){ QUIZ = parsed; idx=0; renderQuestion(); updateCount(); }
  else { alert('Не удалось распознать вопросы из файла.'); }
});
function parseWordHtmlToQuestions(html){
  const dom = new DOMParser().parseFromString(html,'text/html');
  const out = [];
  const text = (el)=> (el?.textContent || '').replace(/\s+/g,' ').trim();

  const tables = dom.querySelectorAll('table');
  tables.forEach(tbl=>{
    const rows = tbl.querySelectorAll('tr');
    rows.forEach(row=>{
      const cells = Array.from(row.querySelectorAll('td,th'));
      // Основная структура из экспортированного Word: вопрос в 3-й ячейке, правильный ответ в 4-й
      if(cells.length >= 7){
        const q = text(cells[2]);
        const answers = [cells[3], cells[4], cells[5], cells[6]].map(text).filter(Boolean);
        if(q && answers.length === 4){
          const correct = answers[0];
          const shuffled = [...answers];
          shuffle(shuffled);
          const a = Math.max(0, shuffled.indexOf(correct));
          out.push({q, opts: shuffled, a, explain: `Правильный ответ: ${correct}`});
          return;
        }
      }
      // Базовая структура (вопрос в первой колонке, варианты в следующих четырех)
      if(cells.length >= 5){
        const q = text(cells[0]);
        const opts = cells.slice(1,5).map(c=> text(c)).filter(Boolean);
        let a = 0;
        for(let k=1;k<=4;k++){
          const cell = cells[k];
          const hasBold = cell.querySelector('b,strong');
          const style = (cell.getAttribute('style')||'').toLowerCase();
          if(hasBold || style.includes('color:green') || style.includes('#00ff00')) { a = k-1; break; }
        }
        if(q && opts.length===4){ out.push({q,opts,a,explain:''}); }
      }
    });
  });
  if(!out.length){
    const ps = Array.from(dom.querySelectorAll('p'));
    for(let i=0;i<ps.length;i++){
      const q = ps[i].textContent.trim();
      const opts = [];
      for(let j=1;j<=4 && i+j<ps.length;j++){ opts.push(ps[i+j].textContent.trim()); }
      if(q && opts.length===4){ out.push({q,opts,a:0,explain:''}); i += 4; }
    }
  }
  return out;
}

async function loadDefaultHtml(){
  // Сначала загружаем встроенные вопросы из PM_QUESTIONS
  if(PM_QUESTIONS && PM_QUESTIONS.length > 0){
    QUIZ = [...PM_QUESTIONS];
    idx = 0;
    shuffle(QUIZ);
    renderQuestion();
    updateCount();
    return;
  }
  
  // Если встроенных вопросов нет, пробуем загрузить из HTML
  try{
    const res = await fetch(encodeURI(SOURCE_HTML));
    if(!res.ok) throw new Error('source not found');
    const html = await res.text();
    const parsed = parseWordHtmlToQuestions(html);
    if(parsed.length){
      QUIZ = parsed;
      idx = 0;
      shuffle(QUIZ);
      renderQuestion();
      updateCount();
      return;
    }
  } catch(err){
    console.warn('Не удалось загрузить вопросы из HTML:', err);
  }
  renderQuestion();
  updateCount();
}

updateProgress();
loadDefaultHtml();
window.QUIZ = {QUESTIONS, QUIZ};

function escapeHtml(str){
  return String(str)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}
