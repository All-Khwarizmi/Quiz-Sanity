"use client"
import React, { cache, useRef } from 'react';
import { AllMemosByClass } from '../../queries/queries';
import Link from 'next/link';
import Image from 'next/image';
import { log, memoDateChecker } from '../../lib/recallHelpers';


type MemoProps = {
  data: AllMemosByClass[];
  params: { classe: string };
};
const Memo = ({ data, params }: MemoProps) => {

const memoName = useRef(data[0].memos.map((memo) => memo.name));



log('Start here');
log('params in memo grid', params);
log('Data', data);
log('Memos', data[0].memos.map(memo => log(memo.name)));
log('MemoNames', memoName);

  return (
    <div className=' grid-col-1 py-10 lg:pt-20 grid md:grid md:grid-cols-3 gap-x-10 gap-3 px-10'>
      {data.map((memos) =>
        memos.memos.map((memo) => {
          const isTime = memoDateChecker(memo.name);
          {
            return (
              <Link key={memo._id} href={`/memo/${params.classe}/${memo.name}`}>
                {!isTime.isMemoDate ? (
                  <div className='flex flex-row space-x-3 justify-between'>
                    <p className='uppercase italic text-gray-600'>
                      puntos: <span className='font-bold'>10</span>
                    </p>
                  </div>
                ) : (
                  <div className='flex flex-row space-x-3 justify-between'>
                    <p className='uppercase italic text-gray-600'>
                      puntos: <span className='font-bold'>10</span>
                    </p>
                    <p className='uppercase italic text-gray-600'>
                      Dans : {isTime.memoDate!.difference}{' '} jours
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
