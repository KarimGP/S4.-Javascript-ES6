/*Realitzar un programa en ES6, amb al menys una funció.
Aquest programa demana a l'usuari dos nombres de l'1 a l'10 (con promp es suficient). 
Un cop introduïts, es mostra per consola la taula de multiplicar del número 1 que va fins al número 2.*/

let nr3;
nr3=prompt('Ingrese un número del 1 al 10','');
nr3=parseInt(nr3);

let nr4;
nr4=prompt('Ingrese un número del 1 al 10','');
nr4=parseInt(nr4);
 
document.write("<table border='1'>");
document.write("<table border='2'>");

 
let q=0;
 
for (q = 1; q <= nr4; q++) {
 for (w=1; w<=1; w++){
	tabla2=nr3*q;

document.write("<tr><td>");
document.write(nr3 + "x" + q + "="+ tabla2 + "<br>");
document.write("</td></tr>");
}
document.write("<br>");
}
document.write("</table>");