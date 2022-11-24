const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const fourOhFourRoutes = require('./routes/404.js');

app.use(bodyParser.urlencoded());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(fourOhFourRoutes);

app.listen(3000);
