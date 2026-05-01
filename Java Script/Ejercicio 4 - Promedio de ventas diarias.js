const ventas = [450000, 620000, 300000, 510000, 790000, 680000, 400000];

const sumaTotal = ventas.reduce((acumulador, venta) => {
  const nuevoTotal = acumulador + venta;
  
  return nuevoTotal;

}, 0);

const cantidadDias = ventas.length;

const promedio = sumaTotal / cantidadDias;

const promedioRedondeado = Math.round(promedio);

console.log (promedioRedondeado);
