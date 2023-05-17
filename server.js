const express = require("express");
const { faker } = require('@faker-js/faker'); // importing faker 
const app = express();
const PORT = 8000



// FUNCTIONS


// createUser function
const createUser = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName : faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number()
    }
}


// createCompany function
const createCompany = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        companyName: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        }
    }
}


// GET ROUTES 
    

// Get the createUser function - 
app.get("/api/users/new", (req, res) => {
    return res.json(createUser())
})

// Get the createCompany function - 
app.get("/api/companies/new", (req, res) => {
    return res.json(createCompany())
})

//Get both the createUser and createCompany function - 
app.get("/api/user/company", (req, res) => {
    return res.json({ user : createUser(), company : createCompany() })
})


// PORT 

app.listen(PORT, () => console.log("THIS SERVER IS UP AND RUNNING ON PORT >>>", PORT))