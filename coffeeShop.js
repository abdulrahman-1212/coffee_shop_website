const menuBar = document.getElementById('menu-bars');
const navBar = document.querySelector('.nav-bar');
const searchBtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.search-form');
const shoppingCartBtn = document.querySelector('#shopping-cart');
const shoppingCart = document.querySelector('.cart');
const addTocartBtns = document.querySelectorAll('.products-container .box .icons .fa-shopping-cart');
const itemsContainer = document.querySelector('.items-container');
const loveBtns = document.querySelectorAll('.products-container .box .icons .fa-heart');
const notification = document.querySelector('.cart .notification');


window.onscroll = () => {
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}


menuBar.addEventListener('click', () => {
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    searchBtn.classList.remove('fa-times')
    shoppingCart.classList.remove('active');
});

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');
    navBar.classList.remove('active');
    shoppingCart.classList.remove('active');
});

shoppingCartBtn.addEventListener('click', () => {
    shoppingCart.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    searchBtn.classList.remove('fa-times');
});


addTocartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btn.style.color = '#d3ad7f';
        notification.classList.add('active')
        // Create new Item
        let box = e.target.parentNode.parentNode;
        let src = box.childNodes[3].src;
        let productTitle = box.childNodes[5].textContent
        let productPrice = box.childNodes[9].textContent
        console.log(box.childNodes)

        let newItem = document.createElement('div');
        newItem.classList.add('item');

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('image');

        let itemImage = document.createElement('img')
        itemImage.src = src;

        imageContainer.appendChild(itemImage);

        let itemContent = document.createElement('div');
        itemContent.classList.add('content');

        let itemTitle = document.createElement('h3');
        itemTitle.classList.add('title');
        itemTitle.textContent = productTitle;


        let itemPrice = document.createElement('h1');
        itemPrice.classList.add('price');
        itemPrice.textContent = productPrice;

        itemContent.appendChild(itemTitle);
        itemContent.appendChild(itemPrice);

        let xBtn = document.createElement('i');
        xBtn.classList.add('fas');
        xBtn.classList.add('fa-times')

        newItem.appendChild(imageContainer);
        newItem.appendChild(itemContent);
        newItem.appendChild(xBtn);
        itemsContainer.appendChild(newItem)

})

});

