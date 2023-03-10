import React from 'react'
type Params = {
    question: string
}
const page = ({ params }: { params: { question: string } }) => {

  console.log(params);
   const newParams = params.question.replace('%20', ' ');
   console.log('NewParams=', newParams);
  return (
    <>
      <main className='min-h-screen w-screen'>
        <div>Question page</div>
      </main>
    </>
  );
};

export default page