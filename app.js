(() => {
  const open = document.querySelector('.index-button');
  const panel = document.querySelector('.index-panel');
  const close = document.querySelector('.index-close');
  const links = panel ? panel.querySelectorAll('a') : [];

  const setPanel = (isOpen) => {
    if (!panel || !open) return;
    panel.classList.toggle('open', isOpen);
    panel.setAttribute('aria-hidden', String(!isOpen));
    open.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  open?.addEventListener('click', () => setPanel(true));
  close?.addEventListener('click', () => setPanel(false));
  links.forEach(a => a.addEventListener('click', () => setPanel(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setPanel(false); });

  const steps = [...document.querySelectorAll('.p-step')];
  const num = document.querySelector('.step-num');
  const text = document.querySelector('.step-text');
  const copy = [
    'Mobilise d’abord tes propres connaissances. L’IA n’entre pas encore dans la pièce.',
    'Produis une première réponse par toi-même. Même imparfaite, elle donne une matière à travailler.',
    'Utilise l’IA pour questionner, expliquer, contredire ou tester ta réponse — pas pour l’écrire à ta place.',
    'Évalue ce que l’IA propose. Qu’est-ce qui est juste, faux, pertinent, vérifiable ou discutable ?',
    'Améliore ton propre travail à partir de ce que tu as décidé de retenir. La révision reste la tienne.',
    'Ferme l’IA. Reformule le raisonnement, justifie tes choix et montre que l’apprentissage a bien eu lieu.'
  ];
  steps.forEach((btn, i) => btn.addEventListener('click', () => {
    steps.forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    if (num) num.textContent = `${String(i + 1).padStart(2,'0')} / 06`;
    if (text) text.textContent = copy[i];
  }));
})();
