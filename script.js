const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.margin = "auto";

let gridY;

const row = () => {
  let gridX = document.createElement("div");
  container.appendChild(gridX);
  gridX.style.display = "flex";
  gridX.style.justifyContent = "center";
  for (let i = 0; i < 16; i++) {
    gridY = document.createElement("div");
    gridX.appendChild(gridY);
    gridY.style.borderStyle = "solid";
    gridY.style.width = "20px";
    gridY.style.height = "20px";
    gridY.style.borderWidth = "1px";
  }
};

const create16Row = () => {
  for (let j = 0; j < 16; j++) {
    row();
  }
};

