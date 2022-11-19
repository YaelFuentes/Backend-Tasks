import {Router} from 'express';
import {getTasks , getTask , getTasksCount, createTasks, deleteTasks ,updateTasks} from '../controllers/task'
const router = Router();


router.get('/tasks', getTasks)
router.get('/tasks/:taskId' , getTask)
router.get('/tasks/count', getTasksCount)
router.post('/tasks', createTasks)
router.delete('/tasks/:id', deleteTasks)
router.put('/tasks/:id', updateTasks)


export default router;

