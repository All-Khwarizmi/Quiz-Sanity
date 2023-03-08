import React from 'react'

const page = ({params}: any) => {
  return (
    <div>page from memo</div>
    <p>{params}</p>
  )
}

export default page