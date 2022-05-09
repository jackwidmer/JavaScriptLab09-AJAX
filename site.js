"use strict";
// Main js file for Jack Widmer Lab 9.
function clearResponses(){
    responseHTML.innerHTML = "";
    responseJSON.innerHTML = "";
}

function requestHTML(){
    let StarID = document.getElementById("starID").value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://cst.ridgewater.edu/Tools/AJAX_HTML/?StarID=${StarID}`);
    xhr.send();
    xhr.onload = function(){
        responseHTML.innerHTML = `Using XMLHttpRequest to get HTML. Received ${xhr.response.length} bytes. <br>`;
        responseHTML.innerHTML += `${xhr.response}`;
    }
}

function requestJSON(){
    let StarID = document.getElementById("starID").value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://cst.ridgewater.edu/Tools/AJAX_JSON/?StarID=${StarID}`);
    xhr.send();
    xhr.onload = function(){
        responseJSON.innerHTML = `Using XMLHttpRequest to get JSON. Received ${xhr.response.length} bytes. <br>`;
        responseJSON.innerHTML += `${xhr.response}`;
    }
}

async function fetchHTML(){
    let StarID = document.getElementById("starID").value;
    let url = `https://cst.ridgewater.edu/Tools/AJAX_HTML/?StarID=${StarID}`;
    let response = await fetch(url);
    let text = await response.text(); // read response body as text
    responseHTML.innerHTML = `Using fetch to get HTML: <br>`;
    responseHTML.innerHTML += text;
}

async function fetchJSON(){
    let StarID = document.getElementById("starID").value;
    let url = `https://cst.ridgewater.edu/Tools/AJAX_JSON/?StarID=${StarID}`;
    let response = await fetch(url);
    let json = await response.json(); // read response body as text
    responseJSON.innerHTML = `Using fetch to get JSON:<br>`;
    responseJSON.innerHTML += `${json}<br>`;
    responseJSON.innerHTML += `${JSON.stringify(json)}`;
}