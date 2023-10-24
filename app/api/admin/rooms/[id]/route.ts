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
      return NextResponse.json(
        { msg: "Room doesn't exist!!" },
        { status: 404 }
      );
    }
    const deletedRoom = await Room.findByIdAndDelete({ _id: id });
    return NextResponse.json(
      { msg: "Room deleted successfully", deletedRoom },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
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
    console.log(request, "BODY");

    const room = await Room.findOne({ _id: id });
    console.log(room, "ROOM");
    if (!room) {
      return NextResponse.json({ msg: "Room doesn't exist!!" });
    }
    const updateRoom = await Room.findOneAndUpdate({ _id: id }, { $set: body });
    return NextResponse.json({ msg: "Success", updateRoom });
  } catch (error : any) {
    return NextResponse.json({ msg: "Internal Server Error"}, { status: 500 });
  }
}
