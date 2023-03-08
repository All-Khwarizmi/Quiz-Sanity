
import React from 'react'

type Fetcher = (url: string)
export const fetcher = async (url: string, option?: object) => {
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
