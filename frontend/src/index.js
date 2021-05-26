
document.addEventListener("DOMContentLoaded", () => {
    GameReviewAdapter.getGames();
})



function fetchGames() {
    const gamesContainer = document.getElementById("games-container")
    fetch("http://localhost:3000/games")
    .then(r => r.json())
    .then(data => {
        data.forEach(game => gamesContainer.innerHTML += `<li>${game.title}</li>`)
    })
    .catch(err => console.warn(err))
}