/*Ejercicio 1 Realizar un programa que reciba 2 números y que imprima por consola si el primer
 número es mayor que el segundo.

let numero1= prompt("Ingresar el primer numero")
let numero2= prompt("Ingresar el segundo numero")
if (numero1 > numero2){
    console.log("El numero es mayor");
}else{
    console.log("El nuemro no es mayor");
}
*/

/*Ejercicio 2 Realizar un programa que reciba 2 números y que imprima por consola si los números
2 son iguales o si son diferentes.

let numero1=prompt("Ingrese el primer numero")
let numero2= prompt("Ingrese el segundo numero")

if (numero1==numero2){
    console.log("Los numero son iguales");
} else{
    console.log("Los numero son  diferentes");
} */



/* Ejercicio 3 Realizar un programa que reciba 2 números y que imprima por consola cuál de los 2
números es el más grande o si son iguales.

let numero1=prompt("Ingrese el primer numero")
let numero2= prompt("Ingrese el segundo numero")

if(numero1 > numero2){
    console.log("El primer numero ingresado es mas grande");
}
else if (numero2 > numero1){
    console.log("El segundo numero ingresado es mas grande");
}else{
    console.log("Los numeros ingresados son iguales");
}*/



/*Ejercicio 4 Realizar un programa que reciba 3 números y que imprima por pantalla cual de los 3 es
el más chico.
let numero1=prompt("Ingrese el primer numero")
let numero2= prompt("Ingrese el segundo numero")
let numero3=prompt("Ingrese el tercer numero")

if (numero1 < numero2){
    if (numero1 < numero3){
        console.log("El primer numero ingresado es mas chico");
    } else {
        console.log("El tercer numero ingresado es mas chico");
    }
} else if (numero2 < numero1){
    if (numero2 < numero3){
        console.log("El segundo numero ingresado es mas chico ");
    }else {
        console.log("El tercer numero ingresado es mas chico");
    }
} else if (numero3 < numero1){
    if (numero3 < numero2) {
        console.log("El tercer numero ingresado es mas chico");
        
    }
} */

/*Ejercicios 5 Realizar un programa que reciba 2 objetos representando personas con las propiedades:
● nombre
● edad
● altura
y que imprima por pantalla:
1. cual de las dos personas es la más alta
2. cual es la de mayor edad. 

let persona1={
    nombre:"Miguel",
    edad:28,
    altura:175
}

let persona2={
    nombre:"Benja",
    edad:27,
    altura:185
}

if (persona1.altura < persona2.altura){
    console.log("La persona numero 2 es mas alta");
    
    if (persona1.edad > persona2.edad) {
    console.log("La persona numero 1 es de mayor edad");
}
} */

/*Ejercicio 6 Realizar un programa que permita ingresar por pantalla:
● tu nombre
● tu edad
● tu altura
● tu visión
y determine si estás capacitado para conducir, para saber esto la persona deberá
● Tener edad mínima de 18 años.
● Medir más de 150 cm.
● Tener una visión como mínimo de 8 de 10. 

let nombre = prompt("Ingrese su nombre: ")
let edad = prompt("Ingrese su edad: ")
let altura = prompt("Ingrese su altura ")
let vision = prompt("Ingrese su nivel de visión (1-10)")

if (edad >= 18){
    if (altura > 150) {
         if (vision >= 8 ){
            console.log("Esta persona esta capacitada para conducir");
        } else{
            console.log("Esta persona no esta capacitada para conducir ");
        }
    } else {
        console.log("Esta persona no esta capacitada para conducir");
    }
} else {
    console.log("Esta persona no esta capacitada para conducir");
} */

