/* HACK-8  Agregar alias "charlie" al final*/
let bar = [100,200,300,400,500,600,700];
console.log("Array: ", bar)
bar.splice(7,0,"charlie");
console.log("New Array: ", bar)