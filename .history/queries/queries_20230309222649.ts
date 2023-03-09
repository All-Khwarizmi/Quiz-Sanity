import { groq } from "next-sanity";

export const ALLCLASSES = groq`
 *[_type == "classe" ]
`;

type GetClass = (title: string) => string
export const getClass: GetClass = (title) => {
     const SINGLECLASS = groq`
 *[_type == "classe" &&
  title == $title}
 ]
`;

return SINGLECLASS
}
