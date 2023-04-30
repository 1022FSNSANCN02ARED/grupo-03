// Capturamos los labels de los horarios.
const labelsHours = document.querySelectorAll(".label-hours");

// Capturamos los inputs de los horarios.
const inputsHours = document.querySelectorAll(".input-hours");

// Capturamos los "Agregar horario"
const addHours = document.querySelectorAll(".add-hours");

// Capturamos los inputs de horarios, solo los primeros de "weekday" y "weekend".
const firstHoursInputs = document.querySelectorAll(".first-hours-input");

// Cuando se precione un label, mostraremos uno de los inputs.
labelsHours.forEach((labelHours) => {
    labelHours.addEventListener("click", (e) => {
        // Capturamos el "for" dentro del label.
        const labelFor = labelHours.htmlFor;

        // Encontramos el input que tenga el id del "for".
        const input = document.getElementById(labelFor);
        input.classList.remove("hide");
    });
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
    console.log(input);
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
});
