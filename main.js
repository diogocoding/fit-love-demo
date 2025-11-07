// 1. CONFIGURAÇÃO DO FIREBASE (COPIE DO SEU setup.js)
const firebaseConfig = {
  apiKey: "AIzaSy... (sua chave aqui)",
  authDomain: "fit-love-demo.firebaseapp.com",
  projectId: "fit-love-demo",
  storageBucket: "fit-love-demo.appspot.com",
  messagingSenderId: "735744448777",
  appId: "1:735744448777:web:0a3925a0df07d18cb09bd8"
};

// 2. INICIALIZE O FIREBASE (O PASSO QUE FALTAVA!)
firebase.initializeApp(firebaseConfig)
// =======================================================
// 1. CONFIGURAÇÃO DO FIREBASE (APENAS FIRESTORE)
// =======================================================
const firebaseConfig = {
  apiKey: "AIzaSyCO4KtG1vMPqLOBPJ2z2Uw2A2V0iQQeY1k",
  authDomain: "fit-love-demo.firebaseapp.com",
  projectId: "fit-love-demo",
  storageBucket: "fit-love-demo.firebasestorage.app",
  messagingSenderId: "735744448777",
  appId: "1:735744448777:web:0a3925a0df07d18cb09bd8",
};
const db = firebase.firestore();

// =======================================================
// 1.1 DADOS DA DIETA (HARDCODED)
// =======================================================
const diogoDietData = [
  {
    dia: "Segunda",
    ref1: "Ovo: 100g Pão + 1 Ovo<br>Bebida: 30g Leite Pó<br>Fruta: 1 Maçã",
    ref2: "Mingau/Vitamina:<br>80g Aveia + 1 Banana",
    ref3: "Proteína: 150g Fígado<br>Base: 350g Arroz + 100g Feijão<br>(+ Salada)",
    ref4: "Frios: 100g Pão +<br>25g Queijo + 25g Mortadela",
    ref5: "Proteína: 150g Peito de Frango<br>Base: 300g Macarrão (+ Molho)<br>Fruta: 1 Banana",
  },
  {
    dia: "Terça",
    ref1: "Frios: 100g Pão +<br>25g Queijo + 25g Mortadela<br>Bebida: 30g Leite Pó<br>Fruta: 1 Maçã",
    ref2: "Mingau/Vitamina:<br>80g Aveia + 1 Banana",
    ref3: "Proteína: 200g Peito de Frango<br>Base: 350g Arroz + 100g Feijão<br>(+ Salada)",
    ref4: "Ovo: 100g Pão + 1 Ovo",
    ref5: "Proteína: 100g Sobrecoxa (s/ pele)<br>Base: 300g Macarrão (+ Molho)<br>Fruta: 1 Banana",
  },
  {
    dia: "Quarta",
    ref1: "Ovo: 100g Pão + 1 Ovo<br>Bebida: 30g Leite Pó<br>Fruta: 1 Maçã",
    ref2: "Mingau/Vitamina:<br>80g Aveia + 1 Banana",
    ref3: "Proteína: 200g Peito de Frango<br>Base: 350g Arroz + 100g Feijão<br>(+ Salada)",
    ref4: "Frios: 100g Pão +<br>25g Queijo + 25g Mortadela",
    ref5: "Proteína: 100g Sobrecoxa (s/ pele)<br>Base: 300g Macarrão (+ Molho)<br>Fruta: 1 Banana",
  },
  {
    dia: "Quinta",
    ref1: "Frios: 100g Pão +<br>25g Queijo + 25g Mortadela<br>Bebida: 30g Leite Pó<br>Fruta: 1 Maçã",
    ref2: "Mingau/Vitamina:<br>80g Aveia + 1 Banana",
    ref3: "Proteína: 200g Peito de Frango<br>Base: 350g Arroz + 100g Feijão<br>(+ Salada)",
    ref4: "Ovo: 100g Pão + 1 Ovo",
    ref5: "Proteína: 150g Fígado<br>Base: 300g Macarrão (+ Molho)<br>Fruta: 1 Banana",
  },
  {
    dia: "Sexta",
    ref1: "Ovo: 100g Pão + 1 Ovo<br>Bebida: 30g Leite Pó<br>Fruta: 1 Maçã",
    ref2: "Mingau/Vitamina:<br>80g Aveia + 1 Banana",
    ref3: "Proteína: 200g Peito de Frango<br>Base: 350g Arroz + 100g Feijão<br>(+ Salada)",
    ref4: "Frios: 100g Pão +<br>25g Queijo + 25g Mortadela",
    ref5: "Proteína: 100g Sobrecoxa (s/ pele)<br>Base: 300g Macarrão (+ Molho)<br>Fruta: 1 Banana",
  },
  {
    dia: "Sábado",
    ref1: "Frios: 100g Pão +<br>25g Queijo + 25g Mortadela<br>Bebida: 30g Leite Pó<br>Fruta: 1 Maçã",
    ref2: "Mingau/Vitamina:<br>80g Aveia + 1 Banana",
    ref3: "Proteína: 150g Sobrecoxa (s/ pele)<br>Base: 350g Arroz + 100g Feijão<br>(+ Salada)",
    ref4: "Ovo: 100g Pão + 1 Ovo",
    ref5: "Proteína: 150g Peito de Frango<br>Base: 300g Macarrão (+ Molho)<br>Fruta: 1 Banana",
  },
  {
    dia: "Domingo",
    ref1: "Ovo: 100g Pão + 1 Ovo<br>Bebida: 30g Leite Pó<br>Fruta: 1 Maçã",
    ref2: "Mingau/Vitamina:<br>80g Aveia + 1 Banana",
    ref3: "Proteína: 150g Peito de Frango<br>Base: 350g Arroz + 100g Feijão<br>(+ Salada)",
    ref4: "Frios: 100g Pão +<br>25g Queijo + 25g Mortadela",
    ref5: "Proteína: 150g Sobrecoxa (s/ pele)<br>Base: 300g Macarrão (+ Molho)<br>Fruta: 1 Banana",
  },
];

