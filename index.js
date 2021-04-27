var size = document.querySelectorAll(".drum").length;

function playAudio(input) {
  switch (input) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(input);
  }
}

function animation(button) {
  var pressedButton = document.querySelector("." + button);
  pressedButton.classList.add("pressed");
  setTimeout(function() {
    pressedButton.classList.remove("pressed");
  }, 100);
}

for (var i = 0; i < size; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color = "white";
    var pressed = this.innerHTML;
    playAudio(pressed);
    animation(pressed);
  })
}

document.addEventListener("keydown", function(WhatKey) {
  playAudio(WhatKey.key);
  animation(WhatKey.key);
});
