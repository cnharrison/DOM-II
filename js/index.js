// Your code goes here

const mainImg = document.querySelector(".intro img");

mainImg.addEventListener("mouseover", event =>
  mainImg.setAttribute(
    "src",
    "http://wp.penhallpublishing.com/wp-content/uploads/2014/09/routepromo.jpg"
  )
);

mainImg.addEventListener("mouseleave", event =>
  mainImg.setAttribute("src", "img/fun-bus.jpg")
);

const navText = document.querySelectorAll(".nav-link");

navText.forEach(a => {
    a.addEventListener("click", event => {
        a.style.backgroundColor = "Red";
        a.style.fontFamily = "Yellowtail";

    });
  })

const mainHTML = document.querySelector("html")

mainHTML.addEventListener("keydown", event =>
  alert("Welcome to the evil bus")
);

const mainHeading = document.querySelector("h1")

mainHeading.addEventListener()