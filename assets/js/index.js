import { dropdown } from "./navigation.js";
const navBtn = document.querySelector("#nav-btn");
navBtn.onclick = dropdown;

const purr = document.querySelector("img");

purr.onclick = () => new Audio("assets/audio/purr.mp3").play();