// Capturar los inputs de date-in y date-out
const dateIn = document.querySelector("#check-in");
const dateOut = document.querySelector("#check-out");
const dateInputs = document.querySelectorAll(".article-fecha");

// Capturamos el elemento donde estará la cantidad de días y el total a pagar.
const rentalDaysInfo = document.querySelectorAll(".cantidad-dias");
const totalInfo = document.querySelectorAll(".total-info");

// Capturar el precio
const price = document.querySelector(".price");

// Capturo el input de código de descuento y el botón
const inputDiscount = document.querySelectorAll(".input-discount");
const discountButton = document.querySelectorAll(".discount-button");

const validations = {
    rentalDays(dateInTime, dateOutTime) {
        // Tomamos los milisegundos de cada día
        const millisecondsDateIn = new Date(dateInTime).getTime();
        const millisecondsDateOut = new Date(dateOutTime).getTime();

        // Sacamos la diferencia entre cada día
        const diferentTime = millisecondsDateOut - millisecondsDateIn;

        // Al resultado lo dividimos un día en milisegundos.
        const milliseconsPerDay = 1000 * 60 * 60 * 24;
        const rentalDays = diferentTime / milliseconsPerDay;

        // Retornamos el resultado
        return rentalDays;
    },

    writeSpans(dateInInput, spansInfo) {
        for (let span of spansInfo) {
            span.innerHTML = `${dateInInput.getDate()}/${(
                dateInInput.getMonth() + 1
            )
                .toString()
                .padStart(2, "0")}/${dateInInput.getFullYear()}`;
        }
    },

    checkIn(dateInput, dateInInput, spansInfo) {
        const dateToday = new Date();
        dateToday.setHours(0, 0, 0, 0);
        if (dateInInput < dateToday) {
            const day = dateToday.getDate().toString().padStart(2, "0");
            const month = (dateToday.getMonth() + 1)
                .toString()
                .padStart(2, "0");
            const year = dateToday.getFullYear().toString();

            dateInput.value = `${year}-${month}-${day}`;
            window.alert(
                "La fecha seleccionada es anterior a la fecha actual."
            );
            return;
        } else {
            this.writeSpans(dateInInput, spansInfo);
            return;
        }
    },
    checkOut(dateInput, dateInInput, spansInfo) {
        const dateIn = new Date(document.querySelector("#check-in").value);
        dateIn.setHours(dateIn.getHours() + 3);

        if (dateIn == "Invalid Date" || dateInInput <= dateIn) {
            window.alert(
                "La fecha seleccionada es anterior o igual a la fecha de entrada."
            );
            return;
        } else {
            this.writeSpans(dateInInput, spansInfo);
            return;
        }
    },
};

// Saber en que momento se actualizan el dateIn y el dateOut
for (const dateInput of dateInputs) {
    dateInput.addEventListener("change", (event) => {
        const dateInInput = new Date(dateInput.value);
        dateInInput.setHours(dateInInput.getHours() + 3);

        const spansInfo = document.querySelectorAll(`.${event.target.id}-info`);

        if (event.target.id == "check-in") {
            validations.checkIn(dateInput, dateInInput, spansInfo);
        } else {
            validations.checkOut(dateInput, dateInInput, spansInfo);
        }

        // Calcular cuantos dias hay de diferencia entre el date-in y date-out

        if (dateIn.value && dateOut.value) {
            const rentalDays = validations.rentalDays(
                dateIn.value,
                dateOut.value
            );
            // Agregar los dias de diferencia en los lugares correspondientes.
            rentalDaysInfo.forEach((infoRentalDay) => {
                infoRentalDay.innerHTML = rentalDays;
            });

            // Calcular cuanto saldrá el total, días x precio por noche
            const total = Number(price.innerHTML) * rentalDays;
            // Colocarlo en donde debe ir.
            totalInfo.forEach((totalInfo) => (totalInfo.innerHTML = total));

            // Agregamos el resultado al valor del input de "total"
            document.getElementById("total").value = total;
        }
    });

    // En caso de error
    // Calcular cuantos dias hay de diferencia entre el date-in y date-out
    if (dateInput.value) {
        const dateInInput = new Date(dateInput.value);
        dateInInput.setHours(dateInInput.getHours() + 3);

        const spansInfoIn = document.querySelectorAll(`.check-in-info`);
        const spansInfoOut = document.querySelectorAll(`.check-out-info`);

        if (dateInput.id == "check-in") {
            validations.checkIn(dateInput, dateInInput, spansInfoIn);
        } else {
            validations.checkOut(dateInput, dateInInput, spansInfoOut);
        }

        if (dateIn.value && dateOut.value) {
            const rentalDays = validations.rentalDays(
                dateIn.value,
                dateOut.value
            );
            console.log(rentalDays);
            // Agregar los dias de diferencia en los lugares correspondientes.
            rentalDaysInfo.forEach((infoRentalDay) => {
                infoRentalDay.innerHTML = rentalDays;
            });

            // Calcular cuanto saldrá el total, días x precio por noche
            const total = Number(price.innerHTML) * rentalDays;
            // Colocarlo en donde debe ir.
            totalInfo.forEach((totalInfo) => (totalInfo.innerHTML = total));

            // Agregamos el resultado al valor del input de "total"
            document.getElementById("total").value = total;
        }
    }
}
