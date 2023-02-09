function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return number > 1;
}

function countPrimeNumbers() {
  let primesCounter = 0;

  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) primesCounter++;
  }

  return primesCounter;
}

console.log(countPrimeNumbers());

const timeBeforeExecution = performance.now();
for (let times = 0; times <= 100; times++) countPrimeNumbers();
const timeAfterExecution = performance.now();

const totalExecutionTime = timeAfterExecution - timeBeforeExecution
console.log(`Execution time of printing countPrimeNumbers was ${totalExecutionTime} miliseconds`);
