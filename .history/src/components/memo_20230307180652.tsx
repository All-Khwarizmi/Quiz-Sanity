"use client"
import React from 'react';
import { fetcher } from '@/lib/fetcher';

const  Memo = async ( /* {data} : any */ ) => {
    
 const data = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/memos`);

 console.log(data);
    
    console.log("test")
  return (
    <section className='h-96 w-screen px-10 rounded-lg py-20'>
      <div className='w-full overflow-hidden  h-full bg-white text-black'>
        <h1 className='text-center'>Memos</h1>{' '}
        <button type='button' className='p-3 bg-gray-300 rounded'>Fetch</button>
        <div className='flex h-full '>
          <div className='w-40 h-30 bg-gray-300'>
            <ul>
                {/*  {  data?.map((item: any) => {
                    <li key={item.data}>{item.data}</li>
                })  } */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


export async function getStaticProps() {

  const data = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/memos`);

  console.log(data);
  return {
    props: {
        data
    },
  };
}
export default Memo;