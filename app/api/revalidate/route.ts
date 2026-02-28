import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Security check
  if (body.secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    revalidatePath(`/blog/${body.slug}`);
    revalidatePath(`/blog`); // blog listing page

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 },
    );
  }
}
