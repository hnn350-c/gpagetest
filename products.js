// Productos (vinculados a animales del test)
const productos = [
  {
    id:'cienpies-negra',
    nombre:'Gorra Cienpiés Negra',
    animal:'Resiliencia • Movimiento • Adaptabilidad',
    animalTag:'cienpies',
    precio:499,
    desc:'Perfil bajo, minimalismo oscuro y detalle blanco en frontal.',
    imgs:['assets/cienpies-1.jpg','assets/cienpies-2.jpg','assets/cienpies-3.jpg']
  },
  {
    id:'serpiente-blanca',
    nombre:'Gorra Serpiente Blanca',
    animal:'Estrategia • Precisión • Silencio',
    animalTag:'serpiente',
    precio:499,
    desc:'Contraste limpio en blanco con emblema serpiente en negro.',
    imgs:['assets/serpiente-1.jpg','assets/serpiente-2.jpg','assets/serpiente-3.jpg']
  },
  {
    id:'doberman-classic',
    nombre:'Gorra Doberman Classic',
    animal:'Potencia • Lealtad • Enfoque',
    animalTag:'doberman',
    precio:549,
    desc:'Estructura media, presencia marcada y bordado profundo.',
    imgs:['assets/doberman-1.jpg','assets/doberman-2.jpg','assets/doberman-3.jpg']
  }
];

// Exponer productos en el scope global para otras páginas
window.productos = productos;
