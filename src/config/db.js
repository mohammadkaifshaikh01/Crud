import mongoose from "mongoose";

const ConnectDB = async () =>{
   try {
      const connectInstance = await mongoose.connect(
         "mongodb+srv://mohammadkaif6268:Hpvictus05786@docconnet.xbn7v.mongodb.net/dbname"
      )
      console.log("Connected to MongoDB")
   } catch (error) {
      console.log("Failed To Connected MongoDB")
      
   }
}
export default ConnectDB ;