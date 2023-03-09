import React, { cache } from 'react';
import { client } from '../../../../../lib/sanity.client';
import { SINGLEMEMO } from '../../../../../queries/queries';

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))

const page = async ({ params }: { params: { slug: string } }) => {
  const data: Question[] = await clientFetch(SINGLEMEMO, {name : "First Memo"} )
  console.log(params.slug, data);
  return (
    <main className='min-h-screen w-screen'>


    </main>
  );
};

export default page;
