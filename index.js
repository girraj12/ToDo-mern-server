// app.js or index.js
import express from "express";
import cors from "cors";
import tasks from "./routes/tasks.js";
import connection from "./db.js";

const app = express();

connection();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
