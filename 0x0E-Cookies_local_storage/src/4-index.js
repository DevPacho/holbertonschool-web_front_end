const setCookies = () => {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  if (firstname && email) {

    alert("Session successfully logged in!");

    Cookies.set("firstname", firstname, { expires: 10, path: "" });
    Cookies.set("email", email, { expires: 10, path: "" });

  } else {
    alert("Please, enter your Firstname and Email.");
  }
}

const showCookies = () => {
  const cookies = document.createElement("p");

  cookies.innerHTML = `Email: ${Cookies.get("email")} - Firstname: ${Cookies.get("firstname")}`;
  document.body.appendChild(cookies);
}

const showForm = () => {
  const loginForm = document.getElementById("form");
  loginForm.style.display = "block";
}

const hideForm = () => {
  const loginForm = document.getElementById("form");
  loginForm.style.display = "none";
}

const deleteCookiesAndShowForm = () => {
  Cookies.remove("firstname");
  Cookies.remove("email");
  showForm();
}

const showWelcomeMessageOrForm = () => {
  const isLoggedIn = Cookies.get("firstname");

  if (!isLoggedIn) {
    showForm();
  } else {
    const welcome = document.createElement("h1");
    const logout = document.createElement("a");
  
    const welcomeText = document.createTextNode(`Welcome: ${isLoggedIn}`);
    const logoutText = document.createTextNode("(logout)");
  
    welcome.appendChild(welcomeText);
    welcome.appendChild(logout);
  
    logout.appendChild(logoutText);
    logout.style.fontWeight = "normal";
    logout.style.fontStyle = "italic";
    logout.style.paddingLeft = "10px";
    logout.style.color = "red";
    logout.onclick = () => {
      deleteCookiesAndShowForm();
      welcome.remove();
    }
  
    hideForm();
    document.body.appendChild(welcome);
  }
}

showWelcomeMessageOrForm();
