const inputBill = document.querySelector(".input");
const inputPeople = document.querySelector(".input2");
const personTip = document.querySelector(".per_tip");
const personTotal = document.querySelector(".per_total");
const button5 = document.querySelector(".box1");
const button10 = document.querySelector(".box2");
const button15 = document.querySelector(".box3");
const button25 = document.querySelector(".box4");
const button50 = document.querySelector(".box5");
const buttonCustom = document.querySelector(".box6");
const allButtons = document.querySelectorAll(".box");
const paragr = document.querySelector(".appear");
const resetButn = document.querySelector(".reset_btn");
allButtons.forEach((box) => {
  box.addEventListener("click", () => {
    // Loop through all buttons to reset backgrounds except the clicked one
    allButtons.forEach((btn) => {
      if (btn !== box) {
        btn.style.backgroundColor = ""; // Reset other buttons
      }
    });

    // Toggle the background color of the clicked box
    if (box.style.backgroundColor !== "#26C2AE") {
      box.style.backgroundColor = "#26C2AE";
    } else {
      box.style.backgroundColor = ""; // Reset to original color
    }
  });
});

let buttonValue;

allButtons.forEach((box) => {
  box.addEventListener("click", () => {
    buttonValue = parseInt(box.innerHTML);
  });
});

inputPeople.addEventListener("input", () => {
  if (parseInt(inputPeople.value) === 0) {
    paragr.classList.remove("none");
  } else {
    console.log(parseInt(inputBill.value) / 100);
    console.log(100 + buttonValue);
    console.log(parseInt(inputPeople.value));
    personTotal.innerText = `$${
      ((parseInt(inputBill.value) / 100) * (100 + buttonValue)) /
      parseInt(inputPeople.value)
    }`;
    personTip.innerText = `$${
      ((parseInt(inputBill.value) / 100) * buttonValue) / parseInt(inputPeople.value)
    } `;
    paragr.classList.add("none");
  }
});
resetButn.addEventListener("click", () => {
  inputBill.value = "";
  inputPeople.value = "";
  buttonValue.value = "";
  personTip.innerText = "$0.00";
  personTotal.innerText = "$0.00";
  allButtons.forEach((box) => {
    box.style.backgroundColor = "#00474B";
  });
});
