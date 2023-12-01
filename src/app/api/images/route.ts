import { put, list } from "@vercel/blob";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const files = await list({
    limit: 1000,
    cursor: undefined,
  });
  return NextResponse.json({ files });
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename") ?? randomUUID();
  if (!request.body)
    return Response.json({ status: "error", message: "No body" });

  const blob = await put(filename, request.body, {
    access: "public",
  });
  return NextResponse.json({ status: "ok", blob });
}
