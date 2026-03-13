'use strict';

// ===== DATA =====
const VERBS = [
  {
    verb: 'geben', meta: 'gibt · gab · hat gegeben', meaning: 'მიცემა, გადაცემა',
    examples: [
      { de: 'Bitte gib mir das Salz!', ka: 'გთხოვ, მარილი მომეცი!' },
      { de: 'Drei mal drei gibt neun.', ka: 'სამჯერ სამი ცხრაა.' },
      { de: 'Wie viel Trinkgeld gibt man in Georgien normalerweise?', ka: 'რამდენ სასმელ ფულს იძლევიან ჩვეულებრივ საქართველოში?' },
      { de: 'Ich gebe dir mein Versprechen — ich komme pünktlich.', ka: 'სიტყვას გაძლევ — დროულად მოვალ.' },
    ]
  },
  {
    verb: 'sich geben', meta: 'reflexiv', meaning: 'თავისთავად გაივლის',
    examples: [
      { de: 'Das gibt sich bestimmt wieder.', ka: 'ეს ნამდვილად თავისთავად გაივლის.' },
    ]
  },
  {
    verb: 'es gibt', meta: 'unpersönlich', meaning: 'არის, არსებობს',
    examples: [
      { de: "Was gibt's Neues bei dir?", ka: 'რა სიახლეა შენთან?' },
      { de: 'Es gibt dieses Jahr besonders viel Obst im Garten.', ka: 'წელს ბაღში განსაკუთრებით ბევრი ხილია.' },
      { de: 'Das gibt es doch nicht! Du hast wirklich gewonnen?', ka: 'ეს შეუძლებელია! შენ ნამდვილად მოიგე?' },
    ]
  },
  {
    verb: 'abgeben', meta: 'gibt ab · gab ab · abgegeben', meaning: 'ჩაბარება; გადაცემა',
    examples: [
      { de: 'Bitte geben Sie Ihren Ausweis an der Rezeption ab.', ka: 'გთხოვთ პირადობის მოწმობა რეგისტრატურაში ჩააბაროთ.' },
      { de: 'Alle Schüler müssen ihre Prüfung bis 12 Uhr abgeben.', ka: 'ყველა მოსწავლემ გამოცდა 12 საათამდე უნდა ჩააბაროს.' },
      { de: 'Im Fußball muss man lernen, den Ball rechtzeitig abzugeben.', ka: 'ფეხბურთში უნდა ისწავლო ბურთის დროულად გადაცემა.' },
    ]
  },
  {
    verb: 'angeben', meta: 'gibt an · gab an · angegeben', meaning: 'მითითება; ტრაბახი',
    examples: [
      { de: 'Bitte geben Sie Ihre Telefonnummer an.', ka: 'გთხოვთ მიუთითოთ თქვენი ტელეფონის ნომერი.' },
      { de: 'Hör auf anzugeben! Du spielst auch nicht besser Tennis als ich!', ka: 'ნუ ტრაბახობ, შენ ტენისშიც ჩემზე უკეთ არ თამაშობ!' },
    ]
  },
  {
    verb: 'aufgeben', meta: 'gibt auf · gab auf · aufgegeben', meaning: 'მიტოვება; გაგზავნა; დავალების მიცემა',
    examples: [
      { de: 'Wer aufgibt, hat schon verloren.', ka: 'ვინც თავს ანებებს, უკვე წაიგო.' },
      { de: 'Trotz der Verletzung wollte die Sportlerin nicht aufgeben.', ka: 'ტრავმის მიუხედავად სპორტსმენს არ სურდა ანებებდა თავი.' },
      { de: 'Unser Lehrer gibt jeden Tag sehr viele Hausaufgaben auf.', ka: 'ჩვენი მასწავლებელი ყოველ დღე ძალიან ბევრ საშინაო დავალებას იძლევა.' },
    ]
  },
  {
    verb: 'ausgeben', meta: 'gibt aus · gab aus · ausgegeben', meaning: 'დახარჯვა',
    examples: [
      { de: 'Er gibt fast sein ganzes Gehalt für Reisen aus.', ka: 'ის თავის თითქმის მთელ ხელფასს მოგზაურობაზე ხარჯავს.' },
      { de: 'Wie viel gibst du im Monat für Kleidung aus?', ka: 'რამდენს ხარჯავ ტანსაცმელზე თვეში?' },
    ]
  },
  {
    verb: 'bekanntgeben', meta: 'gibt bekannt · bekanntgegeben', meaning: 'გამოცხადება, გამოქვეყნება',
    examples: [
      { de: 'Der Trainer wird morgen die Aufstellung der Mannschaft bekanntgeben.', ka: 'მწვრთნელი ხვალ გუნდის შემადგენლობას გამოაცხადებს.' },
      { de: 'Der Konzern hat heute seine Quartalsergebnisse bekanntgegeben.', ka: 'კონცერნმა დღეს კვარტალის შედეგები გამოაქვეყნა.' },
    ]
  },
  {
    verb: 'durchgeben', meta: 'gibt durch · durchgegeben', meaning: 'სატელეფონოდ/სარადიოდ გადაცემა',
    examples: [
      { de: 'Kannst du mir die genaue Uhrzeit des Treffens durchgeben?', ka: 'შეგიძლია შეხვედრის ზუსტი დრო გადმომცე?' },
      { de: 'Der Sprecher gab die Verkehrsmeldungen im Radio durch.', ka: 'წამყვანმა რადიოში მოძრაობის შეტყობინებები გამოაცხადა.' },
    ]
  },
  {
    verb: 'ergeben', meta: 'ergibt · ergab · ergeben', meaning: 'გამოდიოდეს; იძლეოდეს შედეგს',
    examples: [
      { de: 'Die Rechnung ergibt insgesamt 47 Euro.', ka: 'გაანგარიშება სულ 47 ევროს იძლევა.' },
      { de: 'Das ergibt für mich keinen Sinn.', ka: 'ეს ჩემთვის აზრს მოკლებულია.' },
    ]
  },
  {
    verb: 'sich ergeben', meta: 'reflexiv', meaning: 'დანებება; გამომდინარეობა',
    examples: [
      { de: 'Nach langer Belagerung ergab sich die Burg schließlich.', ka: 'გრძელი ალყის შემდეგ ციხე საბოლოოდ დანებდა.' },
      { de: 'Neue Möglichkeiten können sich aus unerwarteten Situationen ergeben.', ka: 'ახალი შესაძლებლობები შეიძლება მოულოდნელი სიტუაციებიდან გამომდინარეობდეს.' },
    ]
  },
  {
    verb: 'herausgeben', meta: 'gibt heraus · herausgegeben', meaning: 'გამოცემა; ხურდის დაბრუნება',
    examples: [
      { de: 'Tut mir leid, ich kann nicht herausgeben — haben Sie es passend?', ka: 'ბოდიში, ხურდა არ მაქვს — გაქვთ წვრილი?' },
      { de: 'Der Verlag gibt jedes Jahr eine neue Ausgabe des Wörterbuchs heraus.', ka: 'გამომცემლობა ყოველ წელს ლექსიკონის ახალ გამოცემას გამოსცემს.' },
    ]
  },
  {
    verb: 'hergeben', meta: 'gibt her · hergegeben', meaning: 'ჩამოგლეჯა; გაცემა',
    examples: [
      { de: 'Gib sofort das Handy her — du hast es schon zwei Stunden!', ka: 'მობილური ახლავე მომეცი — ორი საათია გიჭირავს!' },
      { de: 'Für diesen Job würde ich nicht meinen Namen hergeben.', ka: 'ამ სამუშაოსთვის ჩემს სახელს არ გამოვიყენებდი.' },
    ]
  },
  {
    verb: 'mitgeben', meta: 'gibt mit · mitgegeben', meaning: 'გამოსაყოლება; გამოტანა',
    examples: [
      { de: 'Ich gebe dir etwas Kuchen für deine Schwester mit.', ka: 'შენი დისთვის ცოტა ნამცხვარს გაგატან.' },
      { de: 'Die Mutter gab dem Kind warme Kleidung für den Ausflug mit.', ka: 'დედამ ბავშვს გასეირნებისთვის თბილი ტანსაცმელი გამოატანა.' },
    ]
  },
  {
    verb: 'nachgeben', meta: 'gibt nach · nachgegeben', meaning: 'დათმობა; შემცირება',
    examples: [
      { de: 'Diesmal gebe ich nach, aber beim nächsten Mal bestehe ich auf meinem Recht.', ka: 'ამჯერად დავთმობ, მაგრამ შემდეგ ჯერზე საკუთარ უფლებაზე ვიდგები.' },
      { de: 'Die Immobilienpreise in der Region haben leicht nachgegeben.', ka: 'რეგიონში უძრავი ქონების ფასები ოდნავ დაეცა.' },
    ]
  },
  {
    verb: 'übergeben', meta: 'übergibt · übergab · übergeben', meaning: 'გადაბარება; ოფიციალური გადაცემა',
    examples: [
      { de: 'Der alte Bürgermeister hat dem neuen die Amtsgeschäfte übergeben.', ka: 'ძველმა მერმა ახალს მოვალეობები გადასცა.' },
      { de: 'Das neue Krankenhaus wurde gestern offiziell dem Betrieb übergeben.', ka: 'ახალი საავადმყოფო გუშინ ოფიციალურად ამოქმედდა.' },
    ]
  },
  {
    verb: 'vergeben', meta: 'vergibt · vergab · vergeben', meaning: 'პატიება; ტენდერის გადაცემა',
    examples: [
      { de: 'Kannst du mir vergeben? Ich hätte das nicht sagen sollen.', ka: 'შეგიძლია მაპატიო? ეგ არ უნდა მეთქვა.' },
      { de: 'Es ist schwer zu vergeben, aber es ist wichtig für dich selbst.', ka: 'პატიება ძნელია, მაგრამ ეს შენთვისვე მნიშვნელოვანია.' },
      { de: 'Die Gemeinde hat den Bauauftrag an eine lokale Firma vergeben.', ka: 'მუნიციპალიტეტმა სამშენებლო სამუშაოები ადგილობრივ კომპანიას გადასცა.' },
    ]
  },
  {
    verb: 'weitergeben', meta: 'gibt weiter · weitergegeben', meaning: 'ინფორმაციის/ნივთის გადაცემა',
    examples: [
      { de: 'Bitte gib diese Information an alle Kollegen weiter.', ka: 'გთხოვ, ეს ინფორმაცია ყველა კოლეგას გადაეცი.' },
      { de: 'Die Weitergabe von Passwörtern an Dritte ist strengstens verboten.', ka: 'პაროლების მესამე პირებზე გადაცემა უმკაცრესად აკრძალულია.' },
    ]
  },
  {
    verb: 'wiedergeben', meta: 'gibt wieder · wiedergegeben', meaning: 'შინაარსის გადმოცემა; რეპროდუქცია',
    examples: [
      { de: 'Kannst du kurz wiedergeben, was der Chef in der Besprechung gesagt hat?', ka: 'შეგიძლია მოკლედ გადმოსცე, რა თქვა უფროსმა შეხვედრაზე?' },
      { de: 'Der Schauspieler gab die Gefühle der Figur sehr überzeugend wieder.', ka: 'მსახიობმა პერსონაჟის გრძნობები ძალიან დამაჯერებლად გადმოსცა.' },
    ]
  },
  {
    verb: 'zugeben', meta: 'gibt zu · zugegeben', meaning: 'აღიარება; ნების დართვა',
    examples: [
      { de: 'Ich muss zugeben, dass ich mich geirrt habe.', ka: 'უნდა ვაღიარო, რომ შევცდი.' },
      { de: 'Er wollte den Fehler lange nicht zugeben.', ka: 'მას დიდხანს არ სურდა შეცდომის აღიარება.' },
    ]
  },
  {
    verb: 'zurückgeben', meta: 'gibt zurück · zurückgegeben', meaning: 'უკან დაბრუნება',
    examples: [
      { de: 'Bis wann muss ich dir das Fahrrad zurückgeben?', ka: 'როდემდე უნდა დაგიბრუნო ველოსიპედი?' },
      { de: 'Könntest du mir bitte mein Wörterbuch zurückgeben? Ich brauche es dringend.', ka: 'შეგიძლია ჩემი ლექსიკონი დამიბრუნო? სასწრაფოდ მჭირდება.' },
    ]
  },
];

