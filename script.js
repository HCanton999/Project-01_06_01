/*  Project 01_06_01

    Filename: script.js
    Author: Harrison Canton
      Date:   8.16.18
*/
"use strict";



var formValidity = true;






function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;
    validateRequired();

    if (formValidity === true) {// form is valid 
        document.getElementById("errorText").innerHTML = ""
        document.getElementById("errprText").style.display = "none"
        document.getElementsByTagName("form")[0].submit();
    }else {
        document.getElementById("errorText").innerHTML = "Please fox the indicated problems and resubmit your order.";
        document.getElementById("errorText").style.display = "block";
        scroll(0,0);
    }
}

//making validation required 
function validateRequired() {
    var inputField = document.querySelectorAll("#contactinfo" + " input");
    var fieldsetValidity = true;
    var currentElement;

    try {
        for (var i = 0; i < inputField.length; i++) {
            currentElement = inputField[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                formValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
    } catch (error) {
        
    }
}


function generatePlaceholder() {
    if (!Modernizr.input.placeholder) {
        var addressBox = document.getElementById("addrinput");
        addressBox.value = addressBox.placeholder;
        addressBox.style.color = "rgb(178,184, 183)";
        if (addressBox.addEventListener) {
            addressBox.addEventListener("focus", zeroPlaceholder, false);
            addressBox.addEventListener("blur", checkPlaceholder, false);
        }else if (addressBox.attachEvent) {
            addressBox.attachevent("onfocus", zeroPlaceholder);
        } 
    }
}

// A function to create listeners for functions that wil be used
function setUpPage() {
    generatePlaceholder();
    if (window.addEventListener) {
        window.addEventListener("submit", validateForm, false);
    } else if (window.attachEvent){
        window.attachEvent("onsubmit", validateForm, false);
    }
}
// This is an event listener for the load event
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
