const express =require('express');
const app= express();
const cls_route =require('./routes/cls');
const user_route = require('./routes/user');
const team_route = require('./routes/team');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/data");

app.use('/cls',cls_route);
app.use('/user',user_route);
app.use('/team',team_route);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;