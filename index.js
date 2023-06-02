let width = 33.33; // Initialise la barre de progression à 1/3
let currentForm = 1;
function move() {
    
    // Cacher le formulaire actuel
    document.getElementById(`form-${currentForm}`).classList.add('hidden');

    // Passer au formulaire suivant
    currentForm += 1;
     // Mettre à jour le numéro de la question
    document.getElementById("QT").innerText = `Question ${currentForm-1}/3`;

    // Afficher le formulaire suivant s'il existe
    if (document.getElementById(`form-${currentForm}`)) {
        document.getElementById(`form-${currentForm}`).classList.remove('hidden');
    } else {
        // Si c'était le dernier formulaire, affichez les résultats ou faites autre chose ici
        // Afficher le GIF de chargement
        let loadingGif = document.getElementById('loading-gif');
        loadingGif.classList.remove('hidden-gif');
        // Attendre que le GIF soit chargé
        loadingGif.onload = function() {
            // Redirige vers la page de résultats après un délai
            setTimeout(function() {
                window.location.href = "resultats.html";
            }, 5000); // Remplacez 5000 par la durée de votre GIF en millisecondes
        }
    }

    // Gestion de la Barre de chargement
    if (width >= 99.98) {
            window.location.href = "resultats.html"; // Redirige vers la page de résultats
        } else {
            width += 33.33; // Augmente la barre de progression de 33.33%
            let elem = document.getElementById("progress-bar"); 
            elem.style.width = width + '%'; 
        }
}
