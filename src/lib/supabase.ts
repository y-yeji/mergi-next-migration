import { Database } from "@/database.types";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

// Supabase 클라이언트 인스턴스 생성
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
