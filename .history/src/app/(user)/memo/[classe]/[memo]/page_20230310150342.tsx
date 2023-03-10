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
    question: params.memo.replace('%20', ' '),
  };
   let quiz = memoFetcher(params.classe);
  console.log(params);
  console.log('NewParams=', newParams);
  console.log("Quiz")
  return (
    <>
      <main className='min-h-screen w-screen'>
        <div>Question page</div>
      </main>
    </>
  );
};

export default page;
