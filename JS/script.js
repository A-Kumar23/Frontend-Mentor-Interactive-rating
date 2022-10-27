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

valueRating.forEach(element => {
    element.addEventListener("click", (e) => {
        V = element.innerText;
        ratingFinal.innerText = "You selected " + V + " out of 5";
        removeActive();
        element.className = "active rating d-flex align-items-center justify-content-center";
    })
})

const removeActive = () => {
    valueRating.forEach(element => {
        element.classList.remove("active");
    }
    )
}
