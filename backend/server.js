const express = require('express');
const mg = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

mg.connect('mongodb://127.0.0.1:27017/reactconnect');

const UserSchema = new mg.Schema({
    username:String
});

const User = new mg.model('User', UserSchema);

app.post('/signup', async (req, res) => {
    try {
        const { username} = req.body;
        const newUser = new User({ username});
        await newUser.save();
        res.send();
    }
    catch (error) {
        res.send(error);
}
});

app.listen(5000);