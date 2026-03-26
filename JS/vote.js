"use strict";

//import json from "../users.json" with { type: "json" };
//midnight blue hex code: #191970
//crimson red hex code: #DC143C
//emerald green hex code: #50C878

import color from "../favourites.json" with { type: "json" };

let blue = 0;
let red = 0;
let green = 0;

color.forEach(colur => {
    if (colur.colour === "Blue") {
        blue++;
    }
    else if (colur.colour === "Red") {
        red++;
    }
    else {
        green++;
    }
});

document.getElementById('blue-result').innerHTML = "Blue: " + blue;
document.getElementById('red-result').innerHTML = "Red: " + red;
document.getElementById('green-result').innerHTML = "Green: " + green;



// document.getElementById('color-code').addEventListener('submit', function (event) {
//     event.preventDefault();

//     let codename = document.getElementById('code-lyoko').value;
//     let _midnightBlue = "#191970";

//     if (codename === "D3admau5") {
//         window.addEventListener("load", function() {
//             document.body.style.backgroundColor === _midnightBlue;
//         });
//     }
//     else
//     {
//         return window.location.href = './vote.html';
//     }
// });
