async function fetchHeroes() {
    try {
        const response = await fetch('https://localhost:3000/heroes');

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const heroes = await response.json();

        console.log("liste des héroe" ,heroes);

        for (const hero of heroes) {
            console.log(`${hero.name} - Niveau ${hero.level} - ${hero.class}`);
        }
    } catch (error) {
        console.error(error);
    }
}

async function renderHeroesTable(heroes) {
    // crée tableau 

    const tableHeroes = document.createElement('table'); 
    const headerTexts = ["ID", "Nom", "Niveau", "Classe", "def", "hp", "attaque"];

    for (const headerText of headerTexts) {
        const thElemente = document.createElement('th');
        thElemente.textContent = headerText;
        tableHeroes.append(thElemente);
    }

    document


    

}