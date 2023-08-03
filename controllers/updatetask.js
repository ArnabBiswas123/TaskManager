const Todo=require('../model/todo')
const updateTask=async (req,res)=>{
    try {
        const newtask=await Todo.findOneAndUpdate(
            {_id:req.params.id},
            {data:req.body.data},
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
module.exports=updateTask;