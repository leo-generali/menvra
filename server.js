const express = require('express');
const next = require('next');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

MongoClient.connect(
  // prettier-ignore
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds229373.mlab.com:29373/menrva`,
  { useNewUrlParser: true },
  (err, client) => {
    const db = client.db();

    app.prepare().then(() => {
      const server = express();
      server.use(bodyParser.urlencoded({ extended: false }));

      server.post('/api/gradients', (req, res) => {
        const gradient = {
          name: 'Lucious Lime',
          tags: ['green'],
          default_deg: 0,
          colors: [
            {
              color: '009245',
              percent: 0
            },
            {
              color: 'FCEE21',
              percent: 100
            }
          ]
        };
        console.log(gradient);
        db.collection('gradients').insertOne(gradient, (err, result) => {
          if (err) {
            res.send({ error: 'An error has occured' });
          } else {
            res.send(result.ops[0]);
          }
        });
      });

      server.get('/api/gradients/:id', (req, res) => {
        const id = req.params.id;
        const details = { _id: new ObjectID(id) };
        db.collection('gradients').deleteOne(details, (err, gradient) => {
          if (err) {
            res.send({ error: 'An error has occured' });
          } else {
            res.send('Gradient ' + id + ' deleted');
          }
        });
      });

      server.get('/api/gradients', (req, res) => {
        db.collection('gradients')
          .find()
          .toArray()
          .then((gradients) => res.json(gradients));
      });

      server.get('*', (req, res) => {
        return handle(req, res);
      });

      server.listen(port, (err) => {
        if (err) throw err;
        console.log(`We are live on port: ${port}.`);
        console.log(`🎉 Go build something cool! `);
      });
    });
  }
);
