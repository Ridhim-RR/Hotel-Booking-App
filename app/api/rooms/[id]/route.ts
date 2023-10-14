import DbConnect from "@/config/dbConnect";
import Room from "@/models/room";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await DbConnect();
    const id = params.id;

    console.log(id, "iiddddd");
    const room = await Room.findOne({ _id: id });

    if (!room) {
      return NextResponse.json({ msg: "Room doesn't exists" });
    }
    return NextResponse.json({ room });
  } catch (err) {
    return NextResponse.json({ msg: "something went wrong!!" });
  }
}



