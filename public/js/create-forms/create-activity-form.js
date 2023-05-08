// Capturamos los labels de los horarios.
const labelsHours = document.querySelectorAll(".label-hours");

// Capturamos los inputs de los horarios.
const inputsHours = document.querySelectorAll(".input-hours");

// Capturamos los "Agregar horario"
const addHours = document.querySelectorAll(".add-hours");

// Capturamos los inputs de horarios, solo los primeros de "weekday" y "weekend".
const firstHoursInputs = document.querySelectorAll(".first-hours-input");

// Capturamos los botones para mostrar el apartado de agregar horarios
const addHoursButtons = document.querySelectorAll(".select-hours-button");

// Capturamos el input que carga imágenes, y sus img de previsualización
const activityImagesInput = document.getElementById("activity-images-input");
const activityPreviewImages = document.querySelectorAll(
    ".activity-preview-img"
);

// Cuando se precione un label, mostraremos uno de los inputs.
labelsHours.forEach((labelHours) => {
    labelHours.addEventListener("click", (e) => {
        // Capturamos el "for" dentro del label.
        const labelFor = labelHours.htmlFor;

        // Encontramos el input que tenga el id del "for".
        const input = document.getElementById(labelFor);
        input.classList.remove("hide");
    });

    // Lo mismo, pero cuando se carga la vista.
    // para los casos de error en el formulario.

    const labelFor = labelHours.htmlFor;
    const input = document.getElementById(labelFor);
    if (input.value) {
        labelHours.classList.remove("label-hours");
        labelHours.innerText = input.value;
    }
});

// Cuando se cambie el input que se esta mostrando, se actualizará el label
inputsHours.forEach((inputHours) => {
    inputHours.addEventListener("blur", (e) => {
        // Capturar el "id" del input
        const idInput = inputHours.id;

        // Encontramos el label que tenga el "for" igual al id.
        const label = document.querySelector(`label[for="${idInput}"]`);

        // Le agregamos el valor del input, si es que tiene un valor
        if (inputHours.value) {
            label.innerText = inputHours.value;
            label.classList.remove("label-hours");
        }
        // y se dejará de mostrar el input.
        inputHours.classList.add("hide");
    });
});

// Cuando se precione alguno de los "Agregar horario", se mostrarán 2 inputs más.
addHours.forEach((addButton) => {
    addButton.addEventListener("click", (e) => {
        // Capturamos el id del "Agregar horario" que se apreto.
        // Eliminando los primeros 4 caracteres, ya que empiezan "add-..."
        const idButton = addButton.id.slice(4);

        // Capturamos el div que se tendrá que mostrar, para que se muestren esos 2 inputs.
        const divInputs = document.getElementById(idButton);

        // Quitamos la clase "hide" del div.
        divInputs.classList.remove("hide");

        // Ocultamos el botón de "Agregar horario"
        addButton.classList.add("hide");
    });
});

// Cuando se deje de tener el foco en estos inputs, van a ver si mostrar o no el botón de "Agregar horario"
firstHoursInputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
        // Definimos si es un input de "weekday" o de "weekend".
        const day = input.id.includes("weekday") ? "weekday" : "weekend";

        // Capturamos los input de "in" y "out".
        const inputIn = document.getElementById(`${day}-in`);
        const inputOut = document.getElementById(`${day}-out`);

        // Si ambos tienen valores, se mostrará el botón de "Agregar horario"
        if (Boolean(inputIn.value) && Boolean(inputOut.value)) {
            // Captura el botón de "Agregar horario", ya sea de "weekday" o de "weekend".
            const button = document.getElementById(`add-second-${day}-hours`);
            button.classList.remove("hide");
        }
    });

    // Lo mismo, pero cuando se carga la vista.
    // para los casos de error en el formulario.
    const day = input.id.includes("weekday") ? "weekday" : "weekend";

    const inputIn = document.getElementById(`${day}-in`);
    const inputOut = document.getElementById(`${day}-out`);

    if (Boolean(inputIn.value) && Boolean(inputOut.value)) {
        const button = document.getElementById(`add-second-${day}-hours`);
        button.classList.remove("hide");
    }
});

// Cuando se aprete uno de los botones, se va a mostrar el div correspondiente.

addHoursButtons.forEach((hoursButton) => {
    hoursButton.addEventListener("click", (e) => {
        // Guardamos el id del botón
        // Sin los 5 primeros caracteres, que sería "show-"
        const idButton = hoursButton.id.slice(5);

        // Capturamos el div que corresponde al botón. Y lo mostramos
        const divHours = document.getElementById(idButton);
        divHours.classList.remove("hide");

        // Ocultamos el botón que apretamos
        hoursButton.classList.add("hide");

        // Si ambos botones estan ocultos, ocultamos también la sección.
        const weekDayHide = addHoursButtons[0].classList.contains("hide");
        const weekEndHide = addHoursButtons[1].classList.contains("hide");

        if (weekDayHide && weekEndHide) {
            const sectionAddHours =
                document.getElementById("add-hours-buttons");

            sectionAddHours.classList.add("hide");
        }
    });
});

// Cuando se agregan imágenes, se muestran en los espacios.
activityImagesInput.addEventListener("change", () => {
    for (let i = 0; i < activityImagesInput.files.length; i++) {
        const file = activityImagesInput.files[i];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            activityPreviewImages[i].src = reader.result;
        });
        if (file) {
            reader.readAsDataURL(file);
        }
    }
});
