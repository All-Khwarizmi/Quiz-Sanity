import {cache} from 'react'
import {client} from './sanity.client'
import { SINGLEMEMO } from '../queries/queries'


export type MemoFetcher = (classe: string) => void
export const memoFetcher: MemoFetcher = async (classe) => {
    const clientFetcher = cache(client.fetch.bind(client));
    const data: Memo[] = await clientFetcher(SINGLEMEMO, {
        name: classe
    })
    let quiz = {
        questions: data.map()
    }


}