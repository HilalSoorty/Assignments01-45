// Assignment 37 according to github

class Shirt {
    constructor(public size: string = "large", public message: string = "I love TypeScript") {}
    
    printShirtInfo() {
      console.log(`Size: ${this.size}, Message: ${this.message}`);
    }
  }
  
  // a shirt with custom size and message
  function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    const shirt = new Shirt(size, message);
    return shirt;
  }
  
  //  a large shirt with the default message
  const defaultLargeShirt = make_shirt();
  defaultLargeShirt.printShirtInfo();
  
  // a medium shirt with the default message
  const mediumShirt = make_shirt("medium");
  mediumShirt.printShirtInfo();
  
  // a custom-sized shirt with a different message
  const customShirt = make_shirt("small", "TypeScript is awesome!");
  customShirt.printShirtInfo();
  