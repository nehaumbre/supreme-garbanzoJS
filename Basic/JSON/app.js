//JSON
const car1 = {
    make: "Tesla",
    model: "Model 3",
    year: 2024,
    color: "White",
    isElectric: true,
    battery: {
        capacity_kWh: 75,
        range_km: 500,
        chargingTime_hr: 1.5
    },
    features: ["Autopilot", "Glass Roof", "Wireless Charging"],
    owner: {
        name: "Alice Smith",
        licenseNumber: "TESLA999"
    }
};

const stringedObj = JSON.stringify(car1); // convert object to json/ string
console.log(stringedObj);
console.log(JSON.parse(stringedObj)); //convert JSON to object