import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './routes/index';
import mongodb from './database/mongodb';

import cors from 'cors'

const port = process.env.PORT || 5000;

let app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', router);
app.use('/uploads', express.static(__dirname + '/uploads'));


mongodb.getConnection()
  .then((msg) => {
    console.log(msg);
    app.listen(port, () => {
      console.log(`Server running and listening in http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
