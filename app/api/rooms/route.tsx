import DbConnect from "@/config/dbConnect";
import Room from "@/models/room";
import { getAllRooms } from "@/controllers/rooms";
import { NextRequest, NextResponse } from "next/server";

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

export async function GET(request: NextRequest) {
  try {
    DbConnect();
    const searchParams = request.nextUrl.searchParams;
    const search: any = searchParams.get("search");
    const page: any = searchParams.get("page");
    let queryObject: any = {};
    if (search) {
      queryObject.address = {
        $regex: search,
        $options: "i",
      };
    }
    searchParams.forEach((value: string, key: string) => {
      if (key !== "search" && key != "page") {
        queryObject[key] = value;
      }
    });
    const currentPage: number = parseInt(page, 10) || 1;
    const reqPerPage: number = 5;
    let ofset: number = 0;
    if (currentPage > 1) {
      ofset = (currentPage - 1) * reqPerPage;
    }
    let rooms = await Room.find(queryObject).skip(ofset).limit(reqPerPage);
    const totalRooms = await Room.countDocuments(queryObject);
    return NextResponse.json(
      rooms);
  } catch (err) {
    return NextResponse.json({ msg: "something terribly eeeeewent wrong!!" });
  }
}



