import React from 'react';

const page = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  return <div>page from memo slug</div>;
};

export default page;
