const selfPickupCheckbox = document.getElementById("self-pickup");
const shippingContainer = document.getElementById("shipping-container");
const cartContainer = document.querySelector(".cart-container");
const mainContainer = document.querySelector(".main-container");

selfPickupCheckbox.addEventListener("change", function () {
  if (selfPickupCheckbox.checked) {
    shippingContainer.style.display = "block";

    mainContainer.style.gridTemplateColumns = "2fr 2fr";

    cartContainer.style.display = "grid";
    cartContainer.style.gridTemplateColumns = "1fr 1fr";
  } else {
    shippingContainer.style.display = "none";

    mainContainer.style.gridTemplateColumns = "3fr 1fr";

    cartContainer.style.display = "block";
  }
});
