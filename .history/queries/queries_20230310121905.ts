import { groq } from 'next-sanity';
type ClassImg = {
  _id: string
  image: MemoImage
  title: string
}
export type AllClassImg =  ClassImg[]
export const ALLCLASSES = groq`
*[_type == "classe"]{
  title,
  image{
    asset->
  }
}
`;

export const SINGLECLASS = groq`
 *[_type == "classe" &&
  title == $title
 ]
`;

export type MemoImage = {
  asset: {
    url: string;
  };
};
 export type AllMemos = {
_id: string
  categories: Category[];
  name: string;
  image: MemoImage;
};
export const ALLMEMOS = groq` 
*[_type == "memo" 
  ]{
    _id,
  categories,
  name,
  image {
    asset-> {
        url
    }
  }
  }
`;

export const SINGLEMEMO = groq` 
*[_type == "memo" &&
  name == $name
  ]
`;
export const ALLMEMOSBYCLASS = groq` 
*[_type == "classe" && 
  title == $class
  
  ]{
  _id, title,
  "memos": *[_type == "memo" && 
  references(^._id)]
  }
`;

/* type GetClass = (title: string) => string
export const getClass: GetClass = (title) => {
  

return SINGLECLASS
}
 */