const tiagoDietData = [
  {
    dia: "Segunda",
    ref1: "Vitamina: 80g Aveia + 40g Leite Pó + 1 Banana<br>Extra: 4 Ovos inteiros",
    ref2: "Fruta: 1 Maçã<br>Gordura: 2 Castanhas do Pará",
    ref3: "Proteína: 200g Sobrecoxa<br>Base: 200g Arroz + 100g Feijão<br>Gordura: 1 col. sopa Azeite<br>(+ Salada)",
    ref4: "Sanduíche: 2 fatias Pão + 50g Queijo + 50g Mortadela",
    ref5: "Base: 250g Macarrão + Molho<br>Proteína: 150g Sobrecoxa desfiada<br>Fruta: 150g Uva",
  },
  {
    dia: "Terça",
    ref1: "Sanduíche: 2 fatias Pão + 50g Queijo + 50g Mortadela<br>Bebida: 40g Leite Pó (c/ café ou puro)<br>Extra: 2 Ovos cozidos",
    ref2: "Vitamina: 80g Aveia + 1 Banana",
    ref3: "Proteína: 200g Sobrecoxa<br>Base: 200g Arroz + 100g Feijão<br>Gordura: 1 col. sopa Azeite<br>(+ Salada)",
    ref4: "Fruta: 1 Maçã<br>Gordura: 2 Castanhas do Pará",
    ref5: "Base: 250g Macarrão + Molho<br>Proteína: Omelete de 4 Ovos<br>Fruta: 1 Banana",
  },
  {
    dia: "Quarta",
    ref1: "Vitamina: 80g Aveia + 40g Leite Pó + 1 Banana<br>Extra: 4 Ovos inteiros",
    ref2: "Fruta: 1 Maçã<br>Gordura: 2 Castanhas do Pará",
    ref3: "Base: 250g Macarrão + Molho<br>Proteína: 200g Sobrecoxa<br>Gordura: 1 col. sopa Azeite<br>(+ Salada)",
    ref4: "Sanduíche: 2 fatias Pão + 50g Queijo + 50g Mortadela",
    ref5: "Proteína: 150g Sobrecoxa<br>Base: 200g Arroz + 100g Feijão<br>Fruta: 150g Uva",
  },
  {
    dia: "Quinta",
    ref1: "Sanduíche: 2 fatias Pão + 50g Queijo + 50g Mortadela<br>Bebida: 40g Leite Pó<br>Extra: 2 Ovos cozidos",
    ref2: "Vitamina: 80g Aveia + 1 Banana",
    ref3: "Proteína: 200g Sobrecoxa<br>Base: 200g Arroz + 100g Feijão<br>Gordura: 1 col. sopa Azeite<br>(+ Salada)",
    ref4: "Fruta: 1 Maçã<br>Gordura: 2 Castanhas do Pará",
    ref5: "Base: 250g Macarrão + Molho<br>Proteína: Omelete de 4 Ovos<br>Fruta: 1 Banana",
  },
  {
    dia: "Sexta",
    ref1: "Vitamina: 80g Aveia + 40g Leite Pó + 1 Banana<br>Extra: 4 Ovos inteiros",
    ref2: "Fruta: 1 Maçã<br>Gordura: 2 Castanhas do Pará",
    ref3: "Proteína: 200g Sobrecoxa<br>Base: 200g Arroz + 100g Feijão<br>Gordura: 1 col. sopa Azeite<br>(+ Salada)",
    ref4: "Sanduíche: 2 fatias Pão + 50g Queijo + 50g Mortadela",
    ref5: "Base: 250g Macarrão + Molho<br>Proteína: 100g Mortadela refogada<br>Fruta: 150g Uva",
  },
  {
    dia: "Sábado",
    ref1: "Sanduíche: 2 fatias Pão + 50g Queijo + 50g Mortadela<br>Bebida: 40g Leite Pó<br>Extra: 2 Ovos cozidos",
    ref2: "Vitamina: 80g Aveia + 1 Banana",
    ref3: "Proteína: 200g Sobrecoxa<br>Base: 200g Arroz + 100g Feijão<br>Gordura: 1 col. sopa Azeite<br>(+ Salada)",
    ref4: "Fruta: 1 Maçã<br>Gordura: 2 Castanhas do Pará",
    ref5: "Base: 250g Macarrão + Molho<br>Proteína: 150g Sobrecoxa desfiada<br>Fruta: 1 Banana",
  },
  {
    dia: "Domingo",
    ref1: "Vitamina: 80g Aveia + 40g Leite Pó + 1 Banana<br>Extra: 4 Ovos inteiros",
    ref2: "Fruta: 1 Maçã<br>Gordura: 2 Castanhas do Pará",
    ref3: "Proteína: 250g Sobrecoxa<br>Base: 200g Arroz + 100g Feijão<br>Gordura: 1 col. sopa Azeite<br>(+ Salada)",
    ref4: "Sanduíche: 2 fatias Pão + 50g Queijo",
    ref5: "Base: 200g Macarrão + Molho<br>Proteína: Omelete de 4 Ovos<br>Fruta: 150g Uva",
  },
];

