import groq from 'groq';
import Questions from './Questions';

export const query = groq`count(*
[_type == "memo"])`;

const FetchData = () => {
  return <Questions data=;
};

export default FetchData;
