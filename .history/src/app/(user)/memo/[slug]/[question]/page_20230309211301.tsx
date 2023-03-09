import React from 'react'
type Params = {
    question: string
}
const page = ({ params }: { params: { slug: string } }) => {
  console.log(question);
  return <div>Question page</div>;
};

export default page