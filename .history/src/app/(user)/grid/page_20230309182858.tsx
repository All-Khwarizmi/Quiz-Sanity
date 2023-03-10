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
      <div className='h-full w-full grid grid-cols-3' >
        <div>
          <img src="/cerveau.png" alt="" />
        </div>
        <div>
          <img src="/cerveau.png" alt="" />
        </div>
        <div>
          <img src="/cerveau.png" alt="" />
        </div>
        

      </div>
    </section>
   </main>
  )
}

export default page