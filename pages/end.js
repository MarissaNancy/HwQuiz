const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
})

saveHighScore = e =>{
    console.log(":)");
    e.preventDefault();
}