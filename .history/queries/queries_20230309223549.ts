import { groq } from "next-sanity";

export const ALLCLASSES = groq`
 *[_type == "classe" ]
`;

 export  const SINGLECLASS = groq`
 *[_type == "classe" &&
  title == $title
 ]
`;

export const ALLMEMOS = groq` 
*
[_type == "memo"]
`;

/* type GetClass = (title: string) => string
export const getClass: GetClass = (title) => {
  

return SINGLECLASS
}
 */