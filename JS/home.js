"use strict";

const body = document.getElementById('bosy');
const beginnig = document.getElementById('Beginning');

document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault();

    let codename = document.getElementById('code-lyoko').value;

    if(codename === "D3admau5") {
        body.style.backgroundColor = "#191970";
        body.style.color = "#e2e2e2"
        beginnig.style.backgroundColor = "#282828";
        beginnig.style.color = "#e2e2e2"
    }
    else
    {
        return;
    }
});