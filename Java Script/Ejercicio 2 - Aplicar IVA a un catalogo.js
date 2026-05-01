const catalogo = [ 
  { id: 1, nombre: 'Silla', precio: 150000 }, 
  { id: 2, nombre: 'Mesa', precio: 350000 } 
];

const catalogoConIva = catalogo.map((producto) => {
  const precioOriginal = producto.precio;
  const iva = precioOriginal * 0.19;
  const precioConIva = precioOriginal + iva;
  const nuevoProducto ={
    ...producto, // Esto Copia lo que ya se tenia
    precioConIva:precioConIva // agrega la nueva propiedad
  };

  return nuevoProducto;
});

  console.log(catalogoConIva)
  