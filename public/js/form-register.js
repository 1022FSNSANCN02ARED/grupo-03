const expresiones = {
    nameUser: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    surname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phoneNumber: /^\d{7,14}$/,
    password: /^.{6,12}$/,
};

const inputs = document.querySelectorAll("#form-register input");
console.log(inputs)

const validation = (e) => {
    switch (e.target.name) {
        case "name":
            if (expresiones.nameUser.test(e.target.value)) {
                console.log("todo ok name");
                document.querySelector("#name").classList.add("form-success");
                

                document.querySelector(".errorFrontName").classList.remove("error-front-success");
                document.querySelector(".errorFrontName").classList.add("error-front");
            }else{
                console.log("todo mal name");
                document.querySelector("#name").classList.remove("form-success");
                document.querySelector("#name").classList.add("form-fail");
                document.querySelector(".errorFrontName").classList.remove("error-front");
                document.querySelector(".errorFrontName").classList.add("error-front-success");
            }
            break;
        case "surname":
            if (expresiones.surname.test(e.target.value)) {
                console.log("todo ok surname");
                document.querySelector("#surname").classList.add("form-success");

                document.querySelector(".errorFrontSurname").classList.remove("error-front-success");
                document.querySelector(".errorFrontSurname").classList.add("error-front");
            } else {
                console.log("todo mal surname");
                document.querySelector("#surname").classList.remove("form-success");
                document.querySelector("#surname").classList.add("form-fail");
                document.querySelector(".errorFrontSurname").classList.remove("error-front");
                document.querySelector(".errorFrontSurname").classList.add("error-front-success");
            }
            break;
        case "email":
            if (expresiones.email.test(e.target.value)) {
                console.log("todo ok email");
                document.querySelector("#email").classList.add("form-success");

                document.querySelector(".errorFrontEmail").classList.remove("error-front-success");
                document.querySelector(".errorFrontEmail").classList.add("error-front");
            } else {
                console.log("todo mal email");
                document.querySelector("#email").classList.remove("form-success");
                document.querySelector("#email").classList.add("form-fail");
                document.querySelector(".errorFrontEmail").classList.remove("error-front");
                document.querySelector(".errorFrontEmail").classList.add("error-front-success");
            }
            break;
        case "password":
            if (expresiones.password.test(e.target.value)) {
                console.log("todo ok password");
                document.querySelector("#password").classList.add("form-success");

                document.querySelector(".errorFrontPassword").classList.remove("error-front-success");
                document.querySelector(".errorFrontPassword").classList.add("error-front");
            } else {
                console.log("todo mal password");
                document.querySelector("#password").classList.remove("form-success");
                document.querySelector("#password").classList.add("form-fail");
                document.querySelector(".errorFrontPassword").classList.remove("error-front");
                document.querySelector(".errorFrontPassword").classList.add("error-front-success");
            }
            validationPassword();
            break;
    }
    
}

function validationPhone (e){
    if (expresiones.phoneNumber.test(e.target.value)) {
        console.log("todo ok phone_number");
        document.querySelector("#phone_number").classList.add("form-success");

        document.querySelector(".errorFrontPhone").classList.remove("error-front-success");
        document.querySelector(".errorFrontPhone").classList.add("error-front");
    } else {
        console.log("todo mal phone_number");
        document.querySelector("#phone_number").classList.remove("form-success");
        document.querySelector("#phone_number").classList.add("form-fail");
        document.querySelector(".errorFrontPhone").classList.remove("error-front");
        document.querySelector(".errorFrontPhone").classList.add("error-front-success");
    }
}

function validationPassword (e){
    let password = document.querySelector("#password")
    let confirmPassword = document.querySelector("#confirmPassword");
    if (password.value !== confirmPassword.value) {
        console.log("todo mal confirmPassword");
        document.querySelector("#confirmPassword").classList.remove("form-success");
        document.querySelector("#confirmPassword").classList.add("form-fail");
        document.querySelector(".errorFrontPassword2").classList.remove("error-front");
        document.querySelector(".errorFrontPassword2").classList.add("error-front-success");
    } else {
        console.log("todo ok confirmPassword");
        document.querySelector("#confirmPassword").classList.add("form-success");

        document.querySelector(".errorFrontPassword2").classList.remove("error-front-success");
        document.querySelector(".errorFrontPassword2").classList.add("error-front");
    }
}

inputs.forEach((input)=>{
    input.addEventListener("keyup", validation)
    input.addEventListener("blur", validation);
})

let phoneNumber = document.querySelector("#phone_number");
phoneNumber.addEventListener("keyup", validationPhone)

let confirmPassword = document.querySelector("#confirmPassword");
confirmPassword.addEventListener("keyup", validationPassword);