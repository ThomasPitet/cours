import { TaskManager } from "../managers/TaskManager";
import { TaskFormview } from "../views/TaskFromView";
import { TaskListView } from "../views/TaskListVew";

export class TaskController {
  #manager;
  #views;
  #updateAllViews

  constructor() {
    this.#manager = new TaskManager();

    this.#views = {
      form: new TaskFormview("#task-form", "#task-imput"),
      list: new TaskListView("#task-list"),
    };

    this.#init();
  }

  #init() {
    this.#manager.on("task:added", (data) => {
      console.log(`Tâche ajoutée : ${data.task.title}`);
    });
  }


  #updateAllViews() {
    this.#views.list.render(this.#manager.getAll());
  
  }

  #saveToStorage() {
    try {
        const json = JSON.stringify(this.#manager.getAllToJSON());
        localStorage.setItem("tasks", json);
    } catch (error) {
        console.error("erreur de sauvegarde", error);
    }
    }

    #loadFromStorage() {
        try {
            const json = localStorage.getItem("tasks");
            if (json) {
                this.#manager.loadFromJSON(JSON.parse(json));
            }
        } catch (error) {
            console.error("erreur de chargement", error);
        }
    }

    

}