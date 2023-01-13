import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { ref } from "@vue/reactivity";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// console.log(supabaseUrl);
// console.log(supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export const user = ref(supabase.auth.user());
// supabase.auth.onAuthStateChange(() => {
//     user.value = supabase.auth.user();
//     console.log("utilisateur :", user.value);
// });

