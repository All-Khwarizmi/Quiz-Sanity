'use client';
import React, { useRef } from 'react';
import { QuizType } from '../../lib/memoFetcher';

const Quiz = (quiz: QuizType) => {
  let quizRef = useRef(quiz);
  console.log('QuizRef', quizRef);
  return (
    <>
      <section className='h-full w-full flex flex-col space-y-5 justify-center items-center'>
        <h1 className='pt-10'>
            {quizRef.current.memo}
        </h1>
        <div className='h-96 w-96 bg-gray-900 opacity-40'>
            <div>
                question
            </div>
            di
        </div>
      </section>
    </>
  );
};

export default Quiz;