// =======================================================
// 2. DADOS DOS PERFIS (HARDCODED)
// =======================================================
const profiles = {
  diogo: {
    // TROQUE ESTE CÓDIGO!
    code: "123", // ⚠️ CÓDIGO DE ACESSO (INSEGURO)
    displayName: "Diogo",
    data: {
      calorias: 2800,
      proteinas: 130,
      carboidratos: 440,
      gorduras: 58,
      linkPlanilha:
        "https://docs.google.com/spreadsheets/d/14u2D3zcFcAHi9CyjIJniHf_dCPwUFTF8SVrxH-9hrso/edit?gid=63625420#gid=63625420",
      dieta: diogoDietData,
    },
  },
  tiago: {
    // TROQUE ESTE CÓDIGO!
    code: "456", // ⚠️ CÓDIGO DE ACESSO (INSEGURO)
    displayName: "Tiago",
    data: {
      calorias: 3455,
      proteinas: 160,
      carboidratos: 490,
      gorduras: 95,
      linkPlanilha: "",
      dieta: tiagoDietData,
    },
  },
};
let activeProfileId = null;

// =======================================================
// 3. ELEMENTOS DO DOM
// =======================================================
// Elementos do App
let appContainer,
  welcomeUser,
  profileButtons,
  tabs,
  contents,
  profileDataDiv,
  profileLoader,
  linkContainer,
  linkElement,
  quoteElement;
