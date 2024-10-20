import Link from "next/link";
import { Button } from "./ui/button";

interface BlockGuideProps {
  name: string;
  text: string;
  url: string; 
}

export default function BlockGuide({ name, text, url }: BlockGuideProps) {
  const getExcerpt = (text: string, wordCount: number) => {
    const words = text.split(' ');
    return words.slice(0, wordCount).join(' ') + (words.length > wordCount ? '...' : '');
  };

  return (
    <div className="bg-slate-200 p-4 rounded-md">
      <h1 className="text-2xl font-bold">{name}</h1>
      <div>
        <p>{getExcerpt(text, 25)}</p>
      </div>
      <div className="mt-4">
        <Link href={`${url}`}><Button className="w-32 text-md font-medium">Go</Button></Link>
      </div>
    </div>
  );
}