const TOTAL = VERBS.length;

// ===== STATE =====
let state = {
  fcIndex: 0,
  fcFlipped: false,
  seenSet: new Set(),
  knownSet: new Set(),
  qCorrect: 0,
  qWrong: 0,
  qAnswered: false,
};

function loadState() {
  try {
    const raw = localStorage.getItem('deutschde_state');
    if (!raw) return;
    const s = JSON.parse(raw);
    state.seenSet = new Set(s.seen || []);
    state.knownSet = new Set(s.known || []);
    state.qCorrect = s.qCorrect || 0;
    state.qWrong = s.qWrong || 0;
  } catch(e) {}
}

function saveState() {
  try {
    localStorage.setItem('deutschde_state', JSON.stringify({
      seen: [...state.seenSet],
      known: [...state.knownSet],
      qCorrect: state.qCorrect,
      qWrong: state.qWrong,
    }));
  } catch(e) {}
}

function randEx(v) {
  return v.examples[Math.floor(Math.random() * v.examples.length)];
}

// ===== RING PROGRESS =====
function updateRing() {
  const pct = state.knownSet.size / TOTAL;
  const circumference = 2 * Math.PI * 20; // r=20 → 125.66
  const offset = circumference * (1 - pct);
  document.getElementById('ring-fill').style.strokeDashoffset = offset;
  document.getElementById('ring-pct').textContent = Math.round(pct * 100) + '%';
}

