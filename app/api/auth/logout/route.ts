import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    cookies().delete("refreshToken");
    return NextResponse.json({ msg: "Logout Success!!", status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ mag: "Logout Success!!", status: 200 });
  }
}
