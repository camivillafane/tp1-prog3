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


// 4-3. Agregar un nuevo elemento al inicio del array productos utilizando unshift().

console.log("\nSe agrego un nuevo elemento al inicio del array");
productos.unshift({
    id : 8,
    nombre : "Lomito",
    precio : 7000,
    stock : 15
});
console.log(productos);

// 4-6. Crear un nuevo array llamado nombresProductos que contenga solo los nombres de todos los
// productos en el inventario utilizando map().

let nombresProductos = productos.map(producto => producto.nombre);
console.log(`\nLos nombres de todos los productos son:\n${nombresProductos}`);