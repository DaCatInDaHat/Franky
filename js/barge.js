import { dropdown } from "./navigation.js";
const navBtn = document.querySelector("#nav-btn");
navBtn.onclick = dropdown;

const stages = document.querySelector("#stages");
const loadCount = document.querySelector("#load-count");
const prepareBargeBtn = document.querySelector("#prepare");
const loadGrainBtn = document.querySelector("#load");
const shipYard = document.querySelector("#shipyard");
const columns = shipYard.children;
let levels = [];
const createLevel = (column, dotclass, color) => {
    const level = document.createElement("div");
    level.setAttribute("class", dotclass);
    level.style.backgroundColor = color;
    column.appendChild(level);
};
let isHole = (array2d, x, y) => {
    let resultRight = false;
    let resultLeft = false;
    for (let j = x; j >= 0; j--) {
        if (array2d[j][y] !== undefined) {
            resultLeft = true;
        }
    }
    for (let i = x; i < array2d.length; i++) {
        if (array2d[i][y] !== undefined) {
            resultRight = true;
        }
    }
    if (resultLeft === true && resultRight === true) {
        return true;
    }
    else
        return false;
};
prepareBargeBtn.onclick = () => {
    levels = Array(10).fill(null).map(() => Math.round(Math.random() * 10));
    for (let i = 0; i < levels.length; i++) {
        createLevel(shipYard, "barge-level", "inherit");
        for (let n = 0; n < levels[i]; n++) {
            createLevel(columns[i], "barge-cell", "#7B3F00");
        }
    }
    stages.value = levels;
    prepareBargeBtn.disabled = true;
};
loadGrainBtn.onclick = () => {
    let result = 0;
    let levels2d = levels.map(row => new Array(row).fill(1));
    let levelMaxLength = Math.max(...levels);
    for (let x = 0; x < levels2d.length; x++) {
        let level = levels2d[x];
        for (let y = 0; y < levelMaxLength; y++) {
            let cell = level[y];
            if (cell === undefined) {
                if (isHole(levels2d, x, y)) {
                    result++;
                    createLevel(columns[x], "barge-cell", "yellow");
                }
            }
        }
    }
    loadCount.value = result;
    loadGrainBtn.disabled = true;
};
