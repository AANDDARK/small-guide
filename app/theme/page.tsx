import BlockGuide from "@/components/blockGuide";
import { supabase } from "@/lib/supabase";

export default async function page(){
    let { data: theme, error } = await supabase
    .from('theme')
    .select('*');

    return(<>
        {theme && theme.length > 0 ? (
              theme.map(theme => (
                <BlockGuide key={theme.id} name={theme.name} text={theme.text} url={theme.url} />
              ))
            ) : (
              <p>No theme available.</p>
            )}
    </>)
}