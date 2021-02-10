//Array of products.
const products = [
    {
        name:           "Nike Dri-FIT",
        id:             1,
        image:          "shopItems/Front-Nike-Dri-Fit-1.jpg",
        images:         ["productImages/Nike-Dri-Fit-1.jpg",
                        "productImages/Nike-Dri-Fit-2.jpg",
                        "productImages/Nike-Dri-Fit-3.jpg",
                        "productImages/Nike-Dri-Fit-4.jpg"],
        colour:         "3 Colours",
        price:          27.99,
        category:       "Men's T-Shirt",
        description:    `The Nike Dri-FIT Men's Training T-Shirt
                        combines sweat-wicking fabric with a non-
                        restrictive fit and feel that helps keep you
                        comfortable throughout your entire workout.`
    },
    {
        name:           "Jordan Jumpman",
        id:             2,
        image:          "shopItems/Front-Jordan-Jumpman-1.jpg",
        images:         ["productImages/Jordan-Jumpman-1.jpg",
                        "productImages/Jordan-Jumpman-2.jpg",
                        "productImages/Jordan-Jumpman-3.jpg",
                        "productImages/Jordan-Jumpman-4.jpg"],
        colour:         "5 Colours",
        price:          32.99,
        category:       "Men's T-Shirt",
        description:    `The Jordan Jumpman T-Shirt is made from soft, 
                        comfortable fabric for easy, all-day comfort.
                        A large printed Jumpman says it all without words.`
    },
    {
        name:           "Nike ESC",
        id:             3,
        image:          "shopItems/Front-Nike-Esc-1.jpg",
        images:         ["productImages/Nike-Esc-1.jpg",
                        "productImages/Nike-Esc-2.jpg",
                        "productImages/Nike-Esc-3.jpg",
                        "productImages/Nike-Esc-4.jpg"],
        colour:         "1 Colour",
        price:          374.99,
        category:       "Men's T-Shirt",
        description:    `The Nike ESC Polo offers premium craftsmanship.
                        It's a classic staple that's been updated with
                        seams and details that are made to move with you.
                        Soft knit fabric has a loose fit and feel.
                        The front zip provides adjustable comfort.`
    },
    {
        name:           "Jordan HBR",
        id:             4,
        image:          "shopItems/Front-Jordan-Hbr-1.jpg",
        images:         ["productImages/Jordan-Hbr-1.jpg", 
                        "productImages/Jordan-Hbr-2.jpg",
                        "productImages/Jordan-Hbr-3.jpg",
                        "productImages/Jordan-Hbr-4.jpg"],
        colour:         "2 Colours",
        price:          32.99,
        category:       "Men's T-Shirt",
        description:    `Come at the Jumpman from a new angle
                        in the Jordan HBR T-Shirt, a cotton-made crew with
                        printed graphics.`
    },
    {
        name:           "Nike Dri-FIT Strike",
        id:             5,
        image:          "shopItems/Front-Nike-Dri-Fit-Strike-1.jpg",
        images:         ["productImages/Nike-Dri-Fit-Strike-1.jpg",
                        "productImages/Nike-Dri-Fit-Strike-2.jpg",
                        "productImages/Nike-Dri-Fit-Strike-3.jpg",
                        "productImages/Nike-Dri-Fit-Strike-4.jpg"],
        colour:         "1 Colour",
        price:          32.99,
        category:       "Men's T-Shirt",
        description:    `The Nike Dri-FIT Strike Top is made from breathable,
                        sweat-wicking fabric to help keep you cool, dry and
                        comfortable on the field. This product is made from
                        at least 50% recycled polyester.`
    },
    {
        name:           "The Nike Polo Rafa",
        id:             6,
        image:          "shopItems/Front-The-Nike-Polo-Rafa-1.jpg",
        images:         ["productImages/The-Nike-Polo-Rafa-1.jpg",
                        "productImages/The-Nike-Polo-Rafa-2.jpg",
                        "productImages/The-Nike-Polo-Rafa-3.jpg",
                        "productImages/The-Nike-Polo-Rafa-4.jpg"],
        colour:         "2 Colours",
        price:          72.99,
        category:       "Men's T-Shirt",
        description:    `This isn't your average polo—it's The Nike
                        Polo Rafa. Every detail, from its innovative, 
                        sweat-wicking fabric to the hints of orange
                        that nod to Nike's original shoebox, has been
                        thoughtfully crafted to meet the needs of the
                        everyday you. The result is a street-ready
                        style that looks as at home on the course or
                        court as it does everywhere else.`
    },
];

