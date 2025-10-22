const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
let cost = 400;
let totalPrice = 0;
schemeSvg.addEventListener("click", (event) => {
    if (!event.target.classList.contains("booked")) {
        event.target.classList.toggle("active");
        let toralSeats = schemeSvg.querySelectorAll(".active").length
        totalPrice = toralSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});
menuButton.addEventListener("click", (event) => {
    console.log("Кликнули по меню");
    menu.classList.toggle("is-open");
});