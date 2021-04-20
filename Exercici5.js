/*Modifica la funció 'a()' per a reemplaçar la promesa per aync/await:

function b() {
   // tasques asíncrones , que triguen una estona..
}

funtion a() {
   // Ens esperem que la funció b acabi
   b().then() = > {
         doMoreWork();
   }
}*/

 function b() {
     // tasques asíncrones , que triguen una estona..
 }

 async function a() {
    try {
      const doMoreWork = await b();
      console.log(doMoreWork);
    } catch(error) {
      console.error(error);
    }
  }