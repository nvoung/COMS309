// //cart Button
// const AddToCartBtn = document.querySelector(".add-cart");
// const headerCartCount = document.getElementById("header-cart-count"); //implment in header 
// let cartCount = 0;

// const minusBtn = document.querySelector(".minus");
// const cartNumber = document.querySelector(".cart-number");
// const plusBtn = document.querySelector(".plus");

// //clicking functions

// minusBtn.addEventListener("click", function () {
//   if (cartCount >= 1) {
//     cartCount -= 1;
//     cartNumber.textContent = cartCount;
//   }
// });

// plusBtn.addEventListener("click", function () {
//   if (cartCount <= 9) {
//     cartCount += 1;
//     cartNumber.textContent = cartCount;
//   }
// });


//functions to implment product Cart
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

// AddToCartBtn.addEventListener("click", function(){
//   const quantityToAdd = parseInt(cartNumber.textContent, 10);
//   if(quantityToAdd > 0){
//    updateHeaderCartCount(quantityToAdd);
//     cartCount = 0;
//     cartNumber.textContent = cartCount;
//     alert(`${quantityToAdd} items added to cart!`);
//   }else{
//     alert("Please select at least one item to add to cart.");
//   }
// });

// document.addEventListener("DOMContentLoaded", loadCartCount());

