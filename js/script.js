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

    init();

    let day = document.querySelector(".js-day").innerText;
    let topic = document.querySelector(".js-topic");

    const changeTopic() {
        switch (day, topic) {
            case "poniedziałek":
            case "środa":
            case "piątek":
            case "niedziela":
                return programowania;
            case "wtorek":
                return ekonomii;
            case "czwartek":
                return inwestowania;
            default:
                return sportu;
        }
    }
    
    changeTopic.innerText = 
    
}