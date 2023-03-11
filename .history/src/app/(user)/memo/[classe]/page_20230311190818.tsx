import React, { cache } from 'react';
import Questions from '@/components/Questions';
import { client } from '../../../../../lib/sanity.client';
import {
  ALLMEMOSBYCLASS,
  AllMemosByClass,
} from '../../../../../queries/queries';
import { AllMemos } from '../../../../../queries/queries';
import Link from 'next/link';
import Image from 'next/image';

type Params = {
  params: { classe: string };
};
// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client));

//TODO:
// Query all memos of one single class
// To do so make dynamic route that has class name
// adjust image size to fit maybe crop it on sanity
const page = async ({ params }: Params) => {
  const data: AllMemosByClass[] = await clientFetch(ALLMEMOSBYCLASS, {
    class: params.classe,
  });

  // console.log('params in memo grid', params);
  // console.log('Data', data);

  return (
    <main className='min-h-screen w-screen relative'>
      <section className='h-full py-2'>
        <div className=' grid-col-1 pt-10 lg:pt-20 grid md:grid md:grid-cols-3 gap-3 px-10'>
          {data.map((memos) =>
            memos.memos.map((memo) => {
              {
                return (
                  <Link
                    key={memo._id}
                    href={`/memo/${params.classe}/${memo.name}`}
                  >
                    <div className='border-2 m-0 border-gray-300 flex flex-col items-center rounded-lg'>
                      <Image
                        width={200}
                        height={200}
                        className='w-full h-72'
                        src={`${memo.image.asset.url}`}
                        alt=''
                      />
                    </div>
                  </Link>
                );
              }
            })
          )}
        </div>
      </section>
    </main>
  );
};

export default page;

/*  @ts-expect-error Async Server Component
   <Questions data={data} />
*/
