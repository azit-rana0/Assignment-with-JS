
const apikey = "AHTYJPloAW8VLXrPiUuWXFvh0ZWTUE4DHkU6gKMgVUY";
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

const imageData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};
imageData();

let timerId;
document.addEventListener("scroll", async () => {
  const contentSeenTillNow = window.scrollY + window.innerHeight;
  const offsetHeight = document.body.offsetHeight;
  if (Math.abs(contentSeenTillNow - offsetHeight) <= 10) {
    clearInterval(timerId);
    timerId = setTimeout(async()=> {
      console.log("scroll happing");
      const data = await imageData();
      console.log(data);
      renderData(data);
    },5_00)
  }
});

const renderData = (data) => {
    const container = document.querySelector(".container");
    data.forEach((item) => {
        const image = document.createElement("img");
        image.src = item.urls.regular;
        image.alt = item.alt_description;
        container.appendChild(image);
    })
}

// when page load first time then it will call
(async () => {
    const data = await imageData();
    renderData(data);
})();

// for handel scroll page event with these two function
// console.log("offsetHeight: " + document.body.offsetHeight);
// console.log("window.innerHeight: " + window.innerHeight);
// console.log("window.scrollY: " + window.scrollY);


