const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();

const port = 8000;


app.use(express.json(), express.urlencoded({ extended: true }))

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.exampleEmail(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.firstName(),
        firstName: faker.person.lastName(),
        _id: faker.string.uuid()
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        companyName: faker.company.name(),
        address: faker.location.buildingNumber(),
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        county: faker.location.county(),
    }
    return newCompany;
}

const newFakeUser = createUser();
const newFakeCompany = createCompany();


app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser)
})

app.get("/api/company/new", (req, res) => {
    res.json(newFakeCompany)
})

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany})
})


app.listen(port, () => console.log(`Listening on port: ${port}`));