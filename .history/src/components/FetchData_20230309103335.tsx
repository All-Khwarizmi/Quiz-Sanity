import groq from 'groq';

export const query = groq`count(*[])`;

const FetchData = () => {
  return <div>FetchData</div>;
};

export default FetchData;
