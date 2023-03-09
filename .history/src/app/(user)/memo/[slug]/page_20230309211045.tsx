import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return <div>page from memo slug</div>;
};

export default page;
