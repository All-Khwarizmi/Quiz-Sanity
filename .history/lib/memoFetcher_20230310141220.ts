import {cache} from 'react'
import {client} from './sanity.client'

const clientFetcher= cache(client.)
export type MemoFetcher = (classe: string) => void
export const memoFetcher: MemoFetcher = async (data) => {



}