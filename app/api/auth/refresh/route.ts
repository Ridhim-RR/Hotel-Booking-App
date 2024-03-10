import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  try {
    const token: any = req.cookies.get("refreshToken")?.value;
    console.log(token,"RTOEOEOEOEOEO")
    const secretKey: string | undefined = process.env.JWT_SECRET;
    const accSecret: string | undefined = process.env.JWT_ACCESS;
    if (token && secretKey && accSecret) {
      jwt.verify(token, secretKey, (err: any, decoded: any) => {
        if (err) {
          return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
        } else {
          console.log("first");
          const userId = decoded.id;
          const userType = decoded.user_type_id || 0;
          let payload = {
            id: userId,
            user_type_id: userType,
          };
          const accessToken = jwt.sign(payload, accSecret, {
            expiresIn: "10m",
          });
          const refreshToken = jwt.sign(payload, secretKey, {
            expiresIn: "1d",
          });
          const options = {
            httpOnly: true, 
            secure: true,  
            sameSite: true, 
            maxAge: 24 * 60 * 60 * 1000
          }
          cookies().set('refreshToken', refreshToken,options);
          console.log("SECOND")
          
          return NextResponse.json(
            { accessToken, status: 200 });
        }
      });
    }
      return NextResponse.json({msg : "Kindly login first"})
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Something went wrong", status: 500 });
  }
}
