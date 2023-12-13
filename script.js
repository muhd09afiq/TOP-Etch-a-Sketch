const size = "1px";
const containerSize = size * 16;

const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.flexDirection = "column";
container.style.width = containerSize;
container.style.height = containerSize;

let gridY;

const test = () => {
  let gridX = document.createElement("div");
  container.appendChild(gridX);
  gridX.style.display = "flex";
  for (let i = 0; i < 16; i++) {
    gridY = document.createElement("div");
    gridX.appendChild(gridY);
    gridY.style.borderStyle = "solid";
    gridY.style.width = "20px";
    gridY.style.height = "20px";
    gridY.style.borderWidth = "1px";
  }
};

for (let j = 0; j < 16; j++) {
  test();
}
