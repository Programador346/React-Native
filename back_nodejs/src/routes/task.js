import { Router } from "express";
import {createTask, deleteTask, getTask, getTaskById, getTaskCount, updateTask} from "../controller/task"

const router=Router()
/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of task
 *        title:
 *          type: string
 *          description: the task title
 *        description:
 *          type: string
 *          description: the task description
 * tags:
 *  name: Tasks
 *  description: tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all Tasks
 *    tags: [Tasks]
 */
router.get("/task",getTask)
/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: get total tasks counter
 *    tags: [Tasks]
 */
router.get("/task/count",getTaskCount)
/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get task by Id
 *    tags: [Tasks]
 */
router.get("/task/:id",getTaskById)
/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: save a new Task
 *    tags: [Tasks]
 */
router.post("/task",createTask)
/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: delete a task by Id
 *    tags: [Tasks]
 */
router.delete("/task/:id",deleteTask)
/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: update a task by Id
 *    tags: [Tasks]
 */
router.put("/task/:id",updateTask)

export default router
