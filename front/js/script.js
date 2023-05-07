
// Création de l'url pour recupérer les donnnés de l'API 
const url = "http://localhost:3000/api/products/"

const container = document.getElementById("items")


const getArticles = () => { 
   fetch (url)
  .then (function (res) {
      return res.json ()
})
  .then(function (data) { 

})
}
getArticles()