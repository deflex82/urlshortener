"use client"
import { shorten } from '@/lib/shorten';
import { Delete, Scissors } from 'lucide-react';
import { useState } from 'react';
export default function Home() {
  const [url, seturl] = useState("");
  const [shortenurl, setshortenurl] = useState("");

  return (
    <div className="absolute inset-0 min-h-screen bg-slate-50 dark:bg-zinc-900 p-4">

      <h2 className='text-3xl font-semibold font-mono text-center text-blue-600 mb-4' >Shorten your URL</h2>

      <form className='w-[40%] mx-auto border flex items-center p-2 border-blue-600  rounded-sm gap-3 ' >
        <input onChange={e => seturl(e.target.value)} className='flex-1 outline-none border-none bg-transparent text-gray-700' type="text" placeholder="Enter the URL" />

        <button onClick={e => e.preventDefault()}>
          <Scissors onClick={async () => {
            let shorturl = await shorten(url);
            setshortenurl(shorturl);
          }} className='text-blue-600 ' />

        </button>


        <button className={`${url == "" ? "hidden" : "block"} px-2 py-2 text-slate-50 font-bold bg-red-600 hover:bg-red-600/75 rounded-sm text-sm `}>clear</button>

      </form>



      {
        shortenurl && <div className={` font-mono flex flex-col gap-3 mx-auto w-[60%] mt-4 `}>
          <p className=' font-bold'>original url:<span className='text-gray-900 text-wrap '>{url}</span></p>

          <p className='font-bold text-blue-700' >shorten url:<a href={shortenurl} className='text-red-600 font-semibold'>{shortenurl}</a></p>

        </div>
      }










    </div>
  );
}
