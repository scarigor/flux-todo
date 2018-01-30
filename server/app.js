import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import todos from './src/routes/todos';
import users from './src/routes/users';
import auth from './src/routes/auth';

const app = express()

dotenv.config();
mongoose.connect(process.env.MONGO_DB_URL, { useMongoClient: true })

app.use(bodyParser.json());

app.use('/api/todos', todos);
app.use('/api/users', users);
app.use('/api/auth', auth);

app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "index.html")))

app.listen(
  process.env.PORT,
  () => console.log("Running at " + process.env.PORT)
)
