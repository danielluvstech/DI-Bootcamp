const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const ul = document.querySelector("ul");
const newLi = document.createElement("li");
const text = document.createTextNode("Logout");
newLi.appendChild(text);
ul.appendChild(newLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("First link text:", firstLi.textContent);
console.log("Last link text:", lastLi.textContent);