// ===== TABS =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    document.getElementById('tab-' + tab).classList.add('active');
    if (tab === 'list') renderList();
    if (tab === 'quiz') initQuiz();
  });
});

// ===== FLASHCARD =====
function renderDots() {
  const c = document.getElementById('fc-dots');
  c.innerHTML = '';
  VERBS.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'fc-dot' +
      (state.knownSet.has(i) ? ' known' : state.seenSet.has(i) ? ' seen' : '') +
      (i === state.fcIndex ? ' current' : '');
    d.title = VERBS[i].verb;
    d.addEventListener('click', () => { state.fcIndex = i; renderFC(); });
    c.appendChild(d);
  });
}

function renderFC() {
  const v = VERBS[state.fcIndex];
  const ex = randEx(v);
  state.fcFlipped = false;
  const card = document.getElementById('flashcard');
  card.classList.remove('flipped');

  document.getElementById('fc-verb').textContent = v.verb;
  document.getElementById('fc-meta').textContent = v.meta;
  document.getElementById('fc-example-de').textContent = ex.de;
  document.getElementById('fc-meaning').textContent = v.meaning;
  document.getElementById('fc-example-de-b').textContent = ex.de;
  document.getElementById('fc-example-ka').textContent = ex.ka;
  document.getElementById('fc-seen').textContent = state.seenSet.size;
  document.getElementById('fc-known').textContent = state.knownSet.size;
  renderDots();
  updateRing();
}

