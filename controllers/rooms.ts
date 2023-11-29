import Room from "@/models/room";
import { NextResponse } from "next/server";

export const getAllRooms =  async (request :Request) => {
    try{
     const reqPerPage: number = 8
     const rooms = await Room.find().limit(reqPerPage);
    return Response.json({msg : "All rooms are fetched", rooms})
    }catch(err){
     return Response.json({msg : "something went wrong!!"})
    }

}

export const newRoom = async (request: Request) => {
    try {
        const body = request.json();
        const room = await Room.create(body);
        return NextResponse.json({success: true, room})
    } catch (error) {
        return NextResponse.json({error})
    }
}

