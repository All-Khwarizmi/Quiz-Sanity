import Memo from '@/components/memo';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1 className='text-red-500 '>Hello</h1>
      <section className='h-full w-screen'>
        <div className='w-full flex  h-full bg-white text-black'>
          <div>
            <h1 className='text-white'>Memos</h1>{' '}
          </div>
        </div>
      </section>
      <Memo />
    </>
  );
}
