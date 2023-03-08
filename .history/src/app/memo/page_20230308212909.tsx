import React from 'react'

const page = ({params}: any) => {
    console.log(params)
  return (
    <div>
     
      <p>{params}</p>
    </div>
  );
}

export default page