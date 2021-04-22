/*Aquest exercici tracta de crear un cercador. Donada una llista de noms, a l'introduir un nom al cercador només s'han de mostrar aquells que coincideixin.
Seria desitjable que vagi filtrant conforme es va omplint el nom. També tenir en compte maquetar la solució final perquè tingui bon aspecte.

Code snippet:

<input type="text" id="myInput" onkeyup="filterNames()" placeholder="Buscar nom.." title="Buscar nom">

<ul id="myUL">
  <li><a href="#">Albert</a></li>
  <li><a href="#">Ismael</a></li>
  <li><a href="#">Luis</a></li>
  <li><a href="#">Rubén</a></li>
  <li><a href="#">Jonatan</a></li>
  <li><a href="#">Jake</a></li>
  <li><a href="#">Jose</a></li>
</ul>*/


 myInput = document.getElementById("myInput");
 myUL = document.getElementById("myUL");
 
 document.getElementById("myInput").addEventListener("onkeyup", buscador_interno);

 function buscador_interno(){
 
 
     filter = myInput.value.toUpperCase();
     li = myUL.getElementsByTagName("li");
 
     //Recorriendo elementos a filtrar mediante los "li"
     for (i = 0; i < li.length; i++){
 
         a = li[i].getElementsByTagName("a")[0]; // a porque es la etiqueta de los textos aunque podría ser otro nombre
         textValue = a.textContent || a.innerText; // nos filtra por el texto introducido dentro de las etiquetas, sino saldría todo
 
         if(textValue.toUpperCase().indexOf(filter) > -1){ //indexamos mediante lo que vamos escribiendo y ejecuta mientras sea mayor a -1 para que siempre aparezca algo siempre que coincida con el texto almacenado (esto último se condiciona con los siguientes pasos)
 
             li[i].style.display = "";
             myUL.style.display = "block";
 
             if (myInput.value === ""){
                myUL.style.display = "none";
             }
 
         }else{
             li[i].style.display = "none";
         }
 
     }
 
 }