/*Ejercicio 7 Realizar un programa que permita el ingreso por pantalla de los siguientes datos:
● Nombre del cliente.
● Pase ( vip o normal )
● Si posee entrada ( si o no ).
Las personas que posean:
Tú mismo nombre tienen ingreso libre ( mostrar un mensaje de bienvenida ) ó
Pase vip tienen ingreso libre ( mostrar un mensaje de bienvenida )
Si posee entrada preguntar ¿desea utilizarla?, en caso:
afirmativo ( mostrar un mensaje de bienvenida )
Y por último en caso de:
No tener el mismo nombre y no tener un pase vip y no tener entrada, preguntar ¿desea comprar?
en caso:
negativo ( mostrar mensaje de despedida )
afirmativo preguntar dinero disponible, si posee:
 $1000 o mas, ( mostrar un mensaje venta exitosa y de bienvenida )
Menos de $1000 ( mostrar un mensaje de rechazo de venta ) 

let nombre= prompt("Ingrese el nombre del cliente")
let pase= prompt("Ingrese su pase (VIP o normal)")
let entrada= prompt("Posee la entrada (SI O NO)")

if ( nombre === "Miguel"){
     if (pase === "VIP"){
        if (entrada === "SI"){
            let afirmacion = prompt("¿Deseas utilizarla (SI O NO) ?")
            if( afirmacion === "SI" ){
                console.log("¡Te damos la Bienvenida!");
            } else{
                console.log("Que lastima... hasta pronto");
            }
        } else {
            console.log("Que lastima... hasta pronto");
        }
     } else {
        console.log("Que lastima... Hasta pronto");
     }

} else if ( nombre !== "Miguel" ){
    let comprar = prompt("¿Quiere comprala entrada? (SI O NO)")
    if (comprar === "SI") {
        let preguntar = Number(prompt("¿Que monto de dinero posee(COLOCA EL MONTO EN NUMERO)?"))
        if ( preguntar >=1000){
            console.log("¡Venta exitosa!,¡Te damos la Bienvenida!");
        } else {
            console.log("Que lastima... Hasta pronto");
        }
    } else{
        console.log("Que lastima... Hasta pronto");
    }
} else {
    console.log("Que lastima... Hasta pronto");
}

(Ejercicio 8) Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar,
un mensaje que diga: “Ganaste, has adivinado el número.” No te preocupes si usas
mucho código repetido, más adelante verás cómo realizar este juego de manera más
eficiente. 

let numeroIngresado= Number(prompt("Ingresar un numero del 1 al 10"))
let numeroIncognito= 5

if (numeroIncognito < numeroIngresado || numeroIncognito > numeroIngresado){
    console.log("Te queda DOS oportunidades mas ");
    let numeroIngresado= Number(prompt("Ingresar un numero del 1 al 10"))
}if (numeroIncognito < numeroIngresado || numeroIncognito > numeroIngresado){
    console.log("Te queda UNA oportunidades mas ");
    let numeroIngresado= Number(prompt("Ingresar un numero del 1 al 10"))
}if (numeroIncognito < numeroIngresado || numeroIncognito > numeroIngresado){
    console.log("Te queda ULTIMA OPORTUNIDAD oportunidades mas ");
    let numeroIngresado= Number(prompt("Ingresar un numero del 1 al 10"))
}else{
    console.log("Ganaste, bien hecho");
}


   
/*Ejercicio 9 Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años),
adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (más de 45
años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando
si en realidad tiene esa edad. 

let edad = Number(prompt("Ingresa tu edad: "))

if (edad <= 12){
    console.log("Eres un infante");
}else if (edad <=18){
    console.log("Eres un Adolescente");
} else if (edad <=45){
    console.log("Un mayor joven");
}else if (edad < 100 ){
    console.log("Un anciano");
}else if (edad > 100){
    console.log("¿Es realmente tu edad?");
} 

Ejercicio 10 Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cuál de los 2 ha ganado o si han empatado. En caso
de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa 


let jugador1= prompt('Jugador 1 = Seleccione algunas de estas opciones ("PIEDRA, PAPEL O TIJERAS")')
let jugador2= prompt('Jugador 2 = Seleccione algunas de estas opciones ("PIEDRA, PAPEL O TIJERAS")')

if( jugador1 === "PIEDRA" && jugador2 === "TIJERAS"){
    console.log("Gano el jugador N° 1");
} else if (jugador1 === "PAPEL" && jugador2 === "PIEDRA"){
    console.log("Gano el jugador N°1");
}else if (jugador1 === "TIJERAS" && jugador2 === "PAPEL"){
    console.log("Gano el jugador N° 1");
} else if (jugador2 === "PIEDRA" && jugador1 === "TIJERAS "){
    console.log("Gano el jugador N° 2 ");
}else if (jugador2 === "PAPEL" && jugador1 === "PIEDRA"){
    console.log("Gano el jugador N° 2 ");
} else if (jugador2 === "TIJERAS" && jugador1 === "PAPEL"){
    console.log("Gano el jugador N° 2 ");
}else if (jugador2 === "TIJERAS" && jugador1 === "TIJERAS"){
    console.log("Empate");
}else if (jugador2 === "PIEDRA" && jugador1 === "PIEDRA"){
    console.log("Empate ");
}else if (jugador2 === "PAPEL" && jugador1 === "PAPEL"){
    console.log("Empate");
} else if (jugador1 !== "PAPEL"){
    console.log("El jugador 1 hizo trampa");
} else if (jugador1 !== "PIEDRA"){
    console.log("El jugador 1 hizo trampa");
} else if (jugador1 !== "TIJERAS"){
    console.log("El jugador 1 hizo trampa");
}  else if (jugador2 !== "PAPEL"){
    console.log("El jugador 2 hizo trampa");
}else if (jugador2 !== "PIEDRA"){
    console.log("El jugador 2 hizo trampa");
}else if (jugador2 !== "TIJERAS"){
    console.log("El jugador 2 hizo trampa");
} 

(Ejercicio 11) Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
por pantalla los siguientes mensajes según las opciones:
● Blanco o Negro: Falta de color.
● Verde: El color de la naturaleza.
● Azul: El color del agua.
● Amarillo: El color del sol.
● Rojo: El color del fuego.
● Marrón: el color de la tierra.
● y para cualquier otro valor: Excelente elección, no lo teníamos pensado.


let color = prompt("Ingrese un color")

switch (color) {
     case  "blanco" :
        console.log("Falta de color");
        
        break;
    
        case  "negro":
        console.log("Falta de color");
    
        break;
    
        case "verde":
        console.log("El color de la naturaleza");
    
        break;
    
        case  "azul":
        console.log("El color del agua");
        
        break;
    
        case "amarilo":
        console.log("El color del sol");

        break;
        
        case "rojo":
        console.log("El color del fuego");

        break;

        case"marron":
        console.log("El color de la tierra");

        break;

        case color :
        console.log("Excelente eleccion, no lo tenia pensado");
    default:
        break;
}

(Ejercicio 12)Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0.

let numero1= Number(prompt("Ingresa el primer numero: "))
let numero2= Number(prompt("Ingresa el segundo numero: "))
let operacion= (prompt("Ingrese una operacion: "))

if (operacion === "+"){
    console.log(numero1 + numero2);
}else if (operacion === "-"){
    console.log(numero1 - numero2);
}else if (operacion === "*"){
    console.log(numero1 * numero2);
}else if (numero1 !== 0 && numero2 !==0 && operacion === "/"){
    console.log(numero1 / numero2);
} else{
    console.log("ERROR");
}

(Ejercicio 13 ) Crear un programa que permita ingresar todos los datos de tu documento nacional de
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni
con todos los datos ingresados y mostrarlos por consola con console.table() más un
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes

let nombre = prompt("Ingresa tu nombre: ")
let edad = prompt ("Ingresa tu edad: ")
let nacional = prompt ("Ingresa tu nacionalidad: ")
let estado = prompt("Ingresa tu estado Civil: ")

let datos= nombre +", "+ edad +", "+ nacional +", "+ estado
if (datos === datos){
    console.log(datos);
    let consultar= (prompt("¿Los datos son correcto?"))
    if(consultar === "si" ){
        let DNI={
                nombre:nombre,
                edad:edad,
                nacionalidad:nacional,
                estado:estado,
        }
        console.table(DNI);
    }else {
    console.log("Vuelva a intentarlo en 1 mes");
}

} */

