//Targeting Element to change its innerText with API Data
const game_n = document.getElementById("game_name") // Targeting game name
const team_1 = document.getElementById("team_n1") // Targeting Name of team-1
const team_2 = document.getElementById("team_n2")  // Targeting Nanme for team-2
const round = document.querySelector('.round_number') //Targeting number of rounds
const score1 = document.querySelector("#score_A") //Targeting score of Team-1
const score2 = document.querySelector("#score_B") //Targeting score of Team-2

fetch("https://ipsgwalior.org/scoreboard/screenscore.php/currentscore").then(res => { // Fetching API
    return res.json() //Conerting API data into JSON Format 
}).then(data => {
    // console.log(data.teamnameA)

    game_n.innerText = data.game //Changing data Game-Name With API-Data
    team_1.innerText = data.teamnameA  //Changing data Name With API-Data
    team_2.innerText = data.teamnameB
    round.innerText = data.round
    score1.innerText = data.team_a
    score2.innerText = data.team_b
    console.log(data)
})


// setInterval(function () {
//     fetch("https://ipsgwalior.org/scoreboard/screenscore.php/currentscore").then(res => {
//         return res.json()
//     }).then(data => {
//         // console.log(data.teamnameA)

//         game_n.innerText = data.game
//         team_1.innerText = data.teamnameA
//         team_2.innerText = data.teamnameB
//         round.innerText = data.round
//         score1.innerText = data.team_a
//         score2.innerText = data.team_b
//         // console.log(data)
//     })
// }, 1000);

