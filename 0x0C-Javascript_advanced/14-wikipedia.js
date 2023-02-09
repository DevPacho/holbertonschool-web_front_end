function createElement(data) {
  const paragrapgh = document.createElement("p");
  const paragrapghText = document.createTextNode(data);
  paragrapgh.appendChild(paragrapghText);
  document.body.appendChild(paragrapgh);
}

function queryWikipedia(callback) {
  const request = new XMLHttpRequest();
  const wikipediaStackOverflowURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"

  request.open("GET", wikipediaStackOverflowURL);
  request.responseType = "json";

  request.send();

  request.onload = () => {
    const extractAPIResponse = request.response.query.pages["21721040"].extract;
    callback(extractAPIResponse);
  }
}

queryWikipedia(createElement);
