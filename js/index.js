// Your code goes here
// change for initial commit

const mainImg = document.querySelector(".intro img");
console.log(mainImg);

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
console.log(navText);

navText.forEach(a => {
    a.addEventListener("click", event => {
        a.style.backgroundColor = "Red";
        a.style.fontFamily = "Yellowtail";

    });
  })


