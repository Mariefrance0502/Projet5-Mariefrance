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
    


