
/******************************* DECLARATION DES VARIABLES  *******************/
const searchParams = new URL(window.location).searchParams;
const id = searchParams.get('id');
const urlOneProduct = `http://localhost:3000/api/products/${id}`;
let addToCartButton = document.getElementById("addToCart");
let colors = document.getElementById("colors");
let quantity = document.getElementById("quantity");





/******************************* DECLARATION DES FONCTIONS  *******************/
//Cette fonction permet de récupérer les informations du produit depuis l'API grâce à l'identifiant
const getArticles = (url) => {
    fetch(url)
    .then (function (res) {
        return res.json ()
    })
    .then (function (data) {
        document.getElementById("title").innerHTML= data.name;
        document.getElementById("price").innerHTML = data.price;
        document.getElementById("description").innerHTML = data.description;
        const img = document.createElement("img");
        document.querySelector(".item__img").appendChild(img);
        img.setAttribute("src", `${data.imageUrl}`);
        for (let color in data.colors) {
            colors.innerHTML += `<option value="${data.colors[color]}">${data.colors[color]}</option>`;
        }
    })
     
}

//Cette fonction permet d'ajouter les produits dans le local storage
const addProductToLocalStorage = (kanape) => {
        const cartKey = "ProductCart"; 

        //recupère le contenue actuelle du local storage 
        const cartFromLocalStorage = localStorage.getItem(cartKey);
        let cart; 
        
        // Vérifier si le contenu est vide ou pas 
        if (cartFromLocalStorage == null) {
           cart = [];
        }
        //  Sinon créer une constante dont la valeur est égale a JSON.parse à la valeur du tableau (local storage)
        else {
            cart = JSON.parse(cartFromLocalStorage);
        }

        // Vérifier si le produit se trouve déja dans le local storage et additionner les quantités 
        let item = cart.find ((item) => item.productId === kanape.productId && item.color === kanape.color); 

        if (item === undefined){
            cart.push(kanape);
            localStorage.setItem(cartKey, JSON.stringify(cart)); 
        }
        else { 
            let newQuantity = item.quantity + kanape.quantity;  
            item.quantity = newQuantity;  
            const valeurPresente = newQuantity;
            let max = 100 - valeurPresente; 
                if (valeurPresente > 100) {
                    alert('Vous avez atteint la quantité maximal autorisée pour cet article dans votre panier');
                    // Redirection vers la page panier
                    window.location.href = "cart.html";
                } 
                else {
                    alert(`${kanape.quantity} article(s) ont été ajoutés au panier, vous avez un total de ${valeurPresente} de cet article dans votre panier.`)
                    localStorage.setItem(cartKey,JSON.stringify(cart))
                    // Retour sur la page d'accueil 
                    window.location.href = "index.html";
                }
          
        }       
}

//Fonction erreur lorsque l'utilisateur ne renseigne pas tous les champs Obligatoire
const addToCartError = () => {
    // Déclaration des variables 
    let quantitySelected = parseInt (quantity.value); 
    let colorsSelected = colors.value;

    //Si la couleur et la quantité ne sont pas renseignés 
    if (colorsSelected === "" && quantitySelected === 0) {
        alert ("Veillez choisir une couleur et une quantitée");
    }
    //Si la quantité n'est pas renseignée
    else if ( quantitySelected === 0) {
        alert ("Veillez choisir une quantitée correcte comprise entre 1 et 100"); 
    } 
    //Si la couleur n'est pas renseignée
    else if (colorsSelected === "") {
      alert ("Veillez choisir une couleur");  
    }

}

//Cette fonction permet de récupérer les informations du produit depuis l'API grâce à son id 
const addToCart = () => {
    // Déclaration des variables 
    let quantitySelected = parseInt (quantity.value); 
    let colorsSelected = colors.value; 
    let imageSelected = document.querySelector(".item__img > img").src; 
    let descriptionSelected = document.getElementById("description").innerHTML; 
    let nameSelected = document.getElementById("title").innerHTML; 
    let priceSelected = document.getElementById("price").innerHTML; ; 

    //Si la couleur et la quantité sont renseignées 
    if ( colorsSelected !== "" && quantitySelected> 0 &&  quantitySelected <= 100) { 
    
        // création d'une variable sous forme d'objet lorsque l'utilisateur selectionne le produit a ajouter au panier 
        let kanape =
        {
            productId : id,
            quantity : quantitySelected,
            color : colorsSelected,
            image : imageSelected, 
            description : descriptionSelected,
            alt : descriptionSelected,
            name : nameSelected,
            price : priceSelected
        }
        //Le produit selectionné est ajouté au Local storage grâce a la fonction addProductToLocalStorage
        addProductToLocalStorage(kanape);
    } 

    //Sinon renvoie au message d'erreur grâce a la fonction addToCartError 
    else { 
    addToCartError();
    }  
}  
   


/******************************* EXECUTION DES FONCTIONS  *******************/
// Fonction déclenchée au clic sur le bouton addtocart
addToCartButton.addEventListener("click", addToCart); 

// Fonction déclanchée à l'affichage de la page 
getArticles(urlOneProduct);