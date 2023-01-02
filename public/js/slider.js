// saca el largo que va a tener la lista de cabañas
// dependiendo de cuantos elementos tenga el dentro la lista
// para poder colocar las cabañas que se quiera
// sin tener que modificar el CSS ni el HTML.

function WidthList(list, elementList) {
  let cotaggeCard = document.querySelectorAll(list + " " + elementList);
  let numberCards = cotaggeCard.length;
  let windowWidth = window.innerWidth;
  let totalWidthList;
  if (windowWidth < 700) {
    totalWidthList = numberCards * 100;
  } else if (windowWidth < 1200) {
    totalWidthList = numberCards * 50;
  } else if (windowWidth >= 1200) {
    totalWidthList = numberCards * 25;
  }
  document.querySelector(list).style.width = totalWidthList + "%";
}

WidthList(".cottage-list", ".cottage-card");

// intento de boton para avanzar, aun no esta completo.

// document.querySelector("#next-button").addEventListener("click", function () {
//   let list = document.querySelector(".cottage-list");
//   list.style.marginLeft = "+=-100%";
// });