let timerDisplay, startBtn, pauseBtn, resetBtn;
let resetCheckButtons;
let dietContainer, dietTitle;
// Elementos do Login
let loginOverlay,
  loginSelect,
  loginInput,
  loginButton,
  loginError,
  logoutButton;

// =======================================================
// 4. FRASES MOTIVACIONAIS
// =======================================================
const quotes = [
  "Acredite em você mesmo e tudo será possível.",
  "O único treino ruim é aquele que não aconteceu.",
  "A persistência realiza o impossível.",
  "Seu corpo pode aguentar quase tudo. É sua mente que você precisa convencer.",
  "Comece onde você está. Use o que você tem. Faça o que você pode.",
  "A dor que você sente hoje é a força que você sentirá amanhã.",
  "Não se trata de ter tempo, trata-se de fazer tempo.",
];

// =======================================================
// 5. LÓGICA DE INICIALIZAÇÃO E NAVEGAÇÃO
// =======================================================
document.addEventListener("DOMContentLoaded", () => {
  // Inicializa seletores do App
  appContainer = document.querySelector(".app-container");
  welcomeUser = document.getElementById("welcome-user");
  profileButtons = document.querySelectorAll(".profile-button");
  tabs = document.querySelectorAll(".tab-button");
  contents = document.querySelectorAll(".tab-content");
  profileDataDiv = document.getElementById("perfil-dados");
  profileLoader = document.getElementById("perfil-loader");
  linkContainer = document.getElementById("planilha-link-container");
  linkElement = document.getElementById("planilha-link");
  quoteElement = document.getElementById("motivational-quote");
  timerDisplay = document.getElementById("timer-display");
  startBtn = document.getElementById("startTimer");
  pauseBtn = document.getElementById("pauseTimer");
  resetBtn = document.getElementById("resetTimer");
  resetCheckButtons = document.querySelectorAll(".btn-reset-checks");
  dietContainer = document.getElementById("diet-container");
  dietTitle = document.querySelector(".diet-title");

  // Inicializa seletores do Login
  loginOverlay = document.getElementById("login-overlay");
  loginSelect = document.getElementById("login-profile-select");
  loginInput = document.getElementById("login-code-input");
  loginButton = document.getElementById("login-button");
  loginError = document.getElementById("login-error");
  logoutButton = document.getElementById("logout-button");

  console.log("DOM Carregado.");

  // --- LÓGICA DE LOGIN ---
  // Tenta carregar último perfil logado do localStorage
  const storedProfileId = localStorage.getItem("activeProfileId");
  if (storedProfileId && profiles[storedProfileId]) {
    // Se encontrou um perfil, "loga" automaticamente
    console.log("Perfil encontrado no localStorage. Logando...");
    loginOverlay.style.display = "none";
    appContainer.style.display = "flex";
    setActiveProfile(storedProfileId); // Carrega o perfil

    // Carrega listeners do app
    initializeAppListeners();
    loadWorkoutsOnce();
    showRandomQuote();
  } else {
    // Se não encontrou, mostra a tela de login
    console.log("Nenhum perfil no localStorage. Mostrando login.");
    loginOverlay.style.display = "flex";
    appContainer.style.display = "none";

    // Adiciona listener apenas ao botão de login
    loginButton.addEventListener("click", handleLogin);
  }
});

