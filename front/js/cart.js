/******************************* DECLARATION DES VARIABLES  *******************/
UrlCart = ("http://localhost:3000/api/products/ + id + order")
console.log(UrlCart); 

//-----------On déclare nos variables globales pour pouvoir calculer la quantité total d'articles et le prix total du panier----------------------


// Recupérer mon contenue du local storage 
let cartFromLocalStorage = JSON.parse(localStorage.getItem("ProductCart"));




// DECLARATION DES FONCTIONS //


/******************************* AFFICHER LES PRODUITS GRACE A LEUR ID DANS LE PANIER *******************/
const displayCartProducts = (products => {     
  // expression initiale; condition; incrémentation
  for (i = 0; i < products.length; i++) {
    document.getElementById("cart__items").innerHTML += `<article class="cart__item" data-id="${products[i].productId}" data-color="${products[i].color}">
  <div class="cart__item__img">
    <img src="${products[i].image}" alt="${products[i].alt}">
  </div>
  <div class="cart__item__content">
    <div class="cart__item__content__description">
      <h2>${products[i].name}</h2>
      <p>Couleur : ${products[i].color}</p>
      <p>Price : ${products[i].price}€</p>
    </div>
    <div class="cart__item__content__settings">
      <div class="cart__item__content__settings__quantity">
        <p>Qté : </p>
        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${products[i].quantity}">
      </div>
      <div class="cart__item__content__settings__delete">
        <p class="deleteItem">Supprimer</p>
      </div>
    </div>
  </div>
</article>`
      
  }
})

/******************************* AFFICHER LA QUANTITE ET LE PRIX TOTAL DES ARTICLES *******************/

const totalPriceQuantity = () => {     
  let quantityTotalCalcul = 0;
  let priceTotalCalcul = 0;  

  for (let i = 0; i < cartFromLocalStorage.length; i++) {

      //Déclaration de la variable quantityProductInCart dans laquelle ont vas chercher la quantity de tout les articles et que l'on met dans quantityTotalCalcul :
      let quantityProductInCart = cartFromLocalStorage[i].quantity;
      quantityTotalCalcul += parseInt(quantityProductInCart);

      //Déclaration de la variable priceProductInCart dans laquelle ont vas chercher le price de chaque articles et que l'on met dans priceTotalCalcul :
      let priceProductInCart = cartFromLocalStorage[i].price * cartFromLocalStorage[i].quantity;
      priceTotalCalcul += priceProductInCart;
      
  }
  
  //Affichage des résultats grâce à innerHtml : 
  document.querySelector('.cart__price').innerHTML = `<p>Total (<span id="totalQuantity">${quantityTotalCalcul}</span> articles) : <span id="totalPrice">${priceTotalCalcul}</span> €</p>`;
}
 
/******************************* SUPPRESSION PRODUIT DANS MON TABLEAU *******************/

const deleteProduct = () => {

  // Récupération boutons supprimer et transformation en tableau avec Array.from :

  let btn_supprimer = document.querySelectorAll(".deleteItem");
 
  // Nouveau tableau pour récupérer le tableau localStorageProducts existant et contrôler les suppression :
  let tabDelete = [];
    for (let i = 0; i < btn_supprimer.length; i++) {
        // Écoute d'évènements au click sur le tableau des boutons supprimer
        btn_supprimer[i].addEventListener("click", () => {

        let deleteID = cartFromLocalStorage[i].productId;
        let deleteColor = cartFromLocalStorage[i].color;

        cartFromLocalStorage = cartFromLocalStorage.filter(produit => produit.productId !== deleteID || produit.color !== deleteColor); 
        localStorage.setItem("ProductCart",JSON.stringify(cartFromLocalStorage)); 

        // Rafraîchissement de la page
        window.location.reload();

      });
    }
}
  
/******************************* FONCTION POUR MODIFIER LA QUANTITE D'UN ARTICLE DEPUIS LE PANIER  *******************/

const changeQuantity = () => {

  let inputQuantity = Array.from(document.querySelectorAll(".cart__item__content__settings__quantity input"));
  let valueQuantity = Array.from(document.querySelectorAll('.itemQuantity'));
  
  
  //Boucle for en vas chercher tout les input dans lequelle on effectue un addEventListener pour changer la value des articles :
      for (let i = 0; i < inputQuantity.length; i++) {
  
          inputQuantity[i].addEventListener("change", () => {
          
          // Copie du tableau cartFromLocalStorage dans le tableau tabUpdate :
          tabUpdate = cartFromLocalStorage;
              
          for (let i = 0; i < tabUpdate.length; i++) { 
          
                  delete tabUpdate[i].productId; 
          }
              
          //On modifie la quantité d'un élément à chaque index [i] du tableau écouté :
              tabUpdate[i].quantity = valueQuantity[i].value;
  
          //Mise à jour du local storage :
              localStorage.setItem("ProductCart", JSON.stringify(tabUpdate));
  
          //Rafraîchissement de la page :
              window.location.reload();
  
              totalPriceQuantity();
          });
      }
}
  
  
  
