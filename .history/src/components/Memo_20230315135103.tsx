'use client';
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
  log(
    'Memos',
    data[0].memos.map((memo) => log(memo.name))
  );
  log('MemoNames', memoName);
  
  
  return (
    <div className=' grid-col-1 py-10 lg:pt-20 grid md:grid md:grid-cols-3 gap-x-10 gap-3 px-10'>
      
    </div>
  );
};

export default Memo;
