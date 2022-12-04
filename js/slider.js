import { dropdown } from "./navigation.js";
const navBtn = document.querySelector("#nav-btn");
navBtn.onclick = dropdown;

const images = document.querySelectorAll("#gallery img");
const btnPrev = document.querySelector("#gallery-btn-prev");
const btnNext = document.querySelector("#gallery-btn-next");

let i = 0;

btnPrev.onclick = () => {
    images[i].style.display = "none";
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = "block";
};

btnNext.onclick = () => {
    images[i].style.display = "none";
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].style.display = "block";
};

