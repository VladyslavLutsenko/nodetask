const express = require('express')
const app = express()

port=process.env.PORT || 3000

routes = require('./routes.js')
routes(app);

mongoose = require('mongoose');
User = require('./models/UserModel');
mongoose.connect('mongodb://localhost/users_db')

app.listen(port)