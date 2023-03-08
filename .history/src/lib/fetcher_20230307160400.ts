"use client"
import React from 'react'

const fetcher = async (url: string, option: object) => {

    if (!url || !option) return console.log("Please add url & option object")

    const res = await fetch(url, option)
    const data = await res.json()
    console.log(res)
    console.log(data)

    return data

}
