// AgroPredict — interacciones de la landing
// mobile menu
  const burger=document.getElementById('burger');
  const menu=document.getElementById('menu');
  const setMenu=open=>{menu.classList.toggle('open',open);burger.setAttribute('aria-expanded',String(open));};
  burger.addEventListener('click',()=>setMenu(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));

  // CTA que preselecciona el perfil del formulario (ej.: "Quiero sumarme" como proveedor)
  const perfil=document.getElementById('perfil');
  document.querySelectorAll('[data-perfil]').forEach(a=>a.addEventListener('click',()=>{
    perfil.value=a.dataset.perfil;
  }));

  // contact form (demo)
  const form=document.getElementById('contactForm');
  const note=document.getElementById('formNote');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const nombre=document.getElementById('nombre').value.trim();
    const email=document.getElementById('email').value.trim();
    if(!nombre||!email){note.textContent='Completá tu nombre y email para continuar.';note.style.color='#E0A82E';return;}
    const esProveedor=perfil.value.startsWith('Proveedor');
    note.textContent='¡Gracias, '+nombre.split(' ')[0]+'! '+(esProveedor
      ?'Recibimos tu interés en sumarte a la red. Te contactamos pronto.'
      :'Recibimos tu pedido de diagnóstico. Te contactamos pronto.');
    note.style.color='#6FA23C';
    form.reset();
  });

  // Hoja de ruta: flor de Azahar interactiva
  const petals=document.querySelectorAll('#ruta .petal');
  const tabs=document.querySelectorAll('#ruta .petal-tab');
  const titleEl=document.getElementById('rutaTitle');
  const descEl=document.getElementById('rutaDesc');
  const coreNum=document.getElementById('flowerCoreNum');

  if(petals.length&&titleEl&&descEl){
    const activatePhase=idx=>{
      const target=petals[idx];
      if(!target)return;
      petals.forEach((p,i)=>{
        const active=i===idx;
        p.classList.toggle('is-active',active);
        p.setAttribute('aria-pressed',String(active));
      });
      tabs.forEach((t,i)=>{
        t.classList.toggle('is-active',i===idx);
        t.setAttribute('aria-selected',String(i===idx));
      });
      const num=String(idx+1).padStart(2,'0');
      titleEl.textContent=target.dataset.title;
      descEl.textContent=target.dataset.desc;
      if(coreNum)coreNum.textContent=num;
    };

    petals.forEach((petal,idx)=>{
      petal.addEventListener('mouseenter',()=>activatePhase(idx));
      petal.addEventListener('focus',()=>activatePhase(idx));
      petal.addEventListener('click',()=>activatePhase(idx));
      petal.addEventListener('keydown',e=>{
        if(e.key==='Enter'||e.key===' '){e.preventDefault();activatePhase(idx);}
      });
    });

    tabs.forEach((tab,idx)=>{
      tab.addEventListener('mouseenter',()=>activatePhase(idx));
      tab.addEventListener('click',()=>activatePhase(idx));
    });
  }
