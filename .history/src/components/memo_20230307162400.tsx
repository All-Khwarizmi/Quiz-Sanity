'use client'
import React from 'react';
import { fetcher } from '@/lib/fetcher';

const Memo = (/* {data}: any */) => {
    const url = 'http://localhost:1337/api/memos';
    // const url = 'http://localhost:1337/api/memos?populate=*';

    const options = {
      method: 'GET',
    };
    const data = fetcher(url, options);
    console.log(data)
    console.log("test")
  return (
    <section className='h-96 w-screen px-10 rounded-lg py-20'>
      <div className='w-full  h-full bg-white text-black'>
          <h1 className='text-center'>Memos</h1>{' '}
          <div className='flex h-'>
            <div className='w-20 h-30 bg-gray-300'>

        </div>
          </div>
        
      </div>
    </section>
  );
};

export default Memo;

export async function getServerSideProps() {
  const url = 'http://localhost:1337/api/memos';
  // const url = 'http://localhost:1337/api/memos?populate=*';

  const options = {
    method: 'GET',
  };

  // const data = fetcher(url, options);

  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data);
  return {
    props: {
        data
    },
  };
}
