let userScore = localStorage.getItem("userScore") ? parseInt(localStorage.getItem("userScore")) : 0;
let computerScore = localStorage.getItem("computerScore") ? parseInt(localStorage.getItem("computerScore")) : 0;

document.querySelector(".yourScore h1").innerText = userScore;
document.querySelector(".comScore h1").innerText = computerScore;


const pickUserHand = (hand) => {
    console.log("User picked:", hand);

    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    let rules1 = document.querySelector(".rulebox");
    rules1.style.display = "none";

    let newrules = document.querySelector(".rulebox1");
    newrules.style.display = "flex";

    let next = document.querySelector(".next");
    next.style.display = "flex";

    let userPickImage = document.getElementById("userPickImage");
    userPickImage.innerHTML = `<img src="${hand}.png">`;
    userPickImage.className = `hand ${hand}1`;

    let cpHand = pickComputerHand();
    referee(hand, cpHand); 
};


const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * 3)];

    console.log("Computer picked:", cpHand); 

    let computerPickImage = document.getElementById("computerPickImage");
    computerPickImage.innerHTML = `<img src="${cpHand}.png">`;
    computerPickImage.className = `hand ${cpHand}1`;

    return cpHand;
};



const referee = (hand, cpHand) => {
    console.log("User hand:", hand, "Computer hand:", cpHand);

    document.getElementById("userPickImage").classList.remove("winner-hand");
    document.getElementById("computerPickImage").classList.remove("winner-hand");

    if (hand === cpHand) {
        setDecision("TIE UP");
        document.querySelector(".decision h2").classList.remove;
    } else if (
        (hand === "rock" && cpHand === "scissors") ||
        (hand === "paper" && cpHand === "rock") ||
        (hand === "scissors" && cpHand === "paper")
    ) {
        setDecision("YOU WIN!");
        userScore += 1; 
        highlightWinner("user");
    } else {
        setDecision("YOU LOST!");
        computerScore += 1; 
        highlightWinner("computer");
    }

    setScore(userScore, computerScore);

    console.log("Updated User Score:", userScore);
    console.log("Updated Computer Score:", computerScore);
};



const restartGame = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    document.querySelector(".decision h1").innerText = "";


    let userPickImage = document.getElementById("userPickImage");
    userPickImage.innerHTML = `<img src="scissors.png">`; 
    userPickImage.className = "hand scissors"; 

    let computerPickImage = document.getElementById("computerPickImage");
    computerPickImage.innerHTML = `<img src="scissors.png">`; 
    computerPickImage.className = "hand scissors"; // Default class

    console.log("Game has been reset for a new round.");
};

const restartGames = () =>{
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let score = document.getElementById("scorebox");
    score.style.display = "flex";

    let hurray = document.querySelector(".hurray");
    hurray.style.display = "none";
}


const setDecision = (decision) => {
    console.log("Setting decision:", decision);
    document.querySelector(".decision h1").innerText = decision; 
};

const setScore = (user, computer) => {
    userScore = user;
    computerScore = computer;

    document.querySelector(".yourScore h1").innerText = user; 
    document.querySelector(".comScore h1").innerText = computer; 

    
    localStorage.setItem("userScore", userScore);
    localStorage.setItem("computerScore", computerScore);

    console.log("Scores updated in DOM and local storage.");
};


const rulesBox = () => {
    let ruleBox = document.querySelector(".gamerules");

    
    if (ruleBox.style.display === "none" || ruleBox.style.display === "") {
        ruleBox.style.display = "flex"; 
        console.log("Rules box opened.");
    } else {
        ruleBox.style.display = "none"; 
        console.log("Rules box closed.");
    }
};

const closeBox = () => {
    let ruleBox = document.querySelector(".gamerules");
    ruleBox.style.display = "none"; 
    console.log("Rules box closed.");
};

const next = () =>{
    if(userScore > computerScore){
        next1();
    }
    else{
        userScore = 0;
        computerScore = 0;
    
        // Update the DOM
        document.querySelector(".yourScore h1").innerText = userScore;
        document.querySelector(".comScore h1").innerText = computerScore;
    
        
        localStorage.setItem("userScore", userScore);
        localStorage.setItem("computerScore", computerScore);

        let hands = document.querySelector(".hands");
        hands.style.display = "flex";

        let contest = document.querySelector(".contest");
        contest.style.display = "none";

        let rules1 = document.querySelector(".rulebox");
        rules1.style.display = "flex";

        let newrules = document.querySelector(".rulebox1");
    newrules.style.display = "none";

    let next = document.querySelector(".next");
    next.style.display = "none";
    
    }
}

const next1 = () => {
    
    userScore = 0;
    computerScore = 0;

    document.querySelector(".yourScore h1").innerText = userScore;
    document.querySelector(".comScore h1").innerText = computerScore;

    localStorage.setItem("userScore", userScore);
    localStorage.setItem("computerScore", computerScore);

    console.log("Scores have been reset to zero.");

    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let rules1 = document.querySelector(".rulebox");
    rules1.style.display = "flex";

    let newrules = document.querySelector(".rulebox1");
    newrules.style.display = "none";

    let next = document.querySelector(".next");
    next.style.display = "none";
    
    let score = document.getElementById("scorebox");
    score.style.display = "none";

    let hurray = document.querySelector(".hurray");
    hurray.style.display = "flex";
};


const highlightWinner = (winner) => {
    document.querySelectorAll(".winner-hand").forEach((element) => {
        element.classList.remove("winner-hand");
    });

    if (winner === "user") {
        document.getElementById("userPickImage").classList.add("winner-hand");
    } else if (winner === "computer") {
        document.getElementById("computerPickImage").classList.add("winner-hand");
    }
};
