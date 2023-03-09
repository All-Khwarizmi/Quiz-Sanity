import { groq } from "next-sanity";

export const ALLCLASSES = groq`
 *[_type == "classe" ]
`;


export const getClas = () => {
     const SINGLECLASS = groq`
 *[_type == "classe" &&
  title == '402'
 ]
`;
}
