# Unsplash Image Fetcher

This project integrates the Unsplash API to create a dynamic web page that fetches beautiful images based on user interaction. It includes features like infinite scrolling, search functionality, and a "Load More" button for a seamless user experience.

## 🌟 Hosted Link

[Link to the live demo]()

## 🚀 Features:

1. **Initial Load**: Fetches 10 random images when the page loads.

2. **Infinite Scrolling**: Automatically loads 10 more images when the last image becomes visible.
3. **Search Functionality**: Users can enter a keyword (e.g., "nature", "city") to fetch relevant images.
4. **Load More Button**: Allows users to manually load additional images for the current search term.
5. **Responsive Design**: The interface dynamically updates to handle user inputs and API responses.

## 🛠 How It Works:

### API Integration

- **Random Images API**:

Used when no search term is entered:
https://api.unsplash.com/photos/random/?client_id={API_KEY}&count=10

- **Search API**:

Used when a search term is provided:
https://api.unsplash.com/search/photos?client_id={API_KEY}&query={searchTerm}&per_page=10

### Dynamic Functionality

1. **Infinite Scroll with Intersection Observer**:

   Automatically fetches new images when the last loaded image is in the viewport.

2. **Search & Load More**:

- The user enters a search term in the input box and clicks the "Search" button to fetch relevant images.

- "Load More" button fetches 10 additional images for the current search term.

## 💻 Code Structure

### HTML

- Contains input for search, "Search" button, and a "Load More" button.
- A container (.search_image_container) is used to display the images dynamically.

### CSS

- Styled for a clean and responsive layout.
- Ensures images and buttons align well across devices.

### JavaScript

- Handles API requests and DOM manipulation.
- Manages states for search queries and triggers infinite scrolling when the last image is visible.

## 🛠 Tools & Technologies

- **HTML/CSS/JavaScript**
- **Unsplash API** for fetching images
- **Intersection Observer API** for infinite scroll
- **Fetch API** for asynchronous requests

## 📄 How to Use

1. Clone the repository:

```
git clone https://github.com/your-username/unsplash-image-fetcher.git
```

2. Add your **Unsplash API key** to the script.
3. Open <code> index.html </code> in your browser.
4. Start exploring images! 🌟

## 🔑 Key Learnings

1. Working with **public APIs** for dynamic data fetching.
2. Efficient use of **Intersection Observer** for infinite scrolling.
3. Handling asynchronous code with <code> async/await </code> and error handling.
4. Building responsive and user-friendly interfaces.

## 📷 Preview

(Add a screenshot of your project here)

## 👥 Author

## [Azit Rana](https://www.linkedin.com/in/azitrana/)

Feel free to connect with me on LinkedIn or contribute to this project by opening an issue or pull request!
