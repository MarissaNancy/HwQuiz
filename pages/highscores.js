const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

console.log(highScores);

highScoresList.innerHTML = highScores.map( score => {
    return '<li class="high-score">${score.name} - ${score.score}</li>';
})
    .join("");

// highScores.map(highScores => {
//     console.log('<li class="high-score">${highScores.name}--${highScores.score}</li>')
// })

