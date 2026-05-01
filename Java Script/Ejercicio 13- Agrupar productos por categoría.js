const productos = [ 
  { nombre: 'Manzana', categoria: 'Frutas' }, 
  { nombre: 'Zanahoria', categoria: 'Verduras' }, 
  { nombre: 'Pera', categoria: 'Frutas' }, 
  { nombre: 'Lechuga', categoria: 'Verduras' } 
];

const productosPorCategoria = productos.reduce((acumulador, producto) => {
  const categoria = producto.categoria;
  const listaActual = acumulador [categoria] || [];
  const nuevaLista = listaActual.concat(producto); 

  acumulador [categoria] = nuevaLista;

  return acumulador;

}, {});

console.log(productosPorCategoria);