document.getElementById('flashcard').addEventListener('click', () => {
  const card = document.getElementById('flashcard');
  state.fcFlipped = !state.fcFlipped;
  card.classList.toggle('flipped', state.fcFlipped);
  if (state.fcFlipped && !state.seenSet.has(state.fcIndex)) {
    state.seenSet.add(state.fcIndex);
    saveState();
    renderDots();
    document.getElementById('fc-seen').textContent = state.seenSet.size;
  }
});

document.getElementById('btn-know').addEventListener('click', () => {
  state.knownSet.add(state.fcIndex);
  state.seenSet.add(state.fcIndex);
  saveState();
  nextFC();
});

document.getElementById('btn-next-fc').addEventListener('click', nextFC);

function nextFC() {
  state.fcIndex = (state.fcIndex + 1) % TOTAL;
  renderFC();
}

// ===== QUIZ =====
let quizVerb = null;

function initQuiz() {
  updateQuizScore();
  nextQuestion();
}

function updateQuizScore() {
  document.getElementById('q-correct').textContent = state.qCorrect;
  document.getElementById('q-wrong').textContent = state.qWrong;
  const total = state.qCorrect + state.qWrong;
  const pct = total ? Math.round(state.qCorrect / total * 100) : 0;
  document.getElementById('q-pct').textContent = total ? pct + '%' : '—';
  document.getElementById('quiz-progress-fill').style.width = total ? pct + '%' : '0%';
}

