// Membuat variabel untuk navbar

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// Membuat fitur menu dapat diklik

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// Ganti Theme
// ! Membuat Variabel
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const header = document.querySelector('header');
const list = document.querySelector('.navbar');
const box = document.querySelector('.bx');
const user = document.querySelector(".usernameWelcome")
const searchIcon = document.querySelector('.search-icon')
const footer = document.querySelector(".footer_container")
const paraFooter = document.querySelector(".footer-container p")
const headerFooter = document.querySelector(".footer-container .head1")
const headerFooter2 = document.querySelector(".footer-container .head2")
const headerFooter3 = document.querySelector(".footer-container .head3")
const cartTab = document.querySelector('.cart')

// ! Menambahkan class ketika toggle di click
toggle.addEventListener('click', () => { body.classList.toggle('darkmode')
    if (!body.classList.contains('darkmode')) {
        return localStorage.setItem('theme', 'lightmode');
    }
    localStorage.setItem('theme', 'darkmode');
});

toggle.addEventListener('click', () => { list.classList.toggle('darkmode');
    if (!list.classList.contains('darkmode')) {
        return localStorage.setItem('theme', 'lightmode');
    }
    localStorage.setItem('theme', 'darkmode');
});

toggle.addEventListener('click', () => { header.classList.toggle('darkmode');
    if (!header.classList.contains('darkmode')) {
        return localStorage.setItem('theme', 'lightmode');
    }
    localStorage.setItem('theme', 'darkmode');
});

toggle.addEventListener('click', () => { box.classList.toggle('darkmode');
    if (!box.classList.contains('darkmode')) {
        return localStorage.setItem('theme', 'lightmode');
    }
    localStorage.setItem('theme', 'darkmode');
});

toggle.addEventListener('click', () => { user.classList.toggle('darkmode');
    if (!user.classList.contains('darkmode')) {
        return localStorage.setItem('theme', 'lightmode');
    }
    localStorage.setItem('theme', 'darkmode');
});

toggle.addEventListener('click', () => { searchIcon.classList.toggle('darkmode');
    if (!searchIcon.classList.contains('darkmode')) {
        return localStorage.setItem('theme', 'lightmode');
    }
    localStorage.setItem('theme', 'darkmode');
});

toggle.addEventListener('click', () => { footer.classList.toggle('darkmode');
    if (!footer.classList.contains('darkmode')) {
        return localStorage.setItem('theme', 'lightmode');
    }
    localStorage.setItem('theme', 'darkmode');
});

toggle.addEventListener('click', () => { paraFooter.classList.toggle('darkmode');
if (!paraFooter.classList.contains('darkmode')) {
    return localStorage.setItem('theme', 'lightmode');
    }
    localStorage.setItem('theme', 'darkmode');
});

toggle.addEventListener('click', () => { headerFooter.classList.toggle('darkmode');
    if (!headerFooter.classList.contains('darkmode')) {
        return localStorage.setItem('theme', 'lightmode');
    }
    localStorage.setItem('theme', 'darkmode');
});

toggle.addEventListener('click', () => { headerFooter2.classList.toggle('darkmode');
    if (!headerFooter2.classList.contains('darkmode')) {
        return localStorage.setItem('theme', 'lightmode');
    }
    localStorage.setItem('theme', 'darkmode');
});

toggle.addEventListener('click', () => { headerFooter3.classList.toggle('darkmode');
    if (!headerFooter3.classList.contains('darkmode')) {
        return localStorage.setItem('theme', 'lightmode');
    }
    localStorage.setItem('theme', 'darkmode');
});

toggle.addEventListener('click', () => { cartTab.classList.toggle('darkmode');
    if (!cartTab.classList.contains('darkmode')) {
        return localStorage.setItem('theme', 'lightmode');
    }
    localStorage.setItem('theme', 'darkmode');
});

toggle.addEventListener('click', () => toggle.classList.toggle('active'));

// Membuat local storage
let getTheme = localStorage.getItem('theme');
if (getTheme && getTheme === 'darkmode') {
    body.classList.add('darkmode');
    list.classList.add('darkmode');
    header.classList.add('darkmode');
    box.classList.add('darkmode');
    user.classList.add('darkmode');
    toggle.classList.add('active');
    searchIcon.classList.add('darkmode');
    footer.classList.add('darkmode');
    paraFooter.classList.add('darkmode');
    headerFooter.classList.add('darkmode');
    headerFooter2.classList.add('darkmode');
    headerFooter3.classList.add('darkmode');
    cartTab.classList.add('darkmode');
}

// Membuat Opened Sign In dan Sign Up Page
const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const signinBtn = document.querySelector("#signin");

// Membuat Button Sign Up dan Sign In
formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

signinBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

// Show Hide Password
function myLogPassword() {
    var log = document.getElementById("logPass");
    var eyeshow = document.getElementById("eye");
    var eyehide = document.getElementById("eye-slash");

    if (log.type === "password") {
        log.type = "text";
        eyeshow.style.opacity = "0";
        eyehide.style.opacity = "1";
    }
    else {
        log.type = "password";
        eyeshow.style.opacity = "1";
        eyehide.style.opacity = "0";
    }
}

