import BlockGuide from "@/components/blockGuide";
import { supabase } from "@/lib/supabase";

export default async function Home() {

let { data: guides, error } = await supabase
.from('guides')
.select('*')
        

console.log(guides)
  return (
    <>
      <header>
      </header>
      <main>
        <div></div>
        <div className="bg-slate-400">
          <h1>List of Most Popular Guides</h1>
          <div>
            {guides && guides.length > 0 ? (
              guides.map(guide => (
                <BlockGuide key={guide.id} name={guide.name} text={guide.text} url={guide.url}/>
              ))
            ) : (
              <p>No guides available.</p>
            )}
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </>
  );
}

