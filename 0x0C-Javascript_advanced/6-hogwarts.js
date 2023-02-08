const studentHogwarts = function() {
  let privateScore = 0;
  let name = null;

  let changeScoreBy = (points) => privateScore += points;

  return {
    setName: (newName) => name = newName,
    rewardStudent: () => changeScoreBy(1),
    penalizeStudent: () => changeScoreBy(-1),
    getScore: () => `${name}: ${privateScore}`
  }
};

const harry = studentHogwarts();

harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = studentHogwarts();

draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
