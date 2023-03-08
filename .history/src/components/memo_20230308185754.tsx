
import React from 'react';
import { fetcher } from '@/lib/fetcher';

const  Memo = async (  ) => {
   const data = await getData()
 // console.log(data.result); 
 //console.log(data.result[0].question); 
 console.log(data.result[0].question[0]); 
  // const data = await getData()
  // console.log('test', data);
  return (
    <section className='h-96 w-screen px-10 rounded-lg py-20'>
      <div className='w-full overflow-hidden  h-full bg-white text-black'>
        <h1 className='text-center'>Memos</h1>{' '}
        <button type='button' className='p-3 bg-gray-300 rounded'>
          Fetch
        </button>
        <div className='flex space-x-3 h-full '>
         
        
               {  data?.result.map((item: any, index: number) => {
                  return (
                    <div className='w-40 h-30 bg-gray-300' key={item._id}>
                      <p className='font-bold'>Title</p>
                      <p>{item.name}</p>
                      <p className='font-bold'>Description</p>
                      <p>{item.description[0].children[0].text}</p>
                    
                    </div>
                  );
                })  }
          
        </div>
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