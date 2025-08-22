// result.js (productos schema)


function loadResult(){

  const animalInsights = {
    "doberman": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M3 13c2-3 4-5 8-6 3-.8 6 1 8 3l2 2-2 2c-2 2-5 4-8 3-4-1-6-3-8-6z"/></svg>`,
      text: "El dóberman destaca por su inteligencia y lealtad excepcionales."
    },
    "serpiente": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M4 12c0-4 4-6 8-6s6 2 6 4-2 3-4 3h-2c-2 0-4 1-4 3s2 4 6 4 6-2 6-4"/></svg>`,
      text: "La serpiente percibe el mundo con su lengua bífida y el órgano de Jacobson."
    },
    "cienpies": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M2 12h20M6 10v4M8 9v6m2-7v8m2-9v10m2-8v6m2-7v8"/></svg>`,
      text: "El ciempiés puede tener de 30 a más de 300 patas, y es un depredador nocturno."
    },
    "aguila": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M3 12l7-8 11 8-11 8z"/></svg>`,
      text: "El águila real detecta presas a kilómetros gracias a su visión privilegiada."
    },
    "lobo": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M4 14l4-6 4 2 4-4 4 8-8 4z"/></svg>`,
      text: "El lobo se comunica con aullidos que alcanzan hasta 10 km."
    },
    "oso": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`,
      text: "El oso hiberna meses enteros, símbolo de resistencia y energía contenida."
    },
    "leon": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M12 3l6 6-6 12-6-12z"/></svg>`,
      text: "El rugido del león se escucha a kilómetros, reflejo de poder y presencia."
    },
    "zorro": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M3 6l9 4 9-4-9 16z"/></svg>`,
      text: "El zorro prospera en cualquier entorno gracias a su ingenio y adaptabilidad."
    },
    "buho": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/><path d="M2 5h20v14H2z"/></svg>`,
      text: "El búho gira la cabeza hasta 270° y observa con silencio estratégico."
    }
  };

  const params = new URLSearchParams(location.search);
  let rawId = params.get('animal') || params.get('id') || "";
  if(!rawId){ console.log("No query param id/animal"); }
  // Normalizar: minusculas, quitar sufijos tipo -cap, -gorra, espacios extras
  let norm = rawId.toLowerCase().trim();
  norm = norm.replace(/[-_]?cap(s)?$/, "");
  norm = norm.replace(/[-_]?gorra(s)?$/, "");
  norm = norm.replace(/\s+/g, "");

  const p = (window.productos||[]).find(x=> 
    (x.id||"").toLowerCase()===norm || 
    (x.animalTag||"").toLowerCase()===norm || 
    (x.animal||"").toLowerCase()===norm
  );

  const root = document.getElementById('result-page');
  if(!root){ return; }

  const toTitle = s => (s||"").toString()
    .replace(/[_\-]+/g,' ')
    .replace(/\s+/g,' ')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase());

  let displayAnimal = toTitle(norm);
  if(p){
    displayAnimal = toTitle(p.animal || p.animalTag || p.id || norm);
  }

  const animalInsights = {
    "doberman": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M3 13c2-3 4-5 8-6 3-.8 6 1 8 3l2 2-2 2c-2 2-5 4-8 3-4-1-6-3-8-6z"/></svg>`,
      text: "El dóberman destaca por su inteligencia y respuesta al entrenamiento: aprende señales con rapidez y mantiene una lealtad excepcional."
    },
    "serpiente": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M4 12c0-4 4-6 8-6s6 2 6 4-2 3-4 3h-2c-2 0-4 1-4 3s2 4 6 4 6-2 6-4"/></svg>`,
      text: "La serpiente usa su lengua bífida para “oler” el aire: capta partículas y las analiza en el órgano de Jacobson, detectando presas y rutas."
    },
    "cienpies": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M2 12h20M6 10v4M8 9v6m2-7v8m2-9v10m2-8v6m2-7v8"/></svg>`,
      text: "Un ciempiés no siempre tiene 100 patas: según la especie puede tener de 30 a más de 300, y es un depredador rápido y nocturno."
    },
    "aguila": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M3 12l7-8 11 8-11 8z"/></svg>`,
      text: "El águila real puede detectar presas a varios kilómetros: visión aguda que inspira claridad y enfoque."
    },
    "lobo": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M4 14l4-6 4 2 4-4 4 8-8 4z"/></svg>`,
      text: "Un aullido de lobo puede oírse hasta 10 km: comunicación y trabajo en equipo para coordinar a la manada."
    },
    "oso": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`,
      text: "El oso hiberna durante meses: gestión de energía y resistencia en condiciones extremas."
    },
    "leon": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M12 3l6 6-6 12-6-12z"/></svg>`,
      text: "El rugido del león puede escucharse a kilómetros: presencia y poder inconfundibles."
    },
    "zorro": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><path d="M3 6l9 4 9-4-9 16z"/></svg>`,
      text: "El zorro prospera en casi cualquier entorno: adaptabilidad e ingenio para resolver problemas."
    },
    "buho": {
      icon: `<svg class="animal-insight-icon" viewBox="0 0 24 24"><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/><path d="M2 5h20v14H2z"/></svg>`,
      text: "Puede girar la cabeza hasta 270°: percepción amplia y silenciosa, símbolo de observación estratégica."
    }
  };

  const insight = animalInsights[norm];
  const insightBlock = insight
    ? `<div class="animal-insight">${insight.icon}<div class="animal-insight-text">${insight.text}</div></div>`
    : `<p style="margin-top:10px;color:#555">No tenemos aún un insight para este animal.</p>`;

  if(!p){
    console.log("No se encontró producto, usando fallback", norm);
    root.innerHTML = \`
      <div class="container section">
        <div class="result-panel">
          <h2 class="result-title">Tu animal es: \${displayAnimal}</h2>
          ${ (animalInsights[(p.animal||"").toLowerCase()] ? `<div class="animal-insight">${animalInsights[(p.animal||"").toLowerCase()].icon}<div class="animal-insight-text">${animalInsights[(p.animal||"").toLowerCase()].text}</div></div>` : "") }
          \${insightBlock}
          <p style="margin-top:12px"><a class="btn" href="index.html">Volver al inicio</a></p>
        </div>
      </div>\`;
    return;
  }

  const bg = p.imgs && p.imgs[0] ? p.imgs[0] : (p.img || '');

  root.innerHTML = \`
    <div class="container section">
      <div class="result-hero">
        <div class="result-visual">
          \${bg ? \`<img src="\${bg}" alt="\${displayAnimal}">\` : ''}
        </div>
        <div class="result-panel">
          <span class="badge">Resultado</span>
          <h2 class="result-title">Tu animal es: \${displayAnimal}</h2>
          ${ (animalInsights[(p.animal||"").toLowerCase()] ? `<div class="animal-insight">${animalInsights[(p.animal||"").toLowerCase()].icon}<div class="animal-insight-text">${animalInsights[(p.animal||"").toLowerCase()].text}</div></div>` : "") }
          \${p.desc ? \`<p class="lead" style="margin-top:6px">\${p.desc}</p>\` : ""}
          \${insightBlock}
          <div class="actions" style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn primary" onclick="addToCart('\${p.id}',1,false)">Agregar al carrito</button>
            <a class="btn ghost" href="product.html?id=\${p.id}">Ver producto</a>
            <button class="btn square" onclick="buyNow('\${p.id}')">Comprar ahora</button>
            <a class="btn ghost" href="index.html#productos">Seguir explorando</a>
          </div>
        </div>
      </div>
    </div>\`;
}
window.addEventListener('DOMContentLoaded', loadResult);
