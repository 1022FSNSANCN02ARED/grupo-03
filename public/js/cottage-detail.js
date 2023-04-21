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
        }
    });
}

// Hace un pedido asíncronico a la db con un fetch
let discounts = null;

fetch("http://localhost:3000/api/discounts")
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        discounts = result.map((discount) => {
            return {
                code: discount.code,
                discount: discount.discount,
            };
        });
    });

// Saber en qué momento se agrega un cupon de descuento
discountButton.forEach(async (button) => {
    button.addEventListener("click", (e) => {
        inputDiscount.forEach((input) => {
            const discount = discounts.find((d) => {
                return d.code === input.value;
            });
            if (totalInfo[0].innerHTML > 0 && discount) {
                console.log("Descuento aplicado");
                const total = totalInfo[0].innerHTML;
                const totalWithDiscount = total - total / discount.discount;
                totalInfo.forEach(
                    (totalInfo) =>
                        (totalInfo.innerHTML = `${totalWithDiscount}  <span class="fs-15"> <s class="fs-15">${total}</s> %${discount.discount}off</span>`)
                );
            }
        });
    });
});

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
