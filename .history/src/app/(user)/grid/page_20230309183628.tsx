import React, { cache } from 'react'
import { client } from '../../../../lib/sanity.client'
import { groq } from 'next-sanity'

const query= groq` 

`
// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))

const page = () => {
  return (
   <main className='h-screen w-screen'>
    <h1 className='text-center py-20'>Grid of all categories</h1>
    <section>
      <div className='h-full w-full grid grid-cols-3 space-x-3 space-y-3 px-3' >
       
        <div className='border-2 border-gray-300 rounded-lg'>
          <img src="/cerveau.png" alt="" />
          <p className='text-center font-bold py-3'>
            classe 
          </p>
        </div>
        <div className='border-2 border-gray-300 rounded-lg'>
          <img src="/cerveau.png" alt="" />
          <p className='text-center font-bold py-3'>
            classe 
          </p>
        </div>
        <div className='border- border-gray-300 rounded-lg'>
          <img src="/cerveau.png" alt="" />
          <p className='text-center font-bold py-3'>
            classe 
          </p>
        </div>

        

      </div>
    </section>
   </main>
  )
}

export default page