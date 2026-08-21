const app = document.getElementById("app");
const pageTitle = document.getElementById("pageTitle");
const backBtn = document.getElementById("backBtn");
const offlineBadge = document.getElementById("offlineBadge");

const PROGRESS_KEY = "kajo_progress";

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

function markLessonDone(lessonId) {
  const progress = getProgress();
  progress[lessonId] = true;
  saveProgress(progress);
}

// --- Navigation ---
let history = [];

function navigate(view, params = {}) {
  history.push({ view, params });
  render(view, params);
}

function goBack() {
  history.pop();
  const prev = history.pop() || { view: "home", params: {} };
  navigate(prev.view, prev.params);
}

backBtn.addEventListener("click", goBack);

function render(view, params) {
  app.innerHTML = "";
  app.classList.remove("enter");
  void app.offsetWidth; // relance l'animation à chaque écran
  app.classList.add("enter");

  if (view === "home") {
    backBtn.classList.add("hidden");
    pageTitle.textContent = "Kajo";
    renderHome();
  } else if (view === "subject") {
    backBtn.classList.remove("hidden");
    const subject = SUBJECTS.find((s) => s.id === params.subjectId);
    pageTitle.textContent = subject.name;
    renderLessonList(subject);
  } else if (view === "lesson") {
    backBtn.classList.remove("hidden");
    const subject = SUBJECTS.find((s) => s.id === params.subjectId);
    const lesson = subject.lessons.find((l) => l.id === params.lessonId);
    pageTitle.textContent = lesson.title;
    renderLesson(subject, lesson);
  } else if (view === "quiz") {
    backBtn.classList.remove("hidden");
    const subject = SUBJECTS.find((s) => s.id === params.subjectId);
    const lesson = subject.lessons.find((l) => l.id === params.lessonId);
    pageTitle.textContent = "Quiz — " + lesson.title;
    renderQuiz(subject, lesson);
  }
}

// --- Écran d'accueil : hero + liste des matières ---
function renderHome() {
  const progress = getProgress();

  const totalLessons = SUBJECTS.reduce((sum, s) => sum + s.lessons.length, 0);
  const doneLessons = SUBJECTS.reduce(
    (sum, s) => sum + s.lessons.filter((l) => progress[l.id]).length,
    0
  );
  const pct = totalLessons ? Math.round((doneLessons / totalLessons) * 100) : 0;

  const hero = document.createElement("section");
  hero.className = "hero";
  hero.innerHTML = `
    <p class="hero-eyebrow">Éducation · Bénin</p>
    <h2 class="hero-title">Continue d'apprendre</h2>
    <div class="hero-row">
      ${progressRingSVG(pct, 56)}
      <div class="hero-stats">
        <span class="hero-pct">${pct}%</span>
        <span class="hero-label">${doneLessons}/${totalLessons} leçons terminées</span>
      </div>
    </div>
  `;
  app.appendChild(hero);

  const grid = document.createElement("div");
  grid.className = "subject-grid";

  SUBJECTS.forEach((subject, i) => {
    const total = subject.lessons.length;
    const done = subject.lessons.filter((l) => progress[l.id]).length;
    const subjectPct = total ? Math.round((done / total) * 100) : 0;
    const tilt = i % 2 === 0 ? "-1.1deg" : "1.1deg";

    const card = document.createElement("button");
    card.className = "subject-card";
    card.style.setProperty("--tilt", tilt);
    card.style.setProperty("--accent", subject.color);
    card.innerHTML = `
      <span class="patch" style="background:${subject.color}">${subject.iconSvg}</span>
      <span class="subject-name">${subject.name}</span>
      <span class="subject-progress">
        <span class="mini-bar"><span class="mini-bar-fill" style="width:${subjectPct}%; background:${subject.color}"></span></span>
        ${done}/${total}
      </span>
    `;
    card.addEventListener("click", () => navigate("subject", { subjectId: subject.id }));
    grid.appendChild(card);
  });

  app.appendChild(grid);
}

