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
