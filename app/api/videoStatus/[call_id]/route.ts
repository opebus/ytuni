import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { call_id: string } }
) {
  const callId = params.call_id;
  const res = await fetch(
    `https://weichunnn-production--yt-university-app.modal.run/api/status/${callId}`
  );
  const data = await res.json();
  return new NextResponse(JSON.stringify(data), { status: res.status });
}
