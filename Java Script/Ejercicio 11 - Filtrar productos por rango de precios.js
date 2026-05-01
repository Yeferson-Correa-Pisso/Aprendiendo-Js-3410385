const catalogo = [
  { nombre: 'Mouse', precio: 45000 },
  { nombre: 'Teclado', precio: 120000 },
  { nombre: 'Audífonos', precio: 85000 },
  { nombre: 'Monitor', precio: 300000 }
];

const filtrarPorRango = (catalogo, min, max) => {
  const productosFiltrados = catalogo.filter((producto) => {
  const precio = producto.precio;
  
   const cumpleMin = precio >= min;
   const cumpleMax = precio <= max;

   const estanEnRango = cumpleMin && cumpleMax;

   return estanEnRango;

  });

  const copiaProductos = [...productosFiltrados];

  const productosOrdenados = copiaProductos.sort ((a, b) =>  {

    const precioA = a.precio;
    const precioB = b.precio;

    const diferencia = precioA - precioB;
    
    return diferencia;

  });

  return productosOrdenados;

   };

  const resultado = filtrarPorRango(catalogo, 50000, 200000);

  console.log (resultado);
