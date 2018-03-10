'use strict';

const bodyParser = require('body-parser');
const express = require('express');
// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// const { PORT, DATABASE_URL } = require('./config');
const { PORT } = require('./config');
const { Payment } = require('./models');

const app = express();
app.use(bodyParser.json());

app.get('/payments', (req, res) => {
  res.send('Hello, payments.');
});

app.get('/payments/:id', (req, res) => {
  res.send('Hello, payments.');
});

app.post('/payments', (req, res) => {
  res.send('Hello, payment post.');
});

app.put('/payments/:id', (req, res) => {
  res.send('Hello, paymemnts put.');
});

app.delete('/payments/:id', (req, res) => {
  res.send('Goodbye, payment.');
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