//Empty array.
let cartArray = [] ;

//
function numberOfItems(){
    console.log("cartArray",cartArray);
    return cartArray.length;
}

//Loads the productListing page automatically when first loading the page.
window.addEventListener('load', showProductListing);

//Function that injects the html code into the main page.
function showProductListing() {
    target = document.getElementById('pageContent');
    target.innerHTML = `
        <div class="myContainer">
        <div class="myTables">
            <table>
                <thead>
                    <td><h3>Categories</h3></td>
                </thead>
                <tbody>
                    <tr><td><button>All Products</button></td></tr>
                    <tr><td><button>T-Shirts</button></td></tr>
                    <tr><td><button>Shirts</button></td></tr>
                    <tr><td><button>Trousers</button></td></tr>
                    <tr><td><button>Jeans</button></td></tr>
                    <tr><td><button>Shoes</button></td></tr>
                    <tr><td><button>Accessories</button></td></tr>
                </tbody>
            </table>
            <img src="shopItems/border.png">
            <table>
                <thead>
                    <tr><td><h3>Filter by</h3></td></tr>
                    <tr><td><h4>Size</h4></td></tr>
                </thead>
                <tbody>
                    <tr><td><button>Extra Small</button></td></tr>
                    <tr><td><button>Small</button></td></tr>
                    <tr><td><button>Medium</button></td></tr>
                    <tr><td><button>Large</button></td></tr>
                    <tr><td><button>Extra Large</button></td></tr>
                    <tr><td><button>2Extra Large</button></td></tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr><td><h4>Brands</h4></td></tr>
                </thead>
                <tbody>
                    <tr><td><button>Adidas</button></td></tr>
                    <tr><td><button>Dickies</button></td></tr>
                    <tr><td><button>Gucci</button></td></tr>
                    <tr><td><button>Lacoste</button></td></tr>
                    <tr><td><button>Levi's</button></td></tr>
                    <tr><td><button>Nike</button></td></tr>
                    <tr><td><button>Puma</button></td></tr>
                    <tr><td><button>Supreme</button></td></tr>
                </tbody>
            </table>
        </div>
        <div class="firstColumn">
            <div class="sortBy">
                <label for="sort">Sort by:</label>
                <select id="sort">
                    <option>Recommended</option>
                    <option>Newest</option>
                    <option>Lowest Price</option>
                    <option>Highest Price</option>
                </select>
            </div>
            <div class="products">
                <div class="frame">
                    <img class="frontImage">
                    <div class="productDetails">
                        <h3 class="frontName"></h3>
                        <t class="frontColour"></t>
                        <br>
                        <t class="frontPrice"></t>
                        <button class="addCart"><i class="fas fa-cart-plus fa-2x"></i></button>
                    </div>
                </div>
                <div class="frame">
                    <img class="frontImage">
                    <div class="productDetails">
                        <h3 class="frontName"></h3>
                        <t class="frontColour"></t>
                        <br>
                        <t class="frontPrice"></t>
                        <button class="addCart"><i class="fas fa-cart-plus fa-2x"></i></button>
                    </div>
                </div>
                <div class="frame">
                    <img class="frontImage">
                    <div class="productDetails">
                        <h3 class="frontName"></h3>
                        <t class="frontColour"></t>
                        <br>
                        <t class="frontPrice"></t>
                        <button class="addCart"><i class="fas fa-cart-plus fa-2x"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="secondColumn">
            <div class="results">
                <h3>Showing 1 - 6 of 24 results</h3>
            </div>
            <div class="products">
                <div class="frame">
                <img class="frontImage">
                    <div class="productDetails">
                    <h3 class="frontName"></h3>
                        <t class="frontColour"></t>
                        <br>
                        <t class="frontPrice"></t>
                        <button class="addCart"><i class="fas fa-cart-plus fa-2x"></i></button>
                    </div>
                </div>
                <div class="frame">
                    <img class="frontImage">
                    <div class="productDetails">
                    <h3 class="frontName"></h3>
                        <t class="frontColour"></t>
                        <br>
                        <t class="frontPrice"></t>
                        <button class="addCart"><i class="fas fa-cart-plus fa-2x"></i></button>
                    </div>
                </div>
                <div class="frame">
                    <img class="frontImage">
                    <div class="productDetails">
                        <h3 class="frontName"></h3>
                        <t class="frontColour"></t>
                        <br>
                        <t class="frontPrice"></t>
                        <button class="addCart"><i class="fas fa-cart-plus fa-2x"></i></button>
                    </div>
                </div>
            </div>
            <div class="pageNavigation">
                <button>01</button>
                <button>02</button>
                <button>03</button>
                <button>04</button>
                <button><i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
    `
//Targets all the HTML elements.   
let buttonCart = document.querySelectorAll(".addCart");
let frontImage = document.querySelectorAll(".frontImage");
let frontName = document.querySelectorAll('.frontName');
let frontColour = document.querySelectorAll('.frontColour');
let frontPrice = document.querySelectorAll('.frontPrice');
let cartItems = document.querySelector('.cartItems');

for (let i = 0; i < frontImage.length; i ++) {
    frontImage[i].src = products[i].image;
    frontImage[i].onclick = () => productPage(i); 
    buttonCart[i].onclick=()=>addCart(i);
    frontName[i].innerHTML = products[i].name;
    frontColour[i].innerHTML = products[i].colour;
    frontPrice[i].innerHTML = '€' + products[i].price;
    }
    
function addCart(index) {
    cartArray.push(products[index]);
    cartItems.innerHTML = numberOfItems();
    console.log(cartArray);
    }

};

