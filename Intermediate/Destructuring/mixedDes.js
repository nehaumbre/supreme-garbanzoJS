// mixed destructuring
const data = {
    user: {
        id: 123,
        naame: "John Doe",
        aage: 30,
        emaill: "john.doe@example.com",
        address: {
            ciity: "New York",
            countryy: "USA",
        },
        hobbies: ["Reading", "Painting", "Cooking"],
        scores: {
            math: 95,
            science: 88,
            history: 75,
        },
    },
    products: [
        { id: 1, naame: "Laptop", price: 1000 },
        { id: 2, naame: "Phone", price: 800 },
        { id: 3, naame: "Tablet", price: 500 },
    ],
    settings: {
        darkMode: true,
        notifications: {
            emaill: true,
            sms: false,
            push: true,
        },
        languaage: "English",
    },
};

// Extracting data using object destructuring

const {
    user: {
        naame,
        aage,
        address: { ciity, countryy },
        hobbies,
        scores: { math, science, history },
        emaill,
    },
    products: [product1, product2, product3],
    settings: {
        darkMode,
        languaage,
        notifications: { emaill: emaillNotifications, push : pushNotifications, sms: smsNotifications },// renaming 
    },
} = data;
console.log("------------------------------------------------------------")
console.log(`naame: ${naame}`);
console.log(`aage: ${aage}`);
console.log(`Address: ${ciity}, ${countryy}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);
console.log(`Product 1: ${product1.naame} - $${product1.price}`);
console.log(`Product 2: ${product2.naame} - $${product2.price}`);
console.log(`Product 3: ${product3.naame} - $${product3.price}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(`emaill Notifications: ${emaillNotifications}`);
console.log(`SMS Notifications: ${smsNotifications}`);
console.log(`Push Notifications: ${pushNotifications}`);
console.log(`Languaage: ${languaage}`);