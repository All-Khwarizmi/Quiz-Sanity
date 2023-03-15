import Quiz from '@/components/Quiz';
import { memoFetcher, QuizType } from '../../../../../../lib/memoFetcher';

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

  let quiz: QuizType = await memoFetcher(newParams.memo, newParams.classe);

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
