const Todo=require('../model/todo')
const toggleDone=async (req,res)=>{
    try {
        const toggletask=await Todo.findById(req.params.id)
        const newtask=await Todo.findOneAndUpdate(
            {_id:req.params.id},
            {done:!toggletask.done},
            {new: true}
        )

        res.status(200).send(newtask);
        }
        catch(error){
            res.status(400);
            console.log(error.message)
            throw new Error(error.message);
        }
}
module.exports=toggleDone;