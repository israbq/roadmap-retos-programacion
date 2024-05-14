// La página oficial de JS es: https://developer.mozilla.org/es/docs/Web/JavaScript

/* Este comentario se basará el múltiple líneas
el cual es otra forma de hacer comentarios en JS 
y así poder comentar varias líneas a la vez */

//Variables

//Declaración de variables de forma independiente
let a; 
let b = 10; 
//Declaración de variables de forma masiva
let c=5, d= 10, e=15; 
let f=5,
    g=10,
    h=15; 

//Constantes
const name = "Israel"; 
/* Las variables let permiten hacer cambios en su valor, las Constantes no, de forma implicita cuando se declara una variable como const
damos por hecho de que no cambiará su valor, en el caso de let, podemos hacer uso de camelCase como estrategia, hay situaciones
en las que podemos hacer cambios de valor en const, para eso se usaría SNAKE_UPPER_CASE como estrategia */ 
let varibleCambiante = "Jorge"; 
varibleCambiante = "Luis"; 

const VARIABLE_CON_CAMBIO = 10; 
VARIABLE_CON_CAMBIO = "Jorge"; //Al momento de ejecutar el código, habrá un error por este cambio 

//Tipo de datos
let undefined,
    boolean = true, 
    number = 1, 
    string = "JavaScript", 
    BigInt = 1.00000000000001, 
    symbol = Symbol(); 

    
//console.log se utiliza para imprimir en consola valores
console.log("¡Hola, " + string + "!")