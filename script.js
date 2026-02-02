const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const confettiBtn = document.getElementById("confettiBtn");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

let noCount = 0;

const noPhrases = [
  "No 🙃",
  "Are you sure? 😭",
  "Pls rethink 🥺",
  "Don’t do me like that 😔",
  "Last chance 😳",
  "Okay you’re playing 😤",
  "Be fr 😭💔"
];

function moveNoButton() {
  // Keep it within the card area nicely (simple + effective)
  const card = document.querySelector(".card");
  const rect = card.getBoundingClientRect();

  const btnRect = noBtn.getBoundingClientRect();
  const maxX = rect.width - btnRect.width - 18;
  const maxY = rect.height - btnRect.height - 18;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

function popConfetti(amount = 120) {
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";

    // random color
    const colors = ["#ff4d6d", "#ff758f", "#ffb703", "#8ecae6", "#b5179e", "#52b788"];
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];

    // random placement + motion
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDuration = (Math.random() * 1.7 + 1.2) + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 3500);
  }
}

yesBtn.addEventListener("click", () => {
  title.textContent = "She said YES!!! 💘";
  subtitle.textContent = "Best decision ever 😌";
  result.classList.remove("hidden");

  // Make buttons chill out
  noBtn.style.display = "none";
  yesBtn.textContent = "YES 💞";

  popConfetti(160);
});

confettiBtn.addEventListener("click", () => popConfetti(120));

// Make "No" dodge (works on desktop and mobile)
noBtn.addEventListener("mouseenter", () => {
  noCount++;
  noBtn.textContent = noPhrases[Math.min(noCount, noPhrases.length - 1)];
  moveNoButton();
});

noBtn.addEventListener("click", () => {
  // On touch devices, clicking counts too
  noCount++;
  noBtn.textContent = noPhrases[Math.min(noCount, noPhrases.length - 1)];
  moveNoButton();
});
