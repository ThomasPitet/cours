import "./style.css";

function getCanvas() {
  const canvas = document.getElementById("Canvas") as HTMLCanvasElement;
  if (!canvas) {
    throw new Error("Canvas element not found");
  }
  return canvas;
}

function getContext() {
  const canvas = getCanvas();
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("impossible");
  }
  return ctx;
}

const canvas = getCanvas();

let squareX = 50;
let squareY = 50;
const squareSize = 50;
const speed = 5;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const keysPressed: Record<string, boolean> = {};
document.addEventListener("keydown", (e: KeyboardEvent) => {
  keysPressed[e.key] = true;
});

document.addEventListener("keyup", (e: KeyboardEvent) => {
  keysPressed[e.key] = false;
});

function drawSquare() {
  const ctx = getContext();
  ctx.fillStyle = "green";
  ctx.fillRect(squareX, squareY, squareSize, squareSize);
}

function moveSquare() {
  if (keysPressed.ArrowUp) squareY -= speed;
  if (keysPressed.ArrowDown) squareY += speed;
  if (keysPressed.ArrowLeft) squareX -= speed;
  if (keysPressed.ArrowRight) squareX += speed;
  if (keysPressed.Space);

  squareX = Math.max(0, Math.min(squareX, canvas.width - squareSize));
  squareY = Math.max(0, Math.min(squareY, canvas.height - squareSize));
}

function updateGame() {
  const ctx = getContext();
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSquare();
  moveSquare();
  requestAnimationFrame(updateGame);
}

updateGame();
