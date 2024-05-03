document.addEventListener("DOMContentLoaded", function () {
    const productInfo = document.getElementById("productInfo");
    const btnDeleteProduct = document.getElementById("btnDeleteProduct");
  
    async function loadData() {
        const productId = window.location.search.split("=")[1].trim();
        const queryParams = new URLSearchParams(window.location.search);
        const name = queryParams.keys().next().value;
        const apiProduct = new ApiProduct();
  
       
    
       if(name == "shirtId"){
        const data = await apiProduct.findShirtById(productId);
        productInfo.innerHTML =
         `<hr style="color: white;">
          <p><b>Id: </b> <i>${data.id}</i></p>
          <hr style="color: white;">
          <p><b>Url: </b> <i>${data.url}</i></p>
          <hr style="color: white;">
          <p><b>Code: </b> <i>${data.code}</i></p>
          <hr style="color: white;">
          <p><b>Name: </b> <i>${data.name}</i></p>
          <hr style="color: white;">
          <p><b>Description: </b> <i>${data.description}</i></p>
          <hr style="color: white;">
          <p><b>Price: </b> <i>${data.price}$</i></p>
          <hr style="color: white;">
          <p><b>Size: </b> <i>${data.size}</i></p>
          <hr style="color: white;">
          `;
       }else if(name == "hoodieId"){
        const data = await apiProduct.findHoodieById(productId);
        productInfo.innerHTML =
         `<hr style="color: white;">
          <p><b>Id: </b> <i>${data.id}</i></p>
          <hr style="color: white;">
          <p><b>Url: </b> <i>${data.url}</i></p>
          <hr style="color: white;">
          <p><b>Code: </b> <i>${data.code}</i></p>
          <hr style="color: white;">
          <p><b>Name: </b> <i>${data.name}</i></p>
          <hr style="color: white;">
          <p><b>Description: </b> <i>${data.description}</i></p>
          <hr style="color: white;">
          <p><b>Price: </b> <i>${data.price}$</i></p>
          <hr style="color: white;">
          <p><b>Size: </b> <i>${data.size}</i></p>
          <hr style="color: white;">
          `;
       }else if(name == "fleeceId"){
        const data = await apiProduct.findFleeceById(productId);
        productInfo.innerHTML =
        `<hr style="color: white;">
        <p><b>Id: </b> <i>${data.id}</i></p>
        <hr style="color: white;">
          <p><b>Url: </b> <i>${data.url}</i></p>
          <hr style="color: white;">
          <p><b>Code: </b> <i>${data.code}</i></p>
          <hr style="color: white;">
          <p><b>Name: </b> <i>${data.name}</i></p>
          <hr style="color: white;">
          <p><b>Description: </b> <i>${data.description}</i></p>
          <hr style="color: white;">
          <p><b>Price: </b> <i>${data.price}$</i></p>
          <hr style="color: white;">
          <p><b>Size: </b> <i>${data.size}</i></p>
          <hr style="color: white;">
          `;
       }else if(name == "capId"){
        const data = await apiProduct.findCapById(productId);
        productInfo.innerHTML =
        `<hr style="color: white;">
        <p><b>Id: </b> <i>${data.id}</i></p>
        <hr style="color: white;">
          <p><b>Url: </b> <i>${data.url}</i></p>
          <hr style="color: white;">
          <p><b>Code: </b> <i>${data.code}</i></p>
          <hr style="color: white;">
          <p><b>Name: </b> <i>${data.name}</i></p>
          <hr style="color: white;">
          <p><b>Description: </b> <i>${data.description}</i></p>
          <hr style="color: white;">
          <p><b>Price: </b> <i>${data.price}$</i></p>
          <hr style="color: white;">
          <p><b>Size: </b> <i>${data.size}</i></p>
          <hr style="color: white;">
          `;
       }
      
    }
  
    loadData();
  
    async function deleteData() {
        const productId = window.location.search.split("=")[1].trim();
        const queryParams = new URLSearchParams(window.location.search);
        const name = queryParams.keys().next().value;
        const apiProduct = new ApiProduct();
        if (name == "shirtId") {
          const response = await apiProduct.deleteShirtById(productId);
          window.location.href = "./../pages/edit.delete.html";
        }else if(name == "hoodieId"){
            const response = await apiProduct.deleteHoodieById(productId);
            window.location.href = "./../pages/edit.delete.html";
        }else if(name == "fleeceId"){
            const response = await apiProduct.deleteFleeceById(productId);
            window.location.href = "./../pages/edit.delete.html";
        }else if(name == "capId"){
            const response = await apiProduct.deleteCapById(productId);
            window.location.href = "./../pages/edit.delete.html";
        }
    }
  
    btnDeleteProduct.addEventListener("click", function () {
      deleteData();
    });
  });
  