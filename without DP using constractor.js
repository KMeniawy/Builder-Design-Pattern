class Robot {
  constructor(name, canFly, canCarry, canDive, canReach) {
    this.name = name;
    this.canCarry = canCarry;
    this.canFly = canFly;
    this.canDive = canDive;
    this.canReach = canReach;
  }
  fly() {
    this.canFly ? console.log("Weeeeee!") : "";
  }
  dive() {
    this.canDive ? console.log("Bloop Bloop") : "";
  }
  carry() {
    this.canCarry ? console.log("I can carry this allday") : "";
  }
  reach() {
    this.canReach ? console.log("Got it!!") : "";
  }
}

class BigRobot {
  constructor(
    name,
    canFly,
    canCarry,
    canDive,
    canReach,
    canSwim,
    canDance,
    canTalk,
    canRead,
    canCan
  ) {
    this.name = name;
    this.canCarry = canCarry;
    this.canFly = canFly;
    this.canDive = canDive;
    this.canReach = canReach;
    this.canSwim = canSwim;
    this.canDance = canDance;
    this.canTalk = canTalk;
    this.canRead = canRead;
    this.canCan = canCan;
  }
}

// const robot2 = new Robot("bob-4", true, true, false, false);
// robot2.fly();
// robot2.carry();
// robot2.dive();
// console.log(robot2);
//
//
//
const bigRobot = new BigRobot(
  "Dory",
  true,
  true,
  false,
  false,
  false,
  true,
  false,
  false,
  false
);
console.log(bigRobot);

// a robot that can fly and carry heavy stuff and dance
