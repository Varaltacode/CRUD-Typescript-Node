import UserController from "../controllers/UserController"
import { User } from "../db/models/User"

const express = require('express')
const router = express.Router()

router.post('/users', UserController.createUser)
router.get('/users', UserController.showUsers)
router.get('/users/:id', UserController.showOneUser)
router.put('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)

export {router}