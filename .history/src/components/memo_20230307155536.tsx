import React from 'react'
import fetcher from '@/lib/fetcher';

const Memo = () => {
    const url = 'http://localhost:1337/api/memos';
   // const url = 'http://localhost:1337/api/memos?populate=*';

   const options = 
    const data = fetcher()
  return (
    <section className='h-96 w-screen px-10 rounded-lg py-20'>
      <div className='w-full flex  h-full bg-white text-black'>
        <div>
          <h1 className=''>Memos</h1>{' '}
        </div>
      </div>
    </section>
  );
};

export default Memo;