//******************************* GESTION DU FORMULAIRE   *******************//


//Sélectionner le bouton Valider
const btnSubmit = document.querySelector("#order")
console.log(btnSubmit); 


//Écouter le bouton Valider sur le click pour pouvoir contrôler, valider et ennoyer le formulaire et les produits au back-end
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    let contactFormulaire = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        email: document.getElementById('email').value,
      };
      console.log(contactFormulaire);
     
    //***** Regex pour le contrôle des champs Prénom, Nom et Ville *****//
    //Méthode .test pour vérifier la correspondance
    const regExNameCity = (value) => {
        return /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(value)
    }


    //Regex pour le contrôle du champ Adresse
    const regExAddress = (value) => {
        return /[0-9,'a-zA-Zéèàêëï]/.test(value)
    } 

    //Regex pour le contrôle du champ Email
    const regExEmail = (value) => {
        return /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(value)
    } 

    //Fonction en cas d'erreurs dans le formulaire
    function messageError (queryId) {
        document.querySelector(`#${queryId}`).textContent="Veuillez bien remplir ce champ"
    }

    function noErrorMsg (queryId) {
        document.querySelector(`#${queryId}`).textContent=""
    }

    function colorErrorMsg (colorId) {
        document.querySelector(`#${colorId}`).style.border="3px solid red"
    }

    function greenNoError (colorId) {
        document.querySelector(`#${colorId}`).style.border="3px solid green"
    }

    //Fonction de contrôle des valeurs du formulaire
    function firstNameControl() {
        const firstName = contactFormulaire.firstName
        if (regExNameCity(firstName)) {
            greenNoError("firstName")
            return true
        }else{
            colorErrorMsg("firstName")
            return false
        }
    }

    function lastNameControl() {
        const lastName = contactFormulaire.lastName
        if(regExNameCity(lastName)){
            greenNoError("lastName")
            return true
        }else{
            colorErrorMsg("lastName")
            return false
        }
    }

    function addressControl() {
        const address = contactFormulaire.address
        if(regExAddress(address)) {
            greenNoError("address")
            return true
        }else{
            colorErrorMsg("address")
            return false
        }
    }

    function cityControl() {
        const city = contactFormulaire.city
        if(regExNameCity(city)) {
            greenNoError("city")
            return true
        }else{
            colorErrorMsg("city")
            return false
        }
    }

    function emailControl() {
        const email = contactFormulaire.email
        if(regExEmail(email)) {
            greenNoError("email")
            return true
        }else{
            colorErrorMsg("email")
            return false
        }
    }

    //Operateur ternaire pour afficher "Veuillez bien remplir ce champ" dans le formulaire
    firstNameControl() == true ? noErrorMsg("firstNameErrorMsg") : messageError("firstNameErrorMsg")
    lastNameControl() == true ? noErrorMsg("lastNameErrorMsg") : messageError("lastNameErrorMsg")
    addressControl() == true ? noErrorMsg("addressErrorMsg") : messageError("addressErrorMsg")
    cityControl() == true ? noErrorMsg("cityErrorMsg") : messageError("cityErrorMsg")
    emailControl() == true ? noErrorMsg("emailErrorMsg") : messageError("emailErrorMsg")


    //Contrôle validité formulaire avant de l'envoyer dans le local storage
    if (firstNameControl() && lastNameControl() && addressControl() && cityControl() && emailControl()) {
        // Enregistrer le formulaire dans le local storage
        localStorage.setItem("contactFormulaire", JSON.stringify(contactFormulaire))
        sendToServer()
    }

  /*******************************REQUÊTE DU SERVEUR ET POST DES DONNÉES *******************/

    //***** REQUÊTE DU SERVEUR ET POST DES DONNÉES *****//
    // Envoyer la requête POST au back-end
    function sendToServer() {

        //Tableau des produits selon le modèle du back-end
        let products = []
        //Boucle pour récupérer les id dans le local storage
        for(let k = 0; k < cartFromLocalStorage.length; k++){
            const productId = cartFromLocalStorage[k].productId; 
            products.push(productId); 
        }

        const postServer = fetch("http://localhost:3000/api/products/order", {
            method: "POST",
            body: JSON.stringify({contact: contactFormulaire, products}),
            headers: {
                "Content-Type": "application/json",
            },
        })
    
        .then(async(response) => {
            try{
                //Récupérer l'Id de la réponse du serveur
                const dataServer = await response.json();
                const orderId = dataServer.orderId;
                //Aller vers la page confirmation
                document.location.href = `confirmation.html?id=${orderId}`
            }catch(e){
                console.log(e)
            }
        })
    }
})






/******************************* EXECUTION DES FONCTIONS  *******************/

displayCartProducts(cartFromLocalStorage); 
deleteProduct(cartFromLocalStorage); 
totalPriceQuantity(cartFromLocalStorage); 
changeQuantity(cartFromLocalStorage); 








