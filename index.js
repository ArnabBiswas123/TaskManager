const express = require('express');
const connectDB = require('./db/connect')
const routes=require('./routes/routes')
const app = express();

const port = process.env.PORT||5000;

require('dotenv').config();

const cors = require('cors');

app.use(cors())
app.use(express.json());


app.use('/',routes);


const start=async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch(err){
        console.log(err);
    }
}
start();