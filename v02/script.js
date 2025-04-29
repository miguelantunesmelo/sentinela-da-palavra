const frases = [
    "A vigilância é a armadura da alma.",
    "Mesmo na escuridão, o Guardião carrega luz.",
    "Desistir não é uma opção para os que protegem.",
    "A fé é o escudo que não se quebra.",
    "Ergue-te, pois o mundo ainda precisa de tua luz.",
    "Toda queda é um novo chamado à batalha."
  ];
  
  function novaMensagem() {
    const nova = frases[Math.floor(Math.random() * frases.length)];
    const elemento = document.getElementById("mensagem-texto");
  
    gsap.to(elemento, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        elemento.textContent = `"${nova}"`;
        gsap.to(elemento, { opacity: 1, duration: 0.5 });
      }
    });
  }
  
  // Scroll animations com GSAP
  gsap.utils.toArray('.secao').forEach((secao, i) => {
    gsap.to(secao, {
      scrollTrigger: {
        trigger: secao,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.2
    });
  });
  