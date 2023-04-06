// Your code here
let DODGER = document.getElementById('dodger');

function moveDodgerLeft() {
  let left = parseInt(DODGER.style.left.replace('px', ''), 10);

  if (left > 0) {
    DODGER.style.left = `${left - 4}px`;
  }
}

function moveDodgerRight() {
  let left = parseInt(DODGER.style.left.replace('px', ''), 10);

  if (left < 360) {
    DODGER.style.left = `${left + 4}px`;
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
