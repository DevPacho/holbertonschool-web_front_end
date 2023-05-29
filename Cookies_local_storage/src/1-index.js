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
  const allCookies = document.cookie;

  const cookieParagraph = document.createElement("p");
  cookieParagraph.innerHTML = `Cookies: ${allCookies}`;
  document.body.appendChild(cookieParagraph);
}
