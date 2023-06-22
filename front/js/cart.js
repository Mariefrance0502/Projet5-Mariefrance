// DECLARATION DES VARIABLES 
UrlCart = ("http://localhost:3000/api/products/ + id + order")
console.log(UrlCart); 


// Recupérer mon contenue du local storage 
let cartFromLocalStorage = JSON.parse(localStorage.getItem("ProductCart"));
console.log(cartFromLocalStorage);  


// DECLARATION DES FONCTIONS 
// Pour chaque contenue afficher les informations qui lui sont propre au l'aide d'une boucle 
const displayCartProducts = (products => {     
  // expression initiale; condition; incrémentation
  for (i = 0; i < products.length; i++) {
    document.getElementById("cart__items").innerHTML += `<article class="cart__item" data-id="${products[i].productId}" data-color="${products[i].color}">
    <div class="cart__item__img">
      <img src="${products[i].image}" alt="${products[i].alt}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__titlePrice">
        <h2>${products[i].name}</h2>
        <p>${products[i].color}</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cartFromLocalStorage[i].quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`
  }
})

// Creér une fonction qui me permet de calculer le prix total de nombre d'articles dans mon panier 
const totalPriceQuantity = () => {
        
  // quantityTotalCalcul qui contient la quantity de chaque articles qui est dans le local storage :
  let quantityTotalCalcul = 0;

  // priceTotalCalcul qui contient la price de chaque articles qui est dans le local storage :
  let priceTotalCalcul = 0;  

  for (let i = 0; i < cartFromLocalStorage.length; i++) {

      //Déclaration de la variable quantityProduitDansLePanier dans laquelle ont vas chercher la quantity de tout les articles et que l'on met dans quantityTotalCalcul :
      let quantityProductInCart = cartFromLocalStorage[i].quantity;
      quantityTotalCalcul += parseInt(quantityProductInCart);

      //Déclaration de la variable priceProduitDansLePanier dans laquelle ont vas chercher le price de chaque articles et que l'on met dans priceTotalCalcul :
      let priceProductInCart = cartFromLocalStorage[i].price * cartFromLocalStorage[i].quantity;
      priceTotalCalcul += priceProductInCart;
      
  }
  
  //Affichage des résultat grâce à innerHtml : 
  document.querySelector('.cart__price').innerHTML = `<p>Total (<span id="totalQuantity">${quantityTotalCalcul}</span> articles) : <span id="totalPrice">${priceTotalCalcul}</span> €</p>`;
}


// Créer une fonction qui me permet de supprimer un élément du produit du tableau 
const deleteProduct = () => {

// Récupération boutons supprimer et transformation en tableau avec Array.from :
let btn_supprimer = document.querySelectorAll(".deleteItem");

// Nouveau tableau pour récupérer le tableau localStorageProducts existant et contrôler les suppression :
let tabDelete = [];
  for (let i = 0; i < cartFromLocalStorage.length; i++) {

      // Écoute d'évènements au click sur le tableau des boutons supprimer
       btn_supprimer[i].addEventListener("click", () => {

      // Suppression de l'article visuellement sur la page
      btn_supprimer[i].style.display = "none";

      // Copie du tableau localStorageProducts dans le tableau tabControlDelete
      tabDelete = cartFromLocalStorage;

    
    //Création d'une boucle for pour supprimer dans le local storage les valeur altxt, imageUrl, name et price l'orsque que l'ont supprime un article : 

      for (let i = 0; i < tabDelete.length; i++) { 
        
        delete tabDelete[i].alt;
        delete tabDelete[i].image;
        delete tabDelete[i].name;
        delete tabDelete[i].price;
         
    }

      
      // Array.prototype.splice() supprime un élément à chaque index [i] du tableau écouté
      tabDelete.splice([i], 1);
      
      // Mise à jour du local storage
      cartFromLocalStorage = localStorage.setItem("ProductCart", JSON.stringify(tabDelete));
      

      // Rafraîchissement de la page
      window.location.reload();

      
    });
  }
}



//Création une fonction qui va modifier la quantity des articles :

  



// Créer une fonction qui me permet de verifier si tous les champs du formulaire ont étés remplie 

      
       
 
// EXECUTION DES FONCTIONS 

displayCartProducts(cartFromLocalStorage); 
totalPriceQuantity(cartFromLocalStorage); 
deleteProduct (cartFromLocalStorage); 










