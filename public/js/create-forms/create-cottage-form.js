// Capturamos el option que muestra los servicios,
// y el input que va a mostrar los seleccionados al usuario.
const selectServices = document.getElementById("services-select");
const selectedServices = document.getElementById("services-selected");

// Captura el ul donde se mostrarán los servicios.
const servicesList = document.getElementById("show-services");

// Capturamos el input que carga imágenes, y sus img de previsualización
const cottageImagesInput = document.getElementById("cottage-images-input");
const cottagePreviewImages = document.querySelectorAll(".cottage-preview-img");

// Cuando seleccionemos una opción en "selectServices"
// la vamos a borrar y agregarla al "selectedServices"

selectServices.addEventListener("change", (e) => {
    const valueSelected = selectServices.value;

    // Agrega la opción a "selectedServices"
    selectedServices.innerHTML += `<option value="${valueSelected}" selected></option>`;

    // Elimina la opción en "selectServices"
    selectServices.remove(selectServices.selectedIndex);

    // Agrega un elemento al listado de "servicesList"
    servicesList.innerHTML += `
    <li class="w-50">
        <div class="selected-service">
            ${valueSelected}
            <i 
                id= "${valueSelected}"
                class="delete-service-button fa-solid fa-xmark"
            >
            </i>
        </div>
    </li>`;

    // Vuelve al valor "servicio"
    selectServices.value = "servicios";

    // Capturamos los botones para eliminar un servicio ya seleccionado
    const deleteServiceButtons = document.querySelectorAll(
        ".delete-service-button"
    );

    // Le agregamos un evento a cada botón de eliminar.
    deleteServiceButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", (e) => {
            // Tomamos el li que queremos eliminar de "servicesList"
            const liToDelete = deleteButton.parentElement.parentElement;
            // Tomamos el id del botón, que es lo mismo que tiene el "value" del option que apretamos.
            const valueLi = deleteButton.id;
            // capturamos el option que estamos buscando
            const optionToEliminate = document.querySelector(
                `option[value="${valueLi}"]`
            );

            // Eliminamos ambos.
            servicesList.removeChild(liToDelete);
            selectedServices.remove(optionToEliminate.selectedIndex);

            // Agregamos nuevamente la opción a "selectServices"
            selectServices.innerHTML += `<option value="${valueLi}">${valueLi}</option>`;
        });
    });

    // Lo volvemos a agregar al selected de "selectServices".
});

// Cuando se agregan imágenes, se muestran en los espacios.
cottageImagesInput.addEventListener("change", () => {
    for (let i = 0; i < cottageImagesInput.files.length; i++) {
        const file = cottageImagesInput.files[i];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            cottagePreviewImages[i].src = reader.result;
        });
        if (file) {
            reader.readAsDataURL(file);
        }
    }
});
