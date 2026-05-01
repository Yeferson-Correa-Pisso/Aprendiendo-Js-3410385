const productos = [ 
  { nombre: 'A', vendidos: 120 }, 
  { nombre: 'B', vendidos: 45 }, 
  { nombre: 'C', vendidos: 200 }, 
  { nombre: 'D', vendidos: 80 }, 
  { nombre: 'E', vendidos: 150 } 
];

const copiaProductos = [...productos];

const productosOrdenados = copiaProductos.sort((productoA, productoB) => {
  const vendidosA = productoA.vendidos;
  const vendidosB = productoB.vendidos;

  const diferencia = vendidosB - vendidosA;

  return diferencia;

});

const top3Productos = productosOrdenados.slice(0, 3);

const nombresTop3 = top3Productos.map((producto) => {
  const nombre = producto.nombre;
  return nombre;

});

console.log(nombresTop3)
