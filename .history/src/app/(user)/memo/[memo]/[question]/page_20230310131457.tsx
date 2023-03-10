import React from 'react'
type Params = {
    question: string
}
const page = ({ params }: { params: { slug: string } }) => {

  console.log(params);
   const newParams = params.question.replace('%', ' ');
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