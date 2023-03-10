import { memoFetcher } from '../../../../../../lib/memoFetcher';
import { SINGLECLASS } from '../../../../../../queries/queries';
type Params = {
  paramas: { classe: string; memo: string };
};
const page = async ({ params }: Params) => {
  const newParams = {
    ...params,
    memo: params.memo.replace('%20', ' '),
  };
  let quiz = await memoFetcher(params.classe);
  console.log(params);
  console.log('NewParams=', newParams);
  console.log('Quiz', quiz);
  console.log('Questions', quiz.questions);
  return (
    <>
      <main className='min-h-screen w-screen'>
        <div>Question page</div>
      </main>
    </>
  );
};

export default page;