function togglefavorite(button) {
  const favoriteicon = button.querySelector(".fa-heart");
  favoriteicon.classList.toggle("active");
  favoriteicon.classList.toggle("fa-regular");
  favoriteicon.classList.toggle("fa-solid");

  updateWishlistCount();
}

function updateWishlistCount() {
  const activeFavorites = document.querySelectorAll(
    ".product-card .fa-solid.fa-heart",
  );

  const badge = document.querySelector(".wishlist-count");

  if (badge) {
    const count = activeFavorites.length;
    badge.textContent = count;

    if (count > 0) {
      badge.style.display = "inline-block";
    } else {
      badge.style.display = "none";
    }
  }
}

function addtocart(button) {
  if (button.innerHTML.includes("Added to cart")) {
    button.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Add to cart';
    button.classList.remove("in-cart");
  } else {
    button.innerHTML = '<i class="fa-solid fa-check"></i> Added to cart';
    button.classList.add("in-cart");
  }

  updateCartCount();
}

function updateCartCount() {
  const activeCartItems = document.querySelectorAll(".add-to-cart-btn.in-cart");

  const badge = document.querySelector(".cart-count");

  if (badge) {
    const count = activeCartItems.length;
    badge.textContent = count;

    if (count > 0) {
      badge.style.display = "inline-block";
    } else {
      badge.style.display = "none";
    }
  }
}

let priceList = [32, 23, 9, 11, 123];

priceList.sort(function (a, b) {
  return a - b;
});

console.log(priceList);

document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("live-date");
  if (dateElement) {
    const today = new Date();
    //const options = { year: "numeric", month: "short", day: "numeric" };
    // const formattedDate = new Intl.DateTimeFormat("en-KE", options).format(today,);
    const formattedDate = today.toDateString();
    // const formattedDate = today.toString();

    dateElement.textContent = formattedDate.toUpperCase();
  }
});