// Adiciona os listeners do app (só deve ser chamado DEPOIS do login)
function initializeAppListeners() {
  // Listeners Sidebar
  profileButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const profileId = button.dataset.profile;
      setActiveProfile(profileId);
    });
  });
  // Listener Logout
  logoutButton.addEventListener("click", handleLogout);
  // Listeners Abas Treino
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      tab.classList.add("active");
      const targetContent = document.getElementById(
        tab.dataset.tab + "-content"
      );
      if (targetContent) targetContent.classList.add("active");
    });
  });
  // Listeners Cronômetro
  if (startBtn) startBtn.addEventListener("click", startTimer);
  if (pauseBtn) pauseBtn.addEventListener("click", pauseTimer);
  if (resetBtn) resetBtn.addEventListener("click", resetTimer);
  // Listeners Botões Reset Checkboxes
  resetCheckButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetSectionId = button.dataset.targetSection;
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        const checkboxes = targetSection.querySelectorAll(".exercise-checkbox");
        checkboxes.forEach((cb) => (cb.checked = false));
      }
    });
  });
}

// =======================================================
// 5.1 LÓGICA DE LOGIN / LOGOUT
// =======================================================
function handleLogin() {
  const profileId = loginSelect.value;
  const code = loginInput.value;

  if (!profileId) {
    loginError.textContent = "Por favor, selecione um perfil.";
    return;
  }
  if (!code) {
    loginError.textContent = "Por favor, digite o código.";
    return;
  }

  // Verifica se o perfil existe e se o código está correto
  if (profiles[profileId] && profiles[profileId].code === code) {
    console.log("Login bem-sucedido!");
    loginError.textContent = "";

    // Esconde o login e mostra o app
    loginOverlay.style.display = "none";
    appContainer.style.display = "flex";

    // Salva o perfil no localStorage para "lembrar" o login
    localStorage.setItem("activeProfileId", profileId);

    // Carrega o perfil e os listeners do app
    setActiveProfile(profileId);
    initializeAppListeners();
    loadWorkoutsOnce();
    showRandomQuote();
  } else {
    // Erro no login
    console.log("Código incorreto.");
    loginError.textContent = "Código de acesso incorreto. Tente novamente.";
  }
}

function handleLogout() {
  console.log("Fazendo logout...");
  // Remove o perfil do localStorage
  localStorage.removeItem("activeProfileId");
  // Recarrega a página (vai levar de volta para a tela de login)
  location.reload();
}

// =======================================================
// 5.2 FUNÇÕES DE CARREGAMENTO (Resto do código)
// =======================================================

function loadWorkoutsOnce() {
  if (!document.querySelector("#treino-abc-content .workout-table"))
    renderWorkout("treinoABC", "treino-abc-content");
  if (!document.querySelector("#treino-abcd-content .workout-table"))
    renderWorkout("treinoABCD", "treino-abcd-content");
  if (!document.querySelector("#treino-hipertrofia-content .workout-table"))
    renderWorkout("treinoHipertrofia", "treino-hipertrofia-content");
}

