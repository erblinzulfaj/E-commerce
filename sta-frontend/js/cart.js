async function sendMail() {
  const demo = document.getElementById("shirtjs").textContent;
  const demo2 = document.getElementById("hoodiejs").textContent;
  const demo3 = document.getElementById("fleecejs").textContent;
  const demo4 = document.getElementById("capjs").textContent;
  const demo5 = document.getElementById("pricejs").textContent;

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  let shirtCodes = localStorage.getItem("shirtCodes");
  let hoodieCodes = localStorage.getItem("hoodieCode");
  let fleeceCodes= localStorage.getItem("fleeceCode");
  let capCodes = localStorage.getItem("capCode");
  const price = localStorage.getItem("price");

  const model = new Checkout(0,username,email,number,address,city,shirtCodes,hoodieCodes,fleeceCodes,capCodes,price);
  const apiCheckout = new ApiCheckout();
  await apiCheckout.register(model);
  var params = {
    username: username,
    email: email,        
    number: number,
    address: address,
    city: city,
    shirt: demo,
    hoodie: demo2,
    fleece: demo3,
    cap: demo4,
    price: demo5
  };

  const serviceId = "service_91oi0xs";
  const templateId = "template_qv6v3f1";
  emailjs.send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("username").value = "";
      document.getElementById('email').value = "";
      document.getElementById('number').value = "";
      document.getElementById('address').value = "";
      document.getElementById('city').value = "";
      document.getElementById('shirtjs').value = "";
      document.getElementById('hoodiejs').value = "";
      document.getElementById('fleecejs').value = "";
      document.getElementById('capjs').value = "";
      document.getElementById('pricejs').value = "";
        alert("Your checkout finished!");
        localStorage.removeItem("shirtCodes");
        localStorage.removeItem("hoodieCode");
        localStorage.removeItem("fleeceCode");
        localStorage.removeItem("capCode");
        localStorage.removeItem("productIds");
        localStorage.removeItem("hoodieIds");
        localStorage.removeItem("fleeceIds");
        localStorage.removeItem("capIds");
        localStorage.removeItem("price");

        location.reload();
    })
    .catch((err) => console.log(err));
  }
let codeTrue = false;
let finalPrice = 0;
finalPrice.toFixed(2);
let price = 0;
price.toFixed(2);
let cartPrice = 0;
cartPrice.toFixed(2);
let shirtPrice = 0;
shirtPrice.toFixed(2);
let hoodiePrice = 0;
hoodiePrice.toFixed(2);
let fleecePrice = 0;
fleecePrice.toFixed(2);
const cart = document.getElementById('cart');
let storedProductIds = JSON.parse(localStorage.getItem("productIds")) || [];
let storedHoodiesids = JSON.parse(localStorage.getItem("hoodieIds")) || [];
let storedFleecesIds = JSON.parse(localStorage.getItem("fleeceIds")) || [];
let storedCapsIds = JSON.parse(localStorage.getItem("capIds")) || [];

