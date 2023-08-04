//Ejercicio 1
function saludar(nombre) {
    console.log(`Hola , ${nombre}`);
}
saludar("Miguel")

//Ejercicio 2
function multiplicar (numero1,numero2){
    console.log(numero1 * numero2);
}

multiplicar(2,3)

//Ejercicio 3
function areaTriangulo(base,altura) {
    let area = base * altura / 2;
    return area;
}


console.log(areaTriangulo(5,3));

function perimetroTriangulo(lados1,lados2,lados3){
    let perimetro= lados1+lados2+lados3;
    return perimetro
}

console.log(perimetroTriangulo(4,5,6));


//Ejercicio 4
function calcularPrecio (producto, precios){
    if (producto>=10 && producto<20) {
        precios=precios-(precios*10/100);
    } else if (producto>=20) {
        precios=precios-(precios*20/100);
       
    } 
    return precios
}
console.log(calcularPrecio(11,5));
console.log(calcularPrecio(20,10));

//Ejercicio 5
function esMayorDeEdad(edad){
    if (edad>=18){
     console.log("Eres mayor de edad");
    }else if(edad<18){
        console.log("Eres menor de edad");
    }
    return edad
}

esMayorDeEdad(28);
esMayorDeEdad(17);

//Ejercio 6
function calcularImpuesto(ingresoAnual) {
    if (ingresoAnual<10.000){
        impuesto = impuesto-(impuesto*10/100)}
    return impuesto
    }

