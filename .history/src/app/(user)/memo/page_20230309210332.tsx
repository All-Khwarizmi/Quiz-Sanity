import React, { cache } from 'react';
import Questions from '@/components/Questions';
import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))
const query = groq` 
*
[_type == "memo"]
`;
const page = async ({ params }: any) => {
  const data: Data = await clientFetch(query);
  // console.log(data, query)
  return (
    <section className='h-full w-screen px-10 rounded-lg py-20'>
      <div className='w-full overflow-hidden  h-full bg-white text-black'>
        <h1 className='text-center'>Memos</h1>{' '}
        {/* @ts-expect-error Async Server Component */}
        <Questions data={data} />
      </div>
    </section>
  );
};

export default page;

/* 

*/