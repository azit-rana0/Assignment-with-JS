const apiKey = `e94faa5f`;
const search = document.querySelector("#search");
const movieContainer = document.querySelector(".movie-container");
const pagination = document.querySelector(".pagination");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const currentPageDisplay = document.querySelector("#current-page");
let totalPage = document.querySelector("#total-page");
let timerId;

let currentPage = 1;
let totalPages = 0;

async function getMovieDatabase(movie, page = 1) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${movie}&page=${page}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

function renderMovies(data) {
  movieContainer.innerHTML = "";

  if (data && data.Search) {
    data.Search.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
      movieElement.innerHTML = `
        <img src="${
          movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"
        }" alt="movie poster">
        <h3 class="title">${movie.Title}</h3>
        <p  class="year">Year: ${movie.Year}</p>
      `;
      movieContainer.appendChild(movieElement);
    });
  } else {
    movieContainer.innerHTML = `<p>No movies found!</p>`;
  }
}

function updatePaginationControls() {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
  currentPageDisplay.textContent = currentPage;
}

search.addEventListener("input", () => {
  clearTimeout(timerId);
  timerId = setTimeout(async () => {
    const searchValue = search.value.toLowerCase();
    if (searchValue.trim() !== "") {
      currentPage = 1;
      const data = await getMovieDatabase(searchValue, currentPage);
      renderMovies(data);

      if (data && data.totalResults) {
        totalPages = Math.ceil(data.totalResults / 10);
        totalPage.innerHTML = totalPages;
        updatePaginationControls();
        pagination.style.display = "block";
      } else {
        totalPages = 0;
        updatePaginationControls();
        pagination.style.display = "none";
      }
    } else {
      movieContainer.innerHTML = `<p>Please enter a movie name.</p>`;
      pagination.style.display = "none";
    }
  }, 500);
});

prevButton.addEventListener("click", async () => {
  if (currentPage > 1) {
    currentPage--;
    const searchValue = search.value.toLowerCase();
    const data = await getMovieDatabase(searchValue, currentPage);
    renderMovies(data);
    updatePaginationControls();
  }
});

nextButton.addEventListener("click", async () => {
  if (currentPage < totalPages) {
    currentPage++;
    const searchValue = search.value.toLowerCase();
    const data = await getMovieDatabase(searchValue, currentPage);
    renderMovies(data);
    updatePaginationControls();
  }
});


(async function loaded() {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=ram`
    );
    const data = await response.json();
    renderMovies(data)
  } catch (error) {
    console.error(error);
  }
})();