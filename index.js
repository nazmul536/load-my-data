const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('WOW i am learning excited node');
})

const users = [
    { id: 0, name: 'nazmul', email: 'shafayat536@gmail.com', phone: '01840763872' },
    { id: 1, name: 'nazmul', email: 'shafayat536@gmail.com', phone: '01840763872' },
    { id: 2, name: 'nazmul', email: 'shafayat536@gmail.com', phone: '01840763872' },
    { id: 3, name: 'nazmul', email: 'shafayat536@gmail.com', phone: '01840763872' },
    { id: 4, name: 'nazmul', email: 'shafayat536@gmail.com', phone: '01840763872' },
    { id: 5, name: 'nazmul', email: 'shafayat536@gmail.com', phone: '01840763872' },
    { id: 6, name: 'nazmul', email: 'shafayat536@gmail.com', phone: '01840763872' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple']);
})

app.get('/fruit/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listenting to port', port);
})