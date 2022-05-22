/* HACK-9 Agregar alias "charlie" al inicio*/
let bar = [100,200,300,400,500,600,700];
console.log("Array: ", bar)
bar.splice(0,0,"charlie");
console.log("New Array: ", bar)