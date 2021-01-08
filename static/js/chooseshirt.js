var boolclwo = true;
const sizee = true;
const womenskirtbool = true;
const item2 = true;
var count = 0;
var quantity = 1;

var viewparent = document.getElementById("replace-view-more");
var viewpara = document.querySelector(".view-more-para");
const choosesize = document.querySelector(".size-list");
const addbtn = document.querySelector(".add-your-favourite-button");
const span = document.querySelector(".shirt-prices").textContent;
const bigimg = document.querySelector(".shirts-size-images");
const womenshirt = document.getElementById("womenshirt-id");
const cartparent = document.querySelector(".conatiner-cart-collection");
const items=document.querySelector(".women-skirt-options")
const itemsArray=Array.from(items.children)
// console.log(itemsArray)
const itemsContainer=document.querySelector(".container-option-images");
const itemImages=document.querySelector('.container-choose-shirt-size')
const itemImagesArr= Array.from(itemImages.children)
const nameShirts=document.querySelector(".material-h1");
const priceShirts=document.querySelector(".choose-shirt-price");



// cart


items.addEventListener("click",(e)=>{
  if(!e.target.closest("img")) return
    document.getElementById("chooseshirt-id").style.display = "block";
  document.getElementById("womenskirtmain-id").style.display = "none";
  // console.log(e.path[1].children)
  const shirtSrc=e.path[1].children[0].src
  nameShirts.innerHTML= e.path[1].children[4].innerHTML
  priceShirts.innerHTML= e.path[1].children[6].innerHTML
  itemImagesArr.forEach((item,index)=>{
    item.src=shirtSrc
  })
  
})

// womenshirt.addEventListener("click", function (e) {

//   const cartitem = document.getElementById("skyblueimg-id");
//   const cartitemarr = Array.from(cartitem.children);
//   if (!e.target.closest("img")) return;
//   const womentshirtsrc = e.target.closest("img").src;
//   const womenprice = e.path[1].children[5].textContent;
//   const details = e.path[1].children[3].textContent;
//   const anchor = document.querySelector(".material-h1");
//   anchor.innerHTML = details;
//   const bigimgprice = document.querySelector(".choose-shirt-price");
//   bigimgprice.innerHTML = womenprice;
//   for (index in cartitemarr) {
//     cartitemarr[index].src = womentshirtsrc;
//   }
// });

// Choose shirts from collection
document.querySelector(".chooseshirtoptions").addEventListener("click", (e) => {
  if (!e.target.closest("img")) return;
  const shirtcolor = e.target.closest("img").src;
  const cartitem = document.getElementById("skyblueimg-id");
  const cartitemarr = Array.from(cartitem.children);
  const chooseshirtprice = e.path[1].children[6].innerHTML;
  const details = e.path[1].children[4].innerHTML;
  const anchor = document.querySelector(".material-h1");
  priceShirts.innerHTML= e.path[1].children[6].innerHTML
  nameShirts.innerHTML = details;
  const bigimgprice = document.querySelector(".choose-shirt-price");
  bigimgprice.innerHTML = chooseshirtprice;
  for (index in cartitemarr) {
    cartitemarr[index].src = shirtcolor;
  }
});

// Add bttn
var storageitem = localStorage.getItem(0);
addbtn.addEventListener("click", (e) => {
  const cartitem = document.getElementById("skyblueimg-id");
  const cartimg = cartitem.children[0].src;
  const img = document.querySelector(".currentcarimage");
  const currentanchor = document.querySelector(".currentanchor");
  const currentprice = document.querySelector(".currentprice");
  const bigimgprice = document.querySelector(".choose-shirt-price").textContent;
  const current = document.querySelector(".current-size-list");
  const size = current.textContent;
  const anchor = document.querySelector(".material-h1").textContent;
  const cartdisplay = document.querySelector(".see-shopping-cart-button");
  cartdisplay.style.display = "block";
  document.getElementById("added-item").style.display = "block";
  // Object creation

console.log(bigimgprice)

  const user = {
    src: cartimg,
    price: bigimgprice,
    details: anchor,
    size: size,
    quantity: quantity,
  };
  // var count1 = 0;'
  var count1 = 0;
console.log(user)
  for (var i = 0; i < localStorage.length; i++) {
    var usersrc = JSON.stringify(user.src);
    var userdetails = JSON.stringify(user.details);
    var usersize = JSON.stringify(user.size);
    const usesr = JSON.parse(usersrc);
    const usedt = JSON.parse(userdetails);
    const usesi = JSON.parse(usersize);

    var compare = localStorage.getItem(i);
    const par = JSON.parse(compare);

    // console.log(par.src == user.src);

    if (usesr == par.src && usedt == par.details && usesi == par.size) {
      quantity += 1;
      localStorage.setItem(i, JSON.stringify(user));
      break;
    } else {
      quantity = 1;
      count1 += 1;
    }
  }
  console.log(quantity);
console.log(user)
  if (count1 == localStorage.length) {
    localStorage.setItem(count, JSON.stringify(user));

    const storageitem = localStorage.getItem(localStorage.length - 1);
    console.log(storageitem)
    const parseditem = JSON.parse(storageitem);
    console.log(parseditem)
    var srcc = parseditem.src;
    var detailss = parseditem.details;
    var pricee = parseditem.price;

    img.src = srcc;

    if (
      img.parentNode.parentNode.nextElementSibling.children[0]
        .firstElementChild != null
    ) {
      img.classList.remove("currentcarimage");
      img.parentNode.parentNode.nextElementSibling.children[0].firstElementChild.classList.add(
        "currentcarimage"
      );
    }

    // set details in cart

    if (
      currentanchor.parentNode.parentNode.nextElementSibling.children[0]
        .children[1] != null
    ) {
      currentanchor.classList.remove("currentanchor");
      currentanchor.parentNode.parentNode.nextElementSibling.children[0].children[1].classList.add(
        "currentanchor"
      );
    }
    currentanchor.innerHTML = detailss;

    // set price in cart

    if (
      currentprice.parentNode.parentNode.nextElementSibling.children[0]
        .children[2] != null
    ) {
      currentprice.classList.remove("currentprice");
      currentprice.parentNode.parentNode.nextElementSibling.children[0].children[2].classList.add(
        "currentprice"
      );
    }

    currentprice.innerHTML = pricee;
    count += 1;
  }
});
// Size select

choosesize.addEventListener("click", (e) => {
  const targetlist = e.target.closest("li");
  const current = document.querySelector(".current-size-list");
  if (!targetlist) return;
  current.classList.remove("current-size-list");
  targetlist.classList.add("current-size-list");
  var currentsize = document.querySelector(".current-size-list");
  currentsize = document.querySelector(".current-size-list").textContent;
});

// View more

document.getElementById("view-more-id").addEventListener("click", function () {
  if (boolclwo == true) {
    document.getElementById("about-more-id").style.height = "280px";
    viewpara.innerHTML = "View less";
    boolclwo = false;
  } else {
    document.getElementById("about-more-id").style.height = "90px";
    viewpara.innerHTML = "View more";
    boolclwo = true;
  }
});
