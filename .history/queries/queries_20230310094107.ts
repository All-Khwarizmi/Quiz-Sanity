import { groq } from 'next-sanity';
type ClassImg = 
type AllClassImg = {

}
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

/* type GetClass = (title: string) => string
export const getClass: GetClass = (title) => {
  

return SINGLECLASS
}
 */
