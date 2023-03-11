import Quiz from '@/components/Quiz';
import { cache } from 'react';
import { memoFetcher, QuizType } from '../../../../../../lib/memoFetcher';
import { client } from '../../../../../../lib/sanity.client';

type Params = {
  params: { classe: string; memo: string };
};
type QuizProps = {
  quiz: QuizType;
};

const page = async ({ params }: Params) => {
  const newParams = {
    ...params,
    memo: params.memo.replace('%20', ' '),
  };
  //console.log('params', params);
  let quiz: QuizType = await memoFetcher(newParams.memo, newParams.classe);

  // console.log('Quiz classe', quiz.classe);
  // console.log('Questions', data[0].question);
  return (
    <>
      <main className='min-h-screen w-screen'>
        <Quiz
          questions={quiz.questions}
          started={false}
          finished={false}
          points={0}
          malus={0}
          length={0}
          memo={quiz.memo}
          classe={quiz.classe}
        />
      </main>
    </>
  );
};

export default page;
