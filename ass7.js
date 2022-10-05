const vehicle = {
    vehicleid: 14594,
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
const showVehicleDetails = (vehicle) => {
    console.log(`The vehicleid is:${vehicle.vehicleid}`);
    console.log(`The vehicle brand is:${vehicle.brand}`);
    console.log(`The vehicle model is:${vehicle.model}`);
    console.log(`The vehicle varient is:${vehicle.varient}`);
    console.log(`The maximum speed is:${vehicle.specification.maxSpeed}`);
}
showVehicleDetails(vehicle);