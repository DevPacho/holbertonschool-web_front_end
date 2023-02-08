function changeMode(size, weight, transform, background, color) {
  return () => {
    const { style } = document.body;

    style.fontSize = size;
    style.fontWeight = weight;
    style.textTransform = transform;
    style.backgroundColor = background;
    style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const paragraph = document.createElement("p");
  const paragraphText = document.createTextNode("Welcome Holberton!");
  paragraph.appendChild(paragraphText);
  document.body.appendChild(paragraph);

  const spookyButton = document.createElement("button");
  const spookyButtonText = document.createTextNode("Spooky");
  spookyButton.appendChild(spookyButtonText);
  document.body.appendChild(spookyButton);

  const darkModeButton = document.createElement("button");
  const darkModeButtonText = document.createTextNode("Dark mode");
  darkModeButton.appendChild(darkModeButtonText);
  document.body.appendChild(darkModeButton);

  const screamModeButton = document.createElement("button");
  const screamModeButtonText = document.createTextNode("Scream mode");
  screamModeButton.appendChild(screamModeButtonText);
  document.body.appendChild(screamModeButton);

  spookyButton.onclick = () => spooky();
  darkModeButton.onclick = () => darkMode();
  screamModeButton.onclick = () => screamMode();
}

main();
