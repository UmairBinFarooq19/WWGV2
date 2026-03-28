/* WildWays Global — site.js */

// NAV
document.querySelector('.nav-burger')?.addEventListener('click',()=>{
  document.getElementById('navLinks').classList.toggle('open');
});

// MODAL
function openModal(pkg){
  const m=document.getElementById('modal');
  if(!m)return;
  m.classList.add('open');
  document.body.style.overflow='hidden';
  if(pkg){const s=document.getElementById('m-pkg');if(s)s.value=pkg;}
}
function closeModal(){
  const m=document.getElementById('modal');
  if(!m)return;
  m.classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

// FORM
function submitForm(){
  const name=(document.getElementById('m-name')||{}).value||'Visitor';
  const phone=(document.getElementById('m-phone')||{}).value||'';
  const pkg=(document.getElementById('m-pkg')||{}).value||'Kashmir Tour';
  const date=(document.getElementById('m-date')||{}).value||'Flexible';
  const persons=(document.getElementById('m-persons')||{}).value||'2';
  if(!phone){alert('Please enter your phone number');return;}
  const msg=encodeURIComponent(`Hi WildWays Global / Adventures Kashmir!\n\nName: ${name}\nPhone: ${phone}\nPackage: ${pkg}\nDate: ${date}\nPersons: ${persons}\n\nPlease send me a quote. Thank you!`);
  window.open(`https://wa.me/919797877243?text=${msg}`,'_blank');
  closeModal();
}

// FAQ
function toggleFaq(btn){
  const item=btn.closest('.faq-item');
  const isOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>{
    i.classList.remove('open');
    i.querySelector('.faq-q').setAttribute('aria-expanded','false');
  });
  if(!isOpen){item.classList.add('open');btn.setAttribute('aria-expanded','true');}
}

// REVEAL
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')});
},{threshold:0.07});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
setTimeout(()=>document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in')),900);

// NAV SCROLL
window.addEventListener('scroll',()=>{
  const nav=document.querySelector('.nav');
  if(nav)nav.style.boxShadow=window.scrollY>40?'0 2px 20px rgba(0,0,0,0.25)':'none';
},{ passive:true });
