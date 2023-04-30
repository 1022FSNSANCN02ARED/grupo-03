// Capturamos los labels de los horarios.
const labelsHours = document.querySelectorAll(".label-hours");

// Capturamos los inputs de los horarios.
const inputsHours = document.querySelectorAll(".input-hours");

// Capturamos los "Agregar horario"
const addHours = document.querySelectorAll(".add-hours");

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

        console.log(idButton);
        // Capturamos el div que se tendrá que mostrar, para que se muestren esos 2 inputs.
        const divInputs = document.getElementById(idButton);
        console.log(divInputs);

        // Quitamos la clase "hide" del div.
        divInputs.classList.remove("hide");

        // Ocultamos el botón de "Agregar horario"
        addButton.classList.add("hide");
    });
});
