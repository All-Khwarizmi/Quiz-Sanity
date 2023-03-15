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
    }
  }, []);
  return (
   <>
   
   </>
  );
};

export default Memo;
