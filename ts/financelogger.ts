import { Invoice } from "./invoice.js" 
import { Payment } from "./payment.js" 
import { HasFormatter } from "./hasFormatter.js";
import { ListTemplate } from "./listtemplate.js";

const navBtn = document.querySelector("#nav-btn") as HTMLButtonElement;
const dropdown = () => {
    document.querySelector(".nav-list")!.classList.toggle("nav-list-show")!;
}
navBtn.addEventListener("click", dropdown);

const type = document.querySelector("#fin-type") as HTMLSelectElement;
const tofrom = document.querySelector("#fin-tofrom") as HTMLInputElement;
const details = document.querySelector("#fin-details") as HTMLInputElement;
const amount = document.querySelector("#fin-amount") as HTMLInputElement;
const addBtn = document.querySelector("#fin-add") as HTMLButtonElement;
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

const add = () => {    
    let doc: HasFormatter;
    if ( type.value === "invoice" ) {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    
    list.render(doc, type.value, "end");
}

addBtn.addEventListener("click", add);
