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

        const changeTopic = (day, topic) => {

            const day = document.querySelector(".js-day").innerText;
            const topic = document.querySelector(".js-topic");

            switch (day) {
                case "poniedziałek":
                case "środa":
                case "piątek":
                case "niedziela":
                    return = "programowania";
                case "wtorek":
                    return = "ekonomii";
                case "czwartek":
                    return = "inwestowania";
                default:
                    return = "sportu";
            }

        }

        const result = changeTopic(day, topic);
        // updateResultText(day, result, topic) - usuwam tak jak mówiłeś
        const updateResultText = document.querySelector(".js-topic");
        updateResultText.innerText = topic.classList.contains("day");
        // jak by były dwie opcje to bym wpisał powyżej instrukcje warunkową: ternary, jak w tej funkcji ze zmiana tła ale że jest więcej opcji do wyboru to musiałbym chyba użyć switcha. Ale jak to teraz zapisać...? 
    }


    // {
    //     const day = document.querySelector(".js-day").innerText;
    //     const topic = document.querySelector(".js-topic");

    //     let changeTopic;

    //     switch (day) {
    //         case "poniedziałek":
    //         case "środa":
    //         case "piątek":
    //         case "niedziela":
    //             changeTopic = "programowania";
    //         case "wtorek":
    //             changeTopic = "ekonomii";
    //         case "czwartek":
    //             changeTopic = "inwestowania";
    //         default:
    //             changeTopic = "sportu";
    //     }
    //     topic.innerText = changeTopic;
    // }
}

