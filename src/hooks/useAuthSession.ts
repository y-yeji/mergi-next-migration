import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";

const supabase = createClient();

export function useAuthSession() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // 초기 세션 불러오기
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    // 로그인/로그아웃 이벤트 구독
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      },
    );

    return () => subscription.subscription.unsubscribe();
  }, []);

  return session;
}
