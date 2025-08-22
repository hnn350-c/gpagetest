// product.js (productos schema)
function loadProduct(){
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const p = (window.productos||[]).find(x=> x.id===id);
  const root = document.getElementById('product-page');
  if(!root){ return; }
  if(!p){
    root.innerHTML = '<div class="container"><h2>Producto no encontrado</h2><p><a class="btn" href="index.html#productos">Volver</a></p></div>';
    return;
  }
  const bg = p.imgs[0];
  root.innerHTML = `
    <div class="page-two-col">
      <div class="left" style="background-image:url('${bg}')">
        <img src="${p.imgs[0]}" alt="${p.nombre}">
      </div>
      <div class="right">
        <h2>${p.nombre}</h2>
        <p class="muted">${p.animal}</p>
        <p>${p.desc}</p>
        <ul class="features">
          ${(p.features||[p.animal]).map(f=>`<li>${f}</li>`).join('')}
        </ul>
        <p><strong>$${p.precio}</strong></p>
        <div class="actions">
          <button class="btn" onclick="addToCart('${p.id}',1,false)">Agregar al carrito</button>
          <button class="btn btn-dark" onclick="buyNow('${p.id}')">Comprar ahora</button>
        </div>
      </div>
    </div>`;
}
window.addEventListener('DOMContentLoaded', loadProduct);


// --- Animal Insights Data ---
const animalInsights = {
  "aguila": {
    icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M2 12l10-9 10 9-10 9z"/></svg>`,
    text: "El águila real puede ver a su presa a más de 3 km: visión aguda que inspira claridad y enfoque."
  },
  "lobo": {
    icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M4 12l8-8 8 8-8 8z"/></svg>`,
    text: "Los lobos se comunican con aullidos que pueden escucharse hasta 10 km: símbolo de unión y lealtad."
  },
  "oso": {
    icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`,
    text: "El oso entra en hibernación durante meses, guardando energía con paciencia y resistencia."
  },
  "leon": {
    icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg>`,
    text: "El rugido del león se escucha a 8 km de distancia: poder y presencia indiscutible."
  },
  "zorro": {
    icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M2 2l20 20M22 2L2 22"/></svg>`,
    text: "El zorro se adapta a casi cualquier entorno: inteligencia y astucia como forma de supervivencia."
  },
  "buho": {
    icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/><path d="M2 4h20v16H2z"/></svg>`,
    text: "El búho puede girar su cabeza hasta 270°: visión amplia que representa sabiduría y perspectiva."
  }
};

// Render Animal Insight block
function renderAnimalInsight(productId) {
  const container = document.getElementById("animalInsightContainer");
  if (!container) return;
  const insight = animalInsights[productId];
  if (insight) {
    container.innerHTML = `<div class="animal-insight">${insight.icon}<div class="animal-insight-text">${insight.text}</div></div>`;
  }
}

// Hook into product rendering (assuming productId is available)
document.addEventListener("DOMContentLoaded", () => {
  if (typeof productId !== "undefined") {
    renderAnimalInsight(productId);
  }
});
