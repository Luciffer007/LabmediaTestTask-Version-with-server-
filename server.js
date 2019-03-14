const express = require('express');
const app = express();

app.use('/public', express.static('public'));

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.post('/employee', function (request, response) {
    response.sendFile(__dirname + '/json/persons.json');
})

app.post('/position', function (request, response) {
    response.sendFile(__dirname + '/json/positions.json');
})

app.post('/organization', function (request, response) {
    response.sendFile(__dirname + '/json/orgs.json');
})

app.post('/subdivision', function (request, response) {
    response.sendFile(__dirname + '/json/subs.json');
})

app.listen(3000, function () {
    console.log('Server is running');
});