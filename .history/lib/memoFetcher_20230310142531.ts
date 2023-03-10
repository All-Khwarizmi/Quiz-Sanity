import {cache} from 'react'
import {client} from './sanity.client'
import { SINGLEMEMO } from '../queries/queries'

type Quiz = {
  question: Question[][];
  started: boolean;
  finished: boolean;
  points: number;
};

export type MemoFetcher = (classe: string) => void
export const memoFetcher: MemoFetcher = async (classe) => {
    const clientFetcher = cache(client.fetch.bind(client));
    const data: Memo[] = await clientFetcher(SINGLEMEMO, {
        name: classe
    })
    let quiz: Quiz = {
        questions: data.map(item => item.question),
        started: false,
        finished: false,
        points: 0,

    }


}