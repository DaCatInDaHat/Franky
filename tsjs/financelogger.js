import { Invoice } from "./invoice.js";
import { Payment } from "./payment.js";
import { ListTemplate } from "./listtemplate.js";
const navBtn = document.querySelector("#nav-btn");
const dropdown = () => {
    document.querySelector(".nav-list").classList.toggle("nav-list-show");
};
navBtn.addEventListener("click", dropdown);
const type = document.querySelector("#fin-type");
const tofrom = document.querySelector("#fin-tofrom");
const details = document.querySelector("#fin-details");
const amount = document.querySelector("#fin-amount");
const addBtn = document.querySelector("#fin-add");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
const add = () => {
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
};
addBtn.addEventListener("click", add);