function myCreatePassword() {
    var create = document.getElementById("createPass");
    var eyeshow = document.getElementById("eye-2");
    var eyehide = document.getElementById("eye-slash-2");

    if (create.type === "password") {
        create.type = "text";
        eyeshow.style.opacity = "0";
        eyehide.style.opacity = "1";
    }
    else {
        create.type = "password";
        eyeshow.style.opacity = "1";
        eyehide.style.opacity = "0";
    }
}

function myConfirmPassword() {
    var confirm = document.getElementById("confPass");
    var eyeshow = document.getElementById("eye-3");
    var eyehide = document.getElementById("eye-slash-3");

    if (confirm.type === "password") {
        confirm.type = "text";
        eyeshow.style.opacity = "0";
        eyehide.style.opacity = "1";
    }
    else {
        confirm.type = "password";
        eyeshow.style.opacity = "1";
        eyehide.style.opacity = "0";
    }
}

// Sign Up Account
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("createEmail").value;
    var create = document.getElementById("createPass").value;
    var confirm = document.getElementById("confPass").value;
    var user = document.getElementById("createUsername").value;

    if (create !== confirm) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", confirm);
    localStorage.setItem("username", user);

    document.getElementById("createEmail").value = "";
    document.getElementById("createPass").value = "";
    document.getElementById("confPass").value = "";
    document.getElementById("createUsername").value = "";

    alert("Your account has been created successfully!");
    home.classList.remove("show");
});

// Sign In Account
document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var signInEmail = document.getElementById("logEmail").value;
    var signInPassword = document.getElementById("logPass").value;
    var signInUsername = document.getElementById("logUser").value;
    var button = document.getElementById("form-open");
    var greeting = document.querySelector(".usernameWelcome") 
    var signOut = document.getElementById("exit");

    // Periksa apakah akun ada di localStorage
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");
    var storedUsername = localStorage.getItem("username");

    if (signInEmail === storedEmail && signInPassword === storedPassword && signInUsername === storedUsername && button.innerHTML === "Login") {
        alert(`Hello, ${signInUsername}. Get ready to explore amazing laptops!`);
        button.style.opacity = "0"
        button.style.pointerEvents = "none"
        signOut.style.opacity = "1"
        signOut.style.pointerEvents = "fill" 
        greeting.innerHTML = `Hello, ${signInUsername}`
        home.classList.remove("show");
    }
    else {
        alert("Oops! Something isn't quite right. Please check your email or username and password and try again.");
    }

    document.getElementById("logEmail").value = "";
    document.getElementById("logPass").value = "";
    document.getElementById("logUser").value = "";
});

// Logout Account
function logOut() {
    var button = document.getElementById("form-open");
    var greeting = document.querySelector(".usernameWelcome") 
    var signOut = document.getElementById("exit");

    var konfigurasi = confirm('Are you sure?');
    if (konfigurasi === true) {

        removeEmail = localStorage.removeItem("email");
        removePassword = localStorage.removeItem("password");
        removeUsername = localStorage.removeItem("username");
        button.style.opacity = "1"
        button.style.pointerEvents = "fill"
        signOut.style.opacity = "0"
        signOut.style.pointerEvents = "none"
        greeting.innerHTML = "";
    }
}

// Search Show
const searchContainer = document.querySelector('.search_container');
const searchClose = document.querySelector('.search_close');

searchIcon.addEventListener("click", (e) => {
    e.preventDefault();
    searchContainer.classList.add("show");
});

searchClose.addEventListener("click", (e) => {
    e.preventDefault();
    searchContainer.classList.remove("show");
})

// Transition

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){  
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

let refreshInterval = setInterval(()=> {next.click()}, 3000);

function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active = key;
        reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

// Cart
let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

// Opened Cart
cartIcon.onclick = () => {
    cart.classList.add('active');
}

closeCart.onclick = () => {
    cart.classList.remove('active');
}

// Cart Function 
if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready);
}
else {
    ready()
}

// Function Ready
function ready() {
    // Remove Items
    var removeCartButton = document.getElementsByClassName('cart-remove');
    console.log(removeCartButton);
    for (var i = 0; i < removeCartButton.length; i++) {
        var button = removeCartButton[i];
        button.addEventListener("click", removeCartItem);
    }
    // Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    // Add Item 
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked)
    }
    // Buy Button
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked)
}

// Function Remove Items
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Function Quantity Changed 
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0 ) {
        input.value = 1
    }
    updateTotal();
}

// Function Update Total
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content') [0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        // Jika Harga ada Koma
        total = Math.round(total*100) / 100;
        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
}

// Function Add Cart
function addCartClicked(event) {
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg); 
    updateTotal();
}

// Function addProductToCart
function addProductToCart(title, price, productImg) {
    var  cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('You have already add this item to cart')
            return;
        }
    }

var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <h2 class="cart-product-title">${title}</h2>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class='bx bxs-trash-alt cart-remove'></i>`;
                        cartShopBox.innerHTML = cartBoxContent;
                        cartItems.append(cartShopBox)
                        cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
                        cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}

// Function Buy Button
function buyButtonClicked() {
    alert('Your Order is placed')
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}