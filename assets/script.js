// Простая структура вопросов — редактируйте здесь
const QUESTIONS = [
  {q: 'Какое число является четным?', opts:['3','7','8','11'], a:2, explain:'8 — единственное четное число в списке.'},
  {q: 'Столица Франции?', opts:['Берлин','Париж','Мадрид','Рим'], a:1, explain:'Париж — столица Франции.'},
  {q: 'Какой элемент — газ при комнатной температуре?', opts:['Натрий','Кислород','Золото','Медь'], a:1, explain:'Кислород — газ при комнатной температуре.'},
  {q: 'Что из перечисленного — программный язык?', opts:['HTML','CSS','Python','JPEG'], a:2, explain:'Python — полноценный язык программирования.'},
  {q: '2 + 2 = ?', opts:['3','4','5','22'], a:1, explain:'2 + 2 = 4.'}
];
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
  const pct = Math.round(((idx)/QUIZ.length)*100);
  el.style.width = pct + '%';
  progressBar.setAttribute('data-label', `${idx+1}/${QUIZ.length}`);
}
function renderQuestion(){
  if(autoTimer){ clearTimeout(autoTimer); autoTimer = null; }
  const data = QUIZ[idx];
  container.innerHTML = '';
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
  const tables = dom.querySelectorAll('table');
  tables.forEach(tbl=>{
    const rows = tbl.querySelectorAll('tr');
    rows.forEach(row=>{
      const cells = Array.from(row.querySelectorAll('td,th'));
      if(cells.length>=5){
        const q = cells[0].textContent.trim();
        const opts = cells.slice(1,5).map(c=> c.textContent.trim()).filter(Boolean);
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
updateProgress(); renderQuestion(); updateCount();
window.QUIZ = {QUESTIONS, QUIZ};

function escapeHtml(str){
  return String(str)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}