function nextQuestion() {
  state.qAnswered = false;
  document.getElementById('quiz-next-btn').classList.add('hidden');
  document.getElementById('quiz-explanation').classList.add('hidden');

  quizVerb = VERBS[Math.floor(Math.random() * TOTAL)];
  const ex = randEx(quizVerb);
  const useDE = Math.random() > 0.5;

  if (useDE) {
    document.getElementById('quiz-direction').textContent = 'გერმანული → ქართული';
    document.getElementById('quiz-question').textContent = ex.de;
  } else {
    document.getElementById('quiz-direction').textContent = 'ქართული → გერმანული';
    document.getElementById('quiz-question').textContent = ex.ka;
  }

  // Build options
  let opts = [quizVerb];
  while (opts.length < 4) {
    const r = VERBS[Math.floor(Math.random() * TOTAL)];
    if (!opts.find(o => o.verb === r.verb)) opts.push(r);
  }
  opts = opts.sort(() => Math.random() - 0.5);

  const oc = document.getElementById('quiz-options');
  oc.innerHTML = '';
  opts.forEach(o => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = o.verb + ' — ' + o.meaning;
    btn.addEventListener('click', () => {
      if (state.qAnswered) return;
      state.qAnswered = true;
      oc.querySelectorAll('.quiz-opt').forEach(b => { b.disabled = true; });
      if (o.verb === quizVerb.verb) {
        btn.classList.add('correct');
        state.qCorrect++;
      } else {
        btn.classList.add('wrong');
        state.qWrong++;
        oc.querySelectorAll('.quiz-opt').forEach(b => {
          if (b.textContent.startsWith(quizVerb.verb)) b.classList.add('correct');
        });
      }
      const expEl = document.getElementById('quiz-explanation');
      expEl.textContent = useDE ? '→ ' + ex.ka : '→ ' + ex.de;
      expEl.classList.remove('hidden');
      document.getElementById('quiz-next-btn').classList.remove('hidden');
      saveState();
      updateQuizScore();
    });
    oc.appendChild(btn);
  });
}

document.getElementById('quiz-next-btn').addEventListener('click', nextQuestion);

// ===== LIST =====
function renderList(filter) {
  const c = document.getElementById('verb-list');
  const q = (filter || '').toLowerCase();
  const items = q
    ? VERBS.filter(v => v.verb.toLowerCase().includes(q) || v.meaning.toLowerCase().includes(q))
    : VERBS;
  c.innerHTML = '';
  items.forEach((v, i) => {
    const idx = VERBS.indexOf(v);
    const div = document.createElement('div');
    div.className = 'verb-list-item';
    div.innerHTML = `
      <div class="vli-verb">${v.verb}</div>
      <div class="vli-body">
        <div class="vli-meaning">${v.meaning}</div>
        <div class="vli-meta">${v.meta}</div>
      </div>
      <div class="vli-badge ${state.knownSet.has(idx) ? 'known' : ''}">${state.knownSet.has(idx) ? '✓' : idx + 1}</div>
    `;
    c.appendChild(div);
  });
}

document.getElementById('list-search').addEventListener('input', e => renderList(e.target.value));

// ===== PWA INSTALL =====
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-banner').classList.remove('hidden');
});

document.getElementById('install-btn').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById('install-banner').classList.add('hidden');
});

document.getElementById('install-dismiss').addEventListener('click', () => {
  document.getElementById('install-banner').classList.add('hidden');
});

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ===== INIT =====
loadState();
renderFC();
renderList();
