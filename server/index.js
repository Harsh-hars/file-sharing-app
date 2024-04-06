import express from "express";
import router from "./routes/route.js";
import cors from 'cors'
import { db } from "./database/db.js";


const app = express();
app.use(cors());

const port = 5000;

app.use('/',router)

app.get('/',function (req , res) {
    res.send("hello from harsh");

})
db();
app.listen(port , ()=>console.log(`server is running at port ${port}`))