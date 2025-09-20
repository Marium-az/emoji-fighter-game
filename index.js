let fighters = ["🐍", "🐥", "🦎", "💩", "🦍", "🐢", "🐩", "🦈", "🦀", "🐝", "🤖", "🐂", "🦁", "🐸", "🕷", "🦔", "🦆", "🐉", "🐆"]

let stageEl = document.getElementById("stage")
let pickBtn = document.getElementById("pick-btn")
let winnrEl = document.getElementById("winnr")
let player1Score = 0
let player2Score = 0

pickBtn.addEventListener("click", function(){
    let randomIndexOne = Math.floor(Math.random() * fighters.length)
    let randomIndexTwo = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = fighters[randomIndexOne] + " VS " + fighters[randomIndexTwo] 
})

function getWinner(plyr1, plyr2){
    const rules = {
        "🐍" : ["🐥", "🦔", "🦎", "🕷", "🐸", "🐝", "💩", "🦆"],
        "🐥" : ["🕷", "🐝", "💩"],
        "🦎" : ["🕷", "🐝", "🐸", "🦆", "🐥", "💩"],
        "🦍" : ["🐢", "🐍", "🐩", "🦀", "💩", "🕷", "🦎", "🐝", "🐸", "🦆", "🐥", "🐂"],
        "🐢" : ["💩"],
        "🐩" : ["🐍", "🦀", "🕷", "🦎", "🐸", "🦆", "🐥", "🐝", "💩"],
        "🦈" : ["🐆", "🐢", "🐩", "🐂", "🐉", "🦔", "🦍", "🦁", "🐍", "🦎", "🐸", "🦆", "🐥", "🐝", "💩"],
        "🦀" : ["💩", "🐥", "🦆", "🐸", "🐍"],
        "🤖" : ["🐆", "🐢", "🐩", "🐂", "🐉", "🦔", "🦍", "🦈", "🦁", "🦀", "🕷", "🦎", "🐝", "💩", "🐥", "🦆", "🐸", "🐍"],
        "🐂" : ["🤖", "🐆", "🐢", "🐩", "🦁", "🦎", "🐝", "💩", "🐥", "🦆", "🐍"],
        "🦁" : ["🤖", "🐆", "🐢", "🐩", "🐂", "🦍", "🦎", "🐝", "🐥", "💩", "🦆", "🐍"],
        "🐉" : ["🤖", "🐆", "🐢", "🐩", "🦔", "🦍", "🦈", "🦁", "🦀", "🕷", "🦎", "🐝", "🐥", "💩", "🦆", "🐸", "🐍", "🐂"],
        "🐆" : ["🤖", "🐩", "🦎", "🐝", "🐥", "💩", "🦆", "🐸", "🐍", "🐂"],
        "🦆" : ["💩", "🕷", "🦎", "🐥", "🐝", "🐸"],
        "🦔" : ["🐆", "🐢", "🐩", "🦍", "🦁", "🐂", "🦎", "🐥", "🦆"],
        "🕷" : ["💩"],
        "🐸" : ["💩"],
        "🐝" : ["💩"]
    };

    if (plyr1 === plyr2) {
        return "It's a tie!";
    }

    if (rules[plyr1] && rules[plyr1].includes(plyr2)) {
        return "Player 1 wins!"
    } else if (rules[plyr2] && rules[plyr2].includes(plyr1)) {
        return "Player 2 wins!";
    } else {
        return "No one wins!"
    }
}

pickBtn.addEventListener("click", function(){
    let randomIndexOne = Math.floor(Math.random() * fighters.length)
    let randomIndexTwo = Math.floor(Math.random() * fighters.length)

    let plyr1 = fighters[randomIndexOne]
    let plyr2 = fighters[randomIndexTwo]

    stageEl.textContent = plyr1 + " VS " + plyr2 

    let result = getWinner(plyr1, plyr2)
    document.getElementById("winnr-rslt").textContent = result

    if (result === "Player 1 wins!") {
        player1Score++
        document.getElementById("p1-score").textContent = player1Score
    } else if (result === "Player 2 wins!") {
        player2Score++
        document.getElementById("p2-score").textContent = player2Score
    }

      if (player1Score === 5) {
        document.getElementById("winnr-rslt").textContent = "🎉 FINAL WINNER: Player 1 🎉"
        pickBtn.disabled = true
    } else if (player2Score === 5) {
        document.getElementById("winnr-rslt").textContent = "🎉 FINAL WINNER: Player 2 🎉"
        pickBtn.disabled = true
    }
})

let resetBtn = document.getElementById("reset-btn")

resetBtn.addEventListener("click", function(){
    player1Score = 0
    player2Score = 0
    
    document.getElementById("p1-score").textContent = player1Score
    document.getElementById("p2-score").textContent = player2Score
    stageEl.textContent = ""
    document.getElementById("winnr-rslt").textContent = ""
    
    pickBtn.disabled = false
})