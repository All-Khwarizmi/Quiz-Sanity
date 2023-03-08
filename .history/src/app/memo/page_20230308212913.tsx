import React from 'react'

const page = ({params}: any) => {
    console.log(params)
  return (
    <div>
      <p> page from memo</p>
    </div>
  );
}

export default page