import { memoFetcher } from '../../../../../../lib/memoFetcher';
import { SINGLECLASS } from '../../../../../../queries/queries';
type Params = {
  question: string;
};
const page = async ({
  params,
}: {
  params: { question: string; memo: string };
}) => {

  const newParams = {
    ...params,
    question: params.question.replace('%20', ' '),
  };
   let quiz = memoFetcher(params.question);
  console.log(params);
  console.log('NewParams=', newParams);
  return (
    <>
      <main className='min-h-screen w-screen'>
        <div>Question page</div>
      </main>
    </>
  );
};

export default page;
