export class Task {
    #id ;
    #title;
    #completed;
    #createdAt; 

    constructor(title, id = crypto.randomUUID, comptleted = false, createdAt = new Date(),) {

    if (typeof title !== "string" || this.trim() === "")
        throw new Error("Le titre doit être une chaîne de caractèrenon vide")

    this.#id = id; 
    this.#title = title; 
    this.#completed = completed; 
    this.#createdAt = createdAt; 

    }


    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get completed() {
        return this.#completed;
    }

    get createdAt() {
        return this.#createdAt;
    }

    // ? Méthode métier 
    toggle() {
        this.#completed = ! this.#completed; 
    }

    toJSON() {
        return {
            id: this.#id,
            title: this.#title,
            completed: this.#completed,
            createdAt: this.#createdAt,
        }
    }

    static fromJSON(json) {
        return new Task(json.title, json.id, json.completed, json.createdAt); 
    }
}