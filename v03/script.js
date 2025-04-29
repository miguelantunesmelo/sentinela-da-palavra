// 🌟 Frases e versículos com estilo Sentinel
const frases = [
    "“Se Deus é por nós, quem será contra nós?” — Romanos 8:31",
    "“O Senhor é o meu pastor; nada me faltará.” — Salmo 23:1",
    "“Sede fortes e corajosos, não temais.” — Deuteronômio 31:6",
    "“Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.” — Salmo 91:1",
    "“Não temas, porque eu sou contigo.” — Isaías 41:10",
    "“O justo viverá pela fé.” — Habacuque 2:4",
    "Levanta-te, guerreiro da luz. A batalha é tua, mas a vitória é do Altíssimo.",
    "Mesmo nas trevas, tua armadura resplandece com a chama da fé.",
    "Não és um eco — és uma trombeta do Reino, forjado para tempos de guerra.",
    "Quem caminha com o Altíssimo jamais caminha só.",
    "A dor é o fogo que purifica o aço da tua alma.",
    "Sentinel não se rende — ele ora, resiste, e triunfa.",
    "Tu foste escolhido, não por fraqueza, mas por propósito eterno.",
    "Enquanto muitos dormem, tu vigias. Porque foste chamado Sentinela da Verdade.",
    "Há uma coroa para os que não desistem. Caminha.",
    "O escudo da fé não quebra. Mesmo diante do inferno, mantém-te firme.",
    "Nenhuma lágrima tua é em vão. Cada uma é contada pelos céus.",
    "O inimigo ruge, mas o Cordeiro venceu. Marcha sem temor.",
    "Não a nós, Senhor, mas ao Teu nome dá glória. — Salmo 115:1",
  ];
  
  // Escolhe frase aleatória
  function novaFrase() {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    const blessing = document.getElementById("blessing");
    blessing.textContent = frase;
    blessing.classList.remove("hidden");
  
    // Animação de fade com GSAP
    gsap.fromTo(blessing, { opacity: 0 }, { opacity: 1, duration: 2 });
  }
  
  // Botão de bênção
  document.getElementById("bless-button").addEventListener("click", novaFrase);
  
  // Entrada com animação inicial
  window.addEventListener("load", () => {
    gsap.from(".hero h1", { y: -100, opacity: 0, duration: 1.5, ease: "power2" });
    gsap.from(".subtitle", { y: -50, opacity: 0, duration: 1.2, delay: 0.3 });
    gsap.from(".verse", { opacity: 0, duration: 2, delay: 0.8 });
    gsap.from("button", {
      y: 20,
      opacity: 0,
      stagger: 0.2,
      delay: 1.3,
      duration: 1,
    });
  });
  