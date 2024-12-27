const body = document.querySelector("body");
body.style.width = "100%";
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.background = "#80808099";

const dom = document.querySelector("#dom");
dom.style.fontFamily = "Arial";
dom.style.height = "230px";
dom.style.width = "300px";
dom.style.fontSize = "1.2rem";
dom.style.color = "blue"
dom.style.border = "0.1px solid red";
dom.innerText = "Hello, I'm a div!";
dom.style.backgroundColor = "#FFFE01";
dom.style.borderRadius = "10px";
dom.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.758)";
dom.style.display = "flex";
dom.style.justifyContent = "center";
dom.style.alignItems = "center";
dom.style.transition = "all 1s ease";


dom.addEventListener("click", () => {
  dom.innerText = "Now, I'm Rana!";
  console.log(`Azit`);
});

// mouseover and mouseenter both are same
dom.addEventListener("mouseenter", () => {
  console.log(`rana`);
  dom.style.backgroundColor = "red";
  dom.style.border = "0.1px solid yellow";
  dom.style.fontSize = "2rem";
  dom.style.color = "yellow";
});

// muouseout and mouseleave both are same
dom.addEventListener("mouseleave", () => {
  dom.style.backgroundColor = "#FFFE01";
  dom.style.border = "0.1px solid red";
  dom.style.fontSize = "1.2rem";
  dom.style.color= "blue"
});
