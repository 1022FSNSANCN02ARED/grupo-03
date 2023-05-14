const expresionesActivities = {
    title: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    numberForm: /^[1-9][0-9]*$/,
    description: /^[a-zA-ZÀ-ÿ\s]{10,500}$/,
};

const inputsActivities = document.querySelectorAll("#activity-form input");
console.log(inputsActivities);

const textareaAct = document.querySelectorAll("#activity-form textarea");
console.log(textarea);

const validationResumidaActivities = (expresión, input, campo, Campo) => {
if (expresión.test(input)) {
                console.log("todo ok " + campo + " act");
                document.querySelector("#activity_" + campo).classList.add("form-success");

                document.querySelector(".errorFrontAct" + Campo).classList.remove("error-front-success");
                document.querySelector(".errorFrontAct" + Campo).classList.add("error-front");
            } else {
                console.log("todo mal " + campo + " act");
                document.querySelector("#activity_" + campo).classList.remove("form-success");
                document.querySelector("#activity_" + campo).classList.add("form-fail");
                document.querySelector(".errorFrontAct" + Campo).classList.remove("error-front");
                document.querySelector(".errorFrontAct" + Campo).classList.add("error-front-success");
            }
}

const validationActivities = (e) => {
    switch (e.target.name) {
        case "name":
            validationResumidaActivities(expresionesActivities.title, e.target.value, "name", "Name")
            break;
        case "price":
            validationResumidaActivities(expresionesActivities.numberForm, e.target.value, "price", "Price")
            break;
        case "max_place":
            validationResumidaActivities(expresionesActivities.numberForm, e.target.value, "max-place", "Place")
            break;
    }
};

const validationTextareaAct = (e) =>{
    validationResumidaActivities(expresiones.description, e.target.value, "description", "Description")
}

inputsActivities.forEach((input) => {
    input.addEventListener("keyup", validationActivities);
    input.addEventListener("blur", validationActivities);
});

textareaAct.forEach((textarea) => {
    textarea.addEventListener("keyup", validationTextareaAct);
    textarea.addEventListener("blur", validationTextareaAct);
});