
/**
 * slideshow -> https://www.w3schools.com/w3css/w3css_slideshow.asp
 * https://github.com/Phineas/lanyard
 * https://github.com/xaronnn/js-lanyard/
 * https://htmx.org/
 */

function slideshow() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(slideshow, 2000); // Change image every 2 seconds
}