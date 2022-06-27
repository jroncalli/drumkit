// const wButton = document.querySelector(".w,.drum");
// const aButton = document.querySelector(".a,.drum");
// const sButton = document.querySelector(".s,.drum");
// const dButton = document.querySelector(".d,.drum");
// const jButton = document.querySelector(".j,.drum");
// const kButton = document.querySelector(".k,.drum");
// const lButton = document.querySelector(".l,.drum");

// wButton.addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked");
// }

// how to loop through and add event listeners to multiple elements with for loop
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let audio = new Audio("sounds/crash.mp3");
    audio.play();
  });
}
