import groq from 'groq';

export const query = groq`count(*
[_type == "memo"])`;

const FetchData = ({ data }: any) => {
  return (
    <>
      Documents: <strong>{data}</strong>
    </>
  );
};

export default FetchData;