function setActiveProfile(profileId) {
  if (!profiles[profileId]) return;
  activeProfileId = profileId;
  // Não salva mais no localStorage aqui, isso é feito no handleLogin

  profileButtons.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.profile === profileId)
  );
  if (welcomeUser)
    welcomeUser.textContent = `Bem vindo, ${profiles[activeProfileId].displayName}! Até a falha, mais uma vez!`;

  loadProfile();
  showRandomQuote();

  // Reseta abas para "Meu Perfil"
  tabs.forEach((t) => t.classList.remove("active"));
  contents.forEach((c) => c.classList.remove("active"));
  const perfilTabButton = document.querySelector(
    '.tab-button[data-tab="perfil"]'
  );
  const perfilTabContent = document.getElementById("perfil-content");
  if (perfilTabButton) perfilTabButton.classList.add("active");
  if (perfilTabContent) perfilTabContent.classList.add("active");

  console.log("Limpando e recarregando treinos...");
  const workoutContainers = [
    "treino-abc-content",
    "treino-abcd-content",
    "treino-hipertrofia-content",
  ];
  workoutContainers.forEach((containerId) => {
    const container = document.getElementById(containerId);
    const loaderId = containerId.replace("-content", "-loader");
    if (container) {
      // Adiciona o botão de resetar marcações de volta
      container.innerHTML = `<button class="btn btn-secondary btn-reset-checks" data-target-section="${containerId}">Resetar Marcações</button>
                                   <div id="${loaderId}">Carregando treino...</div>`;
    }
  });

  // Adiciona os listeners aos novos botões de resetar
  document.querySelectorAll(".btn-reset-checks").forEach((button) => {
    // Remove listener antigo para não duplicar
    button.removeEventListener("click", handleResetChecks);
    button.addEventListener("click", handleResetChecks);
  });

  renderWorkout("treinoABC", "treino-abc-content");
  renderWorkout("treinoABCD", "treino-abcd-content");
  renderWorkout("treinoHipertrofia", "treino-hipertrofia-content");
}

// Função helper para o listener de reset
function handleResetChecks(event) {
  const targetSectionId = event.target.dataset.targetSection;
  const targetSection = document.getElementById(targetSectionId);
  if (targetSection) {
    const checkboxes = targetSection.querySelectorAll(".exercise-checkbox");
    checkboxes.forEach((cb) => (cb.checked = false));
  }
}

// =======================================================
// 6. LÓGICA DO CRONÔMETRO (COMPLETA)
// =======================================================
let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;
let pausedTime = 0;
function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - pausedTime;
    timerInterval = setInterval(updateTimer, 1000);
    running = true;
    pausedTime = 0;
  }
}
function pauseTimer() {
  if (running) {
    clearInterval(timerInterval);
    pausedTime = new Date().getTime() - startTime;
    running = false;
  }
}
function resetTimer() {
  clearInterval(timerInterval);
  running = false;
  pausedTime = 0;
  difference = 0;
  if (timerDisplay) timerDisplay.textContent = "00:00:00";
}
function updateTimer() {
  if (!running && pausedTime === 0) return;
  updatedTime = new Date().getTime();
  difference = running ? updatedTime - startTime : pausedTime;
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  if (timerDisplay)
    timerDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// =======================================================
// 7. FRASE MOTIVACIONAL
// =======================================================
function showRandomQuote() {
  if (quoteElement) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = `"${quotes[randomIndex]}"`;
  }
}

