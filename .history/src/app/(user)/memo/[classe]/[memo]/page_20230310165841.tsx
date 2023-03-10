import Quiz from '@/components/Quiz';
import { cache } from 'react';
import { memoFetcher, QuizType } from '../../../../../../lib/memoFetcher';
import { client } from '../../../../../../lib/sanity.client';
import { SINGLEMEMO } from '../../../../../../queries/queries';
type Params = {
  params: { classe: string; memo: string };
};
let type 
const clientFetch = cache(client.fetch.bind(client));
const page = async ({ params }: Params) => {
  const newParams = {
    ...params,
    memo: params.memo.replace('%20', ' '),
  };
  let quiz: QuizType = await memoFetcher(newParams.memo);

  //console.log('Quiz', quiz.questions);
  // console.log('Questions', data[0].question);
  return (
    <>
      <main className='min-h-screen w-screen'>
        <Quiz quiz={quiz} />
      </main>
    </>
  );
};

export default page;
