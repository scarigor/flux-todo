import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import todos from './src/routes/todos'

const app = express()
mongoose.connect('mongodb://flux-todo:' + process.env.MONGO_ATLAS_PW + '@flux-todo-app-shard-00-00-fmrvb.mongodb.net:27017,flux-todo-app-shard-00-01-fmrvb.mongodb.net:27017,flux-todo-app-shard-00-02-fmrvb.mongodb.net:27017/test?ssl=true&replicaSet=flux-todo-app-shard-0&authSource=admin', { useMongoClient: true })

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Access control
app.use((req, res, next) => {
  res.header('Access-Controll-Allow-Origin', '*')
  res.header('Access-Controll-Allow-Headers', '*')
  if(res.method === 'OPTIONS') {
    res.header('Access-Controll-Allow-Methods', '*')
    return res.status(200).json({})
  }
  next()
})

// Route
app.use('/todos', todos)

export default app
