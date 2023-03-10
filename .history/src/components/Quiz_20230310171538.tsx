'use client';
import React, { useRef } from 'react';
import { QuizType } from '../../lib/memoFetcher';

const Quiz = (quiz: QuizType) => {
  let quizRef = useRef(quiz);
  console.log('QuizRef', quizRef);
  return (
    <>
      <section className='h-full w-full flex flex-row justify-center items-center'>
        <h1></h1>
        <div className='h-96 w-96 bg-gray-900 opacity-40'></div>
      </section>
    </>
  );
};

export default Quiz;
