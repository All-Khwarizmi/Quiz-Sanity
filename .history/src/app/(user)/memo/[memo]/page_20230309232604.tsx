import React, { cache } from 'react';
import { client } from '../../../../../lib/sanity.client';
import {SINGLE}

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))

const page = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  return (
    <main className='min-h-screen w-screen'>


    </main>
  );
};

export default page;
