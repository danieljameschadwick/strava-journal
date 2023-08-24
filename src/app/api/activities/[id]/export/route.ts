import { NextResponse } from "next/server";
import mockData from "./mockData";

export async function GET() {
  console.log(mockData);

  return NextResponse.json({});
};