//Function that injects the html code into the main page.
function productPage(index) {
    target = document.getElementById('pageContent');
    target.innerHTML = `
        <div id = "navbar">
            <button class="bkbtn" onclick="bkbtn"><i class="fas fa-chevron-left"></i> Go back</button></a>
        </div>
            <div id="Content">
                <div id="Description">
                    <h1 class="CatName"></h1>
                    <h1 class="itemName"></h1>
                    <h1 class="price"></h1>
                    <div id="size">
                        <button class="size sizeOn">S</button>
                        <button class="size">M</button>
                        <button class="size">L</button>
                        <button class="size">XL</button>
                        <button class="size">2XL</button>
                    </div>
                    <p1 class="description"></p1>
                    <button class="addCart addToCart" onclick="addCart">Add to Cart</button>
                </div>
                <div id="photos">
                    <img class="productImage">
                    <img class="productImage">
                    <img class="productImage">
                    <img class="productImage">
                </div>
                `;

    let productImages = document.querySelectorAll('.productImage');
    let backButton = document.querySelector('.bkbtn');
    backButton.onclick = () => showProductListing();
    let CatName = document.querySelector('.CatName');
    CatName.innerHTML = products[index].category;
    let itemName = document.querySelector('.itemName');
    itemName.innerHTML = products[index].name;
    let price = document.querySelector('.price');
    price.innerHTML = '€' + products[index].price;
    let description = document.querySelector('.description');
    description.innerHTML = products[index].description;
    let addToCartButton = document.querySelector('.addCart');
    addToCartButton.onclick = () => addCart(index);
    let cartItems = document.querySelector('.cartItems');

    for( i = 0; i < productImages.length; i ++ ) {
        productImages[i].src = products[index].images[i];
    }

    function addCart(index) {
        cartArray.push(products[index]);
        cartItems.innerHTML = numberOfItems();
        showCart();
        console.log(cartArray);
        }
};

