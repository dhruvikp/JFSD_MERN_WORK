const axios = require('axios');

async function getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
};

getUsers();