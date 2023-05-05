// Capturamos el option que muestra los servicios,
// y el input que va a mostrar los seleccionados al usuario.

const selectServices = document.getElementById("services-select");
const selectedServices = document.getElementById("services-selected");

// Captura el ul donde se mostrarán los servicios.

const servicesList = document.getElementById("show-services");

// Cuando seleccionemos una opción en "selectServices"
// la vamos a borrar y agregarla al "selectedServices"

selectServices.addEventListener("change", (e) => {
    const valueSelected = selectServices.value;

    // Agrega la opción a "selectedServices"
    selectedServices.innerHTML += `<option value="${valueSelected}" selected></option>`;

    // Elimina la opción en "selectServices"
    selectServices.remove(selectServices.selectedIndex);

    // Agrega un elemento al listado de "show-services"
    servicesList.innerHTML += `<li>${valueSelected}</li>`;

    // Vuelve al valor "servicio"
    selectServices.value = "servicios";
});
