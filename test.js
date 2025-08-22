
// test.js — render del test con tarjetas limpias y espaciadas
document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    { q: "¿Cómo prefieres pasar tu tiempo libre?", opts: [
      ["Salir a entrenar o actividades intensas", "doberman"],
      ["Leer/estudiar y avanzar metas", "cienpies"],
      ["Explorar la noche en silencio", "serpiente"]
    ]},
    { q: "¿Cuál describe mejor tu energía?", opts: [
      ["Intensa y directa", "doberman"],
      ["Constante y metódica", "cienpies"],
      ["Sutil y observadora", "serpiente"]
    ]},
    { q: "¿Qué valor te representa más?", opts: [
      ["Coraje", "doberman"], ["Resiliencia", "cienpies"], ["Astucia", "serpiente"]
    ]},
    { q: "¿Cuál es tu ritual matutino?", opts: [
      ["Ejercicio rápido", "doberman"],
      ["Planear el día", "cienpies"],
      ["Salir con calma y observar", "serpiente"]
    ]},
    { q: "¿Qué prefieres en una gorra?", opts: [
      ["Ajuste firme", "doberman"],
      ["Durabilidad y funcionalidad", "cienpies"],
      ["Detalle estético y sigiloso", "serpiente"]
    ]},
    { q: "En grupo, ¿qué rol ocupas?", opts: [
      ["Líder", "doberman"],
      ["Coordinador", "cienpies"],
      ["Observador estratégico", "serpiente"]
    ]},
    { q: "¿Qué paleta te atrae más?", opts: [
      ["Negros/rojos intensos", "doberman"],
      ["Tonos tierra", "cienpies"],
      ["Blancos/cremas con detalles", "serpiente"]
    ]},
    { q: "Actividad favorita", opts: [
      ["Entrenar/artes marciales", "doberman"],
      ["Montaña o largos recorridos", "cienpies"],
      ["Fotografía nocturna", "serpiente"]
    ]},
    { q: "¿Qué palabra te describe?", opts: [
      ["Directo", "doberman"],
      ["Perseverante", "cienpies"],
      ["Sigiloso", "serpiente"]
    ]},
    { q: "¿Qué buscas en un accesorio personal?", opts: [
      ["Impacto inmediato", "doberman"],
      ["Rendimiento/funcionalidad", "cienpies"],
      ["Sutileza y detalles", "serpiente"]
    ]}
  ];

  const list = document.getElementById('questionsList');
  const form = document.getElementById('testForm');
  if(!list || !form){ return; }

  list.innerHTML = questions.map((item, i) => {
    const name = `q${i}`;
    const opts = item.opts.map((o, j) => {
      const [label, val] = o;
      const id = `${name}_${j}`;
      return `
        <label class="option" for="${id}">
          <input id="${id}" type="radio" name="${name}" value="${val}" required>
          <span>${label}</span>
        </label>`;
    }).join("");
    return `
      <li class="question-card">
        <span class="q">${i+1}. ${item.q}</span>
        <div class="options">${opts}</div>
      </li>`;
  }).join("");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const tally = { doberman:0, serpiente:0, cienpies:0 };
    for(let i=0;i<questions.length;i++){
      const v = data.get('q'+i);
      if(v) tally[v] = (tally[v]||0) + 1;
    }
    const sorted = Object.entries(tally).sort((a,b)=> b[1]-a[1]);
    const winner = (sorted[0] && sorted[0][1] > 0) ? sorted[0][0] : 'serpiente';
    location.href = `result.html?animal=${encodeURIComponent(winner)}`;
  });
});
