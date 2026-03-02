export class TaskFormView {
    #formElement; 
    #inputElement; 
    #submitCallback; 

    constructor(formSelector, inputSelector) {
        this.formElement = document.querySelector(formSelector); 
        this.inputElement = document.querySelector(inputSelector); 

        if (!this.#formElement || !this.#inputElement) {
            throw new Error ("Formulaire ou chap de saisie no trouvé")
        }
    }

    #setupEventListeners() {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            event.stopPropagation(); 
            const title = this.getTitle(); 
            
            if (typeof this.#submitCallback === "function") {
                this.#submitCallback(title); 
                this.clear();
            }
        });
    }

    onSubmit(callback) {
        this.#submitCallback = callback; 
    }

    getTitle() {
        return this.#inputElement.value.trim()
    }

    clear() {
        this.#inputElement.value = ""; 
        this.#inputElement.focus(); 
    }


}

