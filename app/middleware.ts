import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const path =  request.nextUrl.pathname;
    const token = request.cookies.get('refreshToken')?.value ;
    console.log(token,"tokennnnn")

    if (!token) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }

    // Validate the refresh token with your authentication service (replace with your actual logic)
    // const isValid = await validateRefreshToken(token);

    // if (!isValid) {
    //   return NextResponse.redirect(new URL('/signin', request.url));
    // }
  } catch (error) {
    // Handle errors gracefully, e.g., log the error and redirect to an error page
    console.error('Error in authentication middleware:', error);
    return NextResponse.redirect(new URL('/error', request.url)); // Replace '/error' with your error route
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Apply to all routes
};
