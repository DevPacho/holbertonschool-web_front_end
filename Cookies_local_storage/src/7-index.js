const availableItems = ["Shampoo", "Soap", "Sponge", "Water", "Pacho", "shouldIncrementTest", "Aslam"];

const getCartFromStorage = () => {
  const cartContent = sessionStorage.getItem("cart");

  if (cartContent) return JSON.parse(cartContent);
  return {};
}

const addItemToCart = (item) => {
  const cartContent = getCartFromStorage();

  if (cartContent[item]) cartContent[item] += 1;
  else cartContent[item] = 1

  sessionStorage.setItem("cart", JSON.stringify(cartContent));
  displayCart();
}

const removeItemFromCart = (item) => {
  const cartContent = getCartFromStorage();

  if (cartContent[item]) delete cartContent[item];

  sessionStorage.setItem("cart", JSON.stringify(cartContent));
  displayCart();
}

const clearCart = () => {
  sessionStorage.clear();
  displayCart();
}

const createStore = () => {
  const h2Subtitle = document.createElement("h2");
  const h2SubtitleText = document.createTextNode("Available products:");
  h2Subtitle.appendChild(h2SubtitleText);

  const list = document.createElement("ul");

  document.body.appendChild(h2Subtitle);
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
  let titleExistsToReplace = document.getElementById("cart-title");

  if (!titleExistsToReplace) {
    titleExistsToReplace = document.createElement("h2");

    const titleExistsToReplaceText = document.createTextNode("Your cart:");
    titleExistsToReplace.appendChild(titleExistsToReplaceText);
    titleExistsToReplace.setAttribute("id", "cart-title");

    document.body.appendChild(titleExistsToReplace);
  }

  let divExistsToReplace = document.getElementById("div-cart");

  if (divExistsToReplace) divExistsToReplace.innerHTML = "";

  divExistsToReplace = document.createElement("div");
  divExistsToReplace.setAttribute("id", "div-cart");
  document.body.appendChild(divExistsToReplace);

  updateCart();
}

const updateCart = () => {

  // Párchese que esta última task si estuvo muy tiesa rey jajajaja! 🤣😠

  const cartContent = getCartFromStorage();
  const divCart = document.getElementById("div-cart");
  const list = document.createElement("ul");
  divCart.appendChild(list);

  if (Object.keys(cartContent).length === 0) {
    const listItem = document.createElement("li");
    const listItemText = document.createTextNode("Your cart is empty");
    listItem.appendChild(listItemText);

    list.appendChild(listItem);

  } else {

    const listItem = document.createElement("li");
    const listItemText = document.createTextNode("Clear my cart");
    listItem.appendChild(listItemText);
    
    listItem.onclick = () => clearCart();
    list.appendChild(listItem);

    for (let [item, value] of Object.entries(cartContent)) {
      const listItem = document.createElement("li");
      const listItemText = document.createTextNode(`${item} x ${value}`);
      listItem.appendChild(listItemText);

      const remove = document.createElement("p");
      const removeText = document.createTextNode("(remove)");
      remove.appendChild(removeText);

      remove.style.display = "inline";
      remove.style.paddingLeft = "5px";
      remove.style.color = "red";
      remove.style.cursor = "pointer";
  
      remove.onclick = () => removeItemFromCart(item);

      listItem.appendChild(remove);
      list.appendChild(listItem);
    }
  }
}

if (typeof(Storage) !== "undefined") {
  createStore();
  displayCart();
} else {
  alert("Sorry, your browser does not support Web storage. Try again with a better one");
}
