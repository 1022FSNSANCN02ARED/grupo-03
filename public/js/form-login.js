const inputs = document.querySelectorAll("#from-login input");
console.log(inputs);

const expresiones = {
    nameUser: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    surname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phoneNumber: /^\d{7,14}$/,
    password: /^.{6,100}$/,
};

const validation = (e)=>{
    switch (e.target.name) {
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
            break;
        }
    }

inputs.forEach((input) => {
    input.addEventListener("keyup", validation);
    input.addEventListener("blur", validation);
});