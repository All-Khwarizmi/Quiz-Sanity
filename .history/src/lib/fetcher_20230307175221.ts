
import React from 'react'

type Fetcher = (url: string, options?: object) => object
export const fetcher: Fetcher = async (url, options) => {
    let response 
    if (!options) {
        response= await fetch(url)
    } else {
        response = await fetch(url, options)
    }

  
    const data = await response.json()
   // console.log(data)

    return data

}
