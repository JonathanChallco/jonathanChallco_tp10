let numero1 = 16
let numero2 = 8

let suma = numero1 + numero2;
let rest = numero1 - numero2;
let mult= numero1 * numero2;
let div = numero1 / numero2;
let mod = numero1 % numero2; //<---- Modulo (resto)

let menorQue = numero1 > numero2 // <<<< num1 menor que num2
let mayorQue  = numero1 < numero2 // <<<< num1 mayor que num2
//Cuentas
console.log("La suma de", numero1 ,"Y", numero2, "es", suma);
console.log("La resta de", numero1 ,"Y", numero2, "es", rest);
console.log("La multiplicación de", numero1 ,"Y", numero2, "es", mult);
console.log("La divición entre", numero1 ,"Y", numero2, "es", div);
console.log("El módulo entre", numero1 ,"Y", numero2, "es", mod);

console.log("Es", numero1, "mayor que", numero2, "?", menorQue)
console.log("Es", numero1, "menor que", numero2, "?", mayorQue)