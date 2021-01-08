document
  .getElementById("zara-anim-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-update").style.top = "0%";
    document.getElementById("zara-anim-button-id").style.top = "-100%";
    document.getElementById("zaraanimation-id").style.animationName = "red";
    document.getElementById("zaraanimation-id").classList.add("zara-anim")
    document.querySelector(".currentClassDot").nextElementSibling.classList.add("currentClassDot")
    document.querySelector(".currentClassDot").classList.remove("currentClassDot")
  });
document
  .getElementById("update-anim-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-collection").style.top = "0%";
    document.getElementById("zara-carousel-update").style.top = "-100%";
    document.getElementById("zaraanimation-id").style.color = "white";
    document.querySelector(".currentClassDot").nextElementSibling.classList.add("currentClassDot")
    document.querySelector(".currentClassDot").classList.remove("currentClassDot")
  });
document
  .getElementById("collection-anim-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-shoes").style.top = "0%";
    document.getElementById("zara-carousel-collection").style.top = "-100%";
    document.querySelector(".currentClassDot").nextElementSibling.classList.add("currentClassDot")
    document.querySelector(".currentClassDot").classList.remove("currentClassDot")
});
document
  .getElementById("shoes-anim-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-stories").style.top = "0%";
    document.getElementById("zara-carousel-shoes").style.top = "-100%";
    document.querySelector(".currentClassDot").nextElementSibling.classList.add("currentClassDot")
    document.querySelector(".currentClassDot").classList.remove("currentClassDot")
  });
document
  .getElementById("stories-anim-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-join").style.top = "0%";
    document.getElementById("zara-carousel-stories").style.top = "-100%";
    document.querySelector(".currentClassDot").nextElementSibling.classList.add("currentClassDot")
    document.querySelector(".currentClassDot").classList.remove("currentClassDot")
  });
document
  .getElementById("join-anim-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-news").style.top = "0%";
    document.getElementById("zara-carousel-join").style.top = "-100%";
    document.getElementById("zaraanimation-id").style.color = "black";
    document.querySelector(".currentClassDot").nextElementSibling.classList.add("currentClassDot")
    document.querySelector(".currentClassDot").classList.remove("currentClassDot")
    
  });
