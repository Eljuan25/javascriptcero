//saludar

function saludar(nombre){
    return `!hola, ${nombre}`
}


console.log(saludar("Juan"));


//Area de triangulo

const  areaTriangulo = (base,altura) => (base * altura) / 2;
console.log(areaTriangulo(1,3));


// Convertir de Temperatura

function celsiustoFa(celsius){
    return celsius * 9/5 + 32;

}

console.log(celsiustoFa(20));