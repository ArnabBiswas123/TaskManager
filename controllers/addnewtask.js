const Todo=require('../model/todo')

const addnewtask=async (req,res)=>{
if(!req.body.data.trim()){
    res.status(200).send({success:'no items'})
    return;
}

    try {
        const newTodo = await Todo.create({
            data: req.body.data,
            createdAt: Date.now()
        })
        res.status(200).send(newTodo);}
        catch(error){
            res.status(400);
            throw new Error(error.message);
        }
}
module.exports=addnewtask;

