import groq from 'groq';
import Questions from './Questions';

export const query = groq`count(*
[_type == "memo"])`;

const FetchData = () => {
    {/* @ts-expect-error Async Server Component */}
  return <Questions data={data} />;
};

export default FetchData;
