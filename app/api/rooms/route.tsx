import DbConnect from "@/config/dbConnect";
import Room from "@/models/room";
import { getAllRooms } from "@/controllers/rooms";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await DbConnect();
    const room = new Room(data);
    await room.save();
    return Response.json({ msg: "Success Room created", room });
  } catch (err) {
    console.log(err);
    return Response.json({ msg: "Some error occured" });
  }
}

export async function GET(request: Request) {
  try {
    DbConnect();
    const reqPerPage: number = 8;
    const rooms = await Room.find().limit(reqPerPage);
    return Response.json({ msg: "All rooms are fetched", rooms });
  } catch (err) {
    return Response.json({ msg: "something went wrong!!" });
  }
}
