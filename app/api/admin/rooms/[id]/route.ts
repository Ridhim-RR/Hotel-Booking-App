import DbConnect from "@/config/dbConnect";
import Room from "@/models/room";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await DbConnect();

    const id = params.id;

    const room = await Room.findOne({ _id: id });

    if (!room) {
      return NextResponse.json({ msg: "Room doesn't exist!!" });
    }
    const deletedRoom = await Room.findByIdAndDelete({ _id: id });
    return NextResponse.json({ msg: "Room deleted successfully", deletedRoom });
  } catch (err) {
    return NextResponse.json({ msg: "Something went wrong!!" });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await DbConnect();
    const id = params.id;
    const body = await request.json();
    console.log(body, "BODY");

    const room = await Room.findOne({ _id: id });
    console.log(room, "ROOM");
    if (!room) {
      return NextResponse.json({ msg: "Room doesn't exist!!" });
    }
    const updateRoom = await Room.findOneAndUpdate({ _id: id }, { $set: body });
    return NextResponse.json({ msg: "Success", updateRoom });
  } catch (err) {
    return NextResponse.json({ msg: "Something went wrong!!" });
  }
}
