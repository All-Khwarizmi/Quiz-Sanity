import React from 'react'
type Params = {
    question: string
}
const page = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  return <div>Question page</div>;
};

export default page