document.addEventListener("DOMContentLoaded", function () {    
            const root = document.getElementById('root');

             async function  loadCheckout(){
              const apiProduct = new ApiProduct();

              for (const id of storedProductIds) {
              const data = await apiProduct.findShirtById(id);
              let existingCodes = JSON.parse(localStorage.getItem("shirtCodes")) || [];
              existingCodes.push(data.code);
              localStorage.setItem("shirtCodes", JSON.stringify(existingCodes));
              }
              for (const id of storedHoodiesids) {
                const data = await apiProduct.findHoodieById(id);
                let existingCodes = JSON.parse(localStorage.getItem("hoodieCode")) || [];
                existingCodes.push(data.code);
                localStorage.setItem("hoodieCode", JSON.stringify(existingCodes));
                }
                for (const id of storedFleecesIds) {
                  const data = await apiProduct.findFleeceById(id);
                  let existingCodes = JSON.parse(localStorage.getItem("fleeceCode")) || [];
                  existingCodes.push(data.code);
                  localStorage.setItem("fleeceCode", JSON.stringify(existingCodes));
                  }
                  for (const id of storedCapsIds) {
                    const data = await apiProduct.findCapById(id);
                    let existingCodes = JSON.parse(localStorage.getItem("capCode")) || [];
                    existingCodes.push(data.code);
                    localStorage.setItem("capCode", JSON.stringify(existingCodes));
                    }

              let shirtCodes = localStorage.getItem("shirtCodes");
              let hoodieCodes = localStorage.getItem("hoodieCode");
              let fleeceCodes= localStorage.getItem("fleeceCode");
              let capCodes = localStorage.getItem("capCode");
              let price = localStorage.getItem("price");
              price = parseFloat(price).toFixed(2); 
                root.innerHTML =`
                <center style=" width: 300px; height: 50px; margin-top: -7%; padding-left: 30px;">
                <h1>CHECKOUT</h1>
              </center>
                <form class="buy" style="margin-top: 40px;">
                    <label for="username">USERNAME</label>
                    <input class='input-field' type="text" for="username" id="username"></input>
                    <label for="email">EMAIL</label>
                    <input class='input-field' type="email" for="email" id="email"></input>
                    <label for="number">NUMBER</label>
                    <input class='input-field' type="text" for="number" id="number"></input>
                    <label for="address">ADRESS</label>
                    <input class='input-field' type="text" for="address" id="address"></input>
                    <label for="city" >CITY</label>
                    <input class='input-field' id="city"></input>
                    
                    <h4 style="display: none; position: absolute;" id="shirtjs">Shirts Added: 
                    ${shirtCodes}
                    </h4>
                    <h4 style="display: none; position: absolute;" id="hoodiejs">Hoodies Added: 
                    ${hoodieCodes}
                    </h4>
                    <h4 style="display: none; position: absolute;" id="fleecejs">Fleeces Added: 
                    ${fleeceCodes}
                    </h4>
                    <h4 style="display: none; position: absolute;" id="capjs">Caps Added: 
                    ${capCodes}
                    </h4>
                    <h4 style="display: none; position: absolute;" id="pricejs">Cmimi:
                     ${price}$
                    </h4>
                    <button class='pay-btn' style="margin-left: -87%;" onclick="sendMail()">BUY NOW</button>
                  </form>`;
                  localStorage.removeItem("shirtCodes");
                  localStorage.removeItem("hoodieCode");
                  localStorage.removeItem("fleeceCode");
                  localStorage.removeItem("capCode");
              }

             async function loadData(){
                  const apiProduct = new ApiProduct();

                  for (const id of storedProductIds) {
 
                    const data = await apiProduct.findShirtById(id);

                const slide = `
                  <table class='order-table'>
                  <button id="shirt" style="float: right; background-color: transparent; border: none; cursor: pointer;"
                  onclick="shirts(${data.id})"
                  >
                  <i class="bi bi-x">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                  </i>
                  </button>
                   <tbody>
                    <tr>
                        <td><img src='${data.url}' class='full-width'></img></td>
                        <td>
                            <br> <span class='thin'>${data.name}</span>
                            <br>${data.size}<br> <span class='thin small'> ${data.description}<br><br></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class='price'>${data.price}$</div>
                        </td>
                    </tr> 
                     </tbody>
                     </table>
                     <div class='line'></div>
            
                   `;

              cart.innerHTML += slide;
             
             price += data.price;
             localStorage.setItem("price",price);
                  }
             }
             
            async function loadHoodies(){
                  const apiProduct = new ApiProduct();
  
                for (const id of storedHoodiesids) {
                const data = await apiProduct.findHoodieById(id);

                const hoodie = `
                  <table class='order-table'>
                  <button id="shirt" style="float: right; background-color: transparent; border: none; cursor: pointer;"
                  onclick="hoodies(${data.id})"
                  >
                  <i class="bi bi-x">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                  </i>
                  </button>
                   <tbody>
                    <tr>
                        <td><img src='${data.url}' class='full-width'></img></td>
                        <td>
                            <br> <span class='thin'>${data.name}</span>
                            <br>${data.size}<br> <span class='thin small'> ${data.description}<br><br></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class='price'>${data.price}$</div>
                        </td>
                    </tr> 
                     </tbody>
                     </table>
                     <div class='line'></div>
            
                   `;

              cart.innerHTML += hoodie;
             
             price += data.price;
             localStorage.setItem("price",price);
             }
             }

             async function loadFleeces(){
                  const apiProduct = new ApiProduct();
  
                for (const id of storedFleecesIds) {
                const data = await apiProduct.findFleeceById(id);

                const fleece = `
                  <table class='order-table'>
                  <button id="shirt" style="float: right; background-color: transparent; border: none; cursor: pointer;"
                  onclick="fleeces(${data.id})"
                  >
                  <i class="bi bi-x">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                  </i>
                  </button>
                   <tbody>
                    <tr>
                        <td><img src='${data.url}' class='full-width'></img></td>
                        <td>
                            <br> <span class='thin'>${data.name}</span>
                            <br>${data.size}<br> <span class='thin small'> ${data.description}<br><br></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class='price'>${data.price}$</div>
                        </td>
                    </tr> 
                     </tbody>
                     </table>
                     <div class='line'></div>
            
                   `;

              cart.innerHTML += fleece;
             
             price += data.price;
             localStorage.setItem("price",price);
             }
             }
             
             async function loadCaps(){
                  const apiProduct = new ApiProduct();
  
                for (const id of storedCapsIds) {
                const data = await apiProduct.findCapById(id);
                
                const cap = `
                  <table class='order-table'>
                  <button id="shirt" style="float: right; background-color: transparent; border: none; cursor: pointer;"
                  onclick="caps(${data.id})"
                  >
                  <i class="bi bi-x">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                  </i>
                  </button>
                   <tbody>
                    <tr>
                        <td><img src='${data.url}' class='full-width'></img></td>
                        <td>
                            <br> <span class='thin'>${data.name}</span>
                            <br>${data.size}<br> <span class='thin small'> ${data.description}<br><br></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class='price'>${data.price}$</div>
                        </td>
                    </tr> 
                     </tbody>
                     </table>
                     <div class='line'></div>
            
                   `;
              cart.innerHTML += cap;
             
             price += data.price;
             localStorage.setItem("price",price);

             }
             }

             loadData();
             loadHoodies();
             loadFleeces();
             loadCaps(); 
             loadCheckout();

          async function loadPrice(){
            let finalPrice = localStorage.getItem("price");
            finalPrice = parseFloat(finalPrice).toFixed(2); 
               const slide2 =`
                <div class='line'></div>
                  <div class='total'>
                   <span style='float:left;'>
                    TOTAL:
                 </span>
                <span style='float:right; text-align:right;'>
                  ${finalPrice} $
                </span>
            </div> 
            `
            cart.innerHTML+= slide2;
            let pc = 1;
            if(pc!= 1){
              pc=1;
              window.location.reload();
              loadPrice();
            }
           }
             loadPrice();

             cart.addEventListener("click", async (event) => {
              window.location.reload();
             });  
             
}); 
async function loadCodes(){
  for (const id of storedHoodiesids) {
  const data = await apiProduct.findHoodieById(id);

  let existingCodes = JSON.parse(localStorage.getItem("hoodieCode")) || [];
  existingCodes.push(data.code);
  localStorage.setItem("hoodieCode", JSON.stringify(existingCodes));
  }
  for (const id of storedFleecesIds) {
    const data = await apiProduct.findFleeceById(id);
    let existingCodes = JSON.parse(localStorage.getItem("fleeceCode")) || [];
    existingCodes.push(data.code);
    localStorage.setItem("fleeceCode", JSON.stringify(existingCodes));
  }
  for (const id of storedCapsIds) {
    const data = await apiProduct.findCapById(id);
    let existingCodes = JSON.parse(localStorage.getItem("capCode")) || [];
    existingCodes.push(data.code);
    localStorage.setItem("capCode", JSON.stringify(existingCodes));
  }

  }

