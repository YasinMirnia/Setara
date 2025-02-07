document.getElementById("search-icon").addEventListener("click", function () {
  var searchBar = document.getElementById("search-bar");

  // اگر جعبه جستجو پنهان بود، آن را نمایش می‌دهیم
  if (searchBar.style.display === "none" || searchBar.style.display === "") {
    searchBar.style.display = "block";
  } else {
    searchBar.style.display = "none"; // پنهان کردن جعبه جستجو
  }
});
