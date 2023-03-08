
import React from 'react'

type Fetcher = (url: string, options?: object)
export const fetcher: Fetcher = async (url, options) => {
    let response 
    if (!option) {
        response= await fetch(url)
    } else {
        response = await fetch(url, option)
    }

  
    const data = await response.json()
   // console.log(data)

    return data

}
