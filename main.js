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
const allButton = document.querySelectorAll(".box");

const allButtons = document.querySelectorAll(".box");

let isColorChanged = false;
const defaultColors = {};
allButtons.forEach((box) => {
  defaultColors[box.textContent.trim()] = window.getComputedStyle(box).backgroundColor;
  box.addEventListener("click", () => {
    Object.keys(defaultColors).forEach((buttonText) => {
      if (buttonText !== box.textContent.trim()) {
        allButtons.forEach((btn) => {
          if (btn.textContent.trim() === buttonText) {
            btn.style.backgroundColor = defaultColors[buttonText];
          }
        });
      }
    });

    if (box.textContent.trim() === "Custom") {
      box.style.borderRadius = "5px";
      box.style.outline = "2px solid #26c2ae";
      box.style.transition = "outline-color 0.3s ease";
    } else {
      box.style.backgroundColor = "#26C2AE";
    }
  });
});

let buttonValue;
allButton.forEach((box) => {
  box.addEventListener("click", () => {
    buttonValue = box.innerHTML.split("%")[0];
  });
});
inputPeople.addEventListener("input", () => {
  personTotal.innerText = `$${
    ((inputBill.value / 100) * (100 + buttonValue)) / inputPeople.value
  }`;
  console.log(((inputBill.value / 100) * (100 + buttonValue)) / inputPeople.value);
});
