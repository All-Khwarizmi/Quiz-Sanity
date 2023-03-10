import { cache } from 'react';
import { memoFetcher } from '../../../../../../lib/memoFetcher';
import { client } from '../../../../../../lib/sanity.client';
import { SINGLEMEMO } from '../../../../../../queries/queries';
type Params = {
  params: { classe: string; memo: string };
};

const clientFetch = cache(client.fetch.bind(client));
const page = async ({ params }: Params) => {
  const newParams = {
    ...params,
    memo: params.memo.replace('%20', ' '),
  };
 // let quiz = await memoFetcher(params.classe);
 const data: Memo[] = await clientFetch(SINGLEMEMO, {
   name: newParams.memo,
 });
  console.log(params);
  console.log('NewParams=', newParams);
  console.log('Quiz', data);
  console.log('Questions', data[0].questi);
  return (
    <>
      <main className='min-h-screen w-screen'>
        <div>Question page</div>
      </main>
    </>
  );
};

export default page;