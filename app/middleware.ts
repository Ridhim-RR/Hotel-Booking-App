import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/signin';
  const token = request.cookies.get('refreshToken')?.value || '';
  if(isPublicPath && token){
    return NextResponse.redirect(new URL('/',request.nextUrl));
  }
  if(!isPublicPath && !token){
    return NextResponse.redirect(new URL('/signin',request.nextUrl));
  }

}

export const config = {
  matcher: ["/", "/search","sigin"], // Apply to all routes
};
