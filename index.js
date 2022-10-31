let homeScore = 0
let homeScoreEl = document.getElementById("home-score")

let guestScore = 0
let guestScoreEl = document.getElementById("guest-score")

function homeScoreAddOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeScoreAddTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeScoreAddThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guestScoreAddOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestScoreAddTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore 
}

function guestScoreAddThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function startNewGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}