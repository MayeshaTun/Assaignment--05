 function busInformation() {
    const busInformationSection = document.getElementById('ticket-info');
    busInformationSection.scrollIntoView({ behavior: 'smooth' });
}

  const buyTicketsBtn = document.getElementById('buy-ticket');
  buyTicketsBtn.addEventListener('click', busInformation);


//color select and limit 4 seats

let selectedSeats = 0;

function handleBusSeatClick() {
  
  if (selectedSeats < 4) {
   
    this.classList.toggle('selected');

 
    selectedSeats += this.classList.contains('selected') ? 1 : -1;

    
    const leftSeatsAnchor = document.getElementById('left-seats');
    leftSeatsAnchor.textContent = `${40 - selectedSeats} Seats left`;
  }else {
    alert('You can only select up to 4 seats.'); 
  }
}
const busSeats = document.querySelectorAll('.bus-seat .seat');
busSeats.forEach(seat => {
  seat.addEventListener('click', handleBusSeatClick);
});


//coupon code

function applyCoupon() {
  var couponInput = document.getElementById("coupon-input").value;
  var applyButton = document.getElementById("apply-button");
  
 
  if (couponInput === "NEW15" || couponInput === "Couple 20") {
    
    var totalPriceElement = document.getElementById("total-price");
    if (couponInput === "NEW15") {
     
      totalPriceElement.innerHTML = '<h1>Total Price</h1><h1>BDT 935</h1>'; 
    } else if (couponInput === "Couple 20") {
      
      totalPriceElement.innerHTML = '<h1>Total Price</h1><h1>BDT 880</h1>'; 
    }
    
   
    document.getElementById("coupon-input").style.display = "none";
    applyButton.style.display = "none";
  
   } else {
    alert("Invalid coupon code. Please enter a valid code.");
   }
}
  //next button

function showSuccessSection() {
    // Get the reference to the hidden section
    var successSection = document.getElementById("success-Btn");
    
    // Show the hidden section by removing the "hidden" class
    successSection.classList.remove("hidden");
}





























