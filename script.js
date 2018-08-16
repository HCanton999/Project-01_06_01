/*  Project 01_06_01

    Filename: script.js
    Author: Harrison Canton
      Date:   8.16.18
*/
"use strict";










function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;
}
// A function to create listeners for functions that wil be used
function createEventListeners() {
    validateForm();
}
// This is an event listener for the load event
window.addEventListener("load", createEventListeners); 
