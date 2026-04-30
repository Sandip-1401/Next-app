import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModle";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request: NextRequest) => {
   try {
      await connect();
      const reqBody = await request.json();
      const {email, password} = reqBody;
      console.log(reqBody);

      const user = await User.findOne({email});

      if(!user){
         return NextResponse.json({
            message: "User does not exist",
            status: 400
         })
      };

      const validPassword = await bcryptjs.compare(password, user.password);

      if(!validPassword){
         return NextResponse.json({error: "Invalid password"}, {status: 400})
      }

      const tokenData = {
         id: user._id,
         username: user.username,
         email: user.email
      }

      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1h"});

      const response = NextResponse.json({
         message: "Login Successfully",
         success: true
      });

      response.cookies.set("token", token, {httpOnly: true});
   
      return response;

   } catch (error: any) {
      return NextResponse.json({error: error.message}, {status: 500})
   }
}