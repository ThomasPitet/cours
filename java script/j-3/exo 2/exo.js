const box = document.getElementById("demo-box"); 

function toggleRounded() {
    box.classList.toggle("rounded");
}
function toggleShadow() {
    box.classList.toggle("Shadow");
}
function toggleBorder() {
    box.classList.toggle("Border");
}
function toggleGradient() {
    box.classList.toggle("Gradient");
}
function toggleAnimation() {
    box.classList.toggle("Animation");
}
function resetBox() {
    box.className = "demo-box";
}

function changeColor(color) {}
function changeSize(size) {}
function toggleTheme() {}
function highlightCards(style) {}
