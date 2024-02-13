import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('refreshToken')?.value || '';
  console.log(token,"Tokennn");
  if(!token){
    return NextResponse.redirect(new URL('/signin',request.nextUrl));
  }
  return NextResponse.next();
  }



export const config = {
  matcher: ["/",], // Apply to all routes
};
