const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// const adminRoutes = require('./routes/admin.js');
// const shopRoutes = require('./routes/shop.js');
// const fourOhFourRoutes = require('./routes/404.js');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // User.findByPk(1)
  //   .then(user => {
  //     req.user = user;
  //     next();
  //   })
  //   .catch(err => console.log(err));
});

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use(fourOhFourRoutes);

mongoConnect(client => {
  console.log(client);
  app.listen(3000);
});
