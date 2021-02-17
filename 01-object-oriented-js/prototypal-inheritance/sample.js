function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
  this.inProgress = false;
  this.backpackers = [];
}

const desoTrip = new Vacation("Desolation Wilderness", 10);

console.log(desoTrip);
console.log(typeof desoTrip);
console.log(typeof Vacation);
console.log(desoTrip instanceof Vacation);
