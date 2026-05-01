const aplicarDescuento = (precio, porcentaje) => {

  const porcentajeLimitado = Math.min (porcentaje, 50);
  const porcentajeAjustado = Math.max (0, porcentajeLimitado);
  const descuento = precio * (porcentajeAjustado / 100);

  const precioFinal = precio - descuento;

  return precioFinal;

};

console.log(aplicarDescuento(100000, 20));
console.log(aplicarDescuento(100000, 80));
console.log(aplicarDescuento(100000, -5));