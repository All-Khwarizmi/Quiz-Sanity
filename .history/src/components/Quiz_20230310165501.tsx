import React, {useRef} from 'react'
import { Quiz } from '../../lib/memoFetcher'

const Quiz = (quiz: Quiz) => {
  let quizRef = useRef(quiz);
   console.log('QuizRef', quizRef);
  return <div>
    {quizRef.current.memo}
  </div>;
}

export default Quiz