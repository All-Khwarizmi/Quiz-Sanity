import Memo from '../components/Memo';
import { Inter } from 'next/font/google';

import { query} from '../components/FetchData'
import clsx from 'clsx';
import { client } from '../../lib/sanity.client';
import { cache } from 'react';
import { ClassNames } from '@emotion/react';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))


export default async function Home() {
  return (
    <>
      <main className='w-screen h-screen   '>
        <Image
          className='w-auto h-auto absolute z-0 right-0'
          width={200}
          height={300}
          alt='QuizoO logo'
          src={'/cerveau.png'}
        />
        <h1
          className={clsx(
            inter.className,
            ' z-10 fixed uppercase text-5xl py-20 font-bold'
          )}
        >
          Welcome to QuizoO
        </h1>
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