let productos = [
    {id: 1, nombre: "Hamburguesa", precio: 9000, stock: 45},
    {id: 2, nombre: "Papas fritas", precio: 3500, stock: 30},
    {id: 3, nombre: "Pizza", precio: 12000, stock: 35},
    {id: 4, nombre: "Helado", precio: 4000, stock: 0},
    {id: 5, nombre: "Flan con DDL", precio: 3000, stock: 55}
]

console.log("\nOperaciones básicas y Acceso:\n")
console.log("Cantidad de productos:", productos.length);
console.log("Nombre del segundo elemento del array:", productos[1].nombre);
console.log("Nombre del cuarto elemento del array:", productos[3].nombre);

//3-1 Recorrer el array productos utilizando un bucle for...of e imprimir el nombre y el precio de cada
//elemento.

for (let producto of productos) {
    console.log(`${producto.nombre}, ${producto.precio}`);
}

//3-2. Recorre el array productos utilizando el método forEach() e imprimir la misma información que en el
//punto anterior, pero agregando una frase descriptiva (ej. "Producto: [nombre], Precio: [precio]").
productos.forEach(function(producto){
    console.log(`El producto ${producto.nombre} tiene un costo de: ${producto.precio} `);
});

//4-1. Agregar dos elementos al final del array productos utilizando push().
productos.push(
    {id: 6, nombre: "Tacos", precio: 8500, stock: 20},
    {id: 7, nombre: "Empanadas", precio: 11500, stock: 30}
);
console.log(productos);

//4-2 Eliminar el último elemento del array productos utilizando pop()
const eliminado = productos.pop();
console.log(`Producto eliminado: ${eliminado.nombre}`);
console.log('array actualizado:',productos)

// 4-3. Agregar un nuevo elemento al inicio del array productos utilizando unshift().

console.log("\nSe agrego un nuevo elemento al inicio del array");
productos.unshift({
    id : 8,
    nombre : "Lomito",
    precio : 7000,
    stock : 15
});
console.log(productos);


// 4-4. Eliminar el primer elemento del array productos utilizando shift()

const eliminadoPrimero = productos.shift();
console.log(`\nSe eliminó el Producto del inicio: `);
console.log('\nProductos actualizados:', productos);

// 4-5. Crear un nuevo array con productos que tienen stock mayor a 0

let productosConStock = productos.filter(producto => producto.stock > 0);
console.log('\nProductos con stock disponible:', productosConStock);



// 4-6. Crear un nuevo array llamado nombresProductos que contenga solo los nombres de todos los
// productos en el inventario utilizando map().

let nombresProductos = productos.map(producto => producto.nombre);
console.log(`\nLos nombres de todos los productos son:\n${nombresProductos}`);

// 4-7. Encontrar y guardar en una variable el primer producto en productos que tenga un id especifico (ej. id: 3) utilizando find(). Si no lo encuentra, indicar que no existe.

let buscarProducto = productos.find(producto => producto.id === 2);
if (buscarProducto) {
    console.log(`\nProducto encontrado. ID: ${buscarProducto.id}, Nombre: ${buscarProducto.nombre}`);
} else {
    console.log("\nProducto no encontrado");
}

// 4-8. Crear un nuevo array llamado productosOrdenados que contenga los productos ordenados por precio en orden decreciente. (investigar metodo sort()).

let productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
console.log("\nProductos ordenados por precio de forma decreciente:");
console.log(productosOrdenados);