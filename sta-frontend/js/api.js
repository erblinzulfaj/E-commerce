class ApiProduct {
  
    url = 'http://localhost:8080/api-product';
    
//findall
    async findAllTshirts() {
        const response = await fetch(this.url+"/tshirts");
        return await response.json();
    }
    async findAllHoodies() {
        const response = await fetch(this.url+"/hoodies");
        return await response.json();
    }
    async findAllFleeces() {
        const response = await fetch(this.url+"/fleeces");
        return await response.json();
    }
    async findAllCaps() {
        const response = await fetch(this.url+"/caps");
        return await response.json();
    }

//add
    async register(product) {
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.text();
    }

//findbyid    
    async findShirtById(productId) {
        const response = await fetch(this.url + "/find/shirt/" + productId); // GET
        return await response.json();
    }  
    async findHoodieById(productId) {
        const response = await fetch(this.url + "/find/hoodie/" + productId); // GET
        return await response.json();
    } 
    async findFleeceById(productId) {
        const response = await fetch(this.url + "/find/fleece/" + productId); // GET
        return await response.json();
    } 
    async findCapById(productId) {
        const response = await fetch(this.url + "/find/cap/" + productId); // GET
        return await response.json();
    } 

//modify
    async modify(productId, model) {
        const response = await fetch(this.url + '/' + productId, {
            method: 'PUT',
            body: JSON.stringify(model),
            headers: {
                "Content-Type": "application/json"
                
            }
        });
        return await response.text();
    }

//delete
    async deleteShirtById(productId) {
        const response = await fetch(this.url + "/delete/shirt/" + productId, {
            method: 'DELETE'
        });
        return await response.text();
    }
    async deleteHoodieById(productId) {
        const response = await fetch(this.url + "/delete/hoodie/" + productId, {
            method: 'DELETE'
        });
        return await response.text();
    }
    async deleteFleeceById(productId) {
        const response = await fetch(this.url + "/delete/flece/" + productId, {
            method: 'DELETE'
        });
        return await response.text();
    }
    async deleteCapById(productId) {
        const response = await fetch(this.url + "/delete/cap/" + productId, {
            method: 'DELETE'
        });
        return await response.text();
    }
    
}

// ---------------------------------------------------------------------------------------------
class ApiCheckout {
    url = 'http://localhost:8080/api-checkout';

    async findAll() {
        const response = await fetch(this.url);
        return await response.json();
    }
    async register(checkout) {

        const response = await fetch(this.url, {
            method: 'POST',
    
            body: JSON.stringify(checkout),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.text();
    }
} 

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
