const nameText = "Aadu";
const nameEl = document.getElementById("name");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const secret = document.getElementById("secret");
const music = document.getElementById("bgMusic");
const particles = document.querySelector(".particles");

/* Letter-by-letter + bounce */
let i = 0;
function typeName() {
  if (i < nameText.length) {
    const span = document.createElement("span");
    span.textContent = nameText[i];
    span.style.display = "inline-block";
    span.style.animation = "pop 0.4s ease";
    nameEl.appendChild(span);
    i++;
    setTimeout(typeName, 160);
  }
}
typeName();

/* Bounce animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes pop {
  0% { transform: scale(0); }
  60% { transform: scale(1.3); }
  100% { transform: scale(1); }
}`;
document.head.appendChild(style);

/* Play music after interaction */
document.body.addEventListener("click", () => {
  music.play().catch(() => {});
}, { once: true });

/* Yes click */
yesBtn.addEventListener("click", () => {
  response.textContent = "You just made my heart very happy 💖";
  secret.style.display = "block";
  noBtn.style.display = "none";
  heartBurst();
});

/* Naughty no button */
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* Floating hearts background */
for (let i = 0; i < 20; i++) {
  const heart = document.createElement("span");
  heart.textContent = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";
  heart.style.fontSize = 16 + Math.random() * 20 + "px";
  particles.appendChild(heart);
}

/* Confetti hearts */
function heartBurst() {
  for (let i = 0; i < 28; i++) {
    const h = document.createElement("span");
    h.textContent = "💖";
    h.style.position = "fixed";
    h.style.left = Math.random() * 100 + "vw";
    h.style.top = "50%";
    h.style.fontSize = "20px";
    h.style.animation = "float 2.5s ease forwards";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2500);
  }
}
