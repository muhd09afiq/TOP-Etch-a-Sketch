const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.margin = "auto";

let gridY;
let gridX;

const row = () => {
  gridX = document.createElement("div");
  container.appendChild(gridX);
  gridX.style.display = "flex";
  gridX.style.justifyContent = "center";
  for (let i = 0; i < 16; i++) {
    gridY = document.createElement("div");
    gridY.classList.add("kuda");
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

create16Row();

const selectGrid = document.querySelectorAll(".kuda");
selectGrid.forEach(function (selectGrid) {
  selectGrid.addEventListener("mouseover", () => {
    selectGrid.style.backgroundColor = "blue";
  });
});
