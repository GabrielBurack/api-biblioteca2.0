const express = require('express')
const bookController = require('../controllers/books-controller')
const apiRouter = express.Router()

apiRouter.get('/books' , bookController.index)
apiRouter.get('/books/:id', bookController.show)
apiRouter.post('/books', bookController.save)
apiRouter.put('/books/:id', bookController.update)
apiRouter.delete('/books/:id', bookController.delete)

module.exports = apiRouter