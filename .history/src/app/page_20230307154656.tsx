import Memo from '../components/memo';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
     
      <Memo />
    </>
  );
}