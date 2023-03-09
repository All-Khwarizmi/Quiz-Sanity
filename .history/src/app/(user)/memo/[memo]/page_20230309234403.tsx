import React, { cache } from 'react';
import { client } from '../../../../../lib/sanity.client';
import { SINGLEMEMO } from '../../../../../queries/queries';

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))

const page = async ({ params }: { params: { memo: string } }) => {
  const data: Memo[] = await clientFetch(SINGLEMEMO, {name : params.memo} )
  console.log(params.memo, data.map(item => item.question.map(question => question.question)));
  return (
    <main className='min-h-screen w-screen'>


    </main>
  );
};

export default page;
