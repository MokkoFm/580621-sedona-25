var link = document.querySelector(".activate-form-btn");
var showForm = document.querySelector(".search-form");
var form = showForm.querySelector(".appointment-form");
var arrivalDate = showForm.querySelector("[name=arrival]");
var departureDate = showForm.querySelector("[name=departure]");
var adult = showForm.querySelector("[name=adults]");
var child = showForm.querySelector("[name=children]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  showForm.classList.toggle("no-form");
});

form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adult.value || !child.value) {
    evt.preventDefault();
    showForm.classList.remove("modal-error");
    showForm.offsetWidth = showForm.offsetWidth;
    showForm.classList.add("modal-error");
    console.log("Пожалуйста, заполните все поля формы");
  }
});
