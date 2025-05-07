const container = document.getElementById("container");
console.log(container);

const firstListItems = document.querySelectorAll(".list")[0].children;
firstListItems[1].textContent = "Richard";

const secondList = document.querySelectorAll(".list")[1];
secondList.removeChild(secondList.children[1]);

const lists = document.querySelectorAll(".list");
lists.forEach(list => {
    list.firstElementChild.textContent = "Daniel";
});

lists.forEach(list => {
    list.classList.add("student_list");
});

lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

const danLi = [...secondList.children].find(li => li.textContent === "Dan");
if (danLi) {
    danLi.style.display = "none";
}

const richardLi = [...firstListItems].find(li => li.textContent === "Richard");
if (richardLi) {
    richardLi.style.border = "2px solid black";
}

document.body.style.fontSize = "20px";
