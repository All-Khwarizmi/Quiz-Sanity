"use client"
import { cache, useRef } from 'react';
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
  let quiz = await memoFetcher(newParams.memo);
  //let quizRef =useRef(quiz)

 // console.log('QuizRef', quizRef);
  //console.log('Quiz', quiz.questions);
  // console.log('Questions', data[0].question);
  return (
    <>
      <main className='min-h-screen w-screen'>
        <div>Question page</div>
      </main>
    </>
  );
};

export default page;
