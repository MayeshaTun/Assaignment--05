const allBtn = document.getElementsByClassName("seat");

for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    const name = event.target.parentNode.childNodes[1].innerText;
    const Class = event.target.parentNode.childNodes[3].innerText;
    const price = event.target.parentNode.childNodes[5].innerText;

    console.log(event.target.parentNode.childNodes);

    const selectedContainer = document.getElementById("Selected-set-container");

    //event.target.setAttribute("disables", false);

    const firstCount = getConvertedValue("seat-count");
    if (firstCount + 1 > 4) {
      return;
    }

    // update seat

    const seatLeft = getConvertedValue("left-seats");
    document.getElementById("left-seats").innerText = seatLeft - 1;

    const seat = getConvertedValue("seat-count");
    document.getElementById("seat-count").innerText = seat + 1;

    const div = document.createElement("div");
    div.classList.add("cart-list");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = name;
    p2.innerText = Class;
    p3.innerText = price;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);

    updateTotalCost(price);
    updateGrandTotal();
  });
}

//---------------------------------//

document.querySelector(".bus-seat").addEventListener("click", function (event) {
  const seat = event.target.closest(".seat");
  if (seat) {
    const selectedSeats = document.querySelectorAll(".selected");
    if (selectedSeats.length < 4 || seat.classList.contains("selected")) {
      seat.classList.toggle("selected");
    }
  }
});

//------------------------------------//
function updateGrandTotal(status) {
  const totalCost = getConvertedValue("total-cost");
  if (status == undefined) {
    document.getElementById("grand-total").innerText = totalCost;
  } else {
    const couponCode = document.getElementById("coupon-code").value;

    if (couponCode == "NEW15") {
      const discounted = totalCost * 0.15;
      document.getElementById("grand-total").innerText = totalCost - discounted;
    } else if (couponCode == "Couple 20") {
      const discounted = totalCost * 0.2;
      document.getElementById("grand-total").innerText = totalCost - discounted;
    } else {
      alert("please enter coupon code");
    }
  }
}

//--------------------------------------------------//
function updateTotalCost(value) {
  const totalCost = getConvertedValue("total-cost");
  const sum = totalCost + parseInt(value);
  document.getElementById("total-cost").innerText = sum;
}

function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertPrice = parseInt(price);
  return convertPrice;
}
