/**
 * In this method while creating the object of car
 * we are unknown of the parameter we're pasing
 */

function Car(name, brand, color, power) {
  this.name = name;
  this.brand = brand;
  this.color = color;
  this.power = power;

  this.get = function () {
    console.log(
      `${this.name} car of ${this.brand} is available in ${this.color} and has a power of ${this.power} HP`
    );
  };
}

const Car1 = new Car("Honda City", "Honda", "Black", 230);
const Car2 = new Car("M1", "BMW", "White", 500);

Car1.get();
Car2.get();

/**
 * BUILDER PATTERN
 */

function CarBuilder(name) {
  this.name = name;

  this.setBrand = function (brand) {
    this.brand = brand;
    return this;
  };
  this.setColor = function (color) {
    this.color = color;
    return this;
  };
  this.setPower = function (power) {
    this.power = power;
    return this;
  };
  this.build = function () {
    return new Car(this.name, this.brand, this.color, this.power);
  };
}

const Car3 = new CarBuilder("Nano")
  .setBrand("Tata")
  .setColor("Red")
  .setPower(200)
  .build();
const Car4 = new CarBuilder("Scorpio")
  .setBrand("Maruti")
  .setColor("Green")
  .setPower(450)
  .build();

Car3.get();
Car4.get();

/////////////////////////////////////////////////////////////////////////

// Class Implementation
class Bike {
  constructor(name) {
    this.name = name;
  }

  setBrand(brand) {
    this.brand = brand;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setPower(power) {
    this.power = power;
    return this;
  }


  get() {
    console.log(
      `${this.name} Bike of ${this.brand} is available in ${this.color} and has a power of ${this.power} HP`
    );
  }
}
console.log('----------------------------------------------------------------')
const Bike1 = new Bike("Pulsar").setBrand("Bajaj").setColor("Blue").setPower(220);
const Bike2 = new Bike("R15").setBrand("BMW").setColor("Yellow").setPower(500);

Bike1.get();
Bike2.get();


