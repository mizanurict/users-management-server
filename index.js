const express = require('express');
const app = express();
const cors =require('cors')
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Mary', email:'mary@gmail.com' },
    { id: 3, name: 'Peter', email: 'peter@gmail.com' },
    { id: 4, name: 'Lisa', email: 'lisa@gmail.com' },
    { id: 5, name: 'Sarah', email:'sarah@gmail.com' },
]

app.get('/', (req, res) => {
    res.send('user management server is running');
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => { 
    console.log('post api heating');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`);
})