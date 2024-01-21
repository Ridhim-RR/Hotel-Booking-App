import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const token: any = req.cookies.get("refreshToken");
    const secretKey: string | undefined = process.env.JWT_SECRET;
    if (token && secretKey) {
      jwt.verify(token, secretKey, (err: any, decoded: any) => {
        if (err) {
          return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
        } else {
          const userId = decoded.id;
          const userType = decoded.user_type_id || 0;
          let payload = {
            id: userId,
            user_type_id: userType,
          };
          const accessToken = jwt.sign(payload, secretKey, {
            expiresIn: "10m",
          });
          const refreshToken = jwt.sign(payload, secretKey, {
            expiresIn: "1d",
          });
          return NextResponse.json(
            { accessToken, status: 200 },
            {
              headers: {
                "Set-Cookie": `refreshToken=${refreshToken}; HttpOnly; Secure; SameSite=None; httpOnly:true; maxAge: 24*60*60*1000`,
              },
            }
          );
        }
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Something went wrong", status: 500 });
  }
}
