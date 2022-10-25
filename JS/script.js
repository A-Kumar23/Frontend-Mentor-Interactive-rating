const rating = document.getElementById("rating");
const thankyou = document.getElementById("thankyou");
const submit = document.getElementById("submit");
const valueRating = document.querySelectorAll(".rating")
const ratingFinal = document.getElementById("ratingFinal");

thankyou.style.display = "none";

submit.addEventListener("click", () => {
    rating.style.display = "none";
    thankyou.style.display = "";
})

console.log(valueRating);


for (let i = 0; i < valueRating.length;i++){
    // console.log(valueRating[i].innerText);
   valueRating[i].addEventListener("click",(e) => {
    V = valueRating[i].innerText;
    ratingFinal.innerText = "You selected " +  V + " out of 5";
    valueRating[i].className = "active rating d-flex align-items-center justify-content-center";   
   })
}

