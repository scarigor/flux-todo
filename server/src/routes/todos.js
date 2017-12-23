import express from 'express';
import Todo from '../models/todo';

const router = express.Router()

// Create todo
router.post('/:id', (req, res) => {
  const todo = new Todo({
    _id: req.params.id,
    text: req.body.text,
    done: false
  })

  todo.save()
  .then(result => res.status(200).json({ todo: result }))
  .catch(e => res.status(500).json({ error: e }))
})

// Remove todo
router.delete('/:id', (req, res) => {
  Todo.remove({ _id: req.params.id })
  .exec()
  .then(todo => {
    todo ? res.status(200).json({ message: `Todo #${req.params.id} was removed!` }) :
           res.status(404).json({ error: 'Invalid id!' })
  })
  .catch(e => res.status(500).json({ error: 'Invalid id!' }))
})

// Remove all todos
router.delete('/', (req, res) => {
  Todo.remove({})
  .exec()
  .then(res.status(200).json({ message: 'Todo list is empty!' }))
  .catch(e => res.status(500).json({ error: e }))
})


//Get all todos
router.get('/', (req, res) => {
  Todo.find()
  .exec()
  .then(todos => {
    todos ? res.status(200).json(todos) :
            res.status(404).json({ error: 'Invalid id!' })
  })
  .catch(e => res.status(500).json({ error: e }))
})

// Get todo
router.get('/:id', (req, res) => {
  Todo.findById(req.params.id)
  .exec()
  .then(todo => {
    todo ? res.status(200).json(todo) :
           res.status(404).json({ error: 'Invalid id!' })
  })
  .catch(e => res.status(500).json({ error: e }))
})


export default router