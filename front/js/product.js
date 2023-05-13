console.log ("Je travail sur le projet 5")

let url = new URL(location.href); //déclare une variable valant l'url de la page actuelle

let container = url.searchParams.get("id"); //récupère l'id contenu dans l'url de la page actuelle

console.log(container)

const imageProduit = document.getElementById(".item__img");
const nomProduit = document.getElementById("#title");
const prixProduit = document.getElementById("#price");			
const descriptionProduit = document.getElementById("#description");	
const colorProduit = document.getElementById("#colors");
const quantiteProduit = document.getElementById("#quantity");
