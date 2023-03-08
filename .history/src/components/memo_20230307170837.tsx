'use client'
import React from 'react';
// import { fetcher } from '@/lib/fetcher';

const Memo = ( {data} : any ) => {
    const url = 'http://localhost:1337/api/memos';
    // const url = 'http://localhost:1337/api/memos?populate=*';

    const options = {
      method: 'GET',
    };
   // const res = fetcher(url, options).then(data => data);
  const handleFetch = () => {
    
  }
  console.log(data)
 // console.log(res)
    
    console.log("test")
  return (
    <section className='h-96 w-screen px-10 rounded-lg py-20'>
      <div className='w-full overflow-hidden  h-full bg-white text-black'>
        <h1 className='text-center'>Memos</h1>{' '}
        <button type='button' onClick={(data) => handleFetch} className='p-3 bg-gray-300 rounded'>Fetch</button>
        <div className='flex h-full '>
          <div className='w-40 h-30 bg-gray-300'>
            <ul>
                 {  data?.map((item: any) => {
                    <li key={item.data}>{item.data}</li>
                })  }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const fetcher = async (url: string, option: object) => {
  if (!url || !option) return console.log('Please add url & option object');

  const res = await fetch(url, option);
  const data = await res.json();
  // console.log(data)

  return data;
};

export async function getStaticProps() {
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
    } ,
  };
}
export default Memo;