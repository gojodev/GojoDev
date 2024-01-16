function textSwitch() {
    let phrase = ["a programmer", "a gamer", "GojoDev"];
    let text = document.getElementById("text-switch");
    let currentIndex = 0;

    const intervalId = setInterval(() => {
        let newText = phrase[currentIndex];
        if (currentIndex < phrase.length) {

            text.classList.remove("fadeIn");
            text.offsetWidth;
            text.classList.add("fadeIn");

            text.innerHTML = newText;
            currentIndex++;
        } else {
            clearInterval(intervalId);
        }
    }, 1500);
}

textSwitch();
