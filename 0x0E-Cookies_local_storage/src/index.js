const setCookies = () => {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  if (firstname && email) {
    alert("Session successfully logged in!");

    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
  } else {
    alert("Please, enter your Firstname and Email.");
  }
}

const showCookies = () => {
  const allCookies = document.cookie;

  const cookieParagraph = document.createElement("p");
  cookieParagraph.innerHTML = `Cookies: ${allCookies}`;
  document.body.appendChild(cookieParagraph);
}
