import {cache} from 'react'
import {client} from './sanity.client'
import { SINGLEMEMO } from '../queries/queries'


export type MemoFetcher = (classe: string) => void
export const memoFetcher: MemoFetcher = async (data) => {



}