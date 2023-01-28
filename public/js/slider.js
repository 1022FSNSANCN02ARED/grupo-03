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

// widthList(".cottage-list", ".cottage-card", true);

// widthList("#act-list", ".act-card", true);

// intento de boton para avanzar, aun no esta completo.

// document.querySelector("#next-button").addEventListener("click", function () {
//   let list = document.querySelector(".cottage-list");
//   list.style.marginLeft = "+=-100%";
// });
//___________________________________________________________________________________________//

// configuracion apartado de preguntas frecuentes
//quiero que el boton sea dinámico y cambie la posición al estar abierta o cerrada la preguta
// al hacer click sobre el boton > abre una pestaña mostrando la respusta

let listPreguntas = document.querySelectorAll(".list-preg");

listPreguntas.forEach((listPregunta) => {
  listPregunta.addEventListener("click", () => {
    listPregunta.classList.toggle("arrow");

    let height = 0;
    /* En esta linea guardo en "menu" al hermano que le sigue a listPregunta, que en este caso seria la respuesta.
       con la propiedad clientHeight determino la altura de menu*/
    let menu = listPregunta.nextElementSibling;
    if (menu.clientHeight == "0") {
      /*scrollHeight es una propiedad que determina la altura minima sin sobresalir de la caja, en este casa la altura minima de la respueta*/
      height = menu.scrollHeight;
    }
    menu.style.height = `${height}px`;
  });
});
