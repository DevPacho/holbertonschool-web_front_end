function welcomeMessage(fullName) {
  return () => alert(`Welcome ${fullName}`);
};

const guillaume = welcomeMessage("Guillaume");
guillaume();

const alex = welcomeMessage("Alex");
alex();

const fred = welcomeMessage("Fred");
fred();
