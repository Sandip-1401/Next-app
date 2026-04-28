import mongoose from "mongoose";

export async function connect(){
   try {
      mongoose.connect(process.env.MONGOO_URI!);
      const connection = mongoose.connection;
      connection.on('connected', () => {
         console.log('Mongodb connected successfully...!')
      });
      connection.on('error', (error) => {
         console.log('Mongodb connection error' + error);
         process.exit()
      })
   } catch (error) {
      console.log('Somthing went wrong!');
      console.log(error)
   }
}