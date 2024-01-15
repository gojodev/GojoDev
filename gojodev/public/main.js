function textSwitch() {
    let phrase = ["a programmer", "a gamer", "GojoDev"];
    let text = document.getElementById("text-switch");
    let currentIndex = 0;

    const intervalId = setInterval(() => {
        let newText = phrase[currentIndex];
        if (currentIndex < phrase.length) {
            console.log(newText);
            text.innerHTML = newText
            text.classList.toggle("fadeIn");
            currentIndex++;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

textSwitch();
