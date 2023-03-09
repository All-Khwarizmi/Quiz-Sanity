import { groq } from "next-sanity";

export const ALLCLASSES = groq`
 *[_type == "classe" ]
`;



 const SINGLECLASS = groq`
 *[_type == "classe" &&
  title == '402'
 ]
`;