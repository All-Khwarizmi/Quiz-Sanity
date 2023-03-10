'use client';
import React, { useRef } from 'react';
import { QuizType } from '../../lib/memoFetcher';

const Quiz = (quiz: QuizType) => {
  let quizRef = useRef(quiz);
  console.log('QuizRef', quizRef);
  return (
    <>
      <section className='h-[80%] w-80%] bg-white flex items-center'>
    <div className='bg-white'>

    </div>
      </section>
    </>
  );
};

export default Quiz;
