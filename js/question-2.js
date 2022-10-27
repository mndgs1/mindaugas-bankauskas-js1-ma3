const key = "2ceb1d59ba0b4b3f93c7bd4bb9c14b7c";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

const gamesContainer = document.querySelector(".games-list");

function createHtml(games) {
  for (let i = 0; i < games.length; i++) {
    if (i === 8) {
      break;
    }

    gamesContainer.innerHTML += `<div class="item">
  <h2 class="name">${games[i].name}</h2>
  <p class="rating">Rating: ${games[i].rating}</p>
  <p class="tags">Number of tags: ${games[i].tags.length}</p>
  </div>`;
  }
}

async function getGames() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const games = results.results;

    gamesContainer.innerHTML = "";

    createHtml(games);
  } catch (error) {
    gamesContainer.innerHTML = "Oops Sorry! An error occured when trying to get API";
    console.log("error occured", error);
  }
}

getGames();
