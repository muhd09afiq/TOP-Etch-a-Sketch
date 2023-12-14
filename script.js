const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.flexDirection = "column";
container.style.width = "720px";
container.style.height = "720px";
container.style.borderStyle = "solid";
container.style.margin = "auto";

let gridY;
let gridX;
let gridNumber;
let pixelSize;

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
    gridY.style.width = "60px";
    gridY.style.height = "60px";
    gridY.style.borderColor = "black";
    gridY.style.borderWidth = "0";
  }
};

const create16Row = () => {
  for (let j = 0; j < 16; j++) {
    row();
  }
};

create16Row();

const myBtn = document.querySelector("button");
myBtn.addEventListener("click", () => {
  const selectNewGrid = document.querySelectorAll(".kuda");
  selectNewGrid.forEach(function (selectNewGrid) {
    selectNewGrid.remove();
  });

  gridNumber = prompt("Enter grid size", "Max is 100");
  gridNumber = gridNumber * 1;
  pixelSize = 720 / gridNumber;
  pixelSize = pixelSize + "px";

  const row = () => {
    gridX = document.createElement("div");
    container.appendChild(gridX);
    gridX.style.display = "flex";
    gridX.style.justifyContent = "center";
    for (let i = 0; i < gridNumber; i++) {
      gridY = document.createElement("div");
      gridY.classList.add("kuda");
      gridX.appendChild(gridY);
      gridY.style.borderStyle = "solid";
      gridY.style.width = pixelSize;
      gridY.style.height = pixelSize;
      gridY.style.borderColor = "black";
      gridY.style.borderWidth = "0";
    }
  };

  const create16Row = () => {
    for (let j = 0; j < gridNumber; j++) {
      row();
    }
  };

  create16Row();
  const selectUpdatedGrid = document.querySelectorAll(".kuda");
  selectUpdatedGrid.forEach(function (selectUpdatedGrid) {
    selectUpdatedGrid.addEventListener("mouseover", () => {
      selectUpdatedGrid.style.backgroundColor = "blue";
    });
  });
});

const selectGrid = document.querySelectorAll(".kuda");

selectGrid.forEach(function (selectGrid) {
  selectGrid.addEventListener("mouseover", () => {
    selectGrid.style.backgroundColor = "blue";
  });
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  const selectGrid1 = document.querySelectorAll(".kuda");
  selectGrid1.forEach(function (selectGrid1) {
    selectGrid1.style.backgroundColor = "white";
  });

});
