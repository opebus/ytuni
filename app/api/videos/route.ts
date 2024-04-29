import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const videoId = searchParams.get("id");
  const res = await fetch(
    `https://weichunnn-production--yt-university-app.modal.run/api/video?id=${videoId}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
    }
  );
  const data = await res.json();
  return new NextResponse(JSON.stringify(data), { status: res.status });
}
