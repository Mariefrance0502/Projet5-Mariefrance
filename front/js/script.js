//DECLARATION DES VARIABLES 
const url = "http://localhost:3000/api/products"
console.log(url); 
const products = document.getElementById("items"); 


// DECLARATION DES FONCTIONS

// Fonction qui montre de façon dynamique les produits sur la page d'accueil 
const getArticles = () => { 
  fetch(url)
    .then (function (res) { 
      return res.json () 

    }) 

    .then (function (data) { 
      data.forEach (product =>  { 
      // Les informations du produit sont insérées dynamiquement dans l'HTML de la page d'accueil  
       products.innerHTML += `<a href="./product.html?id=${product._id}">
      <article>
        <img src="${product.imageUrl}" alt="${product.altTxt}">
        <h3 class="productName"> ${product.name}</h3>
        <p class="productDescription">${product.description}</p>
      </article>
    </a>`
      }) 

    })

    //Retour d'un code d'erreur dans la console en cas de problème lors du fetch
    .catch (error => { 
      alert(`Service momentanément indisponible. veuillez réessayer plus tard.`);
      console.log (error);
    })
      
}

getArticles ()

