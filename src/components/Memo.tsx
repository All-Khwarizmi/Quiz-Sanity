'use client';
import { AllMemosByClass } from '../../queries/queries';
import Link from 'next/link';
import Image from 'next/image';
import { memoDateChecker } from '../../lib/recallHelpers';
import { useEffect, useState } from 'react';

type MemoProps = {
  data: AllMemosByClass[];
  params: { classe: string };
};
const Memo = ({ data, params }: MemoProps) => {
  const [puntos, setPuntos] = useState<number>();
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
  return (
    <>
      <div className='w-full text-center'>
        <p className='uppercase font-bold text-white pt-10 text-xl'>
          Tienes {puntos} puntos ✨{' '}
        </p>
      </div>
      <div className=' grid-col-1 py-10 lg:pt-20 grid lg:flex lg:flex-row gap-x-10 gap-3 px-10'>
        {data.map((memos) =>
          memos.memos.map((memo) => {
            const isTime = memoDateChecker(memo.name);
            console.log('isTime', isTime);
            {
              return (
                <Link
                  className='flex items-center space-y-1 flex-col'
                  key={memo._id}
                  href={`/memo/${params.classe}/${memo.name}`}
                >
                  <div className=' '>
                    {!isTime.isMemoDate || isTime.memoDate?.isMemotime ? (
                      <div className='flex flex-row text-sm  space-x-3 justify-center'>
                        <p
                          className={`uppercase italic text-gray-600 text-cyan-500 animate-pulse`}
                        >
                          <span className='font-bold text-white '> +50</span>{' '}
                          puntos
                        </p>
                      </div>
                    ) : (
                      <div className='flex flex-row space-x-14 md:space-x-32 text-sm  justify-between'>
                        <p className={`uppercase italic text-gray-600`}>
                          <span className='font-bold'>+10</span> puntos
                        </p>
                        <p className='uppercase italic text-gray-600'>
                          Dentro de {isTime.memoDate!.difference} días
                        </p>
                      </div>
                    )}
                  </div>
                  <div
                    className={`border-2 m-0 border-gray-300 max-w-96 flex flex-col items-center rounded-lg`}
                  >
                    <Image
                      priority
                      width={300}
                      height={200}
                      className='w-96 h-72'
                      src={`${memo.image.asset.url}`}
                      alt='Fiche memo image'
                    />
                  </div>
                </Link>
              );
            }
          })
        )}
      </div>
    </>
  );
};

export default Memo;
