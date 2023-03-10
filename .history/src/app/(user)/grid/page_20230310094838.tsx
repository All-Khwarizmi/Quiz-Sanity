import React, { cache } from 'react';
import { client } from '../../../../lib/sanity.client';
import { groq } from 'next-sanity';
import { ALLCLASSES, AllClassImg } from '../../../../queries/queries';


// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client));

// TODO :
    // Fetch all classes
    // change img => Image/next 
const page = async () => {
  const data: AllClassImg = await clientFetch(ALLCLASSES)
  console.log(data.length, data[0].image.asset.url, data[0].title);
  return (
    <main className='min-h-screen w-screen relative'>
      <h1 className='text-center font-bold text-2xl uppercase py-20'>Classes</h1>
      <section className='h-full py-2'>
        <div className=' grid-col-1 grid md:grid md:grid-cols-3 gap-3 px-3'>
         {data.map(classe => {
          return (
            <Lin
          );
         })}
         
        </div>
      </section>
    </main>
  );
};

export default page;
