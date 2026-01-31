function toggleDark() {
    document.body.classList.toggle("dark");
}

/* 🎵 Enable music after interaction */
document.addEventListener("click", () => {
    document.getElementById("bgMusic").play();
}, { once: true });

/* ❤️ Floating Hearts */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}, 650);

/* ⌨️ Typing Effect (Romantic + Academic Tone) */
const text = `
Happy New Month, my beloved TEMILADE 🌸

As this new month unfolds, I find myself reflecting — 
not just on time, but on purpose, growth, and love.
In every theory of happiness, you remain my constant variable.
In every equation of life, you are my sweetest solution.

May this month reward your kindness,
elevate your dreams, and surround you with peace.
May your smile remain my favorite research topic,
and your heart my safest home.

I choose you — intentionally, intellectually, and endlessly.
From your lover, your friend, your forever 💕
`;

let index = 0;
const typingText = document.getElementById("typingText");

function typeEffect() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 35);
    }
}
typeEffect();

/* 🎆 Fireworks */
setInterval(() => {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 50 + "vh";
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 1000);
}, 1300);
