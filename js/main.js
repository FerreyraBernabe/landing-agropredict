// AgroPredict — interacciones de la landing
// mobile menu
  const burger=document.getElementById('burger');
  const menu=document.getElementById('menu');
  burger.addEventListener('click',()=>menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

  // contact form (demo)
  const form=document.getElementById('contactForm');
  const note=document.getElementById('formNote');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const nombre=document.getElementById('nombre').value.trim();
    const email=document.getElementById('email').value.trim();
    if(!nombre||!email){note.textContent='Completá tu nombre y email para continuar.';note.style.color='#E0A82E';return;}
    note.textContent='¡Gracias, '+nombre.split(' ')[0]+'! Recibimos tu consulta. Te contactamos pronto.';
    note.style.color='#6FA23C';
    form.reset();
  });
