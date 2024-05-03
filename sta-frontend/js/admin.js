document.addEventListener("DOMContentLoaded", function () {
    const optionalName = document.getElementById('name');
    const optionalPassword = document.getElementById('password');
    
    const rememberMeCheckbox = document.getElementById("rememberMe");
    const rememberMeStatus = localStorage.getItem("rememberMe");

    if (rememberMeStatus === "true") {
      rememberMeCheckbox.checked = false;
    }
    rememberMeCheckbox.addEventListener("change", function () {
      localStorage.setItem("rememberMe", this.checked);
    });
    if (rememberMeCheckbox.checked == true) {
      window.location.href = "./../../pages/service.html";
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
  window.location.href = "./../../pages/service.html";
} else {
  alert("You are not admin!");
  alert("Go back!");
  alert("Ok i will send you back!");
  window.location.href = 'https://www.google.com/search?q=error+505+images&sca_esv=599122292&sxsrf=ACQVn0_Frg8-5u_3riRCC93k2clPeW1Zyg%3A1705496041958&source=hp&ei=6c2nZajFJd_ci-gP6-iCqAg&iflsig=ANes7DEAAAAAZafb-VbzRVp5oZRBif7C_-Er89sbdvVm&ved=0ahUKEwjo3eftu-SDAxVf7gIHHWu0AIUQ4dUDCA0&uact=5&oq=error+505+images&gs_lp=Egdnd3Mtd2l6IhBlcnJvciA1MDUgaW1hZ2VzMgUQIRigATIFECEYoAFIpWRQphVYvGJwA3gAkAEAmAGwBKAB5SeqAQswLjcuMy40LjIuMrgBA8gBAPgBAagCCsICDRAuGMcBGNEDGOoCGCfCAgcQIxjqAhgnwgIKECMYgAQYigUYJ8ICERAAGIAEGIoFGJECGLEDGIMBwgILEC4YgAQYsQMYgwHCAg4QLhiABBixAxjHARjRA8ICERAuGIMBGMcBGLEDGNEDGIAEwgIOEAAYgAQYigUYsQMYgwHCAgoQLhiABBiKBRhDwgIEECMYJ8ICCxAAGIAEGIoFGJECwgIXEC4YgAQYigUYkQIYsQMYgwEYxwEY0QPCAhEQLhiABBixAxiDARjHARjRA8ICCxAAGIAEGLEDGIMBwgIOEC4YgAQYigUYsQMYgwHCAgoQABiABBiKBRhDwgIOEC4YgwEYsQMYgAQYigXCAhQQLhiABBiKBRixAxiDARjHARjRA8ICBRAuGIAEwgIIEAAYgAQYsQPCAggQLhiABBixA8ICDRAAGIAEGBQYhwIYsQPCAgsQLhiDARixAxiABMICDRAAGIAEGIoFGEMYsQPCAgUQABiABMICDhAAGIAEGIoFGJECGLEDwgIGEAAYFhgewgIIEAAYFhgeGA_CAgsQABiABBiKBRiGA8ICCBAAGBYYHhgKwgIIEAAYgAQYogQ&sclient=gws-wiz#vhid=GFXSsfaIHawgwM&vssid=l';
}

  } 
  btnSave.addEventListener("click", function (event) {
      event.preventDefault();// mos e thirr api e thirri vet
      checkEntity();
    }); 
   
  
  });