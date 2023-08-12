import CommandModal from "@/models/CommandModal";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const posts = await CommandModal.find();
    return new NextResponse(posts, { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};
