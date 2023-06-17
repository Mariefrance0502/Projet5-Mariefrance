

// RECUPERER LES PRODUITS STOCKES DANS LE LOCALSTORAGE   //
let addToLocalStorage = JSON.parse(localStorage.getItem('addToCart'));
console.log(addToLocalStorage); 

// AFFICHER LES PRODUITS DU PANIER

 // je sélectionne la partie html concernée par la modification
 let cartAndFormContainer = document.getElementById('cartAndFormContainer');
 console.log(cartAndFormContainer); 

 // si le panier est vide : afficher 'le panier est vide'
if(addToLocalStorage === null || addToLocalStorage == 0) {
  document.querySelector("#cart__items").innerHTML =`
  <div class="cart__empty">
    <h2>Votre panier est vide ! <br> Merci de sélectionner des produits depuis la page d'accueil</h2>
  </div>`;
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