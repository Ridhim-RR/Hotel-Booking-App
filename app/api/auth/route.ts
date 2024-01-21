import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "../../../models/user";
import DbConnect from "@/config/dbConnect";
import jwt from "jsonwebtoken";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    DbConnect();
    const body = await req.json();
    const { name, email, password, avatar } = body;
    const emailExists = await User.findOne({email});
    if(emailExists){
      return NextResponse.json({msg:"Email already exists", status:403})
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      avatar,
      createdAt: Date.now(),
    });

    await newUser.save();
    let payload = { id: newUser._id, user_type_id: newUser.user_type_id || 0 };
    let secretKey: string | undefined = process.env.JWT_SECRET;
    let token;
    if (secretKey) {
      token = jwt.sign(payload, secretKey);
    }

    return NextResponse.json(
      { msg: "Success User created", newUser, accessToken: token },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { msg: "Internal server error", error },
      { status: 500 }
    );
  }
}
