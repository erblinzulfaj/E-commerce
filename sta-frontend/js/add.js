document.addEventListener("DOMContentLoaded", function () {
  const optionalUrl = document.getElementById('imageUrl');
  const optionalCode = document.getElementById('code');
  const optionalName = document.getElementById('name');
  const optionalDescription = document.getElementById('description');
  const optionalPrice = document.getElementById('price');
  const optionalSize = document.getElementById('size');
  const div = document.getElementById('divCard');

  async function addProduct(){
    const url = optionalUrl.value;
    const code = optionalCode.value;
    const name = optionalName.value;
    const description = optionalDescription.value;
    const price = optionalPrice.value;
    const size = optionalSize.value;


    const model = new Product(
        null,
        url,
        code,
        name,
        description,
        price,
        size,
      );

      const apiProduct = new ApiProduct();
      await apiProduct.register(model);
      window.location.href = "./../../pages/service.html";
} 
btnSave.addEventListener("click", function (event) {
    event.preventDefault();// mos e thirr api e thirri vet
    addProduct();
  });

});