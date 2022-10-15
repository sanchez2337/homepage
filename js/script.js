console.log("Witam wszystkich");

let day = document.querySelector(".js-day").innerText;
let topic = document.querySelector(".js-topic");

let body = document.querySelector(".body");
let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let currentBackground = document.querySelector(".js-currentBackground");

switch (day) {
    case "poniedziałek":
    case "środa":
    case "piątek":
    case "niedziela":
        topic.innerText = "programowania";
        break;
    case "wtorek":
        topic.innerText = "ekonomii";
        break;
    case "czwartek":
        topic.innerText = "inwestowania";
        break;
    default:
        topic.innerText = "sportu";
}

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    currentBackground.innerText=body.classList.contains("dark") ? "jaśniejsze" : "ciemniejsze";
});