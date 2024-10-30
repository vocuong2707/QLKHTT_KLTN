import {app} from './app.ts';
import connectDb from './utils/db.ts'
require("dotenv").config();


// create server 


app.listen(process.env.PORT,()=>{
    console.log(`Server is connected with port ${process.env.PORT}`);
    connectDb();
})