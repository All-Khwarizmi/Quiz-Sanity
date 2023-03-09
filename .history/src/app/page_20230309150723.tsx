import Memo from '../components/Memo';
import { Inter } from 'next/font/google';

import { query} from '../components/FetchData'
import clsx from 'clsx';
import { client } from '../../lib/sanity.client';
import { cache } from 'react';
const inter = Inter({ subsets: ['latin'] });

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))


export default async function Home() {
  return (
    <>
      <main className='w-screen h-screen flex items-center'>
        <h1 className={clsx('text-5xl grid content-center py-20 font-bold')}>
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