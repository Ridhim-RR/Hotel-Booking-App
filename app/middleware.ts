import { upload } from '@/components/utils/multer'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export const config = {
  api: {
    bodyParser: false,
  },
};
// This function can be marked `async` if using `await` inside
export async function middleware (request: NextRequest) {
    if (request.nextUrl.pathname.includes('api/upload/route')) {
      console.log("middlewareeeeeeeeeeeeeee")
        const uploadMiddleware = upload.array("upload");
  return uploadMiddleware;
}
}
// See "Matching Paths" below to learn more
