// =====================================================
// Kata JS 6 — Mon balcon
// Suis les TODO dans l'ordre. La constante plantes vient de plantes.js.
// =====================================================

// ---------- PARTIE 1 : les fonctions qui CALCULENT ----------
// Elles reçoivent des données et RETOURNENT un résultat.
// Elles ne touchent pas à la page.

// TODO 1 — compterAArroser(liste)
// Retourne le nombre de plantes de la liste dont aArroser vaut true.
function compterAArroser(liste) {
  	let compteur = 0;
		liste.forEach(function (plante) {
	if (plante.aArroser) {
	  	compteur++;
	}
  });
  return compteur;
}

// Vérifie dans la console avant de passer à la suite :
console.log(compterAArroser(plantes)) // doit afficher 4

// TODO 2 — filtrerParLieu(liste, lieu)
// Retourne un NOUVEAU tableau avec seulement les plantes dont le lieu
// est égal au paramètre lieu ("intérieur" ou "extérieur").
function filtrerParLieu(liste, lieu) {
  	const tabLieu = [];
  	liste.forEach(function (plante) {
		if (plante.lieu === lieu) {
	  	tabLieu.push(plante);
	}
  });
  return tabLieu;
}

console.log(filtrerParLieu(plantes, "intérieur")) // doit afficher 4 plantes

// ---------- PARTIE 2 : les fonctions qui AFFICHENT ----------
// Elles modifient la page. Elles ne retournent rien.


// TODO 3 — afficherPlantes(liste)
// 1. Vide la liste <ul id="liste">
// 2. Pour chaque plante, crée un <li> qui contient l'emoji puis le nom
// 3. Si la plante est à arroser, ajoute au <li> la classe "a-arroser"
// 4. Mets à jour <p id="compteur"> : « 4 plantes à arroser sur 8 »
//    (utilise compterAArroser, ne recompte pas ici)

function afficherPlantes(liste) {
    const ul = document.getElementById("liste");
    // Vider la liste
    ul.textContent = "";
    // Parcourir les plantes
    liste.forEach(function(plante) {
        // Créer un élément li
        const li = document.createElement("li");
        // Ajouter emoji et nom
        li.textContent = plante.emoji + " " + plante.nom;
        // Ajouter une classe si elle doit être arrosée
        if (plante.aArroser) {
            li.classList.add("a-arroser");
        }
        // Ajouter le li dans le ul
        ul.appendChild(li);
    });
    // Mettre à jour le compteur
    const nombre = compterAArroser(liste);
    document.getElementById("compteur").textContent =
        nombre + " plantes à arroser sur " + liste.length;
}
// TODO 4 — Au chargement de la page, affiche toutes les plantes.
afficherPlantes(plantes);

// ---------- PARTIE 3 : les clics ----------

// TODO 5 — Les trois boutons de filtre
// Au clic sur « Intérieur » : affiche seulement les plantes d'intérieur.
// Au clic sur « Extérieur » : seulement celles d'extérieur.
// Au clic sur « Toutes » : toutes les plantes.
// Les gestionnaires sont des fonctions fléchées : () => { ... }

const btnInterieur = document.getElementById("btn-interieur");
const btnExterieur = document.getElementById("btn-exterieur");
const btnToutes = document.getElementById("btn-toutes");
// Bouton Intérieur
btnInterieur.addEventListener("click", () => {
    const resultat = filtrerParLieu(plantes, "intérieur");
    afficherPlantes(resultat);
	activerBouton(btnInterieur);
});
// Bouton Extérieur
btnExterieur.addEventListener("click", () => {
    const resultat = filtrerParLieu(plantes, "extérieur");
    afficherPlantes(resultat);
	activerBouton(btnExterieur);
});
// Bouton Toutes
btnToutes.addEventListener("click", () => {
    afficherPlantes(plantes);
	activerBouton(btnToutes);
});

// TODO 6 — Le bouton actif
// Le bouton cliqué prend la classe "actif", les deux autres la perdent.

function activerBouton(bouton) {

    btnInterieur.classList.remove("actif");
    btnExterieur.classList.remove("actif");
    btnToutes.classList.remove("actif");

    bouton.classList.add("actif");
}

// =====================================================
// Questions de recul (réponds en commentaire ici)
// 1.
// 2.
// 3.
// =====================================================
