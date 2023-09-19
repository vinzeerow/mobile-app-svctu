// npm install express body-parser cors util mysql2 axios --save
const express = require('express');
const app = express();
const port = 3000;
const bodyparser = require('body-parser');

const cors = require('cors');

app.use(cors())
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// Sử dụng các route trong file accountController.js
const accountController = require('./controllers/accountController');
app.use('/account', accountController);

// Sử dụng các route trong file profileController.js
const profileController = require('./controllers/profileController');
app.use('/profile', profileController);


// Sử dụng các route trong file profileController.js
const geoRoomController = require('./controllers/geoRoomController');
app.use('/geo-room', geoRoomController);

// Sử dụng các route trong file profileController.js
const groupController = require('./controllers/groupController');
app.use('/group', groupController);

// Sử dụng các route trong file profileController.js
const setOfquestionController = require('./controllers/setOfQuestionsController');
app.use('/set-of-question', setOfquestionController);

// Sử dụng các route trong file profileController.js
const questionController = require('./controllers/questionController');
app.use('/question', questionController);

// Sử dụng các route trong file profileController.js
const memberController = require('./controllers/memberController');
app.use('/member', memberController);

const archivementController = require('./controllers/archivementController');
app.use('/archivement', archivementController);

const eventController = require('./controllers/eventController');
app.use('/event', eventController);


app.listen(port, () => console.log(`Server đang chạy trên cổng ${port}!`));

module.exports = app;