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
    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }
}

//making validation required 
function validateRequired() {
    
}

// A function to create listeners for functions that wil be used
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit" , validateForm);
    }
}
// This is an event listener for the load event
window.addEventListener("load", createEventListeners); 
