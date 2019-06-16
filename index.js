var elpull = document.getElementById("pull-chain");
var nameField = document.getElementById("name");
var myName = document.getElementById("myName");
var elnav = document.getElementById("navbar");
var title = document.getElementById("title");
var leln = document.getElementById("letter-last-n");
var lele = document.getElementById("letter-last-e");
var lell1 = document.getElementById("letter-last-l1");
var lell2 = document.getElementById("letter-last-l2");
var leli = document.getElementById("letter-last-i");
var lels = document.getElementById("letter-last-s");
var eld = document.getElementById("letter-d");
var ela = document.getElementById("letter-a");
var elv = document.getElementById("letter-v");
var eli = document.getElementById("letter-i");
var eld2 = document.getElementById("letter-d1");
var frnm = document.getElementById("first-name");
var elnavs = document.getElementById("links");

var linkPointA = document.createElement("a");
var linkPointV = document.createElement("a");
var linkPointI = document.createElement("a");
var linkPointD = document.createElement("a");

elnav.style.WebkitAnimationPlayState = "paused";
elnav.style.animationPlayState = "paused";

ela.addEventListener("click", () => {
  elnav.style.visibility = "visible";
  elnav.style.WebkitAnimationPlayState = "running";
  elnav.style.animationPlayState = "running";
});
elv.addEventListener("click", () => {
  elnav.style.visibility = "visible";
  elnav.style.WebkitAnimationPlayState = "running";
  elnav.style.animationPlayState = "running";
});
eli.addEventListener("click", () => {
  elnav.style.visibility = "visible";
  elnav.style.WebkitAnimationPlayState = "running";
  elnav.style.animationPlayState = "running";
});
eld2.addEventListener("click", () => {
  elnav.style.visibility = "visible";
  elnav.style.WebkitAnimationPlayState = "running";
  elnav.style.animationPlayState = "running";
});

document.getElementById("pull-chain").style.animationDelay = "4990ms";

setTimeout(function() {
  document.getElementById("pull-chain").style.visibility = "visible";
}, 5000);

function linkUp() {
  setTimeout(function() {
    linkPointA.innerHTML = "bout";
    linkPointA.style.position = "absolute";
    linkPointA.setAttribute("id", "addText");
    linkPointV.innerHTML = "iew&nbsp;my&nbsp;work";
    linkPointV.style.position = "absolute";
    linkPointV.setAttribute("id", "addText");
    linkPointI.innerHTML = "ntroduce&nbsp;yourself";
    linkPointI.style.position = "absolute";
    linkPointI.setAttribute("id", "addText");
    linkPointD.innerHTML = "etails";
    linkPointD.style.position = "absolute";
    linkPointD.setAttribute("id", "addText");
    ela.appendChild(linkPointA);
    elv.appendChild(linkPointV);
    eli.appendChild(linkPointI);
    eld2.appendChild(linkPointD);
    ela.setAttribute("href", "#about");
    elv.setAttribute("href", "#view-work");
    eli.setAttribute("href", "#contact");
    eld2.setAttribute("href", "#details");
  }, 3500);
}

elpull.addEventListener(
  "click",
  function() {
    elpull.classList.toggle("pulled");
    document.getElementById("pull-chain").style.animationDelay = "1.4s";
    elpull.classList.toggle("drop");
    leln.classList.toggle("pulled");
    lele.classList.toggle("pulled");
    lell1.classList.toggle("pulled");
    lell2.classList.toggle("pulled");
    leli.classList.toggle("pulled");
    lels.classList.toggle("pulled");
    eld.classList.toggle("move");
    nameField.style.animationDelay = "3s";
    title.classList.toggle("pulled");
    myName.classList.toggle("pulled");
    nameField.classList.toggle("pulled");
    frnm.classList.toggle("move");
    ela.style.animationDelay = "4s";
    elv.style.animationDelay = "4s";
    eli.style.animationDelay = "4s";
    eld2.style.animationDelay = "4s";
    ela.classList.toggle("move");
    elv.classList.toggle("move");
    eli.classList.toggle("move");
    eld2.classList.toggle("move");
    linkUp();
  },
  false
);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
