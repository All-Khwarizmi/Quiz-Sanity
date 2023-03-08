
import React from 'react'

export const fetcher = async (url: string, option?: object) => {

    if (!option) {
        
    }

    const res = await fetch(url, option)
    const data = await res.json()
   // console.log(data)

    return data

}
