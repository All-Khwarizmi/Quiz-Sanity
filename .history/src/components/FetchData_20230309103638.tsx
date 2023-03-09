import groq from 'groq';
import Questions from './Questions';

export const query = groq`count(*
[_type == "memo"])`;

const FetchData = ({Data}) => {
     return (
       <>
         Documents: <strong>{data}</strong>
       </>
     );
};

export default FetchData;
