var cart = true;
var boolcl = true;
var boolclwo = true;

document
  .getElementById("shopping-cart-id")
  .addEventListener("click", function () {
    if (cart == true) {
      document.getElementById("added-item").style.display = "block";
      cart = false;
    } else {
      document.getElementById("added-item").style.display = "none";
      cart = true;
    }
  });

document.getElementById("burgur-id").addEventListener("mouseover", function () {
  console.log("burger");
  document.getElementById("menu-id").style.left = "-2%";
});

document.getElementById("menu-id").addEventListener("mouseleave", function () {
  console.log("burger");
  document.getElementById("menu-id").style.left = "-35%";
  document.getElementById("woman-height").style.height = "40px";
  document.getElementById("collection-height").style.height = "50px";
});

document
  .getElementById("collection-height")
  .addEventListener("click", function () {
    if (boolcl == true) {
      this.style.height = "430px";
      document.getElementById("woman-height").style.height = "430px";
      boolcl = false;
    } else {
      this.style.height = "50px";
      boolcl = true;
    }
  });
