import groq from 'groq';

export const query = groq`count(*
[_type == "memo"])`;

const FetchData = () => {
  return <div>FetchData</div>;
};

export default FetchData;
