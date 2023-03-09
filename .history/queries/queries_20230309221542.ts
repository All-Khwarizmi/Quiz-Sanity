import { groq } from "next-sanity";

export const ALLCLASSES = groq`
 *[_type == "classe" ]
`;
export const SINGLECLASSES = groq`
 *[_type == "classe" ]
`;