import ConnectDB from "./src/config/db.js";
import User from "./src/model/user.model.js"
import dotenv from "dotenv"
dotenv.config();
import express from "express"

const app = express();
// app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5500;

ConnectDB()
.then(()=>{
   app.listen(PORT,()=>{
      console.log(`Server is running on port ${PORT}`)

   })
  
})
.catch((e)=>{
   console.log(e)
})


// Creating API'

app.post("/create" , async(req,res)=>{
   const {name,email,password} = req.body;
   console.log(name,email,password)
   const user = await User.create({
      name,
      email,
      password,

   });
   res.send({
      message : "Your Account Created Successflly",
      user,
   });
})