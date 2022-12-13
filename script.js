// variables
let recipes = [];
const saveBtn = document.querySelector("#save-btn");
const deleteBtn = document.querySelector("#delete-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const tabBtn = document.querySelector("#tab-btn");
const pressEnter = document.querySelector("#input-el");

let listFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));

// conditional
if (listFromLocalStorage) {
 recipes = listFromLocalStorage;
 show(recipes);
}

// event listeners
saveBtn.addEventListener("click", function() {
 recipes.push(inputEl.value);
 inputEl.value = "";
 localStorage.setItem("recipes", JSON.stringify(recipes));
 show(recipes);
 console.log(recipes);
});

pressEnter.addEventListener("keypress", function(event) {
 if (event.key === "Enter") {
  // event.preventDefault();
  document.querySelector("#save-btn").click();
 }
}); 

tabBtn.addEventListener("click", function() {
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  recipes.push(tabs[0].url);
  localStorage.setItem("recipes", JSON.stringify(recipes));
  show(recipes) });
});

deleteBtn.addEventListener("click", function() {
 localStorage.clear();
 recipes = [];
 show(recipes);
});

// function
function show(list) {
 let listItems = "";
 for (let i = 0; i < list.length; i++) {
  listItems += `
  <li>
   <a href="${list[i]}" target="_blank">${list[i]}</a>
  </li>
  `;
 }
 ulEl.innerHTML = listItems;
}