console.log("hi");
document
  .getElementById("zara-anim-woman-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-womanupdate").style.top = "0px";
    document.getElementById("zara-anim-woman-button-id").style.top = "-100%";

    document.getElementById("zaraanimation-woman-id").style.animationName =
      "red";
    document.getElementById("zaraanimation-woman-id").style.right = "80%";
    document.getElementById("zaraanimation-woman-id").style.position = "fixed";
    document.getElementById("zaraanimation-woman-id").style.zIndex = "1";
    document.getElementById("zaraanimation-woman-id").style.top = "-37%";
  });
document
  .getElementById("update-woman-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-woman-collection").style.top = "0%";
    document.getElementById("zara-carousel-womanupdate").style.top = "-100%";
    document.getElementById("zaraanimation-woman-id").style.color = "white";
  });
document
  .getElementById("collection-woman-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-woman-shoes").style.top = "0%";
    document.getElementById("zara-carousel-woman-collection").style.top =
      "-100%";
  });
document
  .getElementById("shoes-woman-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-woman-stories").style.top = "0%";
    document.getElementById("zara-carousel-woman-shoes").style.top = "-100%";
  });
document
  .getElementById("stories-woman-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-woman-join").style.top = "0%";
    document.getElementById("zara-carousel-woman-stories").style.top = "-100%";
  });
document
  .getElementById("join-woman-button-id")
  .addEventListener("click", function () {
    document.getElementById("zara-carousel-news").style.top = "0%";
    document.getElementById("zara-carousel-join").style.top = "-100%";
    document.getElementById("zaraanimation-id").style.color = "black";
  });
document.getElementById("womannext-id").addEventListener("click", function () {
  this.style.display = "none";

  document.getElementById("kidprev-id").style.display = "block";
  document.getElementById("mannext-id").style.display = "block";

  document.getElementById("zara-woman-page-id").style.marginLeft = "0%";
  document.getElementById("zara-man-page-id").style.marginLeft = "-100%";
  document.getElementById("zara-kid-page-id").style.marginLeft = "100%";
});
document.getElementById("mannext-id").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("kidprev-id").style.display = "none";
  document.getElementById("womannext-id").style.display = "block";
  document.getElementById("zara-woman-page-id").style.marginLeft = "100%";
  document.getElementById("zara-man-page-id").style.marginLeft = "0%";
});
document
  .getElementById("womannextdup-id")
  .addEventListener("click", function () {
    this.style.display = "none";

    document.getElementById("kidprev-id").style.display = "block";
    document.getElementById("mannext-id").style.display = "block";

    document.getElementById("zara-woman-page-id").style.marginLeft = "0%";
    // document.getElementById("zara-man-page-id").style.marginLeft = "-100%";
    document.getElementById("zara-kid-page-id").style.marginLeft = "100%";
  });
