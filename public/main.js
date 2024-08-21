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
    let main = document.getElementById("main");
    let mainRect = main.getBoundingClientRect();

    let projects = document.getElementsByClassName("project").length;

    if (mainRect.top < -100) {
        let index = 0;
        let Iconinterval = setInterval(() => {
            let currentIcon = icons[index];
            if (!currentIcon) {
                clearInterval(Iconinterval);
                return;
            }

            if (index < projects) {
                currentIcon.classList.add("pulseAnimation");
                currentIcon.style.animationDelay = `${index * 0.1}s`;
                currentIcon.classList.add("fadeIn");
            }

            else {
                currentIcon.classList.add("fadeIn");
                currentIcon.classList.add("jumpAnimation");
                currentIcon.style.animationDelay = `${index * 0.1}s`;
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

        if (index == 1) {
            emmanuel.style = "border-radius: 50%";
            emmanuel.src = "images/gojodev.webp";
            index = 0;
        }
        else {
            emmanuel.style = "border-radius: 20px";
            emmanuel.src = "images/emmanuel.webp";
            index = 1;
        }

        emmanuel.style.transition = "0.2s";
    }, 3500);
}

gojodev();

function about_me() {
    var bday = new Date("06/08/2004");
    var today = new Date();

    var time_diff = today.getTime() - bday.getTime();
    time_diff = (time_diff / 1000) / 31556952;

    let age = time_diff.toFixed(3);
    document.getElementById("founder-name").innerHTML = `Emmanuel Koledoye (~${age})`;
}

about_me();