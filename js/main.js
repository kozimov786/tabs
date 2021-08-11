

let elsItem = document.querySelectorAll(".product-item");
let elsLink = document.querySelectorAll(".product-link");

if (elsLink.length > 0) {
  elsLink.forEach(function (link) {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();

      elsItem.forEach(function (item) {
        item.classList.remove("product-item__active")
      })
      link.parentElement.classList.add("product-item__active")
    })
  })
}