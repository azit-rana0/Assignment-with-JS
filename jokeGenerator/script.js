document.addEventListener("DOMContentLoaded", () => {
    const jokeText = document.getElementById("joke_text");
    const jokeButton = document.getElementById("joke_button");

    jokeButton.addEventListener("click", fetchJoke);

    async function fetchJoke() {
        try {
            jokeText.textContent = "Updating...😂";
            jokeButton.disabled = true;
            jokeButton.textContent = "Loading...";

            const response = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", {
                headers: { "X-Api-Key": "ZDkXVm5qN3pKYR2TtPu03A==xxJvpFunYQlPIkGU" },
            });

            const data = await response.json();
            jokeButton.disabled = false;
            jokeButton.innerText = "Tell me a joke";
            if (data && data.length > 0) {
                jokeText.textContent = data[0].joke;
            }
            else {
                jokeText.textContent = "Couldn't fetch a joke! 🥲 Try again."
            }
        } catch (error) {
            jokeText.textContent = "Oops! Somting went wrong."
            jokeButton.disabled = false;
            jokeButton.innerText = "Tell me a joke";
            console.error(error);

        }
    }
});