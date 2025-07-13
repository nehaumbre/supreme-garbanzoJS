const ratings = document.querySelectorAll(".rating");
console.log(ratings);
const button = document.querySelector(".btn");
console.log(button);
let selectedRating = null;

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    //Remove active from all
    ratings.forEach((r) => r.classList.remove("active"));
    //Add active to clicked one
    rating.classList.add("active");
    // save selected rating for later use
    selectedRating = rating.querySelector("small").textContent;
  });
});

// Submit button click Listener
button.addEventListener("click", () => {
  if (selectedRating) {
    document.querySelector(".panel-container").innerHTML = `
                <div style="text-align: center;">
                    <h2>Thank You! 🎉</h2>
                    <p>Your Rating : <strong>${selectedRating}</strong></p>
                    <p>We appreciate your feedback 🙏</p>
                </div> `;
  } else {
    alert("Please select a rating first.");
  }
});
