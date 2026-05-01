const catalogo = [ 
  { nombre: 'Mouse', precio: 45000 }, 
  { nombre: 'Teclado', precio: 120000 }, 
  { nombre: 'Audífonos', precio: 85000 } 
];

const productoMasCaro = catalogo.reduce((acumulador, producto) => {
 const precioActual = producto.precio;
 const precioMayor = acumulador.precio;

 const resultado =
 (precioActual > precioMayor && producto) ||
 acumulador;

 return resultado;

});

 console.log(productoMasCaro);
