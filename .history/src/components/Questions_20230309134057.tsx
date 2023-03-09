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
                  <ul className='grid grid-cols-2'>
                    <li>{question.answerA}</li>
                    <li>{question.answerB}</li>
                    <li>{question.answerC}</li>
                    <li>{question.answerD}</li>
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
