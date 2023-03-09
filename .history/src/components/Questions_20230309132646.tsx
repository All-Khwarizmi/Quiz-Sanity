const Questions = ({ data }: any) => {
  if (!data) {
    return 'Loading...';
  }
  return (
    <div className='flex space-x-3 h-full '>
      {data?.result.map((item: any, index: number) => {
        return (
          <div className='w-40 h-30 bg-gray-300' key={item._id}>
            <p className='font-bold'>Title</p>
            <p>{item.name}</p>
            <p className='font-bold'>Description</p>
            {item.question.map((question: any) => {
              const indexO: number = 0;
              return (
                <p key={question._key}>
                  {question.question[indexO].children[indexO].text}
                </p>
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
