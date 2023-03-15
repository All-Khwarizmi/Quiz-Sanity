
import React, { cache, use } from 'react';
import { client } from '../../../../../lib/sanity.client';
import {
  ALLMEMOSBYCLASS,
  AllMemosByClass,
} from '../../../../../queries/queries';
import Link from 'next/link';
import Image from 'next/image';
import Memo from '@/components/Memo'; 

type Params = {
  params: { classe: string };
};
// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client));

const page = async ({ params }: Params) => {
  const data: AllMemosByClass[] = await clientFetch(ALLMEMOSBYCLASS, {
    class: params.classe,
  });

  // console.log('params in memo grid', params);
  // console.log('Data', data);

  return (
    <main className='min-h-screen w-screen relative'>
      <section className='h-full py-2'>
       
        <Memo data={data} params={params} />
      </section>
    </main>
  );
};

export default page;

/*  @ts-expect-error Async Server Component
   <Questions data={data} />
*/
