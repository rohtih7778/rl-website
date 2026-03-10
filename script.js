// --- Today's Offer ---
function showOffer() {
  alert("Today's Offer: 20% OFF on Pizza!");
}

// --- Search Food ---
function searchFood() {
  let input = document.getElementById("searchFood").value.toLowerCase();
  let cards = document.getElementsByClassName("food-card");

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    cards[i].style.display = title.includes(input) ? "block" : "none";
  }
}

// --- Filter Menu by Category ---
function filterMenu(category) {
  let cards = document.querySelectorAll(".food-card");
  cards.forEach(card => {
    card.style.display = (category === "all" || card.classList.contains(category)) ? "block" : "none";
  });
}

// --- Gallery Slider ---
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
showSlides();

// --- Reservation Form ---
document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your table has been reserved!");
  this.reset(); // Clear the form after reservation
});

// --- Scroll to Top Button ---
function scrollTopBtn() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
