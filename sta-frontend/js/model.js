class Product {
    constructor(
      id,
      url,
      code,
      name,
      description,
      price,
      size
      
    ) {
      this.id = id;
      this.url = url;
      this.code = code;
      this.name = name;
      this.description = description;
      this.price = price;
      this.size = size
    }
  }
class Checkout{
    constructor(
      id,
      username,
      email,
      number,
      address,
      city,
      shirtCode,
      hoodieCode,
      fleeceCode,
      capCode,
      price
    ){
      this.id = id;
      this.username = username;
      this.email = email;
      this.number = number;
      this.address = address;
      this.city = city;
      this.shirtCode = shirtCode;
      this.hoodieCode = hoodieCode;
      this.fleeceCode = fleeceCode;
      this.capCode = capCode;
      this.price = price;
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