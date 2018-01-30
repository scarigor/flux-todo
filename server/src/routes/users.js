import express from 'express';
import User from '../models/user';
import mongoose from 'mongoose';

const router = express.Router()

router.post('/signup', (req, res) => {
  const { data } = req.body

  const user = new User({
    _id: mongoose.Types.ObjectId(),
    email: data.email,
    isAdmin: false
  })

  user.setPassword(data.password)

  user.save()
  .then(user => res.status(200).json({ user: user.toAuthJSON() }))
  .catch(e => res.status(500).json({ error: e }))
});

export default router
