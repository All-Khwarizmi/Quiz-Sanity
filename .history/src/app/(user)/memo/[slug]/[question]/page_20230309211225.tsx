import React from 'react'
type Params = {
    question: string
}
const page = ({slug}: Params) => {
    console.log(slug)
  return (
    <div>Question page</div>
  )
}

export default page