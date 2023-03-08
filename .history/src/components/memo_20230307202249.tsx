"use client"
import React from 'react';
import { fetcher } from '@/lib/fetcher';

const  Memo =  ( {props} : any ) => {
// const data = fetcher(`http://localhost:3000/api/hello`);
  console.log(data); 
  // const data = await getData()
  // console.log('test', data);
  return (
    <section className='h-96 w-screen px-10 rounded-lg py-20'>
      <div className='w-full overflow-hidden  h-full bg-white text-black'>
        <h1 className='text-center'>Memos</h1>{' '}
        <button type='button' className='p-3 bg-gray-300 rounded'>
          Fetch
        </button>
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

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const data = await res.json()
  console.log(data);
  return {
    props: {
        data
    },
  };
}
export default Memo;