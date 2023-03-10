'use client';

import { Inter } from 'next/font/google';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { welcomeToast } from '../../../lib/toasts';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const [isPuntos, setIsPuntos] = useState<boolean>(false)
  if (!localStorage.getItem('puntos')) {
    localStorage.setItem('puntos', '50');
    welcomeToast();
    setIsPuntos(true)
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
       {isPuntos? () : }
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
