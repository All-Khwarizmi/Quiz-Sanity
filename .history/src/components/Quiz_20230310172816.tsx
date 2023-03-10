'use client';
import React, { useRef } from 'react';
import { QuizType } from '../../lib/memoFetcher';

const Quiz = (quiz: QuizType) => {
  let quizRef = useRef(quiz);
  console.log('QuizRef', quizRef);
  return (
    <>
      <section className='h-full w-full flex flex-col space-y-5 justify-center items-center'>
        <h1 className='pt-10'>{quizRef.current.memo}</h1>
        <div className='h-96 w-96 bg-gray-900 flex flex-col rounded-lg items-center justify-center space-y-10 opacity-40'>
          {/*  Questions */}
          <div className='font-bold text-3xl border-2 rounded-lg py-10 px-5'>{quizRef.current.questions[0].question}</div>
          {/*  reponses */}
          <div className='grid gap-5 grid-cols-2'>
            <div className='font-bold text-xl p-2 uppercase border-2 rounded-lg py-5 px-'>{quizRef.current.questions[0].answerA}</div>
            <div className='font-bold text-xl p-2 uppercase border-2 rounded-lg py-5 px-'>{quizRef.current.questions[0].answerA}</div>
            <div className='font-bold text-xl p-2 uppercase border-2 rounded-lg py-5 px-'>{quizRef.current.questions[0].answerA}</div>
            <div className='font-bold text-xl p-2 uppercase border-2 rounded-lg py-5 px-'>{quizRef.current.questions[0].answerA}</div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Quiz;
