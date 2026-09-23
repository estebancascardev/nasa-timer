const NUMBER_REGEX = /^(?:[0-9]|[1-5][0-9]|60)$/;

const button = document.querySelector("#submit");
const counter = document.querySelector("p");
const form = document.querySelector("form");
const m = document.querySelector("#minute");
const s = document.querySelector("#second");

let minute = 0;
let second = 0;

m.addEventListener("input", e => { 
    NUMBER_REGEX.test(e.target.value) ? minute = e.target.value : alert("Valor incorrecto. Ingrese un número entre 0 y 60.");
})
s.addEventListener("input", e => { 
    NUMBER_REGEX.test(e.target.value) ? second = e.target.value: alert("Valor incorrecto. Ingrese un número entre 0 y 60.");
})

form.addEventListener("submit", async e =>{
    button.setAttribute("disabled", "true")
    m.setAttribute("disabled", "true");
    s.setAttribute("disabled", "true");
    e.preventDefault();
    counter.innerHTML = `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
    const intervalId = setInterval(() =>{
        if (minute>0){
            if (second==0){
                second=59;
                minute--
                counter.innerHTML = `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
            } else {
                second--;
                counter.innerHTML = `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
            }
        } else {
            if (second!=0){
                second--;
                counter.innerHTML = `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
            } else{
                counter.innerHTML = `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
                clearInterval(intervalId);
            }
        }
    }, 1000);
})