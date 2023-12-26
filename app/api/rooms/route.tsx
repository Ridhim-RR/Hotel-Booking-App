import DbConnect from "@/config/dbConnect";
import Room from "@/models/room";
import { getAllRooms } from "@/controllers/rooms";
import { NextRequest, NextResponse } from "next/server";
import ErrorHandler from "@/utils/errorHandler";

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
    console.log(search,"aaaaaaaaaaaaaal")
    const page: any = searchParams.get("page");
    let queryObject: any = {};
    if (search) {
      queryObject.address = {
        $regex: search,
        $options: "i",
      };
    
    }
    // throw new ErrorHandler("Hellooooooooooooo",400)
    searchParams.forEach((value: string, key: string) => {
      if (key !== "search" && key != "page") {
        queryObject[key] = value;
      }
    });
    const currentPage: number = parseInt(page, 10) || 1;
    const reqPerPage: number = 4;
    let ofset: number = 0;
    if (currentPage > 1) {
      ofset = (currentPage - 1) * reqPerPage;
    }
    console.log(queryObject,"llplplplp")

    let rooms = await Room.find(queryObject).skip(ofset).limit(reqPerPage);
    console.log(rooms)
    const totalRooms = await Room.countDocuments(queryObject);
    const totalPages = Math.ceil(totalRooms/reqPerPage)
    return NextResponse.json({
      rooms,totalRooms,totalPages
    });
  } catch (err) {
    return NextResponse.json({ msg: "something terribly eeeeewent wrong!!" });
  }
}



