var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/models/userListModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
//userdb not users
mongoose.connect('mongodb://localhost/Userdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//missed an s
var routes = require('./api/routes/userListRoutes');
routes(app);

app.listen(port);

console.log('user List started on:' + port);


