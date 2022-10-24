let rating = document.getElementById("rating");
let thankyou = document.getElementById("thankyou");
let submit = document.getElementById("submit");


thankyou.style.display = "none";

submit.addEventListener("click", () => {
    rating.style.display = "none";
    thankyou.style.display = "";
})



