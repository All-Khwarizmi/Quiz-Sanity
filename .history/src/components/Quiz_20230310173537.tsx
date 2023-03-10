'use client';
import React, { useRef } from 'react';
import { QuizType } from '../../lib/memoFetcher';

const Quiz = (quiz: QuizType) => {
  let quizRef = useRef(quiz);
  console.log('QuizRef', quizRef);
  return (
    <>
      <section className='h-full w-full flex flex-col space-y-5 justify-center items-center'>
        <h1 className='pt-10 font-bold text-5xl uppercase'>{quizRef.current.memo}</h1>
        <div className='h-96 w-96 bg-gray-900 flex flex-col rounded-lg items-center justify-center space-y-10 opacity-80'>
          {/*  Questions */}
          <div className='font-bold text-3xl border-2 uppercase rounded-lg py-10 px-5'>{quizRef.current.questions[0].question}</div>
          {/*  reponses */}
          <div className='grid gap-5 grid-cols-2 opacity-100'>
            <div className='font-bold text-xl bg-green-600 uppercase border-2 rounded-lg py-5 px-3'>{quizRef.current.questions[0].answerA}</div>
            <div className='font-bold text-xl bg-red-600 uppercase border-2 rounded-lg py-5 px-3'>{quizRef.current.questions[0].answerA}</div>
            <div className='font-bold text-xl  uppercase border-2 rounded-lg py-5 px-3'>{quizRef.current.questions[0].answerA}</div>
            <div className='font-bold text-xl bg-green-600 uppercase border-2 rounded-lg py-5 px-3'>{quizRef.current.questions[0].answerA}</div>
           
          </div>
          <button></button>
        </div>
      </section>
    </>
  );
};

export default Quiz;
