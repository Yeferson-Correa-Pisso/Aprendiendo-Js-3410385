class Producto {

  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  hayStock() {
    return this.stock > 0;
  }

  vender(cantidad) {
    const nuevoStock = this.stock - cantidad;

    this.stock = Math.max(0, nuevoStock);

    return this.stock;
  }

  precioFinal(porcentaje) {

    const porcentajeValido = Math.min(porcentaje, 50);

    const descuento = this.precio * (porcentajeValido / 100);

    const precioFinal = this.precio - descuento;

    return precioFinal;
  }
}

const producto = new Producto('Cuaderno', 10000, 5);

console.log(producto.hayStock());     // true (5 > 0)
console.log(producto.vender(3));      // 2 (5 - 3 = 2)
console.log(producto.vender(5));      // 0 (no baja de 0)
console.log(producto.precioFinal(20)); // 8000 (20% de descuento)
console.log(producto.precioFinal(80)); // 5000 (no aplica más del 50% de descuento)