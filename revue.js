const panel=document.querySelector('.index-panel');
const openBtn=document.querySelector('.index-button');
const closeBtn=document.querySelector('.close-index');
function setIndex(open){panel?.classList.toggle('open',open);panel?.setAttribute('aria-hidden',String(!open));openBtn?.setAttribute('aria-expanded',String(open));}
openBtn?.addEventListener('click',()=>setIndex(true));
closeBtn?.addEventListener('click',()=>setIndex(false));
panel?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setIndex(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape')setIndex(false)});

const cards=[...document.querySelectorAll('.prisme-card')];
const focus=document.querySelector('.prisme-focus');
const focusCopy=[
  ['ÉTAPE 01','Avant de demander à la machine, commence par produire quelque chose qui t’appartient.'],
  ['ÉTAPE 02','Une première production imparfaite vaut mieux qu’une réponse parfaite que tu n’as pas construite.'],
  ['ÉTAPE 03','L’IA devient utile lorsqu’elle te questionne, t’explique ou te contredit — pas lorsqu’elle fait le travail à ta place.'],
  ['ÉTAPE 04','La compétence décisive est le jugement : accepter, refuser, vérifier, hiérarchiser.'],
  ['ÉTAPE 05','Réécris, corrige et approfondis avec tes mots : c’est ici que l’assistance redevient apprentissage.'],
  ['ÉTAPE 06','Ferme l’outil et explique. Ce que tu peux reconstruire sans l’IA est ce que tu as réellement appris.']
];
cards.forEach((card,i)=>card.addEventListener('click',()=>{cards.forEach(c=>c.classList.remove('active'));card.classList.add('active');if(focus){focus.querySelector('span').textContent=focusCopy[i][0];focus.querySelector('blockquote').textContent=focusCopy[i][1];}}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
