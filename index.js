require("dotenv").config();
const express = require('express');
require("./config/db.js");
const todoRouter = require('./routes/todoRoutes');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({origin:true}));
app.use("/api/v1/todo",todoRouter);
app.listen(process.env.PORT,()=>{
    console.log(`server listening on ${process.env.PORT}`);
});
