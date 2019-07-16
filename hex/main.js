// selecting all elements we are going to use here project
const hexNumbers = [0,1,2,3,4,5,67,8,9,'A','B','C','D','E','F'];
const hexbtn = document.querySelector(".hexbtn");
const bodyBgc = document.querySelector("body");
const hex = document.querySelector(".hex");

hexbtn.addEventListener('click',getHex);

function getHex(){
    let hexCol="#";
    // looping
    for (let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexCol += hexNumbers[random];
    }
    bodyBgc.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}