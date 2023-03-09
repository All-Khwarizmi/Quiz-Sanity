import Memo from '../components/Memo';
import { Inter } from 'next/font/google';

import { query} from '../components/FetchData'
import clsx from 'clsx';
import { client } from '../../lib/sanity.client';
import { cache } from 'react';
import { ClassNames } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))


export default async function Home() {
  return (
    <>
      <main className='w-screen h-screen   '>
        <Image
          className='  relative left-20 top-50 z-0 '
          width={200}
          height={300}
          alt='QuizoO logo'
          src={'/cerveau.png'}
        />

        <h1
          className={clsx(
            inter.className,
            ' z-10 relative uppercase px-20 top-50 text-5xl py-5 font-bold'
          )}
        >
          Welcome
        </h1>
        <h1
          className={clsx(
            inter.className,
            ' z-10 relative uppercase px-20 top-50 text-5xl py-5 font-bold'
          )}
        >
          to
        </h1>
        <h1
          className={clsx(
            inter.className,
            ' z-10 relative uppercase px-20 top-50 text-5xl py-5 font-bold'
          )}
        >
          QuizoO
        </h1>
        <Link
          href={'/grid'}
          className='text-white top-50 left-20 font-bold py-2 px-3 rounded-lg text-xl bg-purple-800 relative '
        >
          ENTER
        </Link>
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