"use strict"

const apiUrl = 'https://65583e6f9c0b643cb2d6e8aa.mockapi.io/api/invitados/'



let guestName;
let willAssist;

document.querySelector('#insert-name-button').addEventListener('click', guestNameAssignment);

function guestNameAssignment(){
    let guestNameFromInput = document.querySelector('#name-input').value;
    guestName = guestNameFromInput;
    console.log(guestName);
}


// document.querySelector('#yes-button').addEventListener('click', function() {
//     guestWillAssist(true);
// });


// document.querySelector('#no-button').addEventListener('click', function() {
//     guestWillAssist(false);
// });


// function guestWillAssist(status){
//     if(status){
//         willAssist = true;
//         window.location.href = '../html/accepted_screen.html';
//         console.log(guestName);
//         console.log(willAssist);
//     }
//     else{
//         willAssist = false;
//         window.location.href = '../html/rejected_screen.html'
//         console.log(guestName);
//         console.log(willAssist);
//     }
// }



