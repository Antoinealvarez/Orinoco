
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


//Affichage ourson selectionné
async function affichOurson() {
    const data = await recupOurson()
    let oursChoisi = document.createElement('article');
    let oursImage = document.createElement('img');
    let oursNom = document.createElement('h3');
    let oursDescri = document.createElement('p');
    let oursPrix = document.createElement('p');
    let oursListColor = document.createElement('select');

    const calculMontantOurson = () => {
        return data.price / 100;
    }

    oursImage.src = data.imageUrl;
    oursNom.textContent = data.name;
    oursDescri.textContent = data.description;
    oursPrix.textContent = 'Prix: ' + calculMontantOurson() + '€';

    let section = document.querySelector('#produit');
    section.appendChild(oursChoisi);
    oursChoisi.appendChild(oursImage);
    oursChoisi.appendChild(oursNom);
    oursChoisi.appendChild(oursDescri);
    oursChoisi.appendChild(oursPrix);
    oursChoisi.appendChild(oursListColor);

    //Selection couleur 
    let colors = data.colors;
    for (let color of colors) {
        let choixCouleur = document.createElement('option');
        choixCouleur.textContent = color;
        oursListColor.appendChild(choixCouleur);
    }
}



affichOurson();
