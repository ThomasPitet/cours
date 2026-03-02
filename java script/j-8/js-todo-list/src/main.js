import { Task } from "./models/taches";

const tache1json = {
    title: "Première tâche"

}; 

const tache1 = Task.fromJSON(taskdata); 
console.log(task.toJSON);
task.updateTitle("Nouvelle tâche"); 
console.log(tache1.toJSON());

import "./style.css"; 
import { TaskConstroller } from "./views/TaskController";

document.addEventListener("DOMContentLoaded", () => {
    new TaskConstroller(); 
});