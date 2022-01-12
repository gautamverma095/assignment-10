
async function getData(url){

    try{ 
        let res = await fetch(url);

        let data = await res.json()
        return data
    }catch(error){
        console.log('error:', error)

    }
} 


function appendData(elem,location) {
   console.log('elem:', elem)
   
      let dishDiv = document.createElement("div");
      dishDiv.setAttribute("class", "dishDiv");

      let menuImg = document.createElement("div");

      let textDiv = document.createElement("div");

      let img = document.createElement("img");
      img.src = elem[0].strMealThumb;
      menuImg.append(img);

      let price = document.createElement("h2");
      price.innerText = "Rs." + Math.floor(Math.random() * (500 - 100) + 100);

     let p = document.createElement("p");
     p.innerText = elem[0].strArea;

     let pp = document.createElement("p");
     pp.innerText = elem[0].strMeal;
     
      

      textDiv.append(price, pp,p);

      dishDiv.append(menuImg, textDiv);

      location.append(dishDiv);
    }
  


export {getData,appendData}