import { EventEmitter } from "../utils/EventEmitter";
import { Task } from "../models/task"

export class TaskManager extends EventEmitter {
    #tasks; 

    constructor() {
        this.#tasks = []; 
    }

    // ? create 
    add(taskTitle) {
        const newTask = new Task(taskTitle); 
        this.#tasks.push(newTask); 
        this.emit("task:added", {task: newTask})
        this.emit("task:changed", {task: []})



        return newTask; 
    }

    remove(taskId) {
        const taskToDelete = this.#tasks.find((task) => task.id === taskId); 

        if (taskToDelete) {
            this.#tasks = this.#tasks.filter((task) => task.id !== taskId); 
            this.emit("task:removed", {task: taskToDelete});
            this.emit("task:changed", {task: this.getall()});
            
            return true; 
         
        }

        return false;
    }

    toggle(taskId) {
        const taskToToggle = this.#tasks.find((task) => task.id === taskId);

        if (taskTotoggle) {
            taskTotoggle.toggle(); 
            this.emit("task:toggle", {task: taskToToggle});
            this.emit("task:changed", {task: this.getall()});

            return true; 

        }
        
        return false;
    }

    update(taskId, newTitle) {
        const taskToUpdate = this.#tasks.find((task) => task.id === taskId);

        if (taskToUpdate) {
            taskToUpdate.update(newTitle); 
            this.emit("task:update", {task: taskToUpdate});
            this.emit("task:changed", {task: this.getall()});

            return true; 
        }

        return false; 
        
    }

    getAllToJSON() {
        return this.#tasks.maps((task) => task.toJSON());
    }

    loadFromJSON(jsonTasks) {
        this.#tasks = jsonTasks

    getById(); {
        return this.#tasks.find((task) => task.id === taskId);
    }
}
}
