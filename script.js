
const jsConfetti = new JSConfetti()

function throwConfetti() {
  jsConfetti.addConfetti({
    emojis: ['🎉', '🎈', '🎂', '🎁', '✨'],
    emojiSize: 35,
    confettiNumber: 250,
  });
  launchFireworks();
}

// Fireworks
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function launchFireworks() {
  let particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      dx: (Math.random() - 0.5) * 10,
      dy: (Math.random() - 0.5) * 10,
      radius: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
  }

  let interval = setInterval(() => {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
    });
  }, 30);

  setTimeout(() => clearInterval(interval), 1000);
}

function throwSurprise() {
  alert("🎊 Surprise! You're amazing and so loved! 🎈");
  throwConfetti();
}

// Countdown
const birthday = new Date("June 30, 2025 00:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const gap = birthday - now;
  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((gap % (1000 * 60)) / 1000);
  countdown.innerHTML = `⏳ ${d}d ${h}h ${m}m ${s}s until the big day!`;
}, 1000);

// Typing
const typedText = "Wishing you a magical day filled with smiles, love, and cake! 🎂✨";
let i = 0;
function typeWriter() {
  if (i < typedText.length) {
    document.getElementById("typed-text").innerHTML += typedText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();
