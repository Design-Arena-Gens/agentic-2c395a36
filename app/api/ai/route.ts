import { NextRequest, NextResponse } from "next/server";
import { synthesizeInsight } from "@/lib/ai";

export async function POST(request: NextRequest) {
  let body: { prompt?: string; focus?: string } | undefined;

  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON body", details: (error as Error).message },
      { status: 400 }
    );
  }

  if (!body?.prompt) {
    return NextResponse.json(
      { error: "Missing prompt", suggestion: "Include a prompt property in JSON body." },
      { status: 400 }
    );
  }

  const insight = synthesizeInsight(request, {
    prompt: body.prompt,
    focus: body.focus
  });

  return NextResponse.json(insight);
}
