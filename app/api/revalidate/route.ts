import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  // Read secret from headers
  const secret = req.headers.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  // Get JSON payload
  const body = await req.json();

  try {
    // Strapi puts the slug under body.entry.slug
    const slug = body.entry.slug;

    if (!slug) {
      return NextResponse.json(
        { message: "No slug provided" },
        { status: 400 },
      );
    }

    // Revalidate this blog post page
    revalidatePath(`/blog/${slug}`);
    // Revalidate blog listing page
    revalidatePath(`/blog`);

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error("Revalidation failed:", err);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 },
    );
  }
}
