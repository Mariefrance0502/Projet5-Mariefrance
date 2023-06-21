// DECLARATION DES VARIABLES 
UrlCart = ("http://localhost:3000/api/products/ + id + order")
console.log(UrlCart); 
// Recupérer mon contenue du local storage 
let cartFromLocalStorage = JSON.parse(localStorage.getItem("ProductCart"));
console.log(cartFromLocalStorage);  



// Gestion du panier 

const basketGestion = () => {
  // si le panier est vide : afficher 'le panier est vide'
  if(cartFromLocalStorage === null || cartFromLocalStorage === 0) {
    document.getElementById("cart__items").innerHTML =`<div class="cart__empty">
<h2>Votre panier est vide ! <br> Merci de sélectionner des produits depuis la page d'accueil</h2>
</div>`;
} 
}




// DECLARATION DES FONCTIONS 
// Pour chaque contenue afficher les informations qui lui sont propre au l'aide d'une boucle 
const informationProduct = (product => {     
  // expression initiale; condition; incrémentation
  for (i = 0; i < cartFromLocalStorage.length; i++) {
    product.push(cartFromLocalStorage[i].id);
    document.getElementById("cartAndFormContainer").innerHTML += `<article class="cart__item" data-id="${addToLocalStorage[i].ProductId}" data-color="${addToLocalStorage.color}">
    <div class="cart__item__img">
      <img src="${addToLocalStorage[i].products.imageUrl}}" alt="${addToLocalStorage[i].alt}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__titlePrice">
        <h2>${addToLocalStorage[i].name}</h2>
        <p>${addToLocalStorage[i].color}</p>

      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${addToLocalStorage[i].quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>
console.log(informationProduct);
  }
})













// Créer une fonction qui me permet de supprimer un article 







// Creér une fonction qui me permet de calculer le prix total de nombre d'articles dans mon panier 






// Créer une fonction qui me permet de verifier si tous les champs du formulaire ont étés remplie 

      
       
 
// 


























