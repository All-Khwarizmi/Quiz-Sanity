'use client';
import { idGen } from '../../lib/idGen';
import React, { useEffect, useRef, useState } from 'react';
import { QuizType } from '../../lib/memoFetcher';
import clsx from 'clsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { badToast, goodToast, masPuntosToast } from '../../lib/toasts';
type Colors = {
  good: string;
  bad: string;
};
const colors: Colors = {
  good: 'bg-green-600',
  bad: 'bg-red-600',
};
type PuntosLocal = (puntos: number | string) => string | null;

//TODO:
// handle when last question => redirect to memo grid
// Add 30 puntos to local storage
// When isGood ==> disable toast and bg? of others cells

const Quiz = (quiz: QuizType) => {
  const [themeA, setThemeA] = useState<string>('');
  const [themeB, setThemeB] = useState<string>('');
  const [themeC, setThemeC] = useState<string>('');
  const [themeD, setThemeD] = useState<string>('');
  const [isGood, setIsGood] = useState<boolean>(false);
  const [puntos, setPuntos] = useState<number>();
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    if (localStorage.getItem('puntos')) {
      let puntosInLocal = localStorage.getItem('puntos');
      let puntos = parseInt(puntosInLocal!);
      setPuntos(puntos);
    }
  }, []);
  const numberOfQuestion = quiz.questions.length
  let quizRef = useRef(quiz);
  // console.log('QuizRef', quizRef.current, quizRef.current.questions.map(item => console.log(item)));

  const answerAHandler = (e: any, correctAnswer: string): void => {
    let answer = e.target.firstChild.data;
    if (answer === correctAnswer) {
      setIsGood(true);
      setThemeA(colors.good);
      goodToast();
    } else {
      setThemeA(colors.bad);
      badToast();
    }

    // console.log(e, correctAnswer, e.target.firstChild.data);
  };
  const answerBHandler = (e: any, correctAnswer: string): void => {
    let answer = e.target.firstChild.data;
    if (answer === correctAnswer) {
      setIsGood(true);
      setThemeB(colors.good);
      goodToast();
    } else {
      setThemeB(colors.bad);
      badToast();
    }

    // console.log(e, correctAnswer, e.target.firstChild.data);
  };
  const answerCHandler = (e: any, correctAnswer: string): void => {
    let answer = e.target.firstChild.data;
    if (answer === correctAnswer) {
      setIsGood(true);
      setThemeC(colors.good);
      goodToast();
    } else {
      setThemeC(colors.bad);
      badToast();
    }

    // console.log(e, correctAnswer, e.target.firstChild.data);
  };
  const answerDHandler = (e: any, correctAnswer: string): void => {
    let answer = e.target.firstChild.data;
    if (answer === correctAnswer) {
      setIsGood(true);
      setThemeD(colors.good);
      goodToast();
    } else {
      setThemeD(colors.bad);
      badToast();
    }

    // console.log(e, correctAnswer, e.target.firstChild.data);
  };

  const validationHandler = (): void => {
    setCount((count) => (count += 1));
    setIsGood(false);
    setThemeA('');
    setThemeB('');
    setThemeC('');
    setThemeD('');
    localStorage.setItem('puntos', JSON.stringify(puntos! + 30));
    setPuntos((puntos) => (puntos! += 30));
    masPuntosToast();
  };

  return (
    <>
      <section className='h-full w-full flex flex-col space-y-5 justify-center items-center'>
        <p className='uppercase font-bold pt-10 text-xl'>{puntos} puntos ✨ </p>
        <h1 className=' font-bold text-5xl uppercase'>
          {quizRef.current.memo}
        </h1>

        {quizRef.current.questions.map((question, index) => {
          return (
            <div
              key={idGen()}
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
                      themeA === '' && !isGood
                        ? 'hover:scale-125 hover:text-sky-500 hover:border-sky-500'
                        : ''
                    }  uppercase border-2 rounded-lg py-5 px-3`
                  )}
                >
                  {question.answerA}
                </div>
                <div
                  onClick={(e) => answerBHandler(e, question.answerCorrect)}
                  className={clsx(
                    `font-bold text-center w-full text-xl  ${themeB} ${
                      themeB === '' && !isGood
                        ? 'hover:scale-125 hover:text-sky-500 hover:border-sky-500'
                        : ''
                    }  uppercase border-2 rounded-lg py-5 px-3`
                  )}
                >
                  {question.answerB}
                </div>
                <div
                  onClick={(e) => answerCHandler(e, question.answerCorrect)}
                  className={clsx(
                    `font-bold text-center w-full text-xl  ${themeC} ${
                      themeC === '' && !isGood
                        ? 'hover:scale-125 hover:text-sky-500 hover:border-sky-500'
                        : ''
                    }  uppercase border-2 rounded-lg py-5 px-3`
                  )}
                >
                  {question.answerC}
                </div>
                <div
                  onClick={(e) => answerDHandler(e, question.answerCorrect)}
                  className={clsx(
                    `font-bold text-center w-full text-xl  ${themeD} ${
                      themeD === '' && !isGood
                        ? 'hover:scale-125 hover:text-sky-500 hover:border-sky-500'
                        : ''
                    }  uppercase border-2 rounded-lg py-5 px-3`
                  )}
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
