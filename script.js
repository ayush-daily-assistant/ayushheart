
const heartContainer = document.getElementById("floating-hearts");
const loveButton = document.getElementById("loveButton");
const response = document.getElementById("response");

let activeHearts = 0;
const MAX_HEARTS = 35;

function createFloatingHeart() {
    if (activeHearts >= MAX_HEARTS) return;

    activeHearts++;

    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 22) + "px";
    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    heartContainer.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
        activeHearts--;
    }, { once: true });
}

// Gentle floating hearts in the background
const heartTimer = setInterval(createFloatingHeart, 650);

loveButton.addEventListener("click", () => {
    response.textContent = "Sending you a little extra love! 💖";

    for (let i = 0; i < 12; i++) {
        setTimeout(createFloatingHeart, i * 100);
    }
});
