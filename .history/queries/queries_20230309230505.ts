import { groq } from "next-sanity";

export const ALLCLASSES = groq`
 *[_type == "classe" ]
`;

 export  const SINGLECLASS = groq`
 *[_type == "classe" &&
  title == $title
 ]
`;

type AllMemos = {
    categories: Category[]
    name: string
    image: 
}
export const ALLMEMOS = groq` 
*[_type == "memo" 
  ]{
  categories,
  name,
  image {
    asset->
  }
  }
`;
export const SINGLEMEMO = groq` 
*[_type == "memo" &&
  name == $name
  ]
`;



/* type GetClass = (title: string) => string
export const getClass: GetClass = (title) => {
  

return SINGLECLASS
}
 */