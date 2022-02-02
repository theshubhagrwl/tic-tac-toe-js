const box1 = document.querySelector(".inner-box");
console.log(box1);

//event listeners
box1.addEventListener("mouseover", hoverEvent);

//event listener methods
function hoverEvent() {
  console.log("Hello");
}
