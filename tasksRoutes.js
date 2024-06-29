const express = require('express')

const tasksController = require('../controllers/taskControllers')

const router = express.Router();


router.route('/').get(tasksController.allTasks).post(tasksController.createTasks)

router.route('/:id').get(tasksController.getTaskByID).delete(tasksController.deleteTask).patch(tasksController.updateTask)

module.exports = router
