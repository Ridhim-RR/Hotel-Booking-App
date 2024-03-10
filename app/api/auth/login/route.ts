import DbConnect from "@/config/dbConnect";
import User from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    DbConnect();
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json(
        { msg: "Please fill the details" },
        { status: 409 }
      );
    }
    const findUser = await User.findOne({ email }).select("+password");
    if (!findUser) {
      return NextResponse.json(
        {
          msg: "User credentials are not correct",
        },
        { status: 404 }
      );
    }
    // console.log(findUser, "USER");
    const userPassword = findUser?.password;
    const passwordMatch = await bcrypt.compare(password, userPassword);
    if (!passwordMatch) {
      return NextResponse.json({ msg: "Password doesn't match", status: 401 });
    }
    let payload = {
      id: findUser._id,
      user_type_id: findUser.user_type_id || 0,
    };
    let secretKey: string | undefined = process.env.JWT_SECRET;
    const accSecret: string | undefined = process.env.JWT_ACCESS;
    let token;
    let accessToken;
    let refreshToken: any;
    if (accSecret) {
      accessToken = jwt.sign(payload, accSecret, { expiresIn: "10m" });
    }
    if (secretKey) {
      refreshToken = jwt.sign({ id: findUser._id }, secretKey, {
        expiresIn: "1d",
      });
    }
    const options = {
      httpOnly: true,
      secure: true,
      sameSite: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    cookies().set("refreshToken", refreshToken, options);
    return NextResponse.json({ msg: "Success login!!", accessToken, findUser });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Something went wrong!", status: 500 });
  }
}
