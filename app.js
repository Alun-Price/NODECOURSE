const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const fourOhFourRoutes = require('./routes/404.js');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use(fourOhFourRoutes);

app.listen(3000);
