function  Car(model, milesPerGallon){
  this.model = model;
  this.milesPerGallon = milesPerGallon;

}


Car.prototype.fill = function ( gallons ){
  this.tank += gallons;

}
Car.prototype.drive = function ( distance ){
  const remainingDistance = this.tank * this.milesPerGallon;
  if(remainingDistance === 0){
    return 'Hey man, I can\'t drive, as I am out of fuel'
  }
  this.odometr += distance <= remainingDistance ? distance : remainingDistance
  this.tank -= distance <= remainingDistance ? distance / this.milesPerGallon : this.tank
  return `I ran out of fuel at ${this.tank * this.milesPerGallon} miles!`
}


//Stexcum enq model bmw- n
const bmw = new Car('BMW', 20)

//Talis enq naxnakan 0 litr benzin, 0 kilometr vazq
bmw.tank = 0
bmw.odometr = 0


//Licqavowum enq 100 Galon   benzin
bmw.fill(100)


//Qshum enq 1000 miles
console.log( bmw.drive( 1000 ) );


//Stugum enq qsheluc heto mnum e 50 Galon benzin, kilometrajy darnum e 1000
console.log(`Odometr -> ${bmw.odometr}`)
console.log(`tank -> ${bmw.tank}`)



//Porcum enq qshel 2000 miles
console.log(bmw.drive(2000))


//Stugum enq baky datark e, kilometrajy 2000 miles :)
console.log(`tank -> ${bmw.tank}`)
console.log(`Odometr -> ${bmw.odometr}`)
