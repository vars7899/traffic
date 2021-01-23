const view = document.querySelector(".numberview");
const dollar = document.querySelector(".numberdollar");
const slider = document.querySelector(".slidecontainer");

slider.addEventListener("input", function (event) {
    let value = event.target.value;
    console.log("me");
    view.innerHTML = `${value}K Pageviews`;

    dollar.innerHTML = `$${(value * 0.018).toFixed(2)}`;
});
