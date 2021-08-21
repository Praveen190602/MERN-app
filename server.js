var connect = require('connect');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
var st = require('st');

const app=express();
const PORT=process.env.PORT || 8085;

const routes = require('./routes/api');


mongoose.connect('mongodb://localhost/mern_youtube', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is Connected!!!');
});



app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());
app.use(morgan('tiny'));
app.use('/api', routes);




app.listen(PORT, () => console.log(`Server started on ${PORT}`));