function progressRingSVG(pct, size) {
  const r = size / 2 - 5;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="ring">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="#e7dfcd" stroke-width="5"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="#d9a441" stroke-width="5"
        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}"
        transform="rotate(-90 ${size/2} ${size/2})"/>
    </svg>
  `;
}

// --- Liste des leçons d'une matière ---
function renderLessonList(subject) {
  const progress = getProgress();
  const list = document.createElement("div");
  list.className = "lesson-list";

  subject.lessons.forEach((lesson) => {
    const isDone = !!progress[lesson.id];
    const item = document.createElement("button");
    item.className = "lesson-item";
    item.innerHTML = `
      <span class="lesson-check">${isDone ? "✅" : "⭕"}</span>
      <span class="lesson-title">${lesson.title}</span>
      <span class="lesson-arrow">›</span>
    `;
    item.addEventListener("click", () =>
      navigate("lesson", { subjectId: subject.id, lessonId: lesson.id })
    );
    list.appendChild(item);
  });

  app.appendChild(list);
}

// --- Contenu d'une leçon ---
function renderLesson(subject, lesson) {
  const container = document.createElement("div");
  container.className = "lesson-content";
  container.innerHTML = lesson.content;

  const quizBtn = document.createElement("button");
  quizBtn.className = "primary-btn";
  quizBtn.textContent = "Faire le quiz →";
  quizBtn.addEventListener("click", () =>
    navigate("quiz", { subjectId: subject.id, lessonId: lesson.id })
  );

  app.appendChild(container);
  app.appendChild(quizBtn);
}

// --- Quiz ---
function renderQuiz(subject, lesson) {
  let currentQ = 0;
  let score = 0;
  const answers = new Array(lesson.quiz.length).fill(null);

  function renderQuestion() {
    app.innerHTML = "";
    const q = lesson.quiz[currentQ];

    const dots = document.createElement("div");
    dots.className = "quiz-dots";
    lesson.quiz.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "quiz-dot" + (i === currentQ ? " active" : i < currentQ ? " done" : "");
      dots.appendChild(dot);
    });
    app.appendChild(dots);

    const qEl = document.createElement("p");
    qEl.className = "quiz-question";
    qEl.textContent = q.q;
    app.appendChild(qEl);

    const optionsEl = document.createElement("div");
    optionsEl.className = "quiz-options";

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.textContent = opt;
      btn.addEventListener("click", () => selectAnswer(i, btn));
      optionsEl.appendChild(btn);
    });

    app.appendChild(optionsEl);
  }

  function selectAnswer(index, btnEl) {
    const q = lesson.quiz[currentQ];
    const allBtns = document.querySelectorAll(".quiz-option");
    allBtns.forEach((b) => (b.disabled = true));

    if (index === q.answer) {
      btnEl.classList.add("correct");
      score++;
    } else {
      btnEl.classList.add("wrong");
      allBtns[q.answer].classList.add("correct");
    }

    setTimeout(() => {
      currentQ++;
      if (currentQ < lesson.quiz.length) {
        renderQuestion();
      } else {
        renderResult();
      }
    }, 900);
  }

  function renderResult() {
    app.innerHTML = "";
    markLessonDone(lesson.id);

    const pct = Math.round((score / lesson.quiz.length) * 100);
    const result = document.createElement("div");
    result.className = "quiz-result";
    result.innerHTML = `
      <div class="result-score">${score}/${lesson.quiz.length}</div>
      <p class="result-msg">${
        pct >= 70 ? "Bien joué ! 🎉" : "Continue à réviser, tu vas y arriver 💪"
      }</p>
    `;
    app.appendChild(result);

    const retryBtn = document.createElement("button");
    retryBtn.className = "primary-btn";
    retryBtn.textContent = "Recommencer le quiz";
    retryBtn.addEventListener("click", () => {
      currentQ = 0;
      score = 0;
      renderQuestion();
    });

    const homeBtn = document.createElement("button");
    homeBtn.className = "secondary-btn";
    homeBtn.textContent = "Retour aux matières";
    homeBtn.addEventListener("click", () => {
      history = [];
      navigate("home");
    });

    app.appendChild(retryBtn);
    app.appendChild(homeBtn);
  }

  renderQuestion();
}

// --- Démarrage ---
navigate("home");

// --- Détection connexion (info seulement, tout marche hors-ligne) ---
function updateOfflineBadge() {
  offlineBadge.textContent = navigator.onLine ? "En ligne" : "Mode hors-ligne";
}
window.addEventListener("online", updateOfflineBadge);
window.addEventListener("offline", updateOfflineBadge);
updateOfflineBadge();

// --- Service worker pour usage hors-ligne ---
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
