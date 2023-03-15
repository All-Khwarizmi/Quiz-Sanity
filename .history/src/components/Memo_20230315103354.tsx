"use client"
import React, { cache, useRef } from 'react';
import { AllMemosByClass } from '../../queries/queries';
import Link from 'next/link';
import Image from 'next/image';
import { log } from '../../lib/recallHelpers';


type MemoProps = {
  data: AllMemosByClass[];
  params: { classe: string };
};
const Memo = ({ data, params }: MemoProps) => {

const memoName = useRef(data[0].memos.map((memo) => memo.name));

type MemoDateChecker = () => boolean
const memoDateChecker = () => {

}

log('Start here');
log('params in memo grid', params);
log('Data', data);
log('Memos', data[0].memos.map(memo => log(memo.name)));
log('MemoNames', memoName);

  return (
    <div className=' grid-col-1 py-10 lg:pt-20 grid md:grid md:grid-cols-3 gap-x-10 gap-3 px-10'>
      {data.map((memos) =>
        memos.memos.map((memo) => {
          {
            return (
              <Link key={memo._id} href={`/memo/${params.classe}/${memo.name}`}>
                <div className='border-2 m-0 border-gray-300 flex flex-col items-center rounded-lg'>
                  
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
