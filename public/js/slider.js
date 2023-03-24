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
