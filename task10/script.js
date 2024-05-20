function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const amount = document.querySelector('#controls input').value;
  createBoxes(Number(amount));
  document.querySelector('#controls input').value = '';
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';
}
