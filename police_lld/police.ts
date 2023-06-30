// Interfaces of schema
// ! Vehicle

class Vehicle {
  id: Number;
  vehicle_type: String;
  vehicle_date: String;
  vehicle_time: String;
  vehicle_brand: String;
  vehicle_color: String;
  vehicle_location: String;
  vehicle_image: String;
  constructor(id: Number, vehicle_type: string, vehicle_date: String, vehicle_time: String, vehicle_brand: String, vehicle_color: String, vehicle_location: String, vehicle_image: String) {
    this.id = id;
    this.vehicle_type = vehicle_type;
    this.vehicle_date = vehicle_date;
    this.vehicle_time = vehicle_time;
    this.vehicle_brand = vehicle_brand;
    this.vehicle_color = vehicle_color;
    this.vehicle_location = vehicle_location;
    this.vehicle_image = vehicle_image;
  }
}

// ! Person complain  information
class Person {
  person_id: Number;
  person_name: String;
  person_aadharNumber: String;
  person_date: String;
  person_time: String;

  constructor(person_id: Number, person_name: String, person_aadharNumber: String, person_date: String, person_time: String) {
    this.person_id = person_id;
    this.person_name = person_name;
    this.person_aadharNumber = person_aadharNumber;
    this.person_date = person_date;
    this.person_time = person_time;
  }
}
// ! Pet complain information
// ! Mobile complain information
// ! bag complain information
// ! Other complain information

class PoliceStation {
  vehicleArr: Vehicle[];
  personArr: Person[];
  constructor(vehicle: Vehicle[] = [], person: Person[] = []) {
    this.vehicleArr = vehicle;
    this.personArr = person;
  }

  //   ! Adding vehicle reports
  addVehicle(vehicle_type: string, vehicle_date: String, vehicle_time: String, vehicle_brand: String, vehicle_color: String, vehicle_location: String, vehicle_image: String) {
    const id = this.vehicleArr.length + 1;
    const vehicles = new Vehicle(id, vehicle_type, vehicle_date, vehicle_time, vehicle_brand, vehicle_color, vehicle_location, vehicle_image);
    this.vehicleArr.push(vehicles);
    return vehicles;
  }

  //!get Vehicle -------------------------------->
  getVehicle(id: number) {
    return this.vehicleArr.filter((e) => e.id === id);
  }

  addPerson(name: String, aadharNumber: String, date: String, time: String) {
    let id = this.personArr.length + 1;
    let personObj = new Person(id, name, aadharNumber, date, time);
    this.personArr.push(personObj);
    return personObj;
  }
}

// ! adding vehicle;

const JhansiPoliceStation = new PoliceStation();

//! creating Vehicle
JhansiPoliceStation.addVehicle("Car", "03122000", "00:00:00", "toyoto", "red", "goa", "img.png");
JhansiPoliceStation.addVehicle("Car", "03122000", "00:00:00", "toyoto", "red", "goa", "img.png");
JhansiPoliceStation.addVehicle("Car", "03122000", "00:00:00", "toyoto", "red", "goa", "img.png");
JhansiPoliceStation.addPerson("ayushi","2340283409283408203", "11:12:2000","12:00AM")
JhansiPoliceStation.addPerson("ayushiSoni","2340283409283408203", "11:12:2000","12:00AM")
JhansiPoliceStation.addPerson("ayuu","2340283409283408203", "11:12:2000","12:00AM")

const UdaipurPolicestation = new PoliceStation();

//! creating Vehicle
UdaipurPolicestation.addVehicle("Car", "03122000", "00:00:00", "toyoto", "red", "goa", "img.png");
UdaipurPolicestation.addVehicle("Car", "03122000", "00:00:00", "toyoto", "red", "goa", "img.png");
UdaipurPolicestation.addVehicle("Car", "03122000", "00:00:00", "toyoto", "red", "goa", "img.png");
UdaipurPolicestation.addPerson("ayushi","2340283409283408203", "11:12:2000","12:00AM")
UdaipurPolicestation.addPerson("ayushiSoni","2340283409283408203", "11:12:2000","12:00AM")
UdaipurPolicestation.addPerson("ayuu","2340283409283408203", "11:12:2000","12:00AM")


console.log(JhansiPoliceStation);
console.log("---------------------------------------------------------->");
console.log(UdaipurPolicestation);

