import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "../../../models/user";
import DbConnect from "@/config/dbConnect";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    DbConnect();
    const body = await req.json();
    const {
      name,
      email,
      password,
      avatar,
    } = body;
    console.log(body)
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password,saltRounds);
    console.log(hashedPassword,"Pass")
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      avatar,
      createdAt: Date.now(),
    });

    await newUser.save();
    return NextResponse.json({ msg: "Success User created", newUser }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal server error", error }, { status: 500 });
  }
}
