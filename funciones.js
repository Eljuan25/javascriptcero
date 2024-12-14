

// Funcion para saludar

function saludar(nombre){
    return `Por favor saquenme de la tionamerica , ${nombre}`;
} 

console.log(saludar("Pedro"));

//Area de triangulo


const areadeTriangulo = (base, altura) => (base * altura) /2;
console.log(areadeTriangulo(10,19));


// convertidor De temperatura 

function celsiusToFa(celsius){
    return  celsius * 9/5 + 32;
}

console.log(celsiusToFa(23));



// Suma y Multiplicar

function suma(a,b) {
    return a + b ;
}

function multiplicar(a,b){
    return a * b;
}


let numero1 =  8;
let numero2 = 19;


let resultadoSuma=suma(numero1,numero2);
let resultadoMulti=multiplicar(numero1,numero2);

console.log(`La suma de ${numero1} y de  ${numero2} es : ${resultadoSuma}`);
console.log(`La suma de ${numero1} y de  ${numero2} es : ${resultadoMulti}`);