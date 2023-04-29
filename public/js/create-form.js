// Capturamos los labels de los horarios.
const labelsHours = document.querySelectorAll(".label-hours");

// Capturamos los inputs de los horarios.
const inputsHours = document.querySelectorAll(".input-hours");

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
    inputHours.addEventListener("change", (e) => {
        // Capturar el "id" del input
        const idInput = inputHours.id;

        // Encontramos el label que tenga el "for" igual al id.
        const label = document.querySelector(`label[for="${idInput}"]`);
        label.innerText = inputHours.value;
        console.log(label);
    });
});

// y se dejará de mostrar el input.
