import {cache} from 'react'
import {client} from './sanity.client'

const clientFetcher= cache(cl)
export type MemoFetcher = (classe: string) => void
export const memoFetcher: MemoFetcher = async (data) => {



}