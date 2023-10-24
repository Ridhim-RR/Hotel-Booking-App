import Room from "@/models/room";

export const getAllRooms =  async (request :Request) => {
    try{
     const reqPerPage: number = 8
     const rooms = await Room.find().limit(reqPerPage);
    return Response.json({msg : "All rooms are fetched", rooms})
    }catch(err){
     return Response.json({msg : "something went wrong!!"})
    }

}