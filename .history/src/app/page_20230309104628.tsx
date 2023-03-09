import Memo from '../components/Memo';
import { Inter } from 'next/font/google';
import { previewData } from 'next/headers';
import PreviewSuspense from '../components/PreviewSuspense';
import {Fetc}

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Memo />
    </>
  );
}
