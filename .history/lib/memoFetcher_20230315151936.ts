import { cache } from 'react';
import { client } from './sanity.client';
import { SINGLEMEMO } from '../queries/queries';
import { quizExtractor } from './quizExtractor';

export type QuizType = {
  questions: Question[];
  started: boolean;
  finished: boolean;
  points: number;
  malus: number;
  length: number;
  memo: string;
  classe: string
};
const clientFetch = cache(client.fetch.bind(client));

export type MemoFetcher = (memo: string, classe: string) => Promise<QuizType>;

export const memoFetcher: MemoFetcher = async (memo, classe) => {
 console.log('Classe', memo);
  const data: Memo[] = await clientFetch(SINGLEMEMO, {
    name: memo,
  });
  // console.log('Data in memoFetcher', data);
  let questions = data.map((item) => {
   
    return item.question.map((question) => question);
  });
  let questionArr = quizExtractor(questions);
  let quiz: QuizType = {
    questions: questionArr,
    started: false,
    finished: false,
    points: 0,
    malus: 0,
    length: 0,
    memo,
    classe,
  };
  return quiz;
};
