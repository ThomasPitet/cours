// Récupérer les éléments du DOM
const elusiveButton = document.getElementById('elusive-button');
const clickCounter = document.getElementById('click-counter');

// Données
let clickCount = 0;

// Fonction pour générer une position aléatoire
function getRandomPosition() {
    // Définir les marges pour que le bouton ne sorte pas de l'écran
    const margin = 60;
    const maxX = window.innerWidth - margin;
    const maxY = window.innerHeight - margin;
    
    const randomX = Math.random() * maxX + margin / 2;
    const randomY = Math.random() * maxY + margin / 2;
    
    return { x: randomX, y: randomY };
}

// Fonction pour téléporter le bouton
function teleportButton() {
    const position = getRandomPosition();
    elusiveButton.style.left = position.x + 'px';
    elusiveButton.style.top = position.y + 'px';
}

// Fonction pour gérer le clic réussi
function handleClick(event) {
    event.preventDefault();
    clickCount++;
    clickCounter.textContent = clickCount;
    
    // Ajouter une animation de feedback
    elusiveButton.style.transform = 'scale(1.1)';
    setTimeout(() => {
        elusiveButton.style.transform = 'scale(1)';
    }, 150);
}

// Initialiser la position du bouton au chargement
function init() {
    teleportButton();
}

// Évenements
elusiveButton.addEventListener('mouseenter', teleportButton);
elusiveButton.addEventListener('click', handleClick);

// Également téléporter le bouton si l'utilisateur le pointe sans que le curseur entre dans le bouton
elusiveButton.addEventListener('mousemove', (e) => {
    // Petite chance de téléportation même au survol léger
    if (Math.random() < 0.1) {
        teleportButton();
    }
});

// Initialiser l'app au chargement
window.addEventListener('load', init);