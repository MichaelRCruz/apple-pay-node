'use strict';

const bodyParser = require('body-parser');
const express = require('express');
// const mongoose = require('mongoose');

// const SquareConnect = require('square-connect');
// const defaultClient = SquareConnect.ApiClient.instance;
//
// const oauth2 = defaultClient.authentications['oauth2'];
// oauth2.accessToken = process.env.SQUARETOKEN;
// console.log('wjknevlcnwkenm', process.env);

// const squareApi = new SquareConnect.LocationsApi();
//
// squareApi.listLocations().then(function(data) {
//   console.log('API called successfully. Returned data: ' + data);
// }, function(error) {
//   console.error(error);
// });

// mongoose.Promise = global.Promise;

// const { PORT, DATABASE_URL } = require('./config');
const { PORT } = require('./config');
const { Post } = require('./models');

const app = express();
app.use(bodyParser.json());

app.get('/post', (req, res) => {
  res.send('Hello, post.');
});

app.get('/posts/:id', (req, res) => {
  res.send('Hello, post.');
});

app.post('/posts', (req, res) => {
  res.send('Hello, post.');
});

app.put('/posts/:id', (req, res) => {
  res.send('Hello, posts put.');
});

app.delete('/posts/:id', (req, res) => {
  res.send('Goodbye, post.');
});

app.use('*', function (req, res) {
  res.status(404).json({ message: 'Not Found' });
});

let server;

// function runServer(databaseUrl, port = PORT) {
//
//   return new Promise((resolve, reject) => {
//     mongoose.connect(databaseUrl, err => {
//       if (err) {
//         return reject(err);
//       }
//       server = app.listen(port, () => {
//         console.log(`Your app is listening on port ${port}`);
//         resolve();
//       })
//         .on('error', err => {
//           mongoose.disconnect();
//           reject(err);
//         });
//     });
//   });
// }

function runServer(port = PORT) {
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve();
    });
  });
}

// function closeServer() {
//   return mongoose.disconnect().then(() => {
//     return new Promise((resolve, reject) => {
//       console.log('Closing server');
//       server.close(err => {
//         if (err) {
//           return reject(err);
//         }
//         resolve();
//       });
//     });
//   });
// }

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

// if (require.main === module) {
//   runServer(DATABASE_URL).catch(err => console.error(err));
// }

if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };
