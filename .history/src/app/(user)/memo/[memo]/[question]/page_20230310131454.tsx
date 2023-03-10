import React from 'react'
type Params = {
    question: string
}
const page = ({ params }: { params: { slug: string } }) => {
  
  console.log(params);
  return (
    <>
      <main className='min-h-screen w-screen'>
        <div>Question page</div>
      </main>
    </>
  );
};

export default page