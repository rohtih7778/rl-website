function showOffer(){
alert("🔥 Today's Special Offer: Get 20% Discount on Pizza!");
}

document.getElementById("reservationForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;

alert("Table reserved successfully for " + name + "! 🍽️");

});