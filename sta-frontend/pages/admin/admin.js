document.addEventListener("DOMContentLoaded", function () {
    const optionalName = document.getElementById('name');
    const optionalPassword = document.getElementById('password');
    
    const rememberMeCheckbox = document.getElementById("rememberMe");
    const rememberMeStatus = localStorage.getItem("rememberMe");

    if (rememberMeStatus === "true") {
      rememberMeCheckbox.checked = true;
    }
    rememberMeCheckbox.addEventListener("change", function () {
      localStorage.setItem("rememberMe", this.checked);
    });
    if (rememberMeCheckbox.checked == true) {
      //window.location.href = "./../../pages/admin/index.html";
    }
   

    async function checkEntity(){
      const username = optionalName.value;
      const password = optionalPassword.value;

  
      const model = new Admin(
          username,
          password,
        );
       
        const apiAdmin = new ApiAdmin();
        await apiAdmin.checkEntity(model);

        const data = localStorage.getItem("check");
        console.log(data);

if (data && data !== "false") {
  window.location.href = "./../../index.html";
} else {
  alert("You are not admin!");
  alert("Go back!");
  alert("Ok i will send you back!");
  window.location.href = './../../pages/admin/error.html';
}

  } 
  btnSave.addEventListener("click", function (event) {
      event.preventDefault();// mos e thirr api e thirri vet
      checkEntity();
    }); 
   
  
  });
  class ApiAdmin{
    url = 'http://localhost:8080/check-admin';

    async checkEntity(admin) {
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(admin),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const secondResponse = await response.text();
        localStorage.setItem("check", secondResponse)
        console.log(response);
        return secondResponse;   
    }
}
class Admin{
    constructor(
      username,
      password
    ){
      this.username=username;
      this.password = password;
    }
  }
