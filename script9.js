let title = document.getElementById("title");
let nameInput = document.getElementById("nameInput");
let liveText = document.getElementById("liveText");
let citySelect = document.getElementById("citySelect");
let cityResult = document.getElementById("cityResult");
let submitBtn = document.getElementById("submitBtn");
let username = document.getElementById("username");
let age = document.getElementById("age");
let formResult = document.getElementById("formResult");

title.addEventListener("click", function () {
  title.innerText = "Title Clicked";
});

nameInput.addEventListener("input", function () {
  liveText.innerText = nameInput.value;
});

citySelect.addEventListener("change", function () {
  cityResult.innerText = "Selected City: " + citySelect.value;
});

submitBtn.addEventListener("click", function () {
  if (username.value === "" || age.value === "") {
    formResult.innerText = "Please fill all fields";
  } else {
    formResult.innerText = "Form Submitted Successfully";
  }
});
