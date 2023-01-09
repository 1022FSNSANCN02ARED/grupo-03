// saca el largo que va a tener la lista de cabañas
// dependiendo de cuantos elementos tenga el dentro la lista
// para poder colocar las cabañas que se quiera
// sin tener que modificar el CSS ni el HTML.
// Si el tercer parametro es true, los elementos se ajustaran
// dependiendo el width de la ventana. Para que sea posible
// tener mas de un elemento al mismo tiempo

function widthList(list, elementList, responsive) {
  let cotaggeCard = document.querySelectorAll(list + " " + elementList);
  let numberCards = cotaggeCard.length;
  let windowWidth = window.innerWidth;
  let totalWidthList;
  if (responsive) {
    if (windowWidth <= 760) {
      totalWidthList = numberCards * 100;
    } else if (windowWidth < 1200) {
      totalWidthList = numberCards * 50;
    } else if (windowWidth >= 1200) {
      totalWidthList = numberCards * 25;
    }
  } else {
    totalWidthList = numberCards * 100;
  }
  document.querySelector(list).style.width = totalWidthList + "%";
}

widthList(".cottage-list", ".cottage-card", true);

widthList("#act-list", ".act-card", false);

// intento de boton para avanzar, aun no esta completo.

// document.querySelector("#next-button").addEventListener("click", function () {
//   let list = document.querySelector(".cottage-list");
//   list.style.marginLeft = "+=-100%";
// });

// configuracion apartado de preguntas frecuentes
//quiero que el boton sea dinamico y cambie la posicion al estan abierta o cerrada la preguta
// al hacer click sobre el boton > abre una pestaña mostrando la pregunta
 
 
 let listPreguntas = document.querySelectorAll('.list-preg');

 listPreguntas.forEach(listPregunta => {
    listPregunta.addEventListener('click', ()=>{
       listPregunta.classList.toggle('arrow');
    });
 });
