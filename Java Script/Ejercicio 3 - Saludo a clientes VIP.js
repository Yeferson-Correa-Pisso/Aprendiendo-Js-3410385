const clientes = [ 
  { nombre: 'Ana', totalCompras: 1500000 }, 
  { nombre: 'Luis', totalCompras: 800000 }, 
  { nombre: 'Marta', totalCompras: 2300000 } 
];

const clientesVip = clientes.filter((cliente) => {

  const total = cliente.totalCompras;

  const esVip = total > 1000000;

  return esVip;

});

const saludosVip = clientesVip.map ((cliente) => {
  const nombre = cliente.nombre;
const mensaje = ` Hola ${nombre}, Gracias por ser un cliente VIP`;
return mensaje;
});

console.log(saludosVip);