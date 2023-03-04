class Robot {
  constructor(name) {
    this.name = name;
  }
}

class CarrierRobot extends Robot {
  carry() {
    console.log("I can carry this allday");
  }
}

class ReacherRobot extends Robot {
  reach() {
    console.log("Got it!!");
  }
}

class DiverRobot extends Robot {
  dive() {
    console.log("Bloop Bloop");
  }
}
class RocketRobot extends Robot {
  fly() {
    console.log("Weeeeee!");
  }
}

class CarrierRocketRobot extends Robot {
  carry() {
    console.log("I can carry this allday");
  }
  fly() {
    console.log("Weeeeeee!");
  }
}

class CarrierReacherRobot extends Robot {
  carry() {
    console.log("I can carry this allday");
  }
  reach() {
    console.log("Got it!!");
  }
}

class CarrierDiverRobot extends Robot {
  carry() {
    console.log("I can carry this allday");
  }
  dive() {
    console.log("Bloop Bloop");
  }
}

// const robot1 = new CarrierRobot("bob-2");
// robot1.carry();
// // robot1.dive();
// console.log(robot1);

// const robot2 = new CarrierReacherRobot("bob-3");
// console.log(robot2);
