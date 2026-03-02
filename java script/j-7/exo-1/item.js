export class item {
    #name; 
    #type; 
    #value; 
    #description; 

    constructor(name, type, value, description) {
        this.#name = name;
        this.#type = type;
        this.#value = value;
        this.#description = description;
    }

    displayInfos() {
        console.group(`[${this.#type}]`)
    }
}