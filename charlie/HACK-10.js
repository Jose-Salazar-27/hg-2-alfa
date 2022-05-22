/* HACK-10 Agregar despues del item 500 los alias "qux" y "thud"*/
let bar = [100,200,300,400,500,600,700];
console.log("Array: ", bar)
bar.splice(5,0,"qux","thud")
console.log("New Array: ", bar)