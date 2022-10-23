{
    console.log("Witam wszystkich.");

    const toggleBackground = () => {
        let currentBackground = document.querySelector(".js-currentBackground");
        let body = document.querySelector(".body");
        body.classList.toggle("dark");
        currentBackground.innerText = body.classList.contains("dark") ? "jaśniejsze" : "ciemniejsze";
    }

    const init = () => {
        let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");

        changeBackgroundButton.addEventListener("click", toggleBackground);
    }

    init ();

    let day = document.querySelector(".js-day").innerText;
    let topic = document.querySelector(".js-topic");

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
}