import Memo from '../components/Memo';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Memo />
    </>
  );
}
