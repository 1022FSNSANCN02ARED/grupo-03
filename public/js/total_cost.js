let costos = document.querySelectorAll(".total_cost");

console.log(costos)

let total_cost = 0

costos.forEach((costo)=>{total_cost += Number(costo.innerText)})

console.log(total_cost);

let resultado = document.querySelector("#resultado_total_cost");

resultado.innerText = total_cost