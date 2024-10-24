'use client'
import { redirect } from 'next/navigation';
import { theme } from "@/action";

export default function Page({ params }) {
  const index = parseInt(params.id) - 1; 
  const data = theme[index];

  if (!data) {
    redirect('/404'); // Перенаправлення на кастомну сторінку 404
  }

  return (
    <main className="bg-blue-400 flex-1 flex flex-col p-10">
      <div className="bg-slate-400 p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
        <p className="text-lg font-semibold">{data.text}</p>
      </div>
    </main>
  );
}

