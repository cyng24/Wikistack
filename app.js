const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var models = require('./models');
var path = require('path');

//middleware
app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true});
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
var routes = require('./routes');
app.use(routes);//plugging them in

// models.User.sync({ force: true })
// .then(function () {
//     return models.Page.sync({ force: true })
// })
// .then(function () {
//     // make sure to replace the name below with your express app
//     app.listen(3000, function () {
//         console.log('Server is listening on port 3000!');
//     });
// })
// .catch(console.error);

models.db.sync({})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);

