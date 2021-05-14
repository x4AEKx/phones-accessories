import Router from 'express'
import PostController from "./PostController.js";
import FileController from "./FileController.js"

const router = new Router()

// PostController
router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

// FileController
router.get('/pictures', FileController.getAll)

export default router