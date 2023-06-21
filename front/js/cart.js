// DECLARATION DES VARIABLES 
UrlCart = ("http://localhost:3000/api/products/ + id + order")
console.log(UrlCart); 
let addToLocalStorage  = JSON.parse(localStorage.getItem('ProductCart'));
console.log(addToLocalStorage); 
let cartAndFormContainer = document.getElementById("cartAndFormContainer");
console.log(cartAndFormContainer);


let products= [];   
console.log(products); 





const addProductInCart = () => {
    

    // si le panier est vide : afficher 'le panier est vide'
    if(addToLocalStorage === null || addToLocalStorage === 0) {
        document.querySelector("#cart__items").innerHTML =`<div class="cart__empty">
    <h2>Votre panier est vide ! <br> Merci de sélectionner des produits depuis la page d'accueil</h2>
  </div>`;
} else {
  let itemCart = []; 
  for (i = 0; i < addToLocalStorage.length; i++) {
    products.push(addToLocalStorage[i].id);
  
    // le code suivant sera injecté à chaque tour de boucle
    // selon la longueur des produits dans le local storage
    document.getElementById("cartAndFormContainer").innerHTML + `<article class="cart__item" data-id="${addToLocalStorage[i].ProductId}" data-color="${addToLocalStorage.color}">
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
      `;
    }
}
 



}




/*

// si le panier n'est pas vide : afficher les produits dans le localStorage
else{
  let itemCards = [];

  // expression initiale; condition; incrémentation
  for (i = 0; i < addToLocalStorage.length; i++) {
  products.push(addToLocalStorage[i].id);

  // le code suivant sera injecté à chaque tour de boucle
  // selon la longueur des produits dans le local storage
  itemCards = itemCards + `
    
    <article class="cart__item" data-id="${addToLocalStorage[i].ProductId}" data-color="${addToLocalStorage.color}">
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
    `;
  }
  if (i === addToLocalStorage.length) {
  const itemCart = document.getElementById('cart__items');
  itemCart.innerHTML += itemCards;
  }


  // je modifie la quantité dans le panier
function changeQtt() {
  let itemQtt = document.querySelectorAll('.itemQuantity');
  for (let j = 0; j < itemQtt.length; j++) {
    itemQtt[j].addEventListener('change', (event) => {
    event.preventDefault();
    // sélection de la nouvelle quantité...
    // ... qu'on va sauvegarder dans un nouveau tableau
   // avec les autres éléments du localStorage
    let itemNewQtt = itemQtt[j].value;
      const newLocalStorage = {
      id: addToLocalStorage[j].id,
      image: addToLocalStorage[j].image,
      alt: addToLocalStorage[j].alt,
      name: addToLocalStoragee[j].name,
      color: addToLocalStoragee[j].color,
      price: productInLocalStorage[j].price,   
      quantity: itemNewQtt, // avec la nouvelle quantité souhaitée
   
    };
  })
  }}}

 */


  // RECUPERER LES PRODUITS STOCKES DANS LE LOCALSTORAGE   //



/*
// AFFICHER LES PRODUITS DU PANIER



let products = []; 
console.log(products); 


//AFFICHAGE DES PRODUITS DU PANIER


fetch(UrlCart)
    .then( data => data.json())
    .then( jsonProduct => {
        let product = products (jsonProduct);
        document.getElementById('cart__items').innerHTML += `<!--  <article class="cart__item" data-id="${product.id}" data-color="${products.color}">
        <div class="cart__item__img">
          <img src="../images/product01.jpg" alt="Photographie d'un canapé">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>Nom du produit</h2>
            <p>Vert</p>
            <p>42,00 €</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article> -->`
        })
*/


if (addToLocalStorage == null || addToLocalStorage.length == 0 ) {
    document.getElementById("cartAndFormContainer").innerHTML += `Votre panier est vide`;

} else {
let i = 0; 

for (i = 0 ; i < addToLocalStorage.length ; i += 1) {
        document.querySelector("#cart__items").innerHTML += ` <!--  <article class="cart__item" data-id="${addToLocalStorage[i].id}" data-color="${addToLocalStorage[i].colors}">
        <div class="cart__item__img">
          <img src="${addToLocalStorage[i].imageUrl}" alt="${addToLocalStorage[i].altTxt}">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>${addToLocalStorage[i].description}</h2>
            <p>Vert</p>
            <p>${addToLocalStorage[i].id}</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${addToLocalStorage[i].id}">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article> -->`;

    }

}
