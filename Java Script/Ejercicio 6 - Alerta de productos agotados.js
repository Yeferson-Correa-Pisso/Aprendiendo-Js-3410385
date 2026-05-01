const inventario = [ 
  { nombre: 'Pan', stock: 12 }, 
  { nombre: 'Café', stock: 0 }, 
  { nombre: 'Azúcar', stock: 5 } 
];

const hayAgotados = (productos) => {
  const resultado = productos.some ((producto) => {

    const stock = producto.stock;

    const estaAgotado = stock === 0;
    return estaAgotado;
  
  });

  return resultado;

};

console.log(hayAgotados(inventario));
  