
// Recuperation ourson selectionné
async function recupOurson() {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    const response = await fetch("http://localhost:3000/api/teddies/" + id);
    if (response.ok) {
        return await response.json();
    } else {
        alert('Désolé, une erreur est survenue! Retour du serveur: ' + response.status);
        window.location.href = 'index.html';
    }
};


