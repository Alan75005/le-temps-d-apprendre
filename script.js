const panel=document.getElementById('indexPanel');
document.getElementById('indexBtn').onclick=()=>panel.classList.add('open');
document.getElementById('closeBtn').onclick=()=>panel.classList.remove('open');
panel.querySelectorAll('a').forEach(a=>a.onclick=()=>panel.classList.remove('open'));
document.getElementById('unfold').onclick=()=>document.getElementById('hiddenThought').classList.toggle('show');
window.addEventListener('scroll',()=>{const h=document.documentElement;document.querySelector('.progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'});
document.querySelectorAll('.time-nav button').forEach(b=>b.onclick=()=>{document.querySelector('.stories').scrollIntoView({behavior:'smooth'});});
