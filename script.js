"use strict";

const output = document.querySelector(".output_window")
const buttons = document.querySelectorAll((".buttons"))

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        output.innerHTML = `${button.innerText}`
    });
})