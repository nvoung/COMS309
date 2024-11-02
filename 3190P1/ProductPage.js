// Main image
const sectionHero = document.querySelector(".hero");
const mainImg = document.querySelector(".main-img");
// Float image
const classFloat = document.querySelector(".floating-img");
const mainImgFloat = document.querySelector(".main-img-float");
// thumbnail images
const thumbnailbImg = document.querySelectorAll(".thumb-img");
// thumbnail imgs floating
const thumbnailbImgFloat = document.querySelectorAll(".thumb-img-float");

const overlayC = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close-icon");

// btns
const leftArrow = document.querySelector(".btn-swipe-left");
const rightArrow = document.querySelector(".btn-swipe-right");
//plus and minus buttons
const minusBtn = document.querySelector(".minus");
const cartNumber = document.querySelector(".cart-number");
const plusBtn = document.querySelector(".plus");
//cart Button
//const PurchaseBtn = document.querySelector(".add-cart");
const headerCartCount = document.getElementById("header-cart-count"); //implment in header 
let cartCount = 0;

// //functions to implment product Cart
// function loadCartCount(){
//   let storedCartCount = localStorage.getItem("cartCount");
//   storedCartCount = storedCartCount ? parseInt(storedCartCount, 10) : 0;
//   headerCartCount.textContent = storedCartCount;
// }
// function updateHeaderCartCount(quantity){
//   let currentCartCount = parseInt(localStorage.getItem("cartCount") || 0, 10);
//   currentCartCount += quantity;
//   localStorage.setItem("cartCount", currentCartCount);
//   headerCartCount.textContent = currentCartCount;
// }


//clicking functions

minusBtn.addEventListener("click", function () {
  if (cartCount >= 1) {
    cartCount -= 1;
    cartNumber.textContent = cartCount;
  }
});

plusBtn.addEventListener("click", function () {
  if (cartCount <= 9) {
    cartCount += 1;
    cartNumber.textContent = cartCount;
  }
});
// PurchaseBtn.addEventListener("click", function(){
//   window.location.href = "Assignment01/Checkout/index.html";
// });
// PurchaseBtn.addEventListener("click", function(){
//   const quantityToAdd = parseInt(cartNumber.textContent, 10);
//   if(quantityToAdd > 0){
//    updateHeaderCartCount(quantityToAdd);
//     cartCount = 0;
//     cartNumber.textContent = cartCount;
//     alert(`${quantityToAdd} item pruchased`);
//   }else{
//     alert("Please select at least one item to purchase");
//   }
// });

// document.addEventListener("DOMContentLoaded", loadCartCount());
//implmenting checkoutPage 


