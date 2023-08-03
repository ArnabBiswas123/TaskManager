const express=require('express');
const addnewtask=require('../controllers/addnewtask');
const getalltasks=require('../controllers/getalltasks')
const toggleDone=require('../controllers/toggleDone')
const updateTask=require('../controllers/updatetask')
const deleteTask=require('../controllers/deletetask')
const router = express.Router();

router.post('/tasks',addnewtask)
router.get('/tasks',getalltasks)
router.get('/todo/:id',toggleDone);
router.put('/todo/:id',updateTask);
router.delete('/todo/:id',deleteTask);

module.exports=router;