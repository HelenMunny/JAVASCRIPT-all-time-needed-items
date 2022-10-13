

// select items
const alert = document.querySelector(".alert");
const form = document.querySelector(".groceryForm");
const input = document.querySelector("#item");
const submitBtn = document.querySelector(".submitBtn");
const groceryContainer = document.querySelector(".groceryContainer");
const list = document.querySelector(".groceryList");
const clearBtn = document.querySelector(".clearBtn");

// edit option
let editElement;
let editFlag = fasle;
let editID = "";