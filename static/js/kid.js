console.log("hi");
var color;
document
  .getElementById("zara-anim-kid-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-kidupdate").style.top = "0px";
    document.getElementById("zara-anim-kid-button-id").style.top = "-100%";

    document.getElementById("zaraanimation-kid-id").style.animationName = "red";
    document.getElementById("zaraanimation-kid-id").style.right = "80%";
    document.getElementById("zaraanimation-kid-id").style.position = "fixed";
    document.getElementById("zaraanimation-kid-id").style.zIndex = "1";
    document.getElementById("zaraanimation-kid-id").style.top = "-37%";
  });
document
  .getElementById("update-kid-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-kid-collection").style.top = "0%";
    document.getElementById("zara-carousel-kidupdate").style.top = "-100%";
    document.getElementById("zaraanimation-kid-id").style.color = "white";
  });
document
  .getElementById("collection-kid-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-kid-shoes").style.top = "0%";
    document.getElementById("zara-carousel-kid-collection").style.top = "-100%";
  });
document
  .getElementById("shoes-kid-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-kid-stories").style.top = "0%";
    document.getElementById("zara-carousel-kid-shoes").style.top = "-100%";
  });
document
  .getElementById("stories-kid-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-kid-join").style.top = "0%";
    document.getElementById("zara-carousel-kid-stories").style.top = "-100%";
  });
document
  .getElementById("join-kid-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-kid-news").style.top = "0%";
    document.getElementById("zara-carousel-kid-join").style.top = "-100%";
    document.getElementById("zaraanimation-kid-id").style.color = "black";
  });
document.getElementById("kidprev-id").addEventListener("click", function () {
  this.style.display = "none";
  color.setProperty.color = "red";
  document.getElementById("kidprev-id").style.display = "block";
  document.getElementById("mannext-id").style.display = "none";
  document.getElementById("womannext-id").style.display = "none";
  document.getElementById("womannextdup-id").style.display = "block";

  document.getElementById("zara-woman-page-id").style.marginLeft = "-100%";
  document.getElementById("zara-kid-page-id").style.marginLeft = "0%";
});
document.getElementById("mannext-id").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("kidprev-id").style.display = "none";
  document.getElementById("womannext-id").style.display = "block";
  document.getElementById("zara-woman-page-id").style.marginLeft = "100%";
  document.getElementById("zara-man-page-id").style.marginLeft = "0%";
});
var color = window.getComputedStyle(
  document.querySelector(".woman-section"),
  "::after"
);
color.setProperty.color = "red";
