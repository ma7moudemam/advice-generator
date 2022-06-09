let adviceId =  document.getElementById("adviceId");
let advice = document.getElementById("adviceText");
let newAdvice = document.getElementById("newAdvice");

async function getAdvice(){
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    adviceId.innerHTML =data.slip.id;
    advice.innerHTML = data.slip.advice;
}


(getAdvice());

newAdvice.addEventListener("click", getAdvice);