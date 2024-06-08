const imagesl = document.querySelector(".images");

const buttonl = document.querySelector(".btn");

buttonl.addEventListener("click", () => {
  imageNum = 10;
  loadNewImages();
});

function loadNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImgl = document.createElement("img");
    newImgl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imagesl.appendChild(newImgl);
  }
}
