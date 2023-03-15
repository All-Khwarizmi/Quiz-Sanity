'use client';
import { AllMemosByClass } from '../../queries/queries';
import Link from 'next/link';
import Image from 'next/image';
import { memoDateChecker } from '../../lib/recallHelpers';
import { useEffect } from 'react';

type MemoProps = {
  data: AllMemosByClass[];
  params: { classe: string };
};
const Memo = ({ data, params }: MemoProps) => {
  // Getting points from local storage and setting up state accordingly
  useEffect(() => {
    if (localStorage.getItem('puntos')) {
      let puntosInLocal = localStorage.getItem('puntos');
      let puntos = parseInt(puntosInLocal!);
      setPuntos(puntos);
    }
  }, []);
  return (
    <div className=' grid-col-1 py-10 lg:pt-20 grid md:grid md:grid-cols-3 gap-x-10 gap-3 px-10'>
      {data.map((memos) =>
        memos.memos.map((memo) => {
          const isTime = memoDateChecker(memo.name);
          {
            return (
              <Link key={memo._id} href={`/memo/${params.classe}/${memo.name}`}>
                {!isTime.isMemoDate || isTime.memoDate?.isMemotime ? (
                  <div className='flex flex-row text-sm  space-x-3 justify-center'>
                    <p
                      className={`uppercase italic text-gray-600 text-cyan-500 animate-pulse`}
                    >
                      <span className='font-bold text-white '> +50</span> puntos
                    </p>
                  </div>
                ) : (
                  <div className='flex flex-row space-x-3 text-sm  justify-between'>
                    <p className={`uppercase italic text-gray-600`}>
                      <span className='font-bold'>+10</span> puntos
                    </p>
                    <p className='uppercase italic text-gray-600'>
                      Dentro de {isTime.memoDate!.difference} días
                    </p>
                  </div>
                )}
                <div
                  className={`border-2 ${
                    isTime.memoDate?.isMemotime ? 'animate-pulse' : ''
                  }  m-0 border-gray-300 flex flex-col items-center rounded-lg`}
                >
                  <Image
                    priority
                    width={300}
                    height={200}
                    className='w-96 h-72'
                    src={`${memo.image.asset.url}`}
                    alt=''
                  />
                </div>
              </Link>
            );
          }
        })
      )}
    </div>
  );
};

export default Memo;
