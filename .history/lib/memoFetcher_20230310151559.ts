import { cache } from 'react';
import { client } from './sanity.client';
import { SINGLEMEMO } from '../queries/queries';

type Quiz = {
  questions: Question[][];
  started: boolean;
  finished: boolean;
  points: number;
  malus: number;
  length: number;
};

export type MemoFetcher = (classe: string) => Promise<Quiz>;
export const memoFetcher: MemoFetcher = async (classe) => {
  const clientFetcher = cache(client.fetch.bind(client));
  const data: Memo[] = await clientFetcher(SINGLEMEMO, {
    name: classe,
  });
  let quiz: Quiz = {
    questions: data.map((item) => {
        console.log('Inside Map in memoFetcher', item.question);
        return item.question.map(question => question);
    }),
    started: false,
    finished: false,
    points: 0,
    malus: 0,
    length: 0,
  };
  return quiz;
};
