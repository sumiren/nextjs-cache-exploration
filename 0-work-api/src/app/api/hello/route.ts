import {NextResponse} from "next/server";
import {setTimeout} from "timers/promises";

export async function GET(request: Request) {
  await setTimeout(3000)
  console.log("api1")
  return NextResponse.json({slow: "api1"})
}
