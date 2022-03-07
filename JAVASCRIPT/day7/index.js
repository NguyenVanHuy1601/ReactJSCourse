// let h3Elem = document.getElementById("title");
// console.log("H3: ", h3Elem);

// let elems = document.getElementsByClassName("bg-grey");
// h3Elem.style.color = "red";
// let btnRemove = document.getElementById("remove");
// let btnChangeColor = document.getElementById("change-color");

// let buttonElems = document.getElementsByTagName("button");
// buttonElems[0].style.color = "blue";
// console.log("elems: ", elems);
// for (let i = 0; i < elems.length; i++) {
//     elems[i].style.backgroundColor = "grey";
// }
// h3Elem.classList.add("big-size");
// let inputElem = document.getElementById("input");
// h3Elem.id = "title2";

let sectionElem = document.createElement("section");
let h3Elem = document.createElement("h3");
let pElem = document.createElement("p");
sectionElem.appendChild(h3Elem);
sectionElem.appendChild(pElem);
h3Elem.innerText = "Javascript h3 second";

document.body.appendChild(sectionElem);
// h3Elem.classList.add("bg-grey");
// h3Elem.classList.add("color-blue");

let h3First = document.querySelectorAll("h3");
console.log("first h3: ", h3First);

let btnChangeColor = document.getElementById("js-btn-change-color");

// btnChangeColor.onclick = changeColorRed;

// function changeColorRed() {
//     document.getElementById("title").style.color = "red";
// }

btnChangeColor.addEventListener("click", function() {
    document.getElementById("title").style.color = "red";
});