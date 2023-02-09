const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Buillaume", // Or Guillaume??? jaja
  lastName: "Ialva", // Salva??? Ok, it was on purpose.
  location: "Telaviv",
  occupation: "Engineer"
}

function logWelcomeUser(welcomeString) {
  console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

// Should return undefined by the context.
logWelcomeUser("Welcome");

// It works by the binding of 'this' context to the user object.
const bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser("Hello");
