// ---- Splash ----
const splash = document.getElementById('splash');
window.addEventListener('load',()=>{
  if(splash){
    splash.classList.add('fade-splash');
    setTimeout(()=> splash.style.display='none', 2800);
  }
});

// ---- Navbar blur al scrollear ----
const nav = document.getElementById('nav');
const onScroll = () => { if(nav) nav.classList.toggle('scrolled', window.scrollY>10); };
window.addEventListener('scroll', onScroll); onScroll();

// ---- Reveal on scroll ----
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

// ---- Año dinámico ----
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// ---- Render grid en index ----
(function renderIndexGrid(){
  const grid = document.getElementById('gridProductos');
  if(!grid) return;
  const money = n => new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(n);
  grid.innerHTML = productos.map(p=>`
    <article class="card-prod" data-id="${p.id}" onclick="location.href='product.html?id=${p.id}'">
      <img src="${p.imgs[0]}" alt="${p.nombre}">
      <div class="card-body">
        <span class="badge">${p.animalTag}</span>
        <div class="card-title">${p.nombre}</div>
        <div class="card-desc">${p.animal}</div>
        <div class="price">${money(p.precio)}</div>
        <div class="row">
          <button class="btn" onclick="event.stopPropagation(); addToCart('${p.id}',1,false)">Agregar al carrito</button>
          <button class="btn btn-dark" onclick="event.stopPropagation(); buyNow('${p.id}')">Comprar ahora</button>
        </div>
      </div>
    </article>
  `).join('');
})();
