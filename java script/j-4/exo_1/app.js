import { counter } from "./counter.js";

counter.init(document.body); 


const modal = document.getElementById("modal");

modal.addEventListener("click", function (event){
    console.log(event.target);
    
})