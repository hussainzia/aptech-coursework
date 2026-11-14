let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset");

const OPTIONS = ["rock", "paper", "scissors"];
const BEATS = { rock: "scissors", paper: "rock", scissors: "paper" }; // key beats value
const EMOJI = { rock: "✊", paper: "✋", scissors: "✌️" };

const genCompChoice = () => OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

// Restart the CSS animation so it plays on every round, even the same result twice
function showMessage(text, state) {
    msg.textContent = text;
    msg.className = "";
    void msg.offsetWidth;
    msg.className = state;
}

function bump(element) {
    element.classList.remove("bump");
    void element.offsetWidth;
    element.classList.add("bump");
}

const drawGame = (choice) => {
    showMessage(`${EMOJI[choice]} It's a draw! You both picked ${choice}.`, "draw");
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.textContent = userScore;
        bump(userScorePara);
        showMessage(`🎉 You win! Your ${userChoice} ${EMOJI[userChoice]} beats ${compChoice} ${EMOJI[compChoice]}`, "win");
    } else {
        compScore++;
        compScorePara.textContent = compScore;
        bump(compScorePara);
        showMessage(`😢 You lost. ${capitalize(compChoice)} ${EMOJI[compChoice]} beats your ${userChoice} ${EMOJI[userChoice]}`, "lose");
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    choices.forEach((choice) => choice.classList.toggle("picked", choice.id === userChoice));

    if (userChoice === compChoice) {
        drawGame(userChoice);
    } else {
        showWinner(BEATS[userChoice] === compChoice, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => playGame(choice.id));
});

// Keyboard shortcuts: R, P, S
document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const choice = OPTIONS.find((option) => option[0] === key);
    if (choice && !event.ctrlKey && !event.metaKey && !event.altKey) {
        playGame(choice);
    }
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.textContent = 0;
    compScorePara.textContent = 0;
    choices.forEach((choice) => choice.classList.remove("picked"));
    showMessage("Play your move", "");
});
