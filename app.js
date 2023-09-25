import express from 'express';
import { taskRouter } from './src/routes/task.routes.js';
import { starDb } from './src/config/database.js';
import cors from 'cors'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const app = express();
  const __filename = fileURLToPath(import.meta.url);
  const  __dirname= path.dirname(__filename);

//middlewares
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,"src","public")))
app.set('views',path.join(__dirname,"src","views"))
app.set('view engine','ejs');

const port = 3000

app.use('/',taskRouter)


app.listen(port, () => {
    console.log(`server listening http://localhost:${port}/tasks`)
    starDb()
})