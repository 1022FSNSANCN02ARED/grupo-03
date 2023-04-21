// Capturar los inputs de date-in y date-out
const dateInputs = document.querySelectorAll(".article-fecha");

// Saber en que momento se actualizan
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
    });
}

const validations = {
    writeSpans(dateInInput, spansInfo) {
        for (let span of spansInfo) {
            span.innerText = `${dateInInput.getDate()}/${(
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

// Calcular cuantos dias hay de diferencia entre el date-in y date-out
// Agregar los dias de diferencia en los lugares correspondientes.

// Calcular cuanto saldrá el total, días x precio por noche
// Colocarlo en donde debe ir.
