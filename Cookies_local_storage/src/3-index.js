const setCookies = () => {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  if (firstname && email) {

    alert("Session successfully logged in!");

    const expirationDays = 10;
    const hoursPerDay = 24;
    const minutesPerHour = 60;
    const secondsPerMinute = 60;
    const millisecondsPerSecond = 1000;

    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * hoursPerDay * minutesPerHour * secondsPerMinute * millisecondsPerSecond));

    const expires = `expires=${date.toUTCString()}`;

    document.cookie = `firstname=${firstname};${expires};path=/`;
    document.cookie = `email=${email};${expires};path=/`;

  } else {
    alert("Please, enter your Firstname and Email.");
  }
}

const showCookies = () => {
  const cookies = document.createElement("p");

  cookies.innerHTML = `Email: ${getCookie("email")} - Firstname: ${getCookie("firstname")}`;
  document.body.appendChild(cookies);
}

const getCookie = (name) => {
  const cookieName = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const splittedCookies = decodedCookie.split(";");

  for (let readCookie = 0; readCookie < splittedCookies.length; readCookie++) {
    let eachCookieValue = splittedCookies[readCookie];

    while(eachCookieValue.charAt(0) == " ") {
      eachCookieValue = eachCookieValue.substring(1);
    }

    if (eachCookieValue.indexOf(cookieName) === 0) {
      return eachCookieValue.substring(cookieName.length, eachCookieValue.length);
    }
  }

  return "";
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
  document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  showForm();
}

const showWelcomeMessageOrForm = () => {
  const isLoggedIn = getCookie("firstname");

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
