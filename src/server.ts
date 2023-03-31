import express from "express";
import cors from 'cors';
import teams from './routes/teams';
import mongoose from 'mongoose';
import bodyParser from "body-parser";

const app = express();

const port = process.env.PORT || 9000;

const dbURI = require('./config/keys').mongoURI;

console.log(dbURI);
//connect to db
//


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ credentials: true, origin: '*' }));


mongoose
  .connect(dbURI)
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err));


app.use("/api/teams", teams);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
