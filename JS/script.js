"use strict";

import json from "../users.json" with { type: "json" };
import color from "../favourites.json" with { type: "json" };

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let username;
    let code = "D3admau5"

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (!firstName || !lastName) {
          alert('All fields are required.');
          return;
      }

    json.forEach(user => {
        if (user.firstname === firstName && user.lastname === lastName) {
            username = user.firstName;
            color.forEach(colur => {
                if (colur.id === user.id && colur.colour === "Blue")
                    alert("Congratulations, you won the colour of the month! Here's your code: " + code);
            });
            return window.location.href = './vote.html';
        }
        else {
            return;
        }
    });
});


    


// let loginScreen = {

//     getUsername: function() {

//         _firstName = document.querySelector('.first-name').innerHTML();
//         _lastName = document.querySelector('.last-name').innerHTML();

//         if (json.users.values === _firstName)
//             console.log('success, ', users.values);
//         else
//             console.log('failed');
//     }

//     // getButton: function() {
//     //     _buttonLogin =
//     // }
// }

// return getUsername();

//document.getElementById('login-button').innerHTML();