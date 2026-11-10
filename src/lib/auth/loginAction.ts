"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type AuthState = {
  error: string | null;
};

export const signInWithBand = async (
  _prev: AuthState,
  _formData: FormData,
): Promise<AuthState> => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "Band" as any,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) return { error: error.message };

  if (!data.url) return { error: "No authorization URL returned." };

  redirect(data.url);
};
