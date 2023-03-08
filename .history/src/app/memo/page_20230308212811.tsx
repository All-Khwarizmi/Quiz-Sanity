import React from 'react'

const page = ({params}: any) => {
  return (
    <div>
     
      <p>{params.slug}</p>
    </div>
  );
}

export default page