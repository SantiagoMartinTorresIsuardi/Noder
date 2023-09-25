import { Router } from "express";
import { ctrlCreateTask, ctrlDeleateTask, ctrlGetTasks, ctrlUpdateTask, ctrlView} from "../controllers/task.controllers.js";
import { createTaskSchema, editTaskSchema } from "../models/schemas/task.schema.js";
import { validator } from "../middlewares/validator.js";

const taskRouter = Router();

taskRouter.get('/tasks',ctrlView)

taskRouter.get('/api/tasks' ,ctrlGetTasks)

taskRouter.post('/api/tasks', createTaskSchema ,validator,ctrlCreateTask)

taskRouter.put('/api/tasks/:id',editTaskSchema,validator, ctrlUpdateTask)

taskRouter.delete('/api/tasks/:id', ctrlDeleateTask)

export {taskRouter}