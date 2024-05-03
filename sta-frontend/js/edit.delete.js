document.addEventListener("DOMContentLoaded", function () {

    const div = document.getElementById('divCard');
    const hoodies = document.getElementById('hoodieForm');
    const fleeces = document.getElementById('fleeceForm');
    const caps = document.getElementById('capForm');


    

    async function loadData() {
      div.innerHTML = "";
      const apiProduct = new ApiProduct();
      const data = await apiProduct.findAllTshirts();
     
      

      data.forEach((product) => {
        const slide = `
        <div class="card">
        <a href="./info.html?shirtId=${product.id}" class="btn btn-warning">
         <img id="url" src=${product.url} alt="Image 1">
         </a>
         <h4 id="name">${product.name}</h4>
         <h4 id="size">${product.size}</h4>
         <h4 id="price">${product.price}$</h4>
         <a href="./edit.html?shirtId=${product.id}" class="btn btn-warning">
           <button id=""type="button" value="Click" style="width: 80px; cursor: pointer;
           padding: 13px;border: 1pt solid black; margin-left:15px; margin-right:10px;">EDIT</button>
         </a>
         <a href="./delete.html?shirtId=${product.id}" class="btn btn-warning">
           <button id=""type="button" value="Click" style="width: 80px; cursor: pointer;
           padding: 13px;border: 1pt solid black;">DELETE</button>
        </a> 
        </div>
        `;
      
        div.innerHTML += slide;
        
      }); 
       
    }

    async function loadHoodies() {
      hoodies.innerHTML = "";
      const apiProduct = new ApiProduct();
      const data = await apiProduct.findAllHoodies();
     
      data.forEach((hoodie) => {
        const slide = `
        <div class="card">
        <a href="./info.html?hoodieId=${hoodie.id}" class="btn btn-warning">
         <img id="url" src=${hoodie.url} alt="Image 1">
         </a>
         <h4 id="name">${hoodie.name}</h4>
         <h4 id="size">${hoodie.size}</h4>
         <h4 id="price">${hoodie.price}$</h4>
         <a href="./edit.html?hoodieId=${hoodie.id}" class="btn btn-warning">
           <button id="button"type="button" value="Click" style="width: 80px; cursor: pointer;
           padding: 13px;border: 1pt solid black; margin-left:15px; margin-right:10px;">EDIT</button>
         </a>
         <a href="./delete.html?hoodieId=${hoodie.id}" class="btn btn-warning">
           <button id="button"type="button" value="Click" style="width: 80px; cursor: pointer;
           padding: 13px;border: 1pt solid black;">DELETE</button>
        </a>  
         </div>
        `;
      
        hoodies.innerHTML += slide;
        
      }); 
       
    }
     async function loadFleeces() {
      fleeces.innerHTML = "";
      const apiProduct = new ApiProduct();
      const data = await apiProduct.findAllFleeces();
     
    
      data.forEach((fleece) => {
        const slide = `
        <div class="card">
        <a href="./info.html?fleeceId=${fleece.id}" class="btn btn-warning">
         <img id="url" src=${fleece.url} alt="Image 1">
         </a>
         <h4 id="name">${fleece.name}</h4>
         <h4 id="size">${fleece.size}</h4>
         <h4 id="price">${fleece.price}$</h4>
         <a href="./edit.html?fleeceId=${fleece.id}" class="btn btn-warning">
           <button id="button"type="button" value="Click" style="width: 80px; cursor: pointer;
           padding: 13px;border: 1pt solid black; margin-left:15px; margin-right:10px;">EDIT</button>
         </a>
         <a href="./delete.html?fleeceId=${fleece.id}" class="btn btn-warning">
           <button id="button"type="button" value="Click" style="width: 80px; cursor: pointer;
           padding: 13px;border: 1pt solid black;">DELETE</button>
        </a> 
        </div>
        `;
      
        fleeces.innerHTML += slide;
        
      }); 
       
    }
    async function loadCaps() {
      caps.innerHTML = "";
      const apiProduct = new ApiProduct();
      const data = await apiProduct.findAllCaps();
     
      data.forEach((cap) => {
        const slide = `
        <div class="card">
        <a href="./info.html?capId=${cap.id}" class="btn btn-warning">
        <img id="url" src=${cap.url} alt="Image 1">
      </a>
         <h4 id="name">${cap.name}</h4>
         <h4 id="code">${cap.code}</h4>
         <h4 id="size">${cap.size}</h4>
         <h4 id="price">${cap.price}$</h4>
         <a href="./edit.html?capId=${cap.id}" class="btn btn-warning">
           <button id="button" type="button" value="Click" style="width: 80px; cursor: pointer;
           padding: 13px;border: 1pt solid black; margin-left:15px; margin-right:10px;">EDIT</button>
         </a>
         <a href="./delete.html?capId=${cap.id}" class="btn btn-warning">
           <button id="button"type="button" value="Click" style="width: 80px; cursor: pointer;
           padding: 13px;border: 1pt solid black;">DELETE</button>
        </a> 
           </div>
        `;
      
        caps.innerHTML += slide;
        
      }); 
       
    }

        div.addEventListener("click", async (event) => {
         // const apiProduct = new ApiProduct();
        
         window.location.reload();
        });
        hoodies.addEventListener("click", async (event) => {
           // const apiProduct = new ApiProduct();
      
        window.location.reload();
         });
         fleeces.addEventListener("click", async (event) => {
         // const apiProduct = new ApiProduct();
    
         window.location.reload();
         });
         caps.addEventListener("click", async (event) => {
        // const apiProduct = new ApiProduct();
  
          window.location.reload();
});
   
    loadData();
    loadHoodies();
    loadFleeces();
    loadCaps();
    
  });

 