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

    {
        const day = document.querySelector(".js-day").innerText;
        const topic = document.querySelector(".js-topic");

        let changeTopic;

        switch (day) {
            case "poniedziałek":
            case "środa":
            case "piątek":
            case "niedziela":
                changeTopic = "programowania";
            case "wtorek":
                changeTopic = "ekonomii";
            case "czwartek":
                changeTopic = "inwestowania";
            default:
                changeTopic = "sportu";
        }
        topic.innerText = changeTopic;
    }
}

