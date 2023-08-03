const Todo=require('../model/todo')
const getalltasks=async (req,res)=>{
    try {
        const allTasks=await Todo.find({}).sort({'createdAt':-1})
        res.status(200).send(allTasks);
        }
        catch(error){
            res.status(400);
            console.log(error.message)
            throw new Error(error.message);
        }
}
module.exports=getalltasks;