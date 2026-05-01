const clientes = [ 
  { nombre: 'Ana', correo: 'ana@mail.com' }, 
  { nombre: 'Luis', correo: 'luis@mail.com' } 
];

const buscarCliente = (lista, correo) => {

  const encontrado = lista.find(c => c.correo === correo);

  return encontrado || "Cliente no encontrado";
};

console.log(buscarCliente(clientes, 'ana@mail.com'));
console.log(buscarCliente(clientes, 'otro@mail.com'));