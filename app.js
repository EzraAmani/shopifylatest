//this the favorites button functionality
function togglefavorite(button) {
  const favoriteicon = button.querySelector(".fa-heart");
  favoriteicon.classList.toggle("active");
  favoriteicon.classList.toggle("fa-regular");
  favoriteicon.classList.toggle("fa-solid");
}

//this is the add to cart functionality
function addtocart(button) {
  // const button = document.querySelector('.add-to-cart-btn');
  button.innerHTML = '<i class="fa-solid fa-check"></i> Added to cart';
}

//this is the sort assignment
let priceList = [32, 23, 9, 11, 123];

priceList.sort(function (a, b) {
  return a - b;
});

console.log(priceList);

//so this is the code for how the date works

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

//this is just me practising dates

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);
// const date = new Date();

// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(4);

// console.log(date);
