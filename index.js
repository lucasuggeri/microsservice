import express from 'express';
import dotenv from 'dotenv';
import connectToDatabase from './src/config/database/dbConnector.js';

const confidential = dotenv();

confidential.config();

connectToDatabase();

const app = express();
const port = 3333;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
