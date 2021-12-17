class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.18;
    }
}
//Declaramos un array de productos para almacenar objetos
newFunction();

function newFunction() {
    const productos = [];
    productos.push(new Producto("arroz", "145"));
    productos.push(new Producto("Azucar", "115"));
    productos.push(new Producto("Aceite", "90"));
    let prod1 = new Producto("Harina", "80");
    productos.push(prod1);

    //console.log(productos);
    //Iteramos el array con for...of para modificarlos a todos
    for (const producto of productos) {
        producto.sumaIva();
        console.log("Precio con iva: " + producto.precio);
    }


    console.log(productos);

    let preciosConInflacion = productos.map(producto => producto.precio + 10);
    console.log(preciosConInflacion);
}
