console.log ("Je travail sur le projet 5")
const params = new URL(document.location).searchParams
const id =  params.get("id")

const url = `http://localhost:3000/api/products/${id}`
console.log(url)

const getArticles = () => { 
      fetch(url)
      .then (function (res) { 
         return res.json () 
    
      }) 
    
      .then (function (data) {
        console.log (data); 

        const addImg = document.createElement("img")
        document.querySelector(".item__img").appendChild(addImg)
        addImg.setAttribute("src", `${data.imageUrl}`)
        const nomProduct = (document.getElementById("title"). innerHTML = data.name);
        const prixProduct = (document.getElementById("price").innerHTML = data.price);			
        const descriptionProduct = document.getElementById("description").innerHTML = data.description;	
        const colorsProduct = document.getElementById("colors")
        const quantityProduct = document.getElementById("quantity");

/*
        const addTitle = (document.getElementById("title").innerHTML= data.name)
        const addPrice = (document.getElementById("price").innerHTML=data.price)
        const addImg = document.createElement("img")
        document.querySelector(".item__img").appendChild(addImg)
        addImg.setAttribute("src", `${data.imageUrl}`)

        constDescription = (document.getElementById("description").innerHTML = data.description)
        const addOption = document.getElementById("colors")
        for (color in data.colors) { 
            addOption.innerHTML += `<option value="${data.colors[color]}">${data.colors[color]}</option>`
        }
*/

      })
      
    }

    const addToCart = document.getElementById("addToCart")
    addToCart.addEventListener("click", () => { 
     const addProduct = { 
             quantity : document.getElementById("colors").value, 
             color : document.getElementById("colors").value, 
 
     }

    })
    
    getArticles ()
    












































/*déclare une variable valant l'url de la page actuelle
let url = new URL(location.href); 
console.log(url)

//Récupérer l'id contenue dans ...... 
let container = url.searchParams.get("id")
console.log(container); 

const zoneImgKanap = document.getElementById(".item__img");
const nomKanap = document.getElementById("#title");
const prixKanap = document.getElementById("#price");			
const speechKanap = document.getElementById("#description");	
const colorOptions = document.getElementById("#colors");
const getProductQuantity = document.getElementById("#quantity"); 

const ToutesInformation = zoneImgKanap + nomKanap + prixKanap + speechKanap; 

let urlProduct = 'http://localhost:3000/api/products/' + container; 
console.log('############# urlProduct', urlProduct); 

fetch(urlProduct)
  .then (function (res) { 
     return res.json(); 

  }) 

  .then (function (data) {
    
  }) 

  const getArticles = () => 
      fetch(url)
      .then (function (res) { 
         return res.json () 
    
      }) 
    






  
 // retour d'un code d'erreur dans la console en cas de problème lors du fetch
.catch (error => { 
  console.log (error);

})
*/






