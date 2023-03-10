'use client';
import React, { useRef } from 'react';
import { QuizType } from '../../lib/memoFetcher';
import clsx from 'clsx';

const Quiz = (quiz: QuizType) => {
  let quizRef = useRef(quiz);
  console.log('QuizRef', quizRef);
  return (
    <>
      <section className='h-full w-full flex flex-col space-y-5 justify-center items-center'>
        <h1 className='pt-10 font-bold text-5xl uppercase'>
          {quizRef.current.memo}
        </h1>
        
         {quizRef.current.questions.map(question => {
            return ()
          })}
      </section>
    </>
  );
};

export default Quiz;
