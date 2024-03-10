import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const verifyToken = (token: string, secretOrPublicKey: string) => {
  try {
    jwt.verify(token, secretOrPublicKey);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = "/";
  const token = request.cookies.get("refreshToken")?.value || "";
  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }
  if (token && !isPublicPath) {
    try {
      const secret: string | undefined = process.env.JWT_SECRET;;
      const verify = verifyToken(token,secret!);
      if(verify){
        return NextResponse.next();
      }else if(!verify){
        console.log("Token not valid");
        request.cookies.clear()
        return NextResponse.redirect(new URL('/', request.url));
      }
    } catch (error) {
      console.log(error);
      request.cookies.clear()
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }
  
}

export const config = {
  matcher: ["/", "/rooms", "/search"], // Apply to all routes
};
