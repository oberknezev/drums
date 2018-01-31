var audioForA = document.getElementById("audioForA");
var audioForS = document.getElementById("audioForS");
var audioForD = document.getElementById("audioForD");
var audioForJ = document.getElementById("audioForJ");
var audioForK = document.getElementById("audioForK");
var audioForL = document.getElementById("audioForL");

function clickA(){
    audioForA.play();
}
function clickS(){
    audioForS.play();
}
function clickD(){
    audioForD.play();
}
function clickJ(){
    audioForJ.play();
}
function clickK(){
    audioForK.play();
}
function clickL(){
    audioForL.play();
}


document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode === 65) {
        audioForA.play();
    } else if (evt.keyCode === 83) {
        audioForS.play();
    } else if (evt.keyCode === 68) {
        audioForD.play();
    } else if (evt.keyCode === 74) {
        audioForJ.play();
    } else if (evt.keyCode === 75) {
        audioForK.play();
    } else if (evt.keyCode === 76) {
        audioForL.play();
    }
}