// =======================================================
// 8. CARREGAR DADOS DO PERFIL (HARDCODED) - (ATUALIZADO)
// =======================================================
function loadProfile() {
  // LIMPA/ESCONDE os dados do perfil e da dieta antes de carregar
  if (profileLoader) profileLoader.style.display = "block";
  if (profileDataDiv) profileDataDiv.style.display = "none";
  if (linkContainer) linkContainer.style.display = "none";
  if (dietContainer) dietContainer.style.display = "none"; // Esconde a dieta
  if (dietTitle) dietTitle.style.display = "none"; // Esconde o título da dieta

  // Verifica se todos os elementos necessários existem
  if (
    !profileDataDiv ||
    !profileLoader ||
    !linkContainer ||
    !linkElement ||
    !activeProfileId ||
    !profiles[activeProfileId] ||
    !dietContainer ||
    !dietTitle
  ) {
    if (profileLoader) profileLoader.textContent = "Erro ao carregar perfil.";
    return;
  }

  profileLoader.style.display = "none";
  profileDataDiv.style.display = "block";

  const profileData = profiles[activeProfileId].data;

  if (profileData) {
    // Carrega Macros
    profileDataDiv.innerHTML = `<p><strong>Calorias Totais:</strong> ${
      profileData.calorias || "N/A"
    } kcal</p><p><strong>Proteínas:</strong> ${
      profileData.proteinas || "N/A"
    } g</p><p><strong>Carboidratos:</strong> ${
      profileData.carboidratos || "N/A"
    } g</p><p><strong>Gorduras:</strong> ${
      profileData.gorduras || "N/A"
    } g</p>`;

    // Carrega Link da Planilha
    if (profileData.linkPlanilha) {
      linkElement.href = profileData.linkPlanilha;
      linkContainer.style.display = "block";
    }

    // === NOVA LÓGICA DA DIETA ===
    if (profileData.dieta && profileData.dieta.length > 0) {
      let dietHtml = '<div class="table-wrapper">';
      // Aplica a classe 'workout-table' para usar o mesmo estilo
      dietHtml += '<table class="workout-table">';

      // Cabeçalho da Tabela de Dieta
      dietHtml += "<thead><tr>";
      dietHtml += "<th>Dia</th>";
      dietHtml += "<th>Refeição 1 (Café da Manhã)</th>";
      dietHtml += "<th>Refeição 2 (Lanche 1)</th>";
      dietHtml += "<th>Refeição 3 (Almoço)</th>";
      dietHtml += "<th>Refeição 4 (Lanche 2)</th>";
      dietHtml += "<th>Refeição 5 (Jantar)</th>";
      dietHtml += "</tr></thead>";

      // Corpo da Tabela de Dieta
      dietHtml += "<tbody>";
      profileData.dieta.forEach((row) => {
        dietHtml += "<tr>";
        // Aplica a classe 'td-diet' que criamos no CSS
        dietHtml += `<td class="td-diet"><strong>${row.dia}</strong></td>`;
        dietHtml += `<td class="td-diet">${row.ref1}</td>`;
        dietHtml += `<td class="td-diet">${row.ref2}</td>`;
        dietHtml += `<td class="td-diet">${row.ref3}</td>`;
        // Corrigido typo aqui (class.td-diet)
        dietHtml += `<td class="td-diet">${row.ref4}</td>`;
        dietHtml += `<td class="td-diet">${row.ref5}</td>`;
        dietHtml += "</tr>";
      });
      dietHtml += "</tbody></table></div>";

      dietContainer.innerHTML = dietHtml;
      dietContainer.style.display = "block"; // Mostra o container da dieta
      dietTitle.style.display = "block"; // Mostra o título "Plano Alimentar"
    } else {
      // Garante que está limpo se não houver dieta
      dietContainer.innerHTML = "";
      dietContainer.style.display = "none";
      dietTitle.style.display = "none";
    }
    // === FIM DA LÓGICA DA DIETA ===
  } else {
    profileDataDiv.innerHTML = "<p>Erro ao carregar dados do perfil.</p>";
  }
}

