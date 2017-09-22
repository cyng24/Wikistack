const express = require('express');
const app = express();
var body_parser = require('body-parser');
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var models = require('./models');

// ... other stuff

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
