import { groq } from "next-sanity";

export const ALLCLASSES = groq`
 *[_type == "classe" ]
`;