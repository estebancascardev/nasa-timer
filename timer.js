const contador = document.querySelector("p");

let i = 10;

const intervalId = setInterval(() =>{
    if (i!=0){
        contador.innerHTML = i;
        i--;
    } else {
        clearInterval(intervalId);
        contador.innerHTML = "Despegue";
    }
}, 1000);