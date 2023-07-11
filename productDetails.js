let url = document.location.href;
let id = url.split("?")[1];
id = id.split("=")[1];
console.log(id);
let product = JSON.parse(localStorage.getItem("products"))[id - 1];
console.log(product);

let renderProductDetails = () => {
    let productDetails = document.getElementById("productDetails");

    productDetails.innerHTML = `
                <div class="row my-5">
                    <div class="col-6"> 
                        <img src="${product.thumbnail}" alt="" class="w-120 h-120" >
                        
                    </div>
                    <div class="col-6 ">
                        <h2>${product.title}</h2>
                        <p>${product.description}</p>
                        <p>${product.price}</p>
                        <p>${product.rating}</p>
                        <div class="text-warning">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <button class="btn btn-outline-primary mt-3" onclick="addToCart(${product.id})">Add To Cart <i class="bi bi-cart-plus"></i></button>
                        <div class="flex">
                        <a href="index.html#products" class="btn btn-outline-dark mt-5 mr-5">Go Back</a>
                      </div>
                    </div>
                </div>
    `
}
  let cart = [];
  let addToCart = (id) => {
      event.preventDefault();
      alert("product added successfully !!");
      let product = JSON.parse(localStorage.getItem("products"))[id-1];
      cart.push(product);
      console.log(product);
      renderCartItems();
  }

  let renderCartItems = () => {
    document.getElementById("cartItems").innerHTML = "";
    let cartItems = document.getElementById("cartItems");
    cart.forEach(product => {
        cartItems.innerHTML += `
            <div class="d-flex justify-content-between">
                <img src="${product.thumbnail}" class="w-25" alt="">
                <h5 class=" mt-3">${product.title}</h5>
                <p class=" mt-3">${product.price}</p>
                <i class="bi bi-x mt-3"></i>
             </div>
        `
    });
    console.log(cart);
}

renderProductDetails();