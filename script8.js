let title = document.getElementById("title");
let text = document.querySelector("#text");
let changeBtn = document.getElementById("changeBtn");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let container = document.getElementById("container");

changeBtn.onclick = function () {
  title.innerText = "Text Changed Using DOM";
  text.style.color = "red";
  text.style.fontSize = "20px";
};

addBtn.onclick = function () {
  let newElement = document.createElement("p");
  newElement.innerText = "New paragraph added";
  container.appendChild(newElement);
};

removeBtn.onclick = function () {
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
};
