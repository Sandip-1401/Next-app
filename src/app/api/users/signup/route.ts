import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from '@/models/userModle'
import bcrypt from "bcryptjs";

connect();

export const POST = async(request: NextRequest) => {
   try {
      const reqBody = await request.json();
      const { username, email, password } = reqBody;

      console.log(reqBody);

      const user = await User.findOne({email});

      if(user){
         return NextResponse.json({error: "User already exist"}, {status: 400})
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      const newUser = new User({
         username,
         email,
         password: hashedPassword
      });
      
      const savedUser = await newUser.save();
      console.log(newUser);

      return NextResponse.json({
         message: "User created Successfully!",
         success: true,
         savedUser
      })

   } catch (error: any) {
      return NextResponse.json({error: error.message}, {status: 500})
   }
}