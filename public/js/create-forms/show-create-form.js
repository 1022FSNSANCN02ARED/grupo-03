// Capturamos los botones que muestran los formularios.
const showFormsButtons = document.querySelectorAll(".show-form-button");

// Capturamos cada formulario
const activityForm = document.getElementById("activity-form");
const cottageForm = document.getElementById("cottage-form");

showFormsButtons.forEach((showFormButton) => {
    showFormButton.addEventListener("click", (e) => {
        // Sacamos el nombre del botón seleccionado y del otro botón
        const thisNameButton = showFormButton.id.includes("cottage")
            ? "cottage"
            : "activity";

        const otherNameButton = !showFormButton.id.includes("cottage")
            ? "cottage"
            : "activity";

        // Capturamos el otro botón
        const otherFormButton = document.getElementById(
            `show-create-${otherNameButton}-form`
        );

        // Si el otro botón tiene la calse "show-form-button-active"
        if (otherFormButton.classList.contains("show-form-button-active")) {
            // Se la quita al otro botón y se la coloca al botón seleccionado.
            otherFormButton.classList.remove("show-form-button-active");
            showFormButton.classList.add("show-form-button-active");
        }

        // Capturamos los formularios, el que pertenece a este botón y el que no.
        const principalForm = document.getElementById(`${thisNameButton}-form`);
        const otherForm = document.getElementById(`${otherNameButton}-form`);

        if (!otherForm.classList.contains("hide")) {
            // Se la quita al otro botón y se la coloca al botón seleccionado.
            principalForm.classList.remove("hide");
            otherForm.classList.add("hide");
        }
    });
});
