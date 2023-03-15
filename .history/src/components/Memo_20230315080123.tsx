
import React, { cache } from 'react';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))

type MemoProps = {
  data: AllMemosByClass[];
};
const  Memo = async (  ) => {

  
 
 console.log("Start here"); 
 //console.log(data); 
  return (
    <section className='h-full w-screen px-10 rounded-lg py-20'>
      <div className='w-full overflow-hidden  h-full bg-white text-black'>
        <h1 className='text-center'>Memos</h1>{' '}
       
      </div>
    </section>
  );
};



export default Memo;