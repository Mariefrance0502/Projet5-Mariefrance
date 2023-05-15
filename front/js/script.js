// Récupération de toutes les données de l'API 
const url = "http://localhost:3000/api/products"


// On récupère toutes les données de l'api que l'on met dans un constante products
const products = document.getElementById("items"); 
 const getArticles = () => { 
  fetch(url)
  .then (function (res) { 
     return res.json () 

  }) 

  .then (function (data) {
    console.log (data); 
    data.forEach (product =>  { 
 //les photos et infos des canapés sont insérées dynamiquement dans l'HTML de la page d'accueil  
 // Il nous manque le prix et l'Id et la console affiche plus d'élément que prévue 
      products.innerHTML += `<a href="./product.html?id=${product._id}">
      <article>
        <img src="${product.imageUrl}" alt="${product.altTxt}">
        <h3 class="productName"> ${product.name}</h3>
        <p class="productDescription">${product.description}</p>
      </article>
    </a>`

  }) 

})

 // retour d'un code d'erreur dans la console en cas de problème lors du fetch
.catch (error => { 
  alert(`Service momentanément indisponible. veuillez réessayer plus tard.`);
  console.log (error);

})
      
}

getArticles ()

