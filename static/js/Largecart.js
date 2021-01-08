// const { json } = require("express");
// const { string, strip } = require("joi");

const storage = localStorage.length;
var memory = localStorage;
var pri=0
var arr = Array.from(localStorage);



const totalamount = document.querySelector(".TOTAL-amount");
var count = 0;
var num = 0;
var quantitytotal = 0;

const maincartparent = document.querySelector(".container-your-cart-items");
for (var i = 0; i < storage; i++) {
  const frstsrc = localStorage.getItem(i);
  const parsed = JSON.parse(frstsrc);
  const src = parsed.src;
  const price = parsed.price;
  const details = parsed.details;
  const size = parsed.size;
  const quanty = parsed.quantity;
  const num1 = parseInt(price, 10);
  
 
  pri=[parseInt(price,10)+parseInt(pri,10)]
  const maincart = document.createElement("div");
  maincart.classList.add("container-items");
  maincartparent.appendChild(maincart);

  //set images

  const attribute = document.createElement("img");
  attribute.classList.add("items-images");
  attribute.setAttribute("src", src);
  maincart.appendChild(attribute);
  const path = document.querySelector(".items-images");

  // set break

  const br = document.createElement("br");
  maincart.appendChild(br);

  // setdetails
  const attribute2 = document.createElement("p");
  attribute2.classList.add("items-details");
  attribute2.innerHTML = details;
  maincart.appendChild(attribute2);

  // setprice
  const attribute3 = document.createElement("p");
  attribute3.classList.add("prices-para");
  attribute3.innerHTML = price;
  maincart.appendChild(attribute3);

  //set size

  const setsize = document.createElement("p");
  setsize.classList.add("set-size");
  setsize.innerHTML = size;
  maincart.appendChild(setsize);

  // set quantity of items
  const quantity = document.createElement("div");
  quantity.classList.add("items-count");
  maincart.appendChild(quantity);

  const plusitem = document.createElement("p");
  plusitem.classList.add("inside-plus");
  plusitem.innerHTML = "+";
  quantity.appendChild(plusitem);

  const hr = document.createElement("hr");
  hr.classList.add("items-count-hr");
  quantity.appendChild(hr);

  const quantityitem = document.createElement("p");
  quantityitem.classList.add("quantityitem");
  quantityitem.innerHTML = quanty;
  quantity.appendChild(quantityitem);

  const hr1 = document.createElement("hr");
  hr1.classList.add("items-count-hr2");
  quantity.appendChild(hr1);

  const minusitem = document.createElement("p");
  minusitem.classList.add("inside-minus");
  minusitem.innerHTML = "-";
  quantity.appendChild(minusitem);
  // delete
  const del = document.createElement("a");
  del.classList.add("items-delete");
  del.innerHTML = "DELETE";
  maincart.appendChild(del);

  
}



// const deleteit = document.querySelector(".items-delete");
// const pr = deleteit.parentNode.children[3].textContent;
const deleteitem = document.querySelector(".container-cart-inside");
deleteitem.addEventListener("click", (e) => {
  if (!e.target.closest("a")) return;
  const dlt = e.target.closest("a");
  const deleteit = document.querySelector(".items-delete");
  deleteit.parentNode.remove();

  // const pr = deleteit.parentNode.children[3].textContent;
  // console.log(pr)
  // num = num + parseInt(pr, 10);
  // totalamount.innerHTML = num;
  document.getElementById("loading").style.cssText =
    "position:fixed; width:30%; height: 30vh;left: 25%; top:30%; background:white url(/static/image/loading.gif) no-repeat center; border:1px solid black;";
});

document.getElementById("loading").addEventListener("mousemove", () => {
  document.getElementById("loading").style.display = "none";
});
totalamount.innerHTML = pri;

// minus button
document.querySelector(".inside-minus").addEventListener("click", () => {
  document.querySelector(".inside-minus").style.color = "red";
});
// const ItemCount=document.querySelector(".items-count")
