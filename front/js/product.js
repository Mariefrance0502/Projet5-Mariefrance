console.log ("Je travail sur le projet 5")
const searchParams = new URL(window.location).searchParams;
const id = searchParams.get('id');
const url = `http://localhost:3000/api/products/${id}`

const getArticles = () => { 
      fetch(url)
      .then (function (res) { 
         return res.json ()
    
      }) 

      .then (function (data) {
        const Title = (document.getElementById("title").innerHTML= data.name) 
        const Price = (document.getElementById("price").innerHTML=data.price)
        const Color = document.getElementById("colors")
        const Description = (document.getElementById("description").innerHTML = data.description)
        const Img = document.createElement("img")
        document.querySelector(".item__img").appendChild(Img)
        Img.setAttribute("src", `${data.imageUrl}`)
        for (color in data.colors) { 
            Color.innerHTML += `<option value="${data.colors[color]}">${data.colors[color]}</option>`
        }
      })
      
}
   



 // Fonction déclenchée au clic sur le bouton addtocart

    const Colors = document.getElementById("colors")
    const quantity= document.getElementById("quantity")
    // on click, save, add, product selected by ID in local Storage //
    const addToCart = document.getElementById("addToCart")
    addToCart.addEventListener("click", () => {
    const quantitySelected = parseInt (quantity.value); //  ParesInt = VALEUR ENTIER 
    const colorsSelected = Colors.value; 
    const idSelected = id;
  if ( colorsSelected !== ""  & quantitySelected> 0 & quantitySelected <= 100) 
  { 
    // Préparation des données pour la panier + variable sous forme d'objet 
    // display in local storage all the data we need to make an order //
    let Kanap =
    {
        productId : id,
        quantity : document.getElementById('quantity').value,
        color : document.getElementById('colors').value
    }
    alert("Le produit a bien été ajoutée au panier")
 }
 
    else {
      // affichage des messages d'erreur 

      if ( colorsSelected === "" || quantitySelected <= 0 & quantitySelected > 100) {
       alert ("Veillez choisir une couleur et une quantitée")
      }
      else if ( quantitySelected == 0) {
       alert ("Veillez choisir une quantitée correcte comprise entre 1 et 100")
      }
     // Il manque le messaged'erreur pour la couleur !!! 
     else if (colorsSelected == "") {
      alert ("Veillez choisir une couleur") // Ne fonctionne pas 
     }
      }    

addToLocalStorage = []
console.log(addToLocalStorage);

if (localStorage.getItem("addToCart")){
// Si il y a deja des produit dans le locale storage :
  let item = localStorageProducts.find(
    (item) =>
    item.id == Kanap.id && item.colors == Kanap.colors
  ); 
    // Si oui on additionne les quantity des articles 
    if (item) {
      item.quantity = item.quantity + Kanap.quantity;
      localStorage.setItem("addToCart", JSON.stringify(addToLocalStorage));
      return;
  }

} else { 
  localStorage.setItem("addToCart", JSON.stringify(addToLocalStorage))
  addToLocalStorage.push(addToCart)
}
console.log(addToLocalStorage); 


})

getArticles ()


