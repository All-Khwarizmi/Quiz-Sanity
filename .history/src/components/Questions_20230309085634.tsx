import React from 'react'

const Questions = ({data}: any) => {
    const indexO = 0
    if (!data) {
        return "Loading..."
    }
  return (
    <div className='flex space-x-3 h-full '>
      {data?.result.map((item: any, index: number) => {
        return (
          <div className='w-40 h-30 bg-gray-300' key={item._id}>
            <p className='font-bold'>Title</p>
            <p>{item.name}</p>
            <p className='font-bold'>Description</p>
           
          </div>
        );
      })}
    </div>
  );
}

export default Questions