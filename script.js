
function deleteItem() {
	var itemList = document.getElementsByTagName('li');
	if (itemList.length > 0) {
		var element = itemList[itemList.length - 1];
		element.parentNode.removeChild(element);
	} 
}

function createItem() {
  var newItem = document.createElement("li");
  newItem.className = "item";
  var itemText = document.createTextNode("Новая задача");
  newItem.appendChild(itemText);
  //
  document.getElementById("list").appendChild(newItem);
}

