'use client';
import React, { useRef, useState } from 'react';
import { QuizType } from '../../lib/memoFetcher';
import clsx from 'clsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { badToast, goodToast } from '../../lib/toasts';

const colors = {
  good: 'bg-green-600',
  bad: 'bg-red-600',
};

type PuntosLocal = {
    puntos: number
}

//TODO:
    // handle when last question => redirect to memo grid
const Quiz = (quiz: QuizType) => {
  const [themeA, setThemeA] = useState<string>('');
  const [themeB, setThemeB] = useState<string>('');
  const [themeC, setThemeC] = useState<string>('');
  const [themeD, setThemeD] = useState<string>('');
  const [isGood, setIsGood] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<number | undefined>(localStorage.getItem<PuntosLocal>("puntos") || 0);
  let count = 0;
  let quizRef = useRef(quiz);
  // console.log('QuizRef', quizRef.current, quizRef.current.questions.map(item => console.log(item)));

  // Suivant button handler
  const answerAHandler = (e: any, correctAnswer: string) => {
    let answer = e.target.firstChild.data;
    if (answer === correctAnswer) {
      setIsGood(true);
      setThemeA(colors.good);
      goodToast()
    }
    setThemeA(colors.bad);
    badToast()
    //TODO
    // Check for correctness
    // When clicked:
    // show next button
    console.log(e, correctAnswer, e.target.firstChild.data);
  };
  const validationHandler = () => {
    //TODO
    // Only show if correct answer has been found
    // When clicked:
    // change count
    count += 1;
    setIsGood(false)
    setThemeA("")
    setThemeB("")
    setThemeC("")
    setThemeD("")
  };

  return (
    <>
      <section className='h-full w-full flex flex-col space-y-5 justify-center items-center'>
        <h1 className='pt-10 font-bold text-5xl uppercase'>
          {quizRef.current.memo}
        </h1>

        {quizRef.current.questions.map((question, index) => {
          return (
            <div
              key={Math.floor(Math.random() * 1000)}
              className={clsx(
                `${
                  count === index ? null : 'hidden'
                } min-h-96 w-96 py-5 bg-gray-900 flex flex-col rounded-lg items-center justify-center space-y-10 opacity-80 `
              )}
            >
              {/*  Questions */}
              <div className='font-bold text-3xl border-2 text-white uppercase btn rounded-lg py-10 px-5'>
                {question.question}
              </div>
              {/*  reponses */}
              <div className='grid gap-5 grid-cols-2 opacity-100'>
                <div
                  onClick={(e) => answerAHandler(e, question.answerCorrect)}
                  className={clsx(
                    `font-bold text-center w-full text-xl  ${themeA} ${
                      themeA === ''
                        ? 'hover:scale-125 hover:text-sky-500 hover:border-sky-500'
                        : ''
                    }  uppercase border-2 rounded-lg py-5 px-3`
                  )}
                >
                  {question.answerA}
                </div>
                <div
                  onClick={(e) => answerAHandler(e, question.answerCorrect)}
                  className='font-bold text-center w-full ${} text-xl hover:border-sky-500  hover:scale-125 hover:text-sky-500 uppercase border-2 rounded-lg py-5 px-3'
                >
                  {question.answerB}
                </div>
                <div
                  onClick={(e) => answerAHandler(e, question.answerCorrect)}
                  className='font-bold text-center w-full ${} text-xl hover:border-sky-500 disabled  hover:scale-125 hover:text-sky-500 uppercase border-2 rounded-lg py-5 px-3'
                >
                  {question.answerC}
                </div>
                <div
                  onClick={(e) => answerAHandler(e, question.answerCorrect)}
                  className='font-bold text-center w-full ${} text-xl hover:border-sky-500  hover:scale-125 hover:text-sky-500 uppercase border-2 rounded-lg py-5 px-3'
                >
                  {question.answerD}
                </div>
              </div>

              {isGood ? (
                <button
                  onClick={validationHandler}
                  type='button'
                  className='btn text-white  font-bold py-2 px-3 rounded-lg text-xl bg-purple-800 relative uppercase'
                >
                  siguiente
                </button>
              ) : (
                <button
                  disabled
                  type='button'
                  className='btn text-white disabled opacity-20 font-bold py-2 px-3 rounded-lg text-xl bg-purple-800 relative uppercase'
                >
                  siguiente
                </button>
              )}
            </div>
          );
        })}
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </section>
    </>
  );
};

export default Quiz;
