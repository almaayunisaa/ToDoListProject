const express = require('express');
const {tambahTodoList, editTodoList, hapusTodoList, ambilTodoList} = require('../controller/todolistController');
const router = express.Router();

/**
 * @swagger
 * /api/todoList/tambahTodo:
 *  post:
 *    summary: Add item of To Do List
 *    description: Adding an item of To Do List to database
 *    requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                              example: "Makanan di korea"
 *                          kategoriKonten:
 *                              type: string
 *                              example: "Food"
 *                          konten:
 *                              type: string
 *                              example: "Post foto makanan di korea dengan caption Akhirnya Kembali ke Korea!"
 *                          platform:
 *                              type: string
 *                              example: "Instagram"
 *                          waktuPosting:
 *                              type: string
 *                              format: date-time
 *                              example: "2025-02-21 15:30:00"                           
 *    responses:
 *      201:
 *        description: Successfully add item
 *      400:
 *        description: Content is empty
 *      404:
 *        description: Failed to add data
 *      500:
 *        description: Server error
 */
router.post('/tambahTodo', tambahTodoList);

/**
 * @swagger
 * /api/todoList/HapusToDoList/{id}:
 *  delete:
 *    summary: Delete To Do List
 *    description: Delete item from database based on the id
 *    parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            schema:
 *                 type: string
 *            description: ID of the item 
 *    responses:
 *      200:
 *        description: Successfully deleted item
 *      401:
 *        description: Data is not available
 *      500:
 *        description: Server error
 */
router.delete('/HapusToDoList/:id', hapusTodoList);

/**
 * @swagger
 * /api/todoList/UbahToDoList/{id}:
 *  put:
 *    summary: Update To Do List
 *    description: Changing an item in To Do List by id
 *    parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            schema:
 *                 type: string
 *            description: ID of the item 
 *    requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                              example: "Makanan di korea"
 *                          kategoriKonten:
 *                              type: string
 *                              example: "Food"
 *                          konten:
 *                              type: string
 *                              example: "Post foto makanan di korea dengan caption Akhirnya Kembali ke Korea!"
 *                          platform:
 *                              type: string
 *                              example: "Instagram"
 *                          waktuPosting:
 *                              type: string
 *                              format: date-time
 *                              example: "2025-02-21 15:30:00"
 *                          status:
 *                              type: integer
 *                              example: 1
 *                              
 *    responses:
 *      200:
 *        description: Successfully changed item
 *      400:
 *        description: Content is empty
 *      404:
 *        description: Failed to update data
 *      500:
 *        description: Server error
 */
router.put('/UbahToDoList/:id', editTodoList);

/**
 * @swagger
 * /api/todoList/getToDoList:
 *  get:
 *    summary: Get all items/To Do List in Database 
 *    description: Retrieve all items from the To Do List
 *    responses:
 *      200:
 *        description: Successfully retrieved list
 *      401:
 *        description: Data is not available
 *      500:
 *        description: Server error
 */
router.get('/getToDoList', ambilTodoList);

module.exports = router;
