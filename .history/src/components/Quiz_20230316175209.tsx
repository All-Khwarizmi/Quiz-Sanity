'use client';
import { idGen } from '../../lib/idGen';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { QuizType } from '../../lib/memoFetcher';
import clsx from 'clsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  badToast,
  goodToast,
  masPuntosToast50,
  masPuntosToast10,
} from '../../lib/toasts';
import Link from 'next/link';
import {
  getNextRecallDay,
  memoDateChecker,
  setMemoDate,
} from '../../lib/recallHelpers';
import { MemoDateData } from '../../lib/memoTypes';
type Colors = {
  good: string;
  bad: string;
};
const colors: Colors = {
  good: 'bg-green-600',
  bad: 'bg-red-600',
};

const Quiz = (quiz: QuizType) => {
  const [themeA, setThemeA] = useState<string>('');
  const [themeB, setThemeB] = useState<string>('');
  const [themeC, setThemeC] = useState<string>('');
  const [themeD, setThemeD] = useState<string>('');
  const [isGood, setIsGood] = useState<boolean>(false);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [puntos, setPuntos] = useState<number>();
  const [count, setCount] = useState<number>(0);

  // Getting points from local storage and setting up state accordingly
  useEffect(() => {
    if (localStorage.getItem('puntos')) {
      let puntosInLocal = localStorage.getItem('puntos');
      let puntos = parseInt(puntosInLocal!);
      setPuntos(puntos);
    } else {
      localStorage.setItem('puntos', '0');
      setPuntos(0);
    }
  }, []);

  // Keeping track of questions
  useEffect(() => {
    if (numberOfQuestion === count) {
      setIsLast(true);
      // console.log(numberOfQuestion, count);
    }
  }, [count]);

  const numberOfQuestion = quiz.questions.length - 1;
  let quizRef = useRef(quiz);

  // Getting to know if there's memoDate in local Storage
  const memoDate = useRef(memoDateChecker(quiz.memo));
  console.log("Nb of ?:", numberOfQuestion)
  console.log("count", count)
  console.log("count", count)

  // Memoizing getting memoDate to only when is last question to avoid to rerender and fetching from local storage. Not only no need for fresh data but it might return null (It's handled by the previous check any way)
  let memoDateInLocalStorage: MemoDateData = useMemo(
    () => JSON.parse(localStorage.getItem(quiz.memo)!),
    [isLast]
  );
  if (memoDateInLocalStorage) {
    memoDateInLocalStorage.lastRecallDay = Date();
    memoDateInLocalStorage.nextRecallDay = getNextRecallDay(
      memoDateInLocalStorage.nextRecallDay
    );
  }

  // Refactoring memoDate and local storage update logic
  type MemoDateUpdateHandler = () => void;
  const memoDateUpdateHandler: MemoDateUpdateHandler = () => {

    // Is memoTime hence memoDate
    if (memoDate.current.isMemoDate && memoDate.current.memoDate?.isMemotime) {
      localStorage.setItem(quiz.memo, JSON.stringify(memoDateInLocalStorage));
      localStorage.setItem('puntos', JSON.stringify(puntos! + 50));
      setPuntos((puntos) => (puntos! += 50));
      masPuntosToast50();
    } else {
      // Is not memoTime but there's a memoDate
      if (memoDate.current.isMemoDate) {
        localStorage.setItem('puntos', JSON.stringify(puntos! + 10));
        setPuntos((puntos) => (puntos! += 10));
        masPuntosToast10();
        // No thing or it's memo time
      } else {
        localStorage.setItem(quiz.memo, JSON.stringify(setMemoDate()));
        localStorage.setItem('puntos', JSON.stringify(puntos! + 50));
        setPuntos((puntos) => (puntos! += 50));
        masPuntosToast50();
      }
    }
  };

  // Answer button handler. Checks for :
  // - correctness
  // - is last question
  // - is memoDate in local storage
  // - updating points in local storage conditionally accordingly to previous points
  // - updating memoDate in local storage conditionally accordingly to previous points
  const answerAHandler = (e: any, correctAnswer: string): void => {
    let answer = e.target.firstChild.data;
    if (answer === correctAnswer) {
      setIsGood(true);
      setThemeA(colors.good);
      goodToast();
      if (isLast) {
        memoDateUpdateHandler();
      }
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
      if (isLast) {
        memoDateUpdateHandler();
      }
    } else {
      setThemeB(colors.bad);
      badToast();
    }
  };
  const answerCHandler = (e: any, correctAnswer: string): void => {
    let answer = e.target.firstChild.data;
    if (answer === correctAnswer) {
      setIsGood(true);
      setThemeC(colors.good);
      goodToast();
      if (isLast) {
        memoDateUpdateHandler();
      }
    } else {
      setThemeC(colors.bad);
      badToast();
    }
  };
  const answerDHandler = (e: any, correctAnswer: string): void => {
    let answer = e.target.firstChild.data;
    if (answer === correctAnswer) {
      setIsGood(true);
      setThemeD(colors.good);
      goodToast();
      memoDateUpdateHandler();
    } else {
      setThemeD(colors.bad);
      badToast();
    }

    // console.log(e, correctAnswer, e.target.firstChild.data);
  };

  // Validation button. Sets up question count and resets question's theme
  const validationHandler = (): void => {
    setCount((count) => (count += 1));
    setIsGood(false);
    setThemeA('');
    setThemeB('');
    setThemeC('');
    setThemeD('');
  };

  return (
    <>
      <section className='h-full w-full flex flex-col space-y-5 justify-center items-center'>
        <p className='uppercase font-bold pt-10 text-xl'>
          Tienes {puntos} puntos ✨{' '}
        </p>

        {quizRef.current.questions.map((question, index) => {
          return (
            <div
              key={idGen()}
              className={clsx(
                `${
                  count === index ? null : 'hidden'
                } min-h-96 w p-5 bg-gray-900 lg:w-1/3 flex flex-col rounded-lg items-center justify-center space-y-10 opacity-80 `
              )}
            >
              {/*  Questions */}

              <div className='font-bold px-5 text-center text-3xl border-2 text-white uppercase btn rounded-lg py-10 '>
                <p>{question.question}</p>
              </div>

              {/*  reponses */}
              <div className='grid px-2  gap-5 grid-cols-2 opacity-100'>
                <div
                  onClick={(e) => answerAHandler(e, question.answerCorrect)}
                  className={clsx(
                    `font-bold text-center w-full lg:text-lg text-sm ${
                      question.answerA.length > 15 ? '' : ' '
                    } ${themeA} ${
                      themeA === '' && !isGood
                        ? ' hover:text-sky-500 hover:border-sky-500'
                        : ''
                    }  uppercase border-2 rounded-lg py-5 px-3`
                  )}
                >
                  {question.answerA}
                </div>
                <div
                  onClick={(e) => answerBHandler(e, question.answerCorrect)}
                  className={clsx(
                    `font-bold text-center w-full  lg:text-lg text-sm ${themeB} ${
                      themeB === '' && !isGood
                        ? ' hover:text-sky-500 hover:border-sky-500'
                        : ''
                    }  uppercase border-2 rounded-lg py-5 px-3`
                  )}
                >
                  {question.answerB}
                </div>
                <div
                  onClick={(e) => answerCHandler(e, question.answerCorrect)}
                  className={clsx(
                    `font-bold text-center w-full  lg:text-lg text-sm  ${themeC} ${
                      themeC === '' && !isGood
                        ? ' hover:text-sky-500 hover:border-sky-500'
                        : ''
                    }  uppercase border-2 rounded-lg py-5 px-3`
                  )}
                >
                  {question.answerC}
                </div>
                <div
                  onClick={(e) => answerDHandler(e, question.answerCorrect)}
                  className={clsx(
                    `font-bold text-center w-full lg:text-lg text-sm ${themeD} ${
                      themeD === '' && !isGood
                        ? ' hover:text-sky-500 hover:border-sky-500'
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
                  className={clsx(
                    `${isLast && 'hidden'}
                    btn text-white  font-bold py-2 px-3 rounded-lg text-xl bg-purple-800 relative uppercase`
                  )}
                >
                  siguiente
                </button>
              ) : (
                <button
                  disabled
                  type='button'
                  className={clsx(
                    `${isLast && 'hidden'}
                    btn text-white disabled opacity-20 font-bold py-2 px-3 rounded-lg text-xl bg-purple-800 relative uppercase`
                  )}
                >
                  siguiente
                </button>
              )}
              {isLast ? (
                isGood ? (
                  <Link
                    href={`/memo/${quiz.classe}`}
                    onClick={validationHandler}
                    type='button'
                    className={clsx(
                      `
                    btn text-white  font-bold py-2 px-3 rounded-lg text-xl bg-purple-800 relative uppercase`
                    )}
                  >
                    Terminar
                  </Link>
                ) : (
                  <button
                    disabled
                    type='button'
                    className={clsx(
                      `
                    btn text-white disabled opacity-20 font-bold py-2 px-3 rounded-lg text-xl bg-purple-800 relative uppercase`
                    )}
                  >
                    terminar
                  </button>
                )
              ) : null}
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
