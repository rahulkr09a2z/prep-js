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
