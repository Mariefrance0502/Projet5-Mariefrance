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
    getArticles ()
    
   // Fonction déclenchée au clic sur le bouton addtocart
    const button = document.getElementById("addToCart"); 
    const Colors = document.getElementById("colors")
    const quantity= document.getElementById("quantity")
    let addToLocalStorage =  JSON.parse(localStorage.getItem('addToCart'));
    console.log(addToLocalStorage)


    button.addEventListener("click", () => {
     const quantitySelected = parseInt (quantity.value); //  ParesInt = VALEUR ENTIER 
     const colorsSelected = Colors.value; 
      if ( colorsSelected !== ""  & quantitySelected > 0 & quantitySelected <= 100) { 
        // Préparation des données pour la panier + variable sous forme d'objet 
        let panier = {
          id : id, 
          colorsProduct : Colors.value, 
          quantityProduct : quantity.value, 
        }
        alert('Le produit a bien été ajouté au panier'); 
  // j'ajoute les produits sélectionnés dans le localStorage
      }
     else{
       // affichage des messages d'erreur 
       if ( colorsSelected === "" || quantitySelected <= 0 ) {
        alert ("Veillez choisir une couleur et une quantité")
        window.location.href = "index.html";
       }
      
     }

     const addProductLocalStorage = () => {
      addToLocalStorage.push(panier);
    localStorage.setItem('addToCart', JSON.stringify(addToLocalStorage));
    }
 
       


    })


