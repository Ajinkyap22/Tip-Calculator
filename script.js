"use strict";

const bill = document.getElementById("bill-amount");
const serviceQuality = document.getElementById("service-quality");
const numPeople = document.getElementById("people-amount");
const tip = document.getElementById("tip");

document.getElementById("calculate").addEventListener("click", function () {
  switch (serviceQuality.value) {
    case "0.3":
      tip.textContent = ((bill.value * 0.3) / numPeople.value).toFixed(2);
      break;
    case "0.2":
      tip.textContent = ((bill.value * 0.2) / numPeople.value).toFixed(2);
      break;
    case "0.15":
      tip.textContent = ((bill.value * 0.15) / numPeople.value).toFixed(2);
      break;
    case "0.1":
      tip.textContent = ((bill.value * 0.1) / numPeople.value).toFixed(2);
      break;
    case "0.05":
      tip.textContent = ((bill.value * 0.05) / numPeople.value).toFixed(2);
      break;
    default:
      alert("Please enter the values.");
      break;
  }
});
