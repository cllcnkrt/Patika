/* checked */
let listItemsDOM = document.getElementsByTagName("li")

const listItemsClick = (event) => {
    event.target.classList.toggle("checked")

}
for (let i = 0; i < listItemsDOM.length; i++) {
    listItemsDOM[i].addEventListener("click", listItemsClick)

}
/* display x  */

for (let i = 0; i < listItemsDOM.length; i++) {
    let span = document.createElement("span");
    span.className = "close";
    let txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    listItemsDOM[i].appendChild(span);
}

/*  remove x element */

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function (event) {
    let div = event.target.parentElement;
    div.style.display = "none";
  };
}

/* new element */

const newElement =()=> {
  let li = document.createElement("li");
  let inputValue = document.getElementById("task").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function (event) {
      let div = event.target.parentElement;
      div.style.display = "none";
    };
  }
}
