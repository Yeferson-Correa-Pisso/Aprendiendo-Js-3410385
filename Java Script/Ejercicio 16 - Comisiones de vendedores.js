const vendedores = [ 
  { nombre: 'Camila', totalVendido: 4500000 }, 
  { nombre: 'Andrés', totalVendido: 2800000 }, 
  { nombre: 'Sofía', totalVendido: 6200000 } 
];

const vendedoresConComision = vendedores.map((vendedor) => {
  const totalVendido = vendedor.totalVendido;
  const comision = totalVendido * 0.08;

  const nuevoVendedor = {
    ... vendedor,
    comision: comision
  };

  return nuevoVendedor;
});

const totalComisiones = vendedoresConComision.reduce((acumulador, vendedor) => {
  const comision = vendedor.comision;
  const nuevoTotal = acumulador + comision;

  return nuevoTotal;

}, 0);

console.log(vendedoresConComision);
console.log(totalComisiones);