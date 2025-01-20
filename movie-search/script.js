const apiKey = `e94faa5f`;

async function getMovieDatabase() {
  try {
    const response = await fetch(`https://www.omdbapi.com/?&apikey=${apiKey}&s=hum&page=1`);
    const data = await response.json();
    renderData(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  // return data;
}
getMovieDatabase();

function renderData(data) {
  const movieContainer = document.querySelector(".movie-container");
  const movieList = data.Search.map((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
        <img src="${movie.Poster}" alt="">
        <h2>${movie.Title}</h2>
        <p>Year: ${movie.Year}</p>
        `;
    movieContainer.appendChild(movieElement);
  });
}

