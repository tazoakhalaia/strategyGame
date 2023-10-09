const gameContainer = document.getElementById('game-container');
const gameImage = document.getElementById('game-image');
let cc = []
function red(){
    cc.length = 0
    cc.push('red-dot')
}

function black(){
    cc.length = 0
    cc.push('black')
}

const imageWidth = 2000;
const imageHeight = 2000;

let mouseX = 0;
let mouseY = 0;

gameContainer.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  updateImagePosition();
});

gameContainer.addEventListener('click', (event) => {
  const rect = gameImage.getBoundingClientRect();
  const dotX = event.clientX - rect.left + gameContainer.scrollLeft;
  const dotY = event.clientY - rect.top + gameContainer.scrollTop;
  addRedDot(dotX, dotY);
});

function updateImagePosition() {
  const maxOffsetX = imageWidth - window.innerWidth;
  const maxOffsetY = imageHeight - window.innerHeight;

  const offsetX = (mouseX / window.innerWidth) * maxOffsetX;
  const offsetY = (mouseY / window.innerHeight) * maxOffsetY;

  gameImage.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
}

function addRedDot(x, y) {
  const redDot = document.createElement('div');
  redDot.classList.add(cc[0]);
  redDot.style.left = `${x}px`;
  redDot.style.top = `${y}px`;
  gameImage.append(redDot);
}
