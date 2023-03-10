'use client';
import React, { useRef } from 'react';
import { QuizType } from '../../lib/memoFetcher';
import clsx from 'clsx';

const Quiz = (quiz: QuizType) => {
  let quizRef = useRef(quiz);
 // console.log('QuizRef', quizRef.current, quizRef.current.questions.map(item => console.log(item)));
  return (
    <>
      <section className='h-full w-full flex flex-col space-y-5 justify-center items-center'>
        <h1 className='pt-10 font-bold text-5xl uppercase'>
          {quizRef.current.memo}
        </h1>
        
         {quizRef.current.questions.map((question, index) => {
           
            return (
              <div key={Math.floor(Math.random() * 1000)} className='min-h-96 w-96 py-5 bg-gray-900 flex flex-col rounded-lg items-center justify-center space-y-10 opacity-80'>
                {/*  Questions */}
                <div className='font-bold text-3xl border-2 text-white uppercase btn rounded-lg py-10 px-5'>
                  {question.question}
                </div>
                {/*  reponses */}
                <div className='grid gap-5 grid-cols-2 opacity-100'>
                  <div
                    className={clsx(
                      `font-bold text-center w-full $ text-xl hover:border-sky-500  hover:scale-125 hover:text-sky-500 uppercase border-2 rounded-lg py-5 px-3`
                    )}
                  >
                    {question.answerA}
                  </div>
                  <div className='font-bold text-center w-full $ text-xl hover:border-sky-500  hover:scale-125 hover:text-sky-500 uppercase border-2 rounded-lg py-5 px-3'>
                    {question.answerB}
                  </div>
                  <div className='font-bold text-center w-full $ text-xl hover:border-sky-500 disabled  hover:scale-125 hover:text-sky-500 uppercase border-2 rounded-lg py-5 px-3'>
                    {question.answerC}
                  </div>
                  <div className='font-bold text-center w-full $ text-xl hover:border-sky-500  hover:scale-125 hover:text-sky-500 uppercase border-2 rounded-lg py-5 px-3'>
                    {question.answerD}
                  </div>
                </div>

                <button
                  type='button'
                  className='btn text-white  font-bold py-2 px-3 rounded-lg text-xl bg-purple-800 relative'
                >
                  SUIVANT
                </button>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Quiz;
