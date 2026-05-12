import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export const signInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });
};

export const signInWithGithub = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });
};

export const signInWithKakao = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "kakao",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });
};

export const signOut = async () => {
  await supabase.auth.signOut();
};
