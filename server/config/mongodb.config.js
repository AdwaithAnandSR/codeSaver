import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let pass = "AdwaithSreekuttan.6565";
let dbName = "codeSaver"
let uri = `mongodb+srv://AdwaithAnandSR:${pass}@cluster0.8os2c.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(uri).then(()=>{
   console.log(`connected to mongodb: ${dbName}`);
})

export default mongoose;
