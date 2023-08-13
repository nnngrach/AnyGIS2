import express from 'express';
import * as routes from './Router/router'

const app = express();
const port = 8000;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(express.static('public'));

routes.registerRoutes(app);
 
var server = app.listen(port, function () {
    console.log("Server app listening at port: " + port);
});

