import Memo from '../components/Memo';
import { Inter } from 'next/font/google';
import { previewData } from 'next/headers';
import PreviewSuspense from '../components/PreviewSuspense';
import { query} from '../components/FetchData'
import FetchData from '../components/FetchData';
import Pre
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Memo />
    </>
  );
}
