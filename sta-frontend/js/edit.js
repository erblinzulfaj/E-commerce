document.addEventListener("DOMContentLoaded", function () {

    const optionalUrl = document.getElementById('imageUrl');
    const optionalCode = document.getElementById('code');
    const optionalName = document.getElementById('name');
    const optionalDescription = document.getElementById('description');
    const optionalPrice = document.getElementById('price');
    const optionalSize = document.getElementById('size');

    const btnSave = document.getElementById('btnSave');

    async function onSave() {
    const productId = window.location.search.split("=")[1].trim();
    const url = optionalUrl.value;
    const code = optionalCode.value;
    const name = optionalName.value;
    const description = optionalDescription.value;
    const price = optionalPrice.value;
    const size = optionalSize.value;


    const model = new Product(
        0,
        url,
        code,
        name,
        description,
        price,
        size,
      );
      const apiProduct = new ApiProduct();
      await apiProduct.modify(productId, model);
      window.location.href = "./../../pages/edit.delete.html";
    }


    btnSave.addEventListener("click", function (event) {
        event.preventDefault();
        onSave();
    });


    const loadData = async () => {
        const productId = window.location.search.split("=")[1].trim();
        const queryParams = new URLSearchParams(window.location.search);
        const name = queryParams.keys().next().value;
        const apiProduct = new ApiProduct();
        if(name == "shirtId"){
            const result = await apiProduct.findShirtById(productId);
            if (result && result.id) {
                optionalUrl.value = result.url;
                optionalCode.value = result.code;
                optionalName.value = result.name;
                optionalDescription.value = result.description;
                optionalPrice.value = result.price;
                optionalSize.value = result.size;
            }
        }else if(name == "hoodieId"){
            const result = await apiProduct.findHoodieById(productId);
            if (result && result.id) {
                optionalUrl.value = result.url;
                optionalCode.value = result.code;
                optionalName.value = result.name;
                optionalDescription.value = result.description;
                optionalPrice.value = result.price;
                optionalSize.value = result.size;
            }
        }else if(name == "fleeceId"){
            const result = await apiProduct.findFleeceById(productId);
            if (result && result.id) {
                optionalUrl.value = result.url;
                optionalCode.value = result.code;
                optionalName.value = result.name;
                optionalDescription.value = result.description;
                optionalPrice.value = result.price;
                optionalSize.value = result.size;
            }
        }else if(name == "capId"){
            const result = await apiProduct.findCapById(productId);
            if (result && result.id) {
                optionalUrl.value = result.url;
                optionalCode.value = result.code;
                optionalName.value = result.name;
                optionalDescription.value = result.description;
                optionalPrice.value = result.price;
                optionalSize.value = result.size;
            }
        }
    }

    loadData();

});
