const expresiones = {
    title: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    numberForm: /^[1-9][0-9]*$/,
    description: /^[a-zA-Z0-9\s,.!?¡¿áéíóúÁÉÍÓÚñÑ]{10,70}$/,
};

const inputs = document.querySelectorAll("#cottage-form input");
console.log(inputs);

const textarea = document.querySelectorAll("#cottage-form textarea");
console.log(textarea);

const validationResumida = (expresión, input, campo, Campo) => {
if (expresión.test(input)) {
                console.log("todo ok " + campo + " cottage");
                document.querySelector("#cottage_" + campo).classList.add("form-success");

                document.querySelector(".errorFront" + Campo).classList.remove("error-front-success");
                document.querySelector(".errorFront" + Campo).classList.add("error-front");
            } else {
                console.log("todo mal " + campo + " cottage");
                document.querySelector("#cottage_" + campo).classList.remove("form-success");
                document.querySelector("#cottage_" + campo).classList.add("form-fail");
                document.querySelector(".errorFront" + Campo).classList.remove("error-front");
                document.querySelector(".errorFront" + Campo).classList.add("error-front-success");
            }
}

const validation = (e) => {
    switch (e.target.name) {
        case "name":
            validationResumida(expresiones.title, e.target.value, "name", "Name")
            break;
        case "price":
            validationResumida(expresiones.numberForm, e.target.value, "price", "Price")
            break;
        case "guest":
            validationResumida(expresiones.numberForm, e.target.value, "guest", "Guest")
            break;
        case "bedrooms":
            validationResumida(expresiones.numberForm, e.target.value, "bedrooms", "Bedrooms")
            break;
        case "beds":
            validationResumida(expresiones.numberForm, e.target.value, "beds", "Beds")
            break;
        case "bathrooms":
            validationResumida(expresiones.numberForm, e.target.value, "bathrooms", "Bathrooms")
            break;
    }
};

const validationTextarea = (e) =>{
    validationResumida(expresiones.description, e.target.value, "description", "Description")
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validation);
    input.addEventListener("blur", validation);
});

textarea.forEach((textarea) => {
    textarea.addEventListener("keyup", validationTextarea)
    textarea.addEventListener("blur", validationTextarea);
})

//----------------segunda mitad - servicios -----------------

const validationSelect = (e) =>{
    let numOptions = selection.options.length;
    console.log(numOptions)
    if(numOptions !== 8){
        console.log("todo ok servicio");
        document.querySelector("#services-selected").classList.add("form-success");

        document.querySelector(".errorFrontSelection").classList.remove("error-front-success");
        document.querySelector(".errorFrontSelection").classList.add("error-front");
        } else {
            console.log("todo mal servicios");
            document.querySelector("#services-selected").classList.remove("form-success");
            document.querySelector("#services-selected").classList.add("form-fail");
            document.querySelector(".errorFrontSelection").classList.remove("error-front");
            document.querySelector(".errorFrontSelection").classList.add("error-front-success");
        }

}

const selection = document.querySelector("#services-select");
selection.addEventListener("click", validationSelect);

//----------------- validación img----------------

// Obtener el elemento input de tipo file
const fileInput = document.getElementById("cottage-images-input");

// Escuchar el evento change en el elemento input
fileInput.addEventListener('change', () => {
  // Obtener la lista de archivos seleccionados
  const selectedFiles = fileInput.files;

  // Obtener la cantidad de archivos seleccionados
  const numSelectedFiles = selectedFiles.length;

  // Mostrar la cantidad de archivos seleccionados en la consola
  //console.log(`Se seleccionaron ${numSelectedFiles} archivos.`);
  if(numSelectedFiles < 3){
    console.log("todo mal img");
            //document.querySelector("#services-selected").classList.remove("form-success");
            //document.querySelector("#services-selected").classList.add("form-fail");
            document.querySelector(".errorFrontImg").classList.remove("error-front");
            document.querySelector(".errorFrontImg").classList.add("error-front-success");
  }else{
    console.log("todo ok img");
    document.querySelector("#services-selected").classList.add("form-success");

    document.querySelector(".errorFrontImg").classList.remove("error-front-success");
    document.querySelector(".errorFrontImg").classList.add("error-front");
  }
});