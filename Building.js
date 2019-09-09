// Class
function Building(floors) {
    this.what = "building";
    this.floors = floors;
}

// Instances of Class
const myHouse = new Building(3);
const yourHouse = new Building(2);
const theOffice = new Building(12);

// Method for all instances
Building.prototype.countFloors = function() {
    console.log("I have", this.floors, "floors");
};

// Exec method
myHouse.countFloors();
yourHouse.countFloors();
theOffice.countFloors();

