import { dropdown } from "./navigation.js";
const navBtn = document.querySelector("#nav-btn");
navBtn.onclick = dropdown;

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const btnCap = document.querySelector("#cap-exec");


const exceptionArray = ["a", "the", "an", "about", "above", "across", "after", "against", "along",
	"among", "around", "at", "before", "behind", "between", "beyond", "but", "by",
	"concerning", "despite", "down", "during", "except", "following", "for", "from",
	"in", "including", "into", "like", "near", "of", "off", "on", "onto", "out", "over",
	"past", "plus", "since", "throughout", "to", "towards", "under", "until", "up", "upon",
	"up to", "with", "within", "without", "and"];

btnCap.onclick = () => {
	const array = input.value.split(" ");

	const resultArray = array.map(word => {
		if (!exceptionArray.includes(word)) {
			return word = word.charAt(0).toUpperCase() + word.slice(1);
		} else return word;
	});

	output.value = resultArray.join(" ");
};