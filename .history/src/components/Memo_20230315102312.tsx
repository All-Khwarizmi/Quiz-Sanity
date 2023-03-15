"use client"
import React, { cache } from 'react';
import { AllMemosByClass } from '../../queries/queries';
import Link from 'next/link';
import Image from 'next/image';
import { log } from '../../lib/recallHelpers';


type MemoProps = {
  data: AllMemosByClass[];
  params: { classe: string };
};
const Memo = ({ data, params }: MemoProps) => {


  console.log('Start here');
  console.log('params in memo grid', params);
  console.log('Data', data);
  console.log('Memos', data[0].memos.map(memo => log(memo.)));
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
                    width={200}
                    height={200}
                    className='w-full h-72'
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
