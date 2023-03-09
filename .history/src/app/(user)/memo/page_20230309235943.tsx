import React, { cache } from 'react';
import Questions from '@/components/Questions';
import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import { SINGLECLASS, ALLMEMOS} from '../../../../queries/queries';
import { AllMemos } from '../../../../queries/queries';
import Link from 'next/link';
import Image from 'next/image';
// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))

//
const query = groq` 
*
[_type == "memo"]
`;

//TODO: 
    // Query all memos of one single class
    // To do so make dynamic route 
    // adjust image size to fit maybe crop it on sanity
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
         {data?.map(memo => {
          return (
            <Link key={memo._id} href={`/memo/${memo.name}`}>
              <div className='border-2 m-0 border-gray-300 flex flex-col items-center rounded-lg'>
                <Image
                width={200}
                height={200}
                  className='w-full max-h-50'
                  src={`${memo.image.asset.url}`}
                  alt=''
                />
                <p className='text-center font-bold py-3'>{memo.name}</p>
              </div>
            </Link>
          );
         })}
          
        </div>
      </section>
    </main>
  );
};

export default page;

/*  @ts-expect-error Async Server Component
   <Questions data={data} />
*/