'use client';
import React, { useRef } from 'react';
import { QuizType } from '../../lib/memoFetcher';

const Quiz = (quiz: QuizType) => {
  let quizRef = useRef(quiz);
  console.log('QuizRef', quizRef);
  return (
    <>
      <section className='h-full w-full bg-white flex items-center'>
        <div className='h-96 w-ç§ bg-white'></div>
      </section>
    </>
  );
};

export default Quiz;
