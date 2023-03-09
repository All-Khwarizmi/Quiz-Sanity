import groq from 'groq';
import Questions from './Questions';

export const query = groq`count(*
[_type == "memo"])`;

const FetchData = ({Data}: any) => {
     return (
       <>
         Documents: <strong>{data}</strong>
       </>
     );
};

export default FetchData;
