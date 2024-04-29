import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const res = await fetch(
    "https://weichunnn-production--yt-university-app.modal.run/api/process",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    }
  );
  const data = await res.json();
  return new NextResponse(JSON.stringify(data), { status: res.status });
}
