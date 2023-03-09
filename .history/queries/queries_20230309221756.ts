import { groq } from "next-sanity";

export const ALLCLASSES = groq`
 *[_type == "classe" ]
`;

type GetClass = (title)
export const getClass = (class: string) => {
     const SINGLECLASS = groq`
 *[_type == "classe" &&
  title == '402'
 ]
`;
}
