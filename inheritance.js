class Car{
    constructor(brand,color){
        this.brand = brand,
        this.color = color
    }

    start(){
        console.log(`${this.brand} is starting`)
    }

    stop(){
        console.log(`${this.brand} is stopping`)
    }
}

class ElectricCar extends Car{
    constructor(brand,color,battery){
        super(brand,color)
        this.battery = battery
     }

    chargeBattery(){
        console.log(`${this.brand} is charging..`)
    }
}


let tesla = new ElectricCar('tesla', 'black')
console.log(tesla)
tesla.start()
tesla.chargeBattery()
tesla.stop()