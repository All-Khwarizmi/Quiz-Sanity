'use client';
import React, { useRef } from 'react';
import { QuizType } from '../../lib/memoFetcher';

const Quiz = (quiz: QuizType) => {
  let quizRef = useRef(quiz);
  console.log('QuizRef', quizRef);
  return (
    <>
      <section className='h-full w-full flex justify-center items-center'>
        <div className='h-96 w-96 bg-gray-400 opacity-4'></div>
      </section>
    </>
  );
};

export default Quiz;
