const dayInput = document.getElementById("input-date");

const hoursOptions = document.getElementById("hour");

const quantity = document.getElementById("quantity");
const priceActivity = document.getElementById("price-activity");

const weekdayHours = document.querySelectorAll(".weekday-option");
const weekendHours = document.querySelectorAll(".weekend-option");

const infoDay = document.getElementById("whatDaySelect");

dayInput.addEventListener("change", (e) => {
    if (dayInput.value) {
        // Cada que cambia el input, lo volvemos al "option" default.
        hoursOptions.value = "default";

        const day = new Date(dayInput.value);
        const dayWeekNumber = day.getDay();

        if (dayWeekNumber == 5 || dayWeekNumber == 6) {
            whatDaySelect.innerText = Boolean(weekendHours.length)
                ? "Fin de semana"
                : "No hay horarios para los fines de semana";

            // Mostramos los horarios de fin de semana
            weekendHours.forEach((option) => {
                if (option.classList.contains("hide")) {
                    option.classList.remove("hide");
                }
            });
            // Ocultamos los horarios de día de semana
            weekdayHours.forEach((option) => {
                if (!option.classList.contains("hide")) {
                    option.classList.add("hide");
                }
            });
        } else {
            whatDaySelect.innerText = Boolean(weekdayHours.length)
                ? "Día de semana"
                : "No hay horarios para los días de semana";

            // Mostramos los horarios de día de semana
            weekdayHours.forEach((option) => {
                if (option.classList.contains("hide")) {
                    option.classList.remove("hide");
                }
            });

            // Ocultamos los horarios de fin de semana
            weekendHours.forEach((option) => {
                if (!option.classList.contains("hide")) {
                    option.classList.add("hide");
                }
            });
        }
    }
});

quantity.addEventListener("change", (e) => {
    const numberOfTickets = quantity.value;
    const price = priceActivity.innerText;

    const total = price * numberOfTickets;

    document.getElementById("total").value = total;
});

// En caso de error del formulario:

if (!dayInput.value) {
    hoursOptions.value = "default";
}
if (dayInput.value) {
    // Cada que cambia el input, lo volvemos al "option" default.
    const day = new Date(dayInput.value);
    const dayWeekNumber = day.getDay();

    if (dayWeekNumber == 5 || dayWeekNumber == 6) {
        whatDaySelect.innerText = Boolean(weekendHours.length)
            ? "Fin de semana"
            : "No hay horarios para los fines de semana";

        // Mostramos los horarios de fin de semana
        weekendHours.forEach((option) => {
            if (option.classList.contains("hide")) {
                option.classList.remove("hide");
            }
        });
        // Ocultamos los horarios de día de semana
        weekdayHours.forEach((option) => {
            if (!option.classList.contains("hide")) {
                option.classList.add("hide");
            }
        });
    } else {
        whatDaySelect.innerText = Boolean(weekdayHours.length)
            ? "Día de semana"
            : "No hay horarios para los días de semana";

        // Mostramos los horarios de día de semana
        weekdayHours.forEach((option) => {
            if (option.classList.contains("hide")) {
                option.classList.remove("hide");
            }
        });

        // Ocultamos los horarios de fin de semana
        weekendHours.forEach((option) => {
            if (!option.classList.contains("hide")) {
                option.classList.add("hide");
            }
        });
    }
}

const numberOfTickets = quantity.value;
const price = priceActivity.innerText;

const total = price * numberOfTickets;

document.getElementById("total").value = total;
