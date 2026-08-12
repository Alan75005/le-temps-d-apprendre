const openBtn=document.querySelector('.index-button');
const panel=document.querySelector('.index-panel');
const closeBtn=document.querySelector('.close-index');
function setIndex(open){panel.classList.toggle('open',open);panel.setAttribute('aria-hidden',String(!open));openBtn.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':''}
openBtn?.addEventListener('click',()=>setIndex(!panel.classList.contains('open')));
closeBtn?.addEventListener('click',()=>setIndex(false));
panel?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setIndex(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape')setIndex(false)});
