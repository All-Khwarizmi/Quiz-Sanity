import React, { cache } from 'react';
import { client } from '../../../../lib/sanity.client';
import { groq } from 'next-sanity';

const query = groq` 
*
[_type == "memo"]
`;
// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client));
// TODO :
  
const page = () => {
  return (
    <main className='min-h-screen w-screen relative'>
      <h1 className='text-center py-20'>Grid of all categories</h1>
      <section className='h-full py-2'>
        <div className=' grid-col-1 grid md:grid md:grid-cols-3 gap-3 px-3'>
          <div className='border-2 m-0 border-gray-300 rounded-lg'>
            <img src='/loup.png' alt='' />
            <p className='text-center font-bold py-3'>classe</p>
          </div>
          <div className='border-2 mt-0 border-gray-300 rounded-lg'>
            <img src='/baleine.png' alt='' />
            <p className='text-center font-bold py-3'>classe</p>
          </div>
          <div className='border-2 m-0 border-gray-300 rounded-lg'>
            <img src='/manchot.png' alt='' />
            <p className='text-center font-bold py-3'>classe</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
