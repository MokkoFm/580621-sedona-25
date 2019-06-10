var link = document.querySelector(".activate-form-btn");
var showForm = document.querySelector(".search-form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  showForm.classList.toggle("no-form");
});
