// RECUPERER LES PRODUITS STOCKES DANS LE LOCALSTORAGE   //
let products = [];
console.log(products); 
let addToLocalStorage = JSON.parse(localStorage.getItem('addToCart'));
console.log(addToLocalStorage); 

const UrlCart = 'http://localhost:3000/api/products/order'
console.log(UrlCart)


let i = 0; 


//* Pour traiter les produits dans le local storage 
for (products of addToLocalStorage) {

 //requête Fetch : 
 fetch('http://localhost:3000/api/products/products+id')
 .then( (response) => response.json())
 .then( (data) => {

     
 
     addToLocalStorage.push(products.id);
console.log(addToLocalStorage)

}) 
}
