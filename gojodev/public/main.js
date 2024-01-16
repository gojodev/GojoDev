function textSwitch() {
    let phrase = ["a programmer", "a gamer", "GojoDev"];
    let text = document.getElementById("text-switch");
    let currentIndex = 0;

    const Iconinterval = setInterval(() => {
        let newText = phrase[currentIndex];
        if (currentIndex < phrase.length) {

            text.classList.remove("fadeIn");
            text.offsetWidth;
            text.classList.add("fadeIn");

            text.innerHTML = newText;
            currentIndex++;
        } else {
            clearInterval(Iconinterval);
        }
    }, 1500);
}

textSwitch();


// i'm still working on this
function iconAni() {
    let icons = document.querySelectorAll("i");
    let index = 0;
    let Iconinterval = setInterval(() => {
        let currentIcon = icons[index];
        if (!currentIcon) {
            clearInterval(Iconinterval);
            return;
        }
        currentIcon.classList.add("fadeIn");
        index++;

    }, 100)
}

iconAni()