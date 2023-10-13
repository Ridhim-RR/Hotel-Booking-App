import DbConnect from "@/config/dbConnect";

export async function GET (request :Request){
    DbConnect();
    return Response.json({data : "All rooms are fetched"})
}