import Memo from '@/components/memo';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <><h1 className='text-red-500 '>Hello</h1>
      
      <Memo />
    </>
  );
}
