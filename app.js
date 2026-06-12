function togglefavorite(button) {
    const favoriteicon = button.querySelector('.fa-heart');
    favoriteicon.classList.toggle('active');
    favoriteicon.classList.toggle('fa-regular');
    favoriteicon.classList.toggle('fa-solid');
}

function addtocart(button) {
    // const button = document.querySelector('.add-to-cart-btn');
    button.innerHTML = '<i class="fa-solid fa-check"></i> Added to cart';
}


let priceList = [32, 23, 9, 11, 123];

priceList.sort(function (a, b) {
    return a - b;
});

console.log(priceList);