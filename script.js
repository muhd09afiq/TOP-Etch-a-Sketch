const size = "20px";
const containerSize = size * 16;

const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.flexDirection = "column";
container.style.width = containerSize;
container.style.height = containerSize;

const column = () => {
  for (let i = 0; i < 16; i++) {
    let gridX = document.createElement("div");
    container.appendChild(gridX);
    let gridY = document.createElement("div");
    gridX.appendChild(gridY);
    // gridX.style.borderStyle = "solid";
    // gridX.style.width = "10px";
    // gridX.style.width = size;
    // gridX.style.height = size;
    gridX.style.display = 'flex';
    gridY.style.borderStyle = "solid";
    gridY.style.width = "10px";
    gridY.style.width = size;
    gridY.style.height = size;
  }
};

const row = () => {
  for (let i = 0; i < 16; i++) {
    let gridX = document.createElement("div");
    container.appendChild(gridX);
    gridX.style.borderStyle = "solid";
    gridX.style.width = "10px";
    // gridX.textContent = ".";
    gridX.style.width = size;
    gridX.style.height = size;
  }
};

// const box = () => {
//   for (let i = 0; i < 16; i++) {
//     column();
//   }
// };

column();
