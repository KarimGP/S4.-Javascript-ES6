/*Crear una funció que accepti un string i retornada aquest string revertit. 
Nota: Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()*/

const salutacio = "Hello Who";

const reverseSalutacio = (salut) => {

    let salutString = [...salut]; 
    let salutReverse = salutString.reverse();
  
    return salutReverse.join(''); 
}

console.log(reverseSalutacio(salutacio));