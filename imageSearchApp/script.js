let apiKey = "8X3HPiY-SmaataqCPs1wP_ZiQAEdmd00x2diMifurv0";
let searchQuery = "";
const imageContainer = document.querySelector(".search_image_container");
const searchBtn = document.getElementById("search-btn");
const loadMoreBtn = document.getElementById("load-more");

let isFetching = false;

async function fetchImg(searchTerm = "", isLoadMore = false) {
  try {
    const apiUrl = searchTerm
      ? `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchTerm}&per_page=10`
      : `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=10`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const images = data.results || data;

    if (!isLoadMore) imageContainer.innerHTML = "";

    images.forEach((image) => {
      imageContainer.innerHTML += `
    <div class="search_image">
    <div class="image">
      <img src="${image.urls.regular}" alt="${image.alt_description}">
    </div>
    <a href="${image.links.html}" target="_blank">${
        image.alt_description || "No description available"
      }</a>
  </div>
`;
    });

    if (searchTerm) {
      loadMoreBtn.style.display = "inline-block";
    } else {
      loadMoreBtn.style.display = "none";
    }
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

searchBtn.addEventListener("click", () => {
  const searchInput = document.getElementById("search-input");
  searchQuery = searchInput.value.trim();

  if (searchQuery) {
    fetchImg(searchQuery);
  } else {
    alert("Please enter a search term.");
  }
});

loadMoreBtn.addEventListener("click", () => {
  if (searchQuery) {
    fetchImg(searchQuery, true);
  }
});

fetchImg();

// **Trigger fetching more images on scroll**
// window.addEventListener("scroll", () => {
//   if (
//     window.scrollY + window.innerHeight >= document.body.offsetHeight - 10 &&
//     !isFetching 
//   ) {
//     fetchImg(); 
//   }
// });