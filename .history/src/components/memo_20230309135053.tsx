
import React, { cache } from 'react';
import { groq } from 'next-sanity';
import Questions from './Questions';
import { client } from '../../lib/sanity.client';

 const query = groq`
*
[_type == "memo"]
`;
// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))


const  Memo = async (  ) => {
  const data: Memo[] = await clientFetch(query);
  const dataFetch = await getData()
 
 console.log("Start here"); 

  return (
    <section className='h-full w-screen px-10 rounded-lg py-20'>
      <div className='w-full overflow-hidden  h-full bg-white text-black'>
        <h1 className='text-center'>Memos</h1>{' '}
        <button type='button' className='p-3 bg-gray-300 rounded'>
          Fetch
        </button>
        {/* @ts-expect-error Async Server Component */}
        <Questions data={data} />
      </div>
    </section>
  );
};

export const getData = async () => {
  let response = await fetch(
    'https://wvgewzcu.api.sanity.io/v2021-10-21/data/query/production?query=*%0A%5B_type%20%3D%3D%20%22memo%22%5D'
  );
  const data = await response.json()
  return data
}

export default Memo;