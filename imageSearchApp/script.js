let apiKey = "FfWXC79X7amgo3A-k-_RGECHi8hqaL1uhpRx17YnaTQ";
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=10`;

async function fetchImg() {
    try{
        let response = await fetch(apiUrl);
        let data = await response.json()
        console.log(data);

        let imageContainer = documnet.querySelector("search_image_container")
        data.forEach(image => {
            imageContainer.innerHTML += `
                <div class="search_image">
                    <div class="image">
                        <img src="image.urls.regular" alt="image.alt.description">
                    </div>
                    <a href="image.links.html" target = "_blank">image.alt_description</a>
                </div>
            `
        })
    } catch (error) {
        console.log(error);
    }
}

fetchImg();

window.addEventListener("scroll", () => {
    if(window.scrollY + window.innerHeight + 10 >= document.body.offsetHeight) {
        fetchImg();
    }

    // if (Math.ceil(window.screenY + window.innerHeight >= document.offsetHeight)) {
    //     getPhotos();
    // }
});


// https://demo.100jsprojects.com/image-search-app