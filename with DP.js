class Robot {
  constructor(name) {
    this.name = name;
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

class RobotBuilder {
  constructor(name) {
    this.robot = new Robot(name);
  }
  setDescription(description) {
    this.robot.description = description;
    return this;
  }
  setCanFly(canFly) {
    this.robot.canFly = canFly;
    return this;
  }
  setCanDive(canDive) {
    this.robot.canDive = canDive;
    return this;
  }
  setCanReach(canReach) {
    this.robot.canReach = canReach;
    return this;
  }
  setCanCarry(canCarry) {
    this.robot.canCarry = canCarry;
    return this;
  }

  build() {
    return this.robot;
  }
}

// const robot3 = new RobotBuilder("bob-4")
//   .setDescription("This robot was made using Builder DP")
//   .setCanCarry(true)
//   .setCanFly(true)
//   .build();

// console.log(robot3);
// robot3.carry();

const robot4 = new RobotBuilder("Os-2")
  .setCanDive(true)
  .setCanReach(true)
  .setCanCarry(true)
  .build();

console.log(robot4);

robot4.carry();
robot4.dive();
robot4.reach();
robot4.fly();