// =======================================================
// 9. CARREGAR E SALVAR DADOS DE TREINO (FIRESTORE)
// =======================================================
async function renderWorkout(treinoId, containerId) {
  const container = document.getElementById(containerId);
  const loader = document.getElementById(
    containerId.replace("-content", "-loader")
  );
  if (!container || !loader) return;

  // Pega o HTML existente (que deve ter o botão de reset)
  const existingHtml = container.innerHTML;
  loader.style.display = "block"; // Mostra o loader

  try {
    const exerciciosRef = db
      .collection("treinos")
      .doc(treinoId)
      .collection("exercicios");
    const snapshot = await exerciciosRef.orderBy("nome").get();

    if (snapshot.empty) {
      container.innerHTML += `<p>Nenhum exercício encontrado.</p>`;
      loader.style.display = "none";
      return;
    }

    const treinosPorDia = {};
    snapshot.forEach((doc) => {
      const ex = doc.data();
      ex.id = doc.id;
      const dia = ex.treinoDia || "Geral";
      if (!treinosPorDia[dia]) treinosPorDia[dia] = [];
      treinosPorDia[dia].push(ex);
    });

    let html = "";
    const diasOrdenados = Object.keys(treinosPorDia).sort((a, b) =>
      a.localeCompare(b)
    );

    for (const dia of diasOrdenados) {
      html += `<h3 class="workout-day-title">Treino ${dia}</h3>`;
      html += `<div class="table-wrapper"><table class="workout-table"><thead><tr><th class="th-check">Feito</th><th class="th-exercise">Exercício</th><th>Séries x Reps</th><th>Carga Atual (${
        profiles[activeProfileId]?.displayName || "Perfil"
      })</th><th>Salvar</th></tr></thead><tbody>`;
      treinosPorDia[dia].forEach((ex) => {
        const cargaAtualPerfil =
          ex.cargaPorPerfil && ex.cargaPorPerfil[activeProfileId]
            ? ex.cargaPorPerfil[activeProfileId]
            : "-";

        html += `<tr data-doc-id="${ex.id}" data-treino-id="${treinoId}">
                           <td class="td-check"><input type="checkbox" class="exercise-checkbox"></td> <td class="td-exercise"> <span>${
                             ex.nome || "Nome Indefinido"
                           }</span>
                             ${
                               ex.gifUrl
                                 ? `<img src="${ex.gifUrl}" alt="GIF de ${ex.nome}" class="exercise-gif-inline">`
                                 : ""
                             }
                           </td>
                           <td>${ex.serie || "N/A"}</td>
                           <td><input type="text" class="carga-input" value="${cargaAtualPerfil}"></td>
                           <td><button class="btn btn-salvar">Salvar</button></td>
                        </tr>`;
      });
      html += `</tbody></table></div>`;
    }
    // Adiciona o novo HTML depois do conteúdo existente (botão + loader)
    container.innerHTML = existingHtml + html;
    loader.style.display = "none"; // Esconde o loader
  } catch (error) {
    console.error(`Erro CRÍTICO ao carregar treino ${treinoId}:`, error);
    container.innerHTML += `<p>Erro CRÍTICO ao carregar treino. Verifique o console.</p>`;
    loader.style.display = "none";
  }
}

document.addEventListener("click", async (e) => {
  if (
    e.target.classList.contains("btn-salvar") &&
    e.target.closest(".workout-table")
  ) {
    e.preventDefault();
    if (!activeProfileId) {
      alert("Selecione um perfil primeiro.");
      return;
    }
    const button = e.target;
    const row = button.closest("tr");
    const input = row.querySelector(".carga-input");
    const docId = row.dataset.docId;
    const treinoId = row.dataset.treinoId;
    const novaCarga = input.value.trim();
    if (!docId || !treinoId) {
      alert("Erro: ID não encontrado.");
      return;
    }
    button.textContent = "Salvando...";
    button.disabled = true;
    try {
      const docRef = db
        .collection("treinos")
        .doc(treinoId)
        .collection("exercicios")
        .doc(docId);
      const fieldToUpdate = `cargaPorPerfil.${activeProfileId}`;
      await docRef.update({ [fieldToUpdate]: novaCarga });
      button.textContent = "Salvo!";
      button.classList.add("saved-feedback");
      setTimeout(() => {
        button.textContent = "Salvar";
        button.disabled = false;
        button.classList.remove("saved-feedback");
      }, 1500);
    } catch (error) {
      console.error("Erro ao salvar carga:", error);
      alert("Erro ao salvar carga.");
      button.textContent = "Salvar";
      button.disabled = false;
    }
  }
});

