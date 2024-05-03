document.addEventListener("DOMContentLoaded", function () {
  const div = document.getElementById("divCard");
  const hoodies = document.getElementById("hoodieForm");
  const fleeces = document.getElementById("fleeceForm");
  const caps = document.getElementById("capForm");

  async function loadData() {
    div.innerHTML = "";
    const apiProduct = new ApiProduct();
    const data = await apiProduct.findAllTshirts();

    data.forEach((product) => {
      const slide = `
        <div class="card">
         <img id="url" src=${product.url} alt="Image 1">
         <h4 id="name">${product.name}</h4>
         <h4 id="size">${product.size}</h4>
         <h4 id="price">${product.price}$</h4>
         <button id="button" onclick="buttonClickHandler(${product.id})" type="button" value="Click">Add to cart</button>
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
         <img id="url" src=${hoodie.url} alt="Image 1">
         <h4 id="name">${hoodie.name}</h4>
         <h4 id="size">${hoodie.size}</h4>
         <h4 id="price">${hoodie.price}$</h4>
         <button id="button" onclick="hoodieButtonClicked(${hoodie.id})" type="button" value="Click">Add to cart</button>
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
         <img id="url" src=${fleece.url} alt="Image 1">
         <h4 id="name">${fleece.name}</h4>
         <h4 id="size">${fleece.size}</h4>
         <h4 id="price">${fleece.price}$</h4>
         <button id="button" onclick="fleeceButtonClicked(${fleece.id})" type="button" value="Click">Add to cart</button>
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
         <img id="url" src=${cap.url} alt="Image 1">
         <h4 id="name">${cap.name}</h4>
         <h4 id="size">${cap.size}</h4>
         <h4 id="price">${cap.price}$</h4>
         <button id="button" onclick="capButtonClicked(${cap.id})" type="button" value="Click">Add to cart</button>
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
async function buttonClickHandler(id) {
  let existingIds = JSON.parse(localStorage.getItem("productIds")) || [];
  existingIds.push(id);
  localStorage.setItem("productIds", JSON.stringify(existingIds));
}

function hoodieButtonClicked(id) {
  let existingIds = JSON.parse(localStorage.getItem("hoodieIds")) || [];
  existingIds.push(id);
  localStorage.setItem("hoodieIds", JSON.stringify(existingIds));
  let storedHoodiesIds = JSON.parse(localStorage.getItem("hoodieIds")) || [];
  return false;
}
function fleeceButtonClicked(id) {
  let existingIds = JSON.parse(localStorage.getItem("fleeceIds")) || [];
  existingIds.push(id);
  localStorage.setItem("fleeceIds", JSON.stringify(existingIds));
  let storedFleecesIds = JSON.parse(localStorage.getItem("fleeceIds")) || [];
  return false;
}
function capButtonClicked(id) {
  let existingIds = JSON.parse(localStorage.getItem("capIds")) || [];
  existingIds.push(id);
  localStorage.setItem("capIds", JSON.stringify(existingIds));
  let storedCapsIds = JSON.parse(localStorage.getItem("capIds")) || [];
  return false;
}

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");
