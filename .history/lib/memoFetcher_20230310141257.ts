import {cache} from 'react'
import {client} from './sanity.client'
import {SINGLEME}

const clientFetcher= cache(client.fetch())
export type MemoFetcher = (classe: string) => void
export const memoFetcher: MemoFetcher = async (data) => {



}