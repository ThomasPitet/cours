// ============================================
// SYSTÈME DE CRAFTING ASYNCHRONE - MINECRAFT
// ============================================

// État des ressources
const resources = {
    ferBrut: 0,
    bois: 0,
    planche: 0,
    baton: 0,
    lingotFer: 0
};

// Recettes de crafting
const recipes = {
    planche: {
        cout: { boisBrut: 1 },
        temps: 200,
        quantite: 4,
        nom: 'Planche'
    },
    baton: {
        cout: { planche: 1 },
        temps: 200,
        quantite: 2,
        nom: 'Bâton'
    },
    lingotFer: {
        cout: { ferBrut: 1 },
        temps: 2000,
        quantite: 1,
        nom: 'Lingot de Fer'
    },
    epee: {
        cout: { baton: 1, lingotFer: 2 },
        temps: 5000,
        quantite: 1,
        nom: 'Épée'
    },
    pioche: {
        cout: { baton: 2, lingotFer: 3 },
        temps: 5000,
        quantite: 1,
        nom: 'Pioche'
    }
};

// Qualités possibles
const qualities = ['Commune', 'Rare', 'Épique', 'Légendaire'];

// ============================================
// FONCTIONS ASYNCHRONES
// ============================================

// Récupérer du fer brut (asynchrone)
function collectFerBrut() {
    return new Promise((resolve, reject) => {
        logCrafting('⛏️  Récupération de fer brut en cours...');
        
        setTimeout(() => {
            resources.ferBrut += 1;
            logCrafting('✅ +1 Fer brut récupéré! (Total: ' + resources.ferBrut + ')');
            resolve(resources.ferBrut);
        }, 1500);
    });
}

// Récupérer du bois (asynchrone)
function collectBois() {
    return new Promise((resolve, reject) => {
        logCrafting('🪵 Récolte de bois en cours...');
        
        setTimeout(() => {
            resources.bois += 1;
            logCrafting('✅ +1 Bois récupéré! (Total: ' + resources.bois + ')');
            resolve(resources.bois);
        }, 1500);
    });
}

// Vérifier les ressources disponibles
function verifyResources(recipeKey) {
    const recipe = recipes[recipeKey];
    const cout = recipe.cout;
    
    for (let ressource in cout) {
        const key = ressource === 'ferBrut' ? 'ferBrut' : 
                    ressource === 'boisBrut' ? 'bois' :
                    ressource === 'planche' ? 'planche' :
                    ressource === 'baton' ? 'baton' :
                    'lingotFer';
        
        if (!resources[key] || resources[key] < cout[ressource]) {
            return Promise.reject(
                ' Re""ssources insuffisantes! Il faut ' + cout[ressource] + ' ' + ressource
            );
        }
    }
    
    return Promise.resolve(true);
}

// Consommer les ressources
function consumeResources(recipeKey) {
    const recipe = recipes[recipeKey];
    const cout = recipe.cout;
    
    for (let ressource in cout) {
        const key = ressource === 'ferBrut' ? 'ferBrut' : 
                    ressource === 'boisBrut' ? 'bois' :
                    ressource === 'planche' ? 'planche' :
                    ressource === 'baton' ? 'baton' :
                    'lingotFer';
        
        resources[key] -= cout[ressource];
    }
    
    logCrafting('🔨 Consommation des ressources...');
    return Promise.resolve();
}

// Étape de transformation (simulation du travail)
function transformStep(recipeKey, stepNumber, totalSteps) {
    return new Promise((resolve) => {
        const recipe = recipes[recipeKey];
        const recipe_name = recipe.nom;
        
        logCrafting('   Étape ' + stepNumber + '/' + totalSteps + ' : Transformation en cours...');
        
        setTimeout(() => {
            logCrafting('  ✓ Étape ' + stepNumber + ' terminée');
            resolve();
        }, recipe.temps / totalSteps);
    });
}

// Générer une qualité aléatoire
function generateQuality() {
    const randomQuality = Math.floor(Math.random() * qualities.length);
    return qualities[randomQuality];
}

// Étape finale de finition
function finishingStep(recipeKey) {
    return new Promise((resolve) => {
        logCrafting('  ✨ Finition et polissage...');
        
        setTimeout(() => {
            const quality = generateQuality();
            logCrafting('  ✓ Qualité obtenue : ' + quality);
            resolve(quality);
        }, 1000);
    });
}

