import { supabase } from "./lib/supabase";

export let { data: theme, error } = await supabase.from('theme').select('*');