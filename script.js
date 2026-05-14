"use strict";

const output = document.querySelector(".output_window");
const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        const value = button.innerText;
        switch(value){
            case "C":
                output.innerText = "";
                break;

            case "=":
                try{
                    let expression = output.innerText;
                    output.innerText = eval(expression);
                }
                catch{
                    output.innerText = "Error";
                }
                break;

            case "1/x":
                if(output.innerText === ""){
                    return;
                }
                output.innerText = 1 / Number(output.innerText);
                break;

            case "√x":
                if(output.innerText === ""){
                    return;
                }
                output.innerText = Math.sqrt(Number(output.innerText));
                break;

            case "+/-":
                if(output.innerText === ""){
                    return;
                }
                output.innerText = Number(output.innerText) * -1;
                break;

            case "%":
                if(output.innerText === ""){
                    return;
                }
                output.innerText = Number(output.innerText) / 100;
                break;

            case "x^2":
                if(output.innerText === ""){
                    return;
                }
                output.innerText = Number(output.innerText) * Number(output.innerText);
                break;

            default:
                output.innerText += value;
        }
    });
});