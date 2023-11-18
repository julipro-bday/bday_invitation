"use strict"

document.querySelector('#insert-name-button').addEventListener('click', guestNameAssignment);

function guestNameAssignment(){
    let guestNameFromInput = document.querySelector('#name-input').value;
    sessionStorage.setItem("name", guestNameFromInput);
    console.log(sessionStorage.getItem("name"));
}



