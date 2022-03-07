let inputElem = document.querySelector("#todo-list .input-subject");
let btnAddElem = document.querySelector("#todo-list .btn-add");
let olElem = document.querySelector("#todo-list .list");
btnAddElem.addEventListener("click", function() {
    // add li
    let li = document.createElement("li");
    olElem.appendChild(li).innerText = inputElem.value + " ";
    // add button remove
    let btnRemove = document.createElement("button");
    li.appendChild(btnRemove).innerText = "-";
    // add event for button remove
    btnRemove.addEventListener("click", () => {
        olElem.removeChild(li);
    });
    inputElem.value = "";
});