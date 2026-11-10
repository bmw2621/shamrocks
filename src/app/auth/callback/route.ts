import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);

  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  // OAuth provider returned an error
  if (error) {
    console.error("OAuth error:", error, errorDescription);

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL}?error=oauth_failed`,
    );
  }

  // No authorization code
  if (!code) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL}?error=missing_code`,
    );
  }

  const supabase = await createClient();

  const { error: exchangeError } =
    await supabase.auth.exchangeCodeForSession(code);

  if (exchangeError) {
    console.error("Session exchange failed:", exchangeError);

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL}?error=session_failed`,
    );
  }

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`);
}
