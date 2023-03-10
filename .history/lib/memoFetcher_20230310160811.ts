import { cache } from 'react';
import { client } from './sanity.client';
import { SINGLEMEMO } from '../queries/queries';
import { quizExtractor } from './quizExtractor';

type Quiz = {
  questions: Question[];
  started: boolean;
  finished: boolean;
  points: number;
  malus: number;
  length: number;
};
  const clientFetch = cache(client.fetch.bind(client));
  
export type MemoFetcher = (memo: string) => Promise<Quiz>;

export const memoFetcher: MemoFetcher = async (memo) => {
console.log("Classe", memo)
  const data: Memo[] = await clientFetch(SINGLEMEMO, {
    name: memo,
  });
  console.log('Data in memoFetcher', data);
  let questions = data.map((item) => {
   //  console.log('Inside Map in memoFetcher', item.question);
    return item.question.map((question) => question);
  });
  let questionArr = quizExtractor(questions)
  let quiz: Quiz = {
    questions: questionArr,
    started: false,
    finished: false,
    points: 0,
    malus: 0,
    length: 0,
  };
  console.log('Inside memoFetcher', quiz);

  return quiz;
};
