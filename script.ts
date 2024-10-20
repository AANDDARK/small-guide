import { supabase } from "./lib/supabase";
async () => {
  let { data: guides, error } = await supabase
  .from('guides')
  .select('*')
  console.log(guides)
}

          