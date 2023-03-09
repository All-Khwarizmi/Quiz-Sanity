import React, { cache } from 'react';
import Questions from '@/components/Questions';
import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import { SINGLECLASS, ALLMEMOS} from '../../../../queries/queries';
import { AllMemos } from '../../../../queries/queries';
// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))

//
const query = groq` 
*
[_type == "memo"]
`;
const page = async ({ params }: any) => {
  const data: AllMemos[] = await clientFetch(ALLMEMOS);
  //const className = await clientFetch(SINGLECLASS, {title: '402'}) 
  // console.log("Class", className);
   console.log(data[0].image)
  return (
    <main className='min-h-screen w-screen relative'>
      <h1 className='text-center py-20'>Grid of all memos</h1>
      <section className='h-full py-2'>
        <div className=' grid-col-1 grid md:grid md:grid-cols-3 gap-3 px-3'>
         {}
          
        </div>
      </section>
    </main>
  );
};

export default page;

/*  @ts-expect-error Async Server Component
   <Questions data={data} />
*/