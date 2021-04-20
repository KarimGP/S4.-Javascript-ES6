/*Realitzar un programa en ES6, amb al menys una funció.
Aquest programa demana a l'usuari dos nombres de l'1 a l'10 (con promp es suficient). 
Un cop introduïts, es mostra per consola la taula de multiplicar del número 1 que va fins al número 2.*/

let nr;
nr=prompt('Ingrese un número del 1 al 10','');
nr=parseInt(nr);

let nr2;
nr2=prompt('Ingrese un número del 1 al 10','');
nr2=parseInt(nr2);
 
let x=0;
 
for (x = 1; x <= nr2; x++) {
 for (y=1; y<=1; y++){
	tabla=nr*x;

console.log(nr+"x"+x+"="+ tabla);

}}


