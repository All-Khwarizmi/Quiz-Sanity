'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { welcomeToast } from '../../../lib/toasts';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isPuntos, setIsPuntos] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem('puntos')) {
      setIsPuntos(true);
    }
  }, []);
  const getPuntos = () => {
    if (!localStorage.getItem('puntos')) {
      localStorage.setItem('puntos', '50');
      welcomeToast();
      setIsPuntos(true);
    }
  };

  return (
    <>
      <main className='w-screen h-screen flex flex-col items-center  '>
        <Image
          className='  relative left-25  top-20 z-0 '
          width={200}
          height={300}
          alt='QuizoO logo'
          src={'/cerveau.png'}
        />

       
        <h1
          className={clsx(
            inter.className,
            ' z-10 relative uppercase py-5 px-20 top-20 text-5xl py-5 font-bold'
          )}
        >
          QuizoO
        </h1>
        {isPuntos ? (
          <div className=' w-full flex justify-center items-center'>
            <Link
              id='btn'
              href={'/grid'}
              className='text-white uppercase animate-pulse top-20 left-25 font-bold py-2 px-3 rounded-lg text-xl bg-purple-800 relative btn'
            >
              Entrar
            </Link>
          </div>
        ) : (
          <div className=' w-full flex justify-center items-center'>
            <button
              id='btn'
              onClick={getPuntos}
              className='text-white animate-pulse top-20 left-25 font-bold py-2 px-3 uppercase rounded-lg text-xl bg-purple-800 relative btn'
            >
              puntos
            </button>
          </div>
        )}
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
      </main>
    </>
  );
}

/* 
if (previewData()) {
    return (
      <PreviewSuspense fallback='Loading...'>
        <PreviewDocumentsCount />
      </PreviewSuspense>
    );
  }

  const data = await clientFetch(query);
  return <FetchData data={data} />;

*/
