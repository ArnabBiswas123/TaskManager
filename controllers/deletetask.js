const Todo=require('../model/todo')
const deleteTask=async (req,res)=>{
    try {
        const newtask=await Todo.findOneAndDelete(
            {_id:req.params.id},
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
module.exports=deleteTask;