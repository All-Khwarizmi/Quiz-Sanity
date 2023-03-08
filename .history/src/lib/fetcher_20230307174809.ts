
import React from 'react'

export const fetcher = async (url: string, option?: object) => {
    let response 
    if (!option) {
        response= await fetch(url)
    }

    const res = await fetch(url, option)
    const data = await res.json()
   // console.log(data)

    return data

}