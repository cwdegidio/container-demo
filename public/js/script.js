document.addEventListener("DOMContentLoaded", () => {
    let brokenButton = document.querySelector("#broken-button");
    let brokenText = document.querySelector("#text-container-broken");
    let optionOneButton = document.querySelector("#one-button");
    let optionOneText = document.querySelector("#text-container-one");
    let optionTwoButton = document.querySelector("#two-button");
    let optionTwoText = document.querySelector("#text-container-two");
    let adaSim = document.querySelector("#ada-sim");
    let comp = document.querySelector(".component");

    if (brokenButton != null) {
        brokenButton.addEventListener("click", () => {
            showText(brokenText)
        });
    }

    if (optionOneButton != null) {
        optionOneButton.addEventListener("click", () => {
            showText(optionOneText)
        });
    }

    if (optionTwoButton != null) {
        optionTwoButton.addEventListener("click", () => {
            showText(optionTwoText)
        });
    }

    adaSim.addEventListener("click", () => {
        comp.classList.toggle("ada");
    });
});

function showText(textContainer) {
    if (textContainer.style.display === "none") {
        textContainer.style.display = "block";
    } else {
        textContainer.style.display = "none";
    }
}