const Questions = ({ data }: Data) => {
  if (!data) {
    return 'Loading...';
  }
  return (
    <div className=' w-full h-full '>
      {data.map((item, index: number) => {
        return (
          <div className=' text-center bg-gray-300' key={item._id}>
            <p className='font-bold'>Title</p>
            <p>{item.name}</p>
            <p className='font-bold'>Description</p>
            {item.question.map((question, index: number) => {
              return (
                <div key={question._key}>
                  <p className='font-bold'>Question {index + 1} </p>
                  <p>{question.question}</p>
                  <ul className='grid grid-cols-2 w-40 place-items-center'>
                    <li>A : {question.answerA}</li>
                    <li>B : {question.answerB}</li>
                    <li>C : {question.answerC}</li>
                    <li>D : {question.answerD}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Questions;

/* 
 <p>{item.description[indexO].children[indexO].text}</p>
            <p>{item.question[indexO].question[indexO].children[indexO].text}</p>
            {item.question.map((question: any) => {
              return (
                <p key={question._key}>
                  {question.question[indexO].children[indexO].text}
                </p>
              );
            })}
*/
