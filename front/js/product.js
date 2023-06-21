// DECLARATION DES VARIABLES
console.log ("Je travail sur le projet 5");
const searchParams = new URL(window.location).searchParams;
const id = searchParams.get('id');
const urlOneProduct = `http://localhost:3000/api/products/${id}`; 
const addToCartButton = document.getElementById("addToCart");
const colors = document.getElementById("colors");
const quantity = document.getElementById("quantity");


// DECLARATION DES FONCTIONS 
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

const aadProductToLocalStorage = (kanape) => {
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
        console.log(cart); 

        // Vérifier si le produit se trouve déja dans le local storage et additionner les quantités 
        let item = cart.find ((item) => item.productId === kanape.productId && item.color === kanape.color); 

        if (item === undefined){
            cart.push(kanape);
            localStorage.setItem(cartKey, JSON.stringify(cart)); 
        }
        else { 
            let newQuantity = item.quantity + kanape.quantity;  
            item.quantity = newQuantity;  
            localStorage.setItem(cartKey, JSON.stringify(cart));
        }
}

const addToCartError = () => {
    const quantitySelected = parseInt (quantity.value); //  ParesInt = VALEUR ENTIER 
    const colorsSelected = colors.value;

    if (colorsSelected === "" && quantitySelected === 0) {
        alert ("Veillez choisir une couleur et une quantitée");
    }
    else if ( quantitySelected === 0) {
        alert ("Veillez choisir une quantitée correcte comprise entre 1 et 100"); 
    } 
    else if (colorsSelected === "") {
      alert ("Veillez choisir une couleur");  
    }

}


const addToCart = () => {
    const quantitySelected = parseInt (quantity.value); //  ParesInt = VALEUR ENTIER 
    const colorsSelected = colors.value; 

    if ( colorsSelected !== "" && quantitySelected> 0 &&  quantitySelected <= 100) { 
        // Préparation des données pour la panier + variable sous forme d'objet 
        // display in local storage all the data we need to make an order //
        let kanape =
        {
            productId : id,
            quantity : quantitySelected,
            color : colors.value
        }
     
        aadProductToLocalStorage(kanape);
      

        alert("Le produit a bien été ajoutée au panier");
    } 
    else { 
    addToCartError();
    }  
}  
  

// EXECUTION DES FONCTIONS
// Fonction déclenchée au clic sur le bouton addtocart
addToCartButton.addEventListener("click", addToCart); 




// Fonction déclanchée à l'affichage de la page 
getArticles(urlOneProduct);