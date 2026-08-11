const header=document.querySelector('.header');
window.addEventListener('scroll',()=>{ if(header) header.classList.toggle('scrolled',window.scrollY>40); });
const openBtn=document.querySelector('.index-btn');
const panel=document.querySelector('.index-panel');
const closeBtn=document.querySelector('.index-close');
if(openBtn&&panel){openBtn.addEventListener('click',()=>panel.classList.add('open'));}
if(closeBtn&&panel){closeBtn.addEventListener('click',()=>panel.classList.remove('open'));}
if(panel){panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>panel.classList.remove('open')))}
document.querySelectorAll('.prisme-item').forEach(el=>el.addEventListener('click',()=>{document.querySelectorAll('.prisme-item').forEach(x=>x.classList.remove('active'));el.classList.add('active')}));
