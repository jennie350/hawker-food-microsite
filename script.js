
    function changeToNight() {
        let body = document.querySelector("body");
        body.classList.toggle("night");
        changeButton();}

        function changeButton() {
        let buttonText= document.querySelector("button");

        if (buttonText.innerHTML == "Night Market") {
        buttonText.innerHTML = "Day Market" }
        else {
            buttonText.innerHTML = "Night Market" ;
        }
        }

            let nightButton = document.querySelector("button");
            nightButton.addEventListener("click", changeToNight);