// Ajouter l'objet crafté à l'inventaire (simulation)
function addToInventory(recipeKey, quality) {
    return Promise.resolve({
        nom: recipes[recipeKey].nom,
        qualite: quality,
        timestamp: new Date().toLocaleTimeString()
    });
}

// ============================================
// FONCTION PRINCIPALE DE CRAFTING
// ============================================

function craftItem(recipeKey) {
    const recipe = recipes[recipeKey];
    
    logCrafting('');
    logCrafting('═══════════════════════════════════════');
    logCrafting('🎮 LANCEMENT DU CRAFTING: ' + recipe.nom);
    logCrafting('═══════════════════════════════════════');
    
    // Chaînage de Promises
    return verifyResources(recipeKey)
        .then(() => {
            logCrafting('✓ Ressources vérifiées');
            return consumeResources(recipeKey);
        })
        .then(() => {
            logCrafting('🔥 Début du processus de fabrication...');
            // Exécuter 3 étapes de transformation
            return Promise.resolve()
                .then(() => transformStep(recipeKey, 1, 3))
                .then(() => transformStep(recipeKey, 2, 3))
                .then(() => transformStep(recipeKey, 3, 3));
        })
        .then(() => finishingStep(recipeKey))
        .then((quality) => addToInventory(recipeKey, quality))
        .then((item) => {
            logCrafting('');
            logCrafting('🎉 CRAFTING RÉUSSI!');
            logCrafting('📦 Objet obtenu: ' + item.nom + ' de qualité ' + item.qualite);
            logCrafting('═══════════════════════════════════════');
            logCrafting('');
            
            // Mettre à jour l'affichage des ressources
            updateResourceDisplay();
            
            return item;
        })
        .catch((error) => {
            logCrafting('');
            logCrafting(error);
            logCrafting('═══════════════════════════════════════');
            logCrafting('');
            return null;
        });
}

// ============================================
// FONCTIONS D'AFFICHAGE
// ============================================

function logCrafting(message) {
    console.log(message);
    
    // Ajouter au journal dans l'interface
    const journal = document.getElementById('crafting-log');
    if (journal) {
        const logEntry = document.createElement('div');
        logEntry.textContent = message;
        logEntry.style.padding = '4px 0';
        journal.appendChild(logEntry);
        journal.scrollTop = journal.scrollHeight; // Scroll automatique
    }
}

function updateResourceDisplay() {
    document.getElementById('fer-count').textContent = resources.ferBrut;
    document.getElementById('bois-count').textContent = resources.bois;
    document.getElementById('planche-count').textContent = resources.planche;
    document.getElementById('baton-count').textContent = resources.baton;
    document.getElementById('lingot-count').textContent = resources.lingotFer;
}

// ============================================
// INITIALISATION DES ÉVÉNEMENTS
// ============================================

function init() {
    // Boutons de récolte
    document.getElementById('collect-fer').addEventListener('click', () => {
        collectFerBrut()
            .then(() => updateResourceDisplay())
            .catch(err => logCrafting('❌ Erreur: ' + err));
    });
    
    document.getElementById('collect-bois').addEventListener('click', () => {
        collectBois()
            .then(() => updateResourceDisplay())
            .catch(err => logCrafting('❌ Erreur: ' + err));
    });
    
    // Boutons de crafting
    document.getElementById('craft-planche').addEventListener('click', () => {
        craftItem('planche');
    });
    
    document.getElementById('craft-baton').addEventListener('click', () => {
        craftItem('baton');
    });
    
    document.getElementById('craft-lingot').addEventListener('click', () => {
        craftItem('lingotFer');
    });
    
    document.getElementById('craft-epee').addEventListener('click', () => {
        craftItem('epee');
    });
    
    document.getElementById('craft-pioche').addEventListener('click', () => {
        craftItem('pioche');
    });
    
    // Clear log
    document.getElementById('clear-log').addEventListener('click', () => {
        document.getElementById('crafting-log').innerHTML = '';
    });
    
    logCrafting('🎮 Système de crafting initialisé!');
    updateResourceDisplay();
}

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
