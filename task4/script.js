document.getElementById('decreaseBtn').addEventListener('click', function() {
  resizeSquare(-15);
});

document.getElementById('increaseBtn').addEventListener('click', function() {
  resizeSquare(15);
});

function resizeSquare(change) {
  let square = document.getElementById('square');
  let currentWidth = square.offsetWidth;
  let currentHeight = square.offsetHeight;
  square.style.width = (currentWidth + change) + 'px';
  square.style.height = (currentHeight + change) + 'px';
}
