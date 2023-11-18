"use strict"

const API_URL = 'https://65583e6f9c0b643cb2d6e8aa.mockapi.io/api/invitados'

document.querySelector("#yes-button").addEventListener('click', function () {
    sessionStorage.setItem("willAssist", true);
    insertGuest('../html/accepted_screen.html');
    
});

document.querySelector("#no-button").addEventListener('click', function () {
    sessionStorage.setItem("willAssist", false);
    insertGuest('../html/rejected_screen.html');
});


async function insertGuest(redirectURL){
    let guestName = sessionStorage.getItem("name");
    let willAssist = sessionStorage.getItem("willAssist");

    let json = {
        "name" : guestName,
        "willAssist" : willAssist,
    };

    try {
        let response = await fetch(API_URL, {
            "method" : "POST",
            "headers": { "Content-type" : "application/json"},
            "body" : JSON.stringify(json)
        });


        console.log(response);
    } 
    catch (error) {
        console.log(error)
    }
}

