const express = require('express');
const next = require('next');
const MongoClient = require('mongodb').MongoClient;
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
