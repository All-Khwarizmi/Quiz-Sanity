import Memo from '../components/Memo';
import { Inter } from 'next/font/google';
import { previewData } from 'next/headers';
import PreviewSuspense from '../components/PreviewSuspense';
import { query} from '../components/FetchData'
import FetchData from '../components/FetchData';
import PreviewDocumentsCount from '@/components/PreviewFetchData';
import { client } from '../../lib/sanity.client';
import { cache } from 'react';
const inter = Inter({ subsets: ['latin'] });

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))


export default function Home() {
  
}


/* 

*/