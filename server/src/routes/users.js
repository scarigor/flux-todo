import express from 'express';
import User from '../models/user';
import mongoose from 'mongoose';

const router = express.Router()

router.post('/signup', (req, res) => {
  const { email, password } = req.body.data

  const user = new User({
    _id: mongoose.Types.ObjectId(),
    email: email,
    password: password,
  })

  user.save(error => {
    if (error) {
      return res.json({
        success: false,
        message: "That email is already exists"
      })
    }
  })
  .then(user => res.status(200).json(user))
  .catch(e => res.status(500).json({ error: e }))
})


export default router
