import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let pass = process.env.MONGODBPASS;
let dbName = "codeSaver"
let uri = `mongodb+srv://sreeadwa:${pass}@cluster0.dubqcyd.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(uri).then(()=>{
   console.log(`connected to mongodb: ${dbName}`);
})

export default mongoose;