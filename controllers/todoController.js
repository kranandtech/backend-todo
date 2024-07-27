const todoModel = require("../models/todoModel");

const createTodo = async (req,res)=>{
    try {
        const titlecode = 123;
        const newBody = {titlecode,...req.body
        };
        const newTodo = await todoModel.create(newBody);
        res.status(201);
        res.json({
            status:"success",
            data:newTodo
        });
        return;
    } catch (error) {
        res.status(500);
        res.json({
            status:"Internal server error",
            message:error.message
        });
        return;
    }
    
}

const getTodo = async (req,res) =>{
    try {
        const todo = await todoModel.find({});
        res.status(200);
        res.json({
            status:"success",
            data:todo
        });
        return;
        
    } catch (error) {
      res.status(500);
      res.json({
        status:"fail",
        message:"Internal server error"
      }) ;
      return;       

    }

}
module.exports = {
    createTodo,
    getTodo
}