//Function that injects the html code into the main page.
function showCart() {
    target = document.getElementById('pageContent');
    target.innerHTML = `
    <div class="shopMenu">
        <button class="bkbtn"><i class="fas fa-chevron-left"></i> Go back</button></a> 
        <h1 class="shopcart">Your Shopping Cart</h1>
        <h4 class="kaiH4">Your Items</h4>
    </div>
    <div class="row">
        <div class="container3" id="targetCart"></div>
        <div class="ordercont">
            <div class="billing">
                <div class="sum">Order Summary</div>
                <div class="ordid">#yourorderid123</div>
                <div class="ordright" id="subpri"></div>
                <div class="ordleft">Subtotal</div>
                <div class="ordright">0€ (DHL Express)</div>
                <div class="ordleft">Shipping</div>
                <div class="ordright" id="vat"></div>
                <div class="ordleft">VAT (Included)</div>
                <div class="ordpric" id="totpri"></div>
                <div class="ordtot">Total</div>
                <div><button class="checbut">CHECKOUT</button></div>
            </div>
            <div class="billing">
                <div class="shiphead">We offer free shipping and returns </div>
                <div class="shiptext1st">Contact us </div>
                <div class="shiptext1">+358123345456</div>
                <div class="shiptext1">assistance@thisshop.com</div>
                <div class="shiptext2st">Payment options </div>
                <div class="shiptext2">We support most credit and debit cards</div>
                <div class="shiptext3st">Shipping Options </div>
                <div class="shiptext3right">€0</div>
                <div>DHL Express Worldwide</div>
                <div class="shiptext3rightnd">€0</div>
                <div>DHL Ground</div>
            </div>
        </div>
    </div>
    `;


    showCartList();
    function showCartList() {
        let middleprice = 0; 
        for(i = 0; i < cartArray.length; i ++){
            let container3 = document.querySelector('#targetCart');
            let container4 = document.createElement('div');
            container4.classList.add('container4');

            let smallProductImage = document.createElement('img');
            smallProductImage.classList.add('productImage');
            smallProductImage.src = cartArray[i].image;

            let createDiv = document.createElement('div');
            createDiv.classList.add('createDiv');
            let nameDiv = document.createElement('div');
            nameDiv.innerHTML = cartArray[i].name;
            let priceDiv = document.createElement('div');
            priceDiv.innerHTML = '€' + cartArray[i].price;
            let sizeDiv = document.createElement('div');
            let inputElement = document.createElement('input');
            inputElement.value = 1;
            inputElement.type = 'number';
            inputElement.className = 'amount';
            let quantityDiv = document.createElement('div');
            quantityDiv.innerHTML = 'Quantity';
            let deleteItem = document.createElement('button');
            deleteItem.innerHTML = '<i class="far fa-trash-alt fa-2x"></i>';
            deleteItem.className = 'deleteDiv';
            container3.append(container4);
            container4.append(smallProductImage,createDiv);
            createDiv.append(nameDiv, priceDiv, quantityDiv, inputElement, deleteItem);
        }


        let removeButtons = document.querySelectorAll('.deleteDiv');
        let containerDiv = document.querySelectorAll('.container4');
        let cartItems = document.querySelector('.cartItems');
        for(let i = 0; i < removeButtons.length; i ++){
            removeButtons[i].onclick = () => removeDiv(i);
        }

        function removeDiv(index){
            cartArray.splice(index,1);
            containerDiv[index].remove();
            cartItems.innerHTML = numberOfItems();
            console.log(cartArray);
            showCart();
        }

    calculatePrice();
    function calculatePrice() {
        for( i = 0; i < cartArray.length; i ++ ) {
            middleprice += cartArray[i].price;
            }
        let subPrice = document.querySelector('#subpri');
        subPrice.innerHTML = '€' +  middleprice.toFixed(2);
        let vatPrice = document.querySelector('#vat');
        vatPrice.innerHTML = '€' +  (0.24 * middleprice).toFixed(2);
        let totPrice = document.querySelector('#totpri');
        totPrice.innerHTML = '€' +  middleprice.toFixed(2);
    }
}
}