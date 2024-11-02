// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')
  const purchaseButton = document.querySelector(".add-cart");
const minusBtn = document.querySelector(".minus");
const cartNumber = document.querySelector(".cart-number");
const plusBtn = document.querySelector(".plus");
let cartCount = 0;
//advent listener
purchaseButton.addEventListener("click", function(){

    //localStorage.setItem("name", );
    window.location.href = "/Assingment01/Checkout/index.html";
  // }
  });
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

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
