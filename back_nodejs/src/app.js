import express from "express";
import cors from "cors";
import taskRouter from "./routes/task"
import morgan from "morgan";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";
import { options } from "./swaggerOptions";


const specs = swaggerJSDoc(options);
const app= express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());



app.use(taskRouter)
app.use('/docs',swaggerui.serve,swaggerui.setup(specs));





export default app