function shirts(id) {
  const index = storedProductIds.indexOf(id);

  if (index !== -1) {
    storedProductIds.splice(index, 1);
    localStorage.setItem("productIds", JSON.stringify(storedProductIds));
    console.log("Product removed:", id);
  } else {
    console.log("Product not found!");
  }
  window.location.reload();
} 
function hoodies(id) {
  const index = storedHoodiesids.indexOf(id);

  if (index !== -1) {
    storedHoodiesids.splice(index, 1);
    localStorage.setItem("hoodieIds", JSON.stringify(storedHoodiesids));
    console.log("Product removed:", id);
  } else {
    console.log("Product not found!");
  }
  window.location.reload();
} 
function fleeces(id) {
  const index = storedFleecesIds.indexOf(id);

  if (index !== -1) {
    storedFleecesIds.splice(index, 1);
    localStorage.setItem("fleeceIds", JSON.stringify(storedFleecesIds));
    console.log("Product removed from cart:", id);
  } else {
    console.log("Product not found!");
  }

  window.location.reload();
} 
function caps(id) {
  const index = storedCapsIds.indexOf(id);

  if (index !== -1) {
    storedCapsIds.splice(index, 1);
    localStorage.setItem("capIds", JSON.stringify(storedCapsIds));
    console.log("Product removed:", id);
  } else {
    console.log("Product not found!");
  }

  window.location.reload();
} 