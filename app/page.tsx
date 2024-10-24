import BlockGuide from "@/components/blockGuide";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
export default async function Home() {
  let { data: theme, error } = await supabase
    .from('theme')
    .select('*');

  return (
    <>
      <main className="bg-blue-400 flex-1 flex flex-col">
        <div className="p-20 grid justify-center pt-20 pb-10 space-y-4">
          <div className="mx-80 whitespace-nowrap text-center font-bold text-2xl">
            <h1>This is website create for collect huge collection guide about any technology</h1>
          </div>
          <div className="mx-80 flex justify-center">
            <Button>Go find or create</Button>
          </div>
        </div>
        <div className="bg-slate-400 p-10 rounded-lg shadow-lg blockMax">
          <h1 className="text-2xl font-bold mb-4 text-center">
            List of Most Popular Guides
          </h1>
          <div className="space-y-4">
            {theme && theme.length > 0 ? (
              theme.map(theme => (
                <BlockGuide key={theme.id} name={theme.name} text={theme.text} url={theme.url} />
              ))
            ) : (
              <p>No theme available.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
