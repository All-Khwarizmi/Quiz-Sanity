import { groq } from "next-sanity";

export const ALLCLASSES = groq`
 *[_type == "classe" ]
`;

type GetClass = (title: string) => any
export const getClass = (title) => {
     const SINGLECLASS = groq`
 *[_type == "classe" &&
  title == '402'
 ]
`;
}
