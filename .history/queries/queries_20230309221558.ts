import { groq } from "next-sanity";

export const ALLCLASSES = groq`
 *[_type == "classe" ]
`;
export const SINGLECLASS = groq`
 *[_type == "classe" &&
  title == '402'
 ]
`;