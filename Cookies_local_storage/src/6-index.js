const availableItems = ["Shampoo", "Soap", "Sponge", "Water", "Pacho", "shouldIncrementTest", "Aslam"];

const addItemToCart = (item) => {
  sessionStorage.setItem(item, true);
}

const createStore = () => {
  const list = document.createElement("ul");
  document.body.appendChild(list);

  for (let item = 0; item < availableItems.length; item++) {
    const listItem = document.createElement("li");
    const listItemText = document.createTextNode(availableItems[item]);

    listItem.appendChild(listItemText);
    listItem.onclick = () => addItemToCart(availableItems[item]);

    list.appendChild(listItem);
  }
}

const displayCart = () => {
  const sessionStorageLength = sessionStorage.length;

  if (!sessionStorageLength) return;

  const itemsInCart = document.createElement("p");
  const itemsInCartText = document.createTextNode(`You previously had ${sessionStorageLength} items in your cart`);

  itemsInCart.appendChild(itemsInCartText);
  document.body.appendChild(itemsInCart);
}

if (typeof(Storage) !== "undefined") {
  createStore();
  displayCart();
} else {
  alert("Sorry, your browser does not support Web storage. Try again with a better one");
}
