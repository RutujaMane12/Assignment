const vehicle = {
    vehicleid: 14954,
    brand: 'Audi',
    model: '2022',
    varient: 'one year',
    specification: {
        firstGear: function () {
            console.log('vehicle is in first gear');

        },
        secondGear: function () {
            console.log('vehicle is in second gear');

        },
        maxSpeed: 60,
        changeGear: function () {
            return (this.firstGear(), this.secondGear());

        },


    },


}
console.log(`The vehicleid is:${vehicle.vehicleid}`);
console.log(`The vehicle brand is:${vehicle.brand}`);
console.log(`The vehicle model is:${vehicle.model}`);
console.log(`The vehicle varient is:${vehicle.varient}`);
vehicle.specification.changeGear();
console.log(vehicle.specification.maxSpeed);
