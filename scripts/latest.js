async function randomData(url){

    try{ 
        let res = await fetch(url);

        let data = await res.json()
        return data
    }catch(error){
        console.log('error:', error)

    }
} 


function displayMenu(arr,location) {
    arr.map(function (elem) {
      let dishDiv = document.createElement("div");
      dishDiv.setAttribute("class", "dishDiv");

      let menuImg = document.createElement("div");

      let textDiv = document.createElement("div");

      let img = document.createElement("img");
      img.src = elem.strCategoryThumb;
      menuImg.append(img);

      let price = document.createElement("h2");
      price.innerText = "Rs." + Math.floor(Math.random() * (500 - 100) + 100);

      let button = document.createElement("button");
      button.innerText = "Add to cart";
     

      textDiv.append(price, button);

      dishDiv.append(menuImg, textDiv);

     location.append(dishDiv);
    });
  }

  export {randomData,displayMenu}