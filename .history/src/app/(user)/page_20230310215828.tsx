'use client';

import { Inter } from 'next/font/google';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { welcomeToast } from '../../../lib/toasts';
import { useEffect, useState } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const [isPuntos, setIsPuntos] = useState<string | null>(
    localStorage.getItem('puntos')
  );
useEffect(()=> {
if !localStorage.getItem('puntos')
}, [])
  const getPuntos = () => {
    if (!localStorage.getItem('puntos')) {
    localStorage.setItem('puntos', '50');
    welcomeToast();
    
  }
  }
  

  return (
    <>
      <main className='w-screen h-screen flex flex-col items-center  '>
        <Image
          className='  relative left-20 top-20 z-0 '
          width={200}
          height={300}
          alt='QuizoO logo'
          src={'/cerveau.png'}
        />

        <h1
          className={clsx(
            inter.className,
            ' z-10 relative uppercase px-20 top-20 text-5xl py-5 font-bold'
          )}
        >
          Welcome
        </h1>
        <h1
          className={clsx(
            inter.className,
            ' z-10 relative uppercase px-20 top-20 text-5xl py-5 font-bold'
          )}
        >
          to
        </h1>
        <h1
          className={clsx(
            inter.className,
            ' z-10 relative uppercase px-20 top-20 text-5xl py-5 font-bold'
          )}
        >
          QuizoO
        </h1>
        {localStorage.getItem('puntos') ? (
          <div className=' w-full flex justify-center items-center'>
            <Link
              id='btn'
              href={'/grid'}
              className='text-white animate-pulse top-20 left-25 font-bold py-2 px-3 rounded-lg text-xl bg-purple-800 relative btn'
            >
              ENTER
            </Link>
          </div>
        ) : (
          <div className=' w-full flex justify-center items-center'>
            <button
              id='btn'
              onClick={getPuntos}
              className='text-white animate-pulse top-20 left-25 font-bold py-2 px-3 rounded-lg text-xl bg-purple-800 relative btn'
            >
              ENTER
            </button>
          </div>
        )}
      </main>
    </>
  );
}

/* 
if (previewData()) {
    return (
      <PreviewSuspense fallback='Loading...'>
        <PreviewDocumentsCount />
      </PreviewSuspense>
    );
  }

  const data = await clientFetch(query);
  return <FetchData data={data} />;

*/
