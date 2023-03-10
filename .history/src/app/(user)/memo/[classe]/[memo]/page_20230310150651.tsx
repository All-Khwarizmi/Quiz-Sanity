import { memoFetcher } from '../../../../../../lib/memoFetcher';
import { SINGLECLASS } from '../../../../../../queries/queries';
type Params = {
  question: string;
};
const page = async ({
  params,
}: {
  params: { memo: string; classe: string };
}) => {
  const newParams = {
    ...params,
    memo: params.memo.replace('%20', ' '),
  };
   let quiz = await memoFetcher(params.classe);
  console.log(params);
  console.log('NewParams=', newParams);
  console.log("Quiz", quiz)
  console.log("Questions", quiz.questions[0][0])
  return (
    <>
      <main className='min-h-screen w-screen'>
        <div>Question page</div>
      </main>
    </>
  );
};

export default page;
