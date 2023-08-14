import CommandModal from "@/models/CommandModal";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const post = await CommandModal.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    await CommandModal.findByIdAndDelete(id);
    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};
