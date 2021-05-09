"use strict";

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let high = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number !";
  } else if (guess === secret) {
    document.querySelector(".message").textContent =
      "🎉 Correct Number! click again button to try again! ";
    document.querySelector(".check").disabled = true;
    document.querySelector(".number").textContent = secret;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > high) {
      high = score;
      document.querySelector(".highscore").textContent = high;
    }
  } else if (guess !== secret) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secret ? "Guess number is great!" : "Guess number is less!";
      --score;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 You lost the game! click again button to try again!";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".check").disabled = true;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  secret = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".check").disabled = false;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
