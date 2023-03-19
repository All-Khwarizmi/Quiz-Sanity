import React, { cache } from 'react';
import { client } from '../../../../../lib/sanity.client';
import {
  ALLMEMOSBYCLASS,
  AllMemosByClass,
} from '../../../../../queries/queries';
import { cah } from 'next/dist/shared/lib/utils';

import Memo from '@/components/Memo';

type Params = {
  params: { classe: string };
};
// Enable NextJS to cache and dedupe queries
const clientFetch = CacheFs(client.fetch.bind(client));

const page = async ({ params }: Params) => {
  const data: AllMemosByClass[] = await clientFetch(ALLMEMOSBYCLASS, {
    class: params.classe,
  });
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
