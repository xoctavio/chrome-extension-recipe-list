// variables
let recipes = [];
const saveBtn = document.querySelector("#save-btn");
const deleteBtn = document.querySelector("#delete-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const tabBtn = document.querySelector("#tab-btn");
const pressEnter = document.querySelector("#input-el");

let listFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));