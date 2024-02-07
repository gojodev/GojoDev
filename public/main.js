document.getElementById("year").innerHTML = new Date().getFullYear();

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
    }, 2000);
}

textSwitch();


function iconAni() {
    let icons = document.querySelectorAll("i");
    let footer = document.getElementById("footer");
    let footRect = footer.getBoundingClientRect();

    if (footRect.top < -100) {
        let index = 0;
        let Iconinterval = setInterval(() => {
            let currentIcon = icons[index];
            if (!currentIcon) {
                clearInterval(Iconinterval);
                return;
            }

            if (index < 3) {
                currentIcon.classList.add("pulseAnimation");
                currentIcon.style.animationDelay = `${index * 0.3}s`;
                currentIcon.classList.add("fadeIn");
            }

            else {
                currentIcon.classList.add("fadeIn");
                currentIcon.classList.add("jumpAnimation");
                currentIcon.style.animationDelay = `${index * 0.3}s`;
            }

            index++;

        }, 100)
    }
}

window.addEventListener("scroll", iconAni)

function gojodev() {
    let emmanuel = document.getElementById("emmanuel");
    let index = 0;
    setInterval(() => {

        emmanuel.classList.remove("fadeIn");
        emmanuel.offsetWidth;
        emmanuel.classList.add("fadeIn");

        if (index == 0) {
            emmanuel.style = "border-radius: 50%";
            emmanuel.src = "images/gojodev.webp";
            index = 1;
        }
        else {
            emmanuel.style = "border-radius: 20px";
            emmanuel.src = "images/emmanuel.webp";
            index = 0;
        }
    }, 3500)
}

// gojodev()