'use client';
import React, { useRef } from 'react';
import { QuizType } from '../../lib/memoFetcher';

const Quiz = (quiz: QuizType) => {
  let quizRef = useRef(quiz);
  console.log('QuizRef', quizRef);
  return (
    <>
      <section className='h-full w-full flex flex-col space-y-5 justify-center items-center'>
        <h1 className='pt-10 font-bold text-5xl uppercase'>
          {quizRef.current.memo}
        </h1>
        <div className='min-h-96 w-96 py-5 bg-gray-900 flex flex-col rounded-lg items-center justify-center space-y-10 opacity-80'>
          {/*  Questions */}
          <div className='font-bold text-3xl border-2 text-white uppercase btn rounded-lg py-10 px-5'>
            {quizRef.current.questions[0].question}
          </div>
          {/*  reponses */}
          <div className='grid gap-5 grid-cols-2 opacity-100'>
            <div className='font-bold text-xl btn uppercase border-2 rounded-lg py-5 px-3'>
              {quizRef.current.questions[0].answerA}
            </div>
            <div className='font-bold text-xl  uppercase border-2 rounded-lg py-5 px-3'>
              {quizRef.current.questions[0].answerA}
            </div>
            <div className='font-bold text-xl uppercase border-2 rounded-lg py-5 px-3'>
              {quizRef.current.questions[0].answerA}
            </div>
            <div className='font-bold text-xl  uppercase border-2 rounded-lg py-5 px-3'>
              {quizRef.current.questions[0].answerA}
            </div>
          </div>
          <button
            type='button'
            className='btn text-white  font-bold py-2 px-3 rounded-lg text-xl bg-purple-800 relative'
          >
            SUIVANT
          </button>
        </div>
      </section>
    </>
  );
};

export default Quiz;
