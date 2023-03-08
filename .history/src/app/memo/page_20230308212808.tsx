import React from 'react'

const page = ({params}: any) => {
  return (
    <div>
      page from memo
      <p>{params.slug}</p>
    </div>
  );
}

export default page