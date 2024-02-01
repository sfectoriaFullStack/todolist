

const createItem = (task, id) => {
  var newLi = document.createElement("li"); // create <li></li>
  newLi.classList = "text-primary bg-warning "; // style
  newLi.innerText = task; // <li>value</li>
  newLi.onclick = () => removeItem(newLi);
  newLi.value = id;
  document.getElementById("root").appendChild(newLi);
};


var items = [];
var lsValues = localStorage.getItem("tasks");
if (lsValues !== null) {
  items = JSON.parse(lsValues);
}
items.forEach(element => {
    createItem(element.value, element.id);
});

// for (var j = 0; j < items.length; j++) {
//   createItem(items[j].value, items[j].id);
// }

const addItem = function (e) {
    e.preventDefault();
  var task = document.getElementById("inputItem").value; // get value from input
  createItem(task, items.length); // <ul id='root' ><li>value</li></ul>
  // add item to storage
  items.push({ value: task, id: items.length });
  localStorage.setItem("tasks", JSON.stringify(items));

};

const removeItem = (node) => {
  console.log(node.value);
  items = items.filter((elem, i) => node.value !== elem.id);
  localStorage.setItem("tasks", JSON.stringify(items));
  node.remove();
};
