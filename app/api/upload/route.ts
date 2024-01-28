import { upload } from "@/components/utils/multer";
import next, { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import formidable from 'formidable'


export async function POST(req: NextRequest, res:NextResponse, request:Request) {
  try {
    const data = await req.formData();


    console.log(data.get('upload'),"data")


     const file = data.get('upload');
     //@ts-ignore
       const middle =  await upload.single("upload")(req ,res,(err) => {
        if (err) {
          console.error(err);
          NextResponse.json({ error: 'Internal server error' });
        }
        console.log(res,"RES")
      })
      
       

       console.log(middle,"middlelelele")

     

    // const expressRequest = req as Request;
    // const multerMiddleware = upload.array('upload');
    // console.log(multerMiddleware,"multerrrrrr")
    // const file = await multerMiddleware
    //  const data = await req.formData();
    //  const file : File | null = data.get('upload') as unknown as File;
    //  console.log(file,"FFIILLEEE")
  //  const result = upload.single(file);
    
 

  // Access the array of uploaded files directly from req.files
  
  return NextResponse.json({msg :"Success"})
  } catch (error) {
    console.log(error)
    return NextResponse.json({msg :"Error"})

  }
}