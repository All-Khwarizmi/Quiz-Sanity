import React from 'react'
type Params = {
    question: string
}
const page = ({question}: Params) => {
    console.log(question)
  return (
    <div>Question page</div>
  )